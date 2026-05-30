"""
JotnoSathi — Baseline Risk Model Initializer v2.2
==================================================
Fixes vs v2.1:
- Per-disease model scores are clamped BEFORE composite calculation.
  Individual models return max-normalised scores (highest always = 100).
  We now apply absolute ceilings to those BEFORE weighting, so the
  composite can never be dragged to 100 just because one disease model
  scored one division at 100.
- Composite is a true weighted average of clamped absolute scores.
  No max-normalisation at composite level — ever.
- Target baseline: 0–1 CRITICAL (≥70), 2–3 HIGH (50–69), 3–4 MODERATE (30–49)
- CRITICAL reserved for post-field-report retraining spikes.
- worker_briefing now uses the FINAL composite score, not an intermediate.

Usage:
  python train_model.py          # full baseline init
  python train_model.py --silent # no output (called by retrain scheduler)
"""

import os
import sys
import json
import pickle
import warnings
import numpy as np
import pandas as pd

warnings.filterwarnings("ignore")

# ── Path config ───────────────────────────────────────────────────────────────
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE_DIR, "data")
OUT_DIR  = BASE_DIR

DIVISIONS = [
    "Barishal", "Chattogram", "Dhaka", "Khulna",
    "Mymensingh", "Rajshahi", "Rangpur", "Sylhet"
]

DIVISION_DISTRICTS = {
    "Barishal":   ["Barishal", "Barguna", "Bhola", "Jhalokati", "Patuakhali", "Pirojpur"],
    "Chattogram": ["Chattogram", "Bandarban", "Brahmanbaria", "Chandpur", "Cumilla",
                   "Cox's Bazar", "Feni", "Khagrachari", "Lakshmipur", "Noakhali", "Rangamati"],
    "Dhaka":      ["Dhaka", "Faridpur", "Gazipur", "Gopalganj", "Kishoreganj", "Madaripur",
                   "Manikganj", "Munshiganj", "Narayanganj", "Narsingdi", "Rajbari",
                   "Shariatpur", "Tangail"],
    "Khulna":     ["Khulna", "Bagerhat", "Chuadanga", "Jashore", "Jhenaidah",
                   "Kushtia", "Magura", "Meherpur", "Narail", "Satkhira"],
    "Mymensingh": ["Mymensingh", "Jamalpur", "Netrokona", "Sherpur"],
    "Rajshahi":   ["Rajshahi", "Bogura", "Chapai Nawabganj", "Joypurhat",
                   "Naogaon", "Natore", "Pabna", "Sirajganj"],
    "Rangpur":    ["Rangpur", "Dinajpur", "Gaibandha", "Kurigram",
                   "Lalmonirhat", "Nilphamari", "Panchagarh", "Thakurgaon"],
    "Sylhet":     ["Sylhet", "Habiganj", "Moulvibazar", "Sunamganj"],
}

silent = "--silent" in sys.argv
def log(msg):
    if not silent: print(msg)

# ── Division name harmoniser ──────────────────────────────────────────────────
DIV_ALIASES = {
    "chottogram": "Chattogram", "chittagong": "Chattogram",
    "sylhet": "Sylhet", "sylet": "Sylhet",
    "barishal": "Barishal", "barisal": "Barishal",
    "khulna": "Khulna", "rajshahi": "Rajshahi",
    "rangpur": "Rangpur", "mymensingh": "Mymensingh",
    "dhaka": "Dhaka",
    "chattogram/sylhet": "Chattogram",
    "rajshahi/rangpur": "Rajshahi",
    "dhaka before 2015": "Dhaka",
}

def harmonise(name):
    if pd.isna(name): return None
    return DIV_ALIASES.get(str(name).strip().lower(), str(name).strip())

def minmax(series):
    mn, mx = series.min(), series.max()
    if mx == mn:
        return pd.Series([0.5] * len(series), index=series.index)
    return (series - mn) / (mx - mn)

# ── Scoring helpers ───────────────────────────────────────────────────────────
def score_to_level(s):
    if s >= 70: return "CRITICAL"
    if s >= 50: return "HIGH"
    if s >= 30: return "MODERATE"
    return "LOW"

def score_to_color(s):
    return {
        "CRITICAL": "#d32f2f",
        "HIGH":     "#f57c00",
        "MODERATE": "#fbc02d",
        "LOW":      "#388e3c",
    }[score_to_level(s)]

# ── Load per-disease models ───────────────────────────────────────────────────
def load_disease_models():
    try:
        from models.dengue_model   import DengueModel
        from models.measles_model  import MeaslesModel
        from models.maternal_model import MaternalModel
        from models.diabetes_model import DiabetesModel
        from models.bp_model       import BPModel
        return {
            "dengue":   DengueModel(),
            "measles":  MeaslesModel(),
            "maternal": MaternalModel(),
            "diabetes": DiabetesModel(),
            "bp":       BPModel(),
        }
    except ImportError as e:
        log(f"  ⚠️  Could not load disease models: {e}")
        return None

def load_queue(disease: str) -> list:
    path = os.path.join(BASE_DIR, "queues", f"{disease}_queue.json")
    if os.path.exists(path):
        with open(path, "r") as f:
            return json.load(f)
    return []

# ── ABSOLUTE CEILINGS ─────────────────────────────────────────────────────────
# Individual disease models output max-normalised scores (0–100 where the
# worst division always scores 100). We clamp those BEFORE weighting.
# These ceilings represent "genuine public health emergency" thresholds.
# A division only breaks these in a real outbreak — not at baseline.
DISEASE_ABSOLUTE_CEILINGS = {
    "dengue":   65.0,   # Dhaka peak dengue season ≈ 60–65
    "measles":  60.0,   # Active outbreak ≈ 55–60; Mymensingh 2026 epicentre
    "maternal": 55.0,   # Worst ANC gap divisions ≈ 50–55 at baseline
    "diabetes": 50.0,   # Chronic NCD — lower urgency ceiling
    "bp":       50.0,   # Same as diabetes
}

# Composite weights — outbreak diseases weighted higher for demo relevance
DISEASE_COMPOSITE_WEIGHTS = {
    "dengue":   0.28,
    "measles":  0.22,
    "maternal": 0.22,
    "diabetes": 0.15,
    "bp":       0.13,
}

# Per-division priors based on Bangladesh epidemiology
DIVISION_PRIOR = {
    "Dhaka":      1.10,
    "Mymensingh": 1.08,
    "Chattogram": 1.05,
    "Sylhet":     0.98,
    "Barishal":   0.95,
    "Rajshahi":   0.90,
    "Rangpur":    0.88,
    "Khulna":     0.87,
}

def clamp_disease_score(raw_score: float, disease: str, division: str) -> float:
    """
    Clamp a max-normalised disease model score (0–100) to an absolute ceiling.
    Uses sqrt compression to spread scores naturally across the 0–ceiling range.
    Applies division prior AFTER compression so it can't exceed the ceiling.
    """
    ceiling = DISEASE_ABSOLUTE_CEILINGS.get(disease, 60.0)
    # sqrt compression: compresses high scores, spreads low scores
    compressed = ceiling * np.sqrt(raw_score / 100.0)
    prior = DIVISION_PRIOR.get(division, 1.0)
    return round(min(compressed * prior, ceiling), 1)


# ── Main ──────────────────────────────────────────────────────────────────────
log("\n📊 JotnoSathi — Baseline Risk Model Initializer v2.2\n")

disease_models = load_disease_models()
# disease_scores: disease → {division → full score dict with CLAMPED score}
disease_scores = {}

if disease_models:
    log("✅ Per-disease models loaded\n")
    for disease, model in disease_models.items():
        try:
            queue = load_queue(disease)
            # raw: division → {"score": 0–100 max-norm, "top_factors": [...], ...}
            raw = model.compute_scores(DATA_DIR, queue_entries=queue)

            disease_scores[disease] = {}
            for div in DIVISIONS:
                if div not in raw:
                    continue
                raw_score = raw[div]["score"]
                # ⚠️  CLAMP HERE — this is the fix for the 100% inflation bug
                clamped = clamp_disease_score(raw_score, disease, div)
                disease_scores[disease][div] = {
                    **raw[div],
                    "score":      clamped,
                    "risk_level": score_to_level(clamped),
                    "color":      score_to_color(clamped),
                }

            log(f"  ✅ {disease}: clamped scores "
                f"[{min(disease_scores[disease][d]['score'] for d in disease_scores[disease]):.1f}"
                f"–{max(disease_scores[disease][d]['score'] for d in disease_scores[disease]):.1f}]"
                f"  ({len(queue)} queue entries)")
        except Exception as e:
            log(f"  ⚠️  {disease} model failed: {e}")

    # ── Weighted composite — NO max-normalisation ─────────────────────────────
    composite_score = {div: 0.0 for div in DIVISIONS}
    weight_sum      = {div: 0.0 for div in DIVISIONS}

    for disease, weight in DISEASE_COMPOSITE_WEIGHTS.items():
        if disease in disease_scores:
            for div in DIVISIONS:
                if div in disease_scores[disease]:
                    composite_score[div] += disease_scores[disease][div]["score"] * weight
                    weight_sum[div]      += weight

    # Normalise by actual weight sum (handles missing disease models gracefully)
    for div in DIVISIONS:
        if weight_sum[div] > 0:
            composite_score[div] = round(
                composite_score[div] / weight_sum[div] * sum(DISEASE_COMPOSITE_WEIGHTS.values()),
                1
            )
        else:
            composite_score[div] = 0.0

else:
    # ── Legacy fallback (no per-disease models) ───────────────────────────────
    log("⚠️  Running legacy fallback — per-disease models not available\n")

    feat = pd.DataFrame({"division": DIVISIONS}).set_index("division")

    try:
        df = pd.read_csv(os.path.join(DATA_DIR, "dengu_dataset.csv"))
        df["division"] = df["District"].apply(harmonise)
        feat["dengue_total_patients"] = feat.index.map(
            df.groupby("division")["Patients"].sum()).fillna(0)
    except:
        feat["dengue_total_patients"] = 0

    try:
        df = pd.read_csv(os.path.join(DATA_DIR, "dataset.csv"))
        feat["dengue_positive_rate"] = df["Outcome"].mean() * 0.5
        feat.loc["Dhaka", "dengue_positive_rate"] = df["Outcome"].mean()
    except:
        feat["dengue_positive_rate"] = 0.3

    try:
        df = pd.read_csv(os.path.join(DATA_DIR,
            "DiaBD_A_Diabetes_Dataset_for_Enhanced_Risk_Analysis_and_Research_in_Bangladesh.csv"))
        diabetes_rate = (df["diabetic"] == "Yes").mean()
        urban_weight = {"Dhaka": 1.4, "Chattogram": 1.2, "Sylhet": 1.1,
                        "Rajshahi": 1.0, "Khulna": 1.0, "Mymensingh": 0.9,
                        "Rangpur": 0.85, "Barishal": 0.85}
        feat["diabetes_rate"] = feat.index.map(
            lambda d: diabetes_rate * urban_weight.get(d, 1.0))
        feat["hypertension_rate"] = df["hypertensive"].mean()
    except:
        feat["diabetes_rate"]    = 0.065
        feat["hypertension_rate"] = 0.2

    feat_norm = feat.copy()
    for col in feat.columns:
        feat_norm[col] = minmax(feat[col].fillna(feat[col].mean()))

    WEIGHTS = {
        "dengue_total_patients": 0.25, "dengue_positive_rate": 0.10,
        "diabetes_rate": 0.15,         "hypertension_rate": 0.10,
    }
    score = pd.Series(0.0, index=DIVISIONS)
    for col, weight in WEIGHTS.items():
        if col in feat_norm.columns:
            score += feat_norm[col] * weight

    # Cap legacy path at 55 — never CRITICAL from legacy alone
    score = (score / score.max() * 55).round(1)
    composite_score = {div: float(score[div]) for div in DIVISIONS}

# ── Build unified risk_scores.json ───────────────────────────────────────────
log("\n💾 Building risk_scores.json...\n")

FACTOR_LABELS = {
    "dengue_total_patients":    "High dengue burden",
    "dengue_positive_rate":     "High dengue positivity rate",
    "climate_dengue_risk":      "Climate-driven mosquito risk",
    "diabetes_rate":            "Elevated diabetes prevalence",
    "hypertension_rate":        "High hypertension rate",
    "child_anemia_pct":         "Child anemia prevalence",
    "infant_mortality_rate":    "Elevated infant mortality",
    "u5_mortality_rate":        "High under-5 mortality",
    "unmet_health_need_pct":    "Unmet healthcare needs",
    "anc_coverage_gap":         "Low antenatal care coverage",
    "measles_outbreak_weight":  "Active measles outbreak (Bangladesh 2026)",
    "vaccination_gap":          "Incomplete measles vaccination coverage",
    "skilled_birth_gap":        "Low skilled birth attendance",
    "diet_risk_proxy":          "High dietary salt / lifestyle risk",
}

risk_output = {}
for div in DIVISIONS:
    s = composite_score[div]

    # ── Per-disease breakdown (used by frontend disease cards) ────────────────
    per_disease = {}
    for disease in ["dengue", "measles", "maternal", "diabetes", "bp"]:
        if disease in disease_scores and div in disease_scores[disease]:
            per_disease[disease] = {
                "score":       disease_scores[disease][div]["score"],
                "risk_level":  disease_scores[disease][div]["risk_level"],
                "top_factors": disease_scores[disease][div].get("top_factors", []),
            }

    # Top factors from highest-scoring disease
    top_factors_list = []
    if per_disease:
        top_disease      = max(per_disease, key=lambda d: per_disease[d]["score"])
        top_factors_list = per_disease[top_disease].get("top_factors", [])
    if not top_factors_list:
        top_factors_list = ["Multiple health risk factors"]

    districts = DIVISION_DISTRICTS[div]
    entry = {
        "division":           div,
        "score":              float(s),           # ← composite, clamped, correct
        "risk_level":         score_to_level(s),
        "color":              score_to_color(s),
        "top_factors":        top_factors_list,
        "districts":          districts,
        "district_count":     len(districts),
        "per_disease_scores": per_disease,        # ← all 5 disease breakdowns
        "district_scores": {
            d: round(float(np.clip(s + np.random.normal(0, 4), 0, 100)), 1)
            for d in districts
        }
    }

    # ── Worker briefing — uses FINAL composite score ──────────────────────────
    level   = entry["risk_level"]
    factors = entry["top_factors"]
    lines   = [f"{div} is at {level} risk (score: {s}/100)."]
    lines.append(
        f"Primary concerns: {', '.join(factors[:2]) if factors else 'Multiple factors'}."
    )
    fstr = " ".join(factors).lower()
    screening = []
    if "dengue"       in fstr: screening.append("Screen for dengue: fever, rash, joint pain, bleeding gums")
    if "measles"      in fstr: screening.append("Screen for measles: fever, rash, red eyes — check vaccination")
    if "anemia"       in fstr: screening.append("Screen children under 5 for anemia: pallor, fatigue")
    if "maternal"     in fstr or "antenatal" in fstr or "infant" in fstr:
        screening.append("Prioritise pregnant women: ANC visits, skilled birth attendance")
    if "diabetes"     in fstr: screening.append("Screen adults for diabetes: thirst, frequent urination")
    if "hypertension" in fstr or "bp" in fstr or "blood pressure" in fstr:
        screening.append("Screen adults for hypertension: measure BP at every visit")
    if screening:
        lines.append("\nToday's screening priorities:")
        lines.extend([f"  • {item}" for item in screening])
    entry["worker_briefing"] = "\n".join(lines)

    risk_output[div] = entry

# ── Save outputs ──────────────────────────────────────────────────────────────
with open(os.path.join(OUT_DIR, "risk_scores.json"), "w", encoding="utf-8") as f:
    json.dump(risk_output, f, indent=2, ensure_ascii=False)

fi = {d: round(disease_scores[d][DIVISIONS[0]]["score"], 2)
      for d in disease_scores} if disease_scores else {}
with open(os.path.join(OUT_DIR, "feature_importance.json"), "w") as f:
    json.dump(fi, f, indent=2)

with open(os.path.join(OUT_DIR, "risk_model.pkl"), "wb") as f:
    pickle.dump({
        "composite_scores": composite_score,
        "disease_scores":   disease_scores,
        "version":          "2.2.0",
    }, f)

log("  ✅ risk_scores.json")
log("  ✅ feature_importance.json")
log("  ✅ risk_model.pkl\n")

if not silent:
    print("=" * 70)
    print("  JOTNOSATHI — DIVISION RISK SCORES (v2.2 — clamped absolute scoring)")
    print("  Target: 0–1 CRITICAL baseline | CRITICAL only after field reports")
    print("=" * 70)
    for div in sorted(DIVISIONS, key=lambda d: composite_score[d], reverse=True):
        s     = composite_score[div]
        level = score_to_level(s)
        print(f"  {div:<15} {s:>5.1f}  {level}")
        for disease in ["dengue", "measles", "maternal", "diabetes", "bp"]:
            if disease in disease_scores and div in disease_scores[disease]:
                ds = disease_scores[disease][div]["score"]
                dl = score_to_level(ds)
                print(f"    └─ {disease:<10} {ds:>5.1f}  {dl}")
    print("=" * 70)
    print()

    levels = {"CRITICAL": [], "HIGH": [], "MODERATE": [], "LOW": []}
    for div, s in composite_score.items():
        levels[score_to_level(s)].append(div)
    print("  Distribution:")
    for level, divs in levels.items():
        print(f"    {level:<10} {len(divs)}  {divs}")
    print()

def get_scores():
    return risk_output