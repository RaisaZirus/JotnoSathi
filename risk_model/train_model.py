"""
Niramoy — Baseline Risk Model Initializer
==========================================
Repurposed as baseline initializer only.
Per-disease scoring is now handled by models/ submodules.
Live retraining is handled by retrain_scheduler.py.

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

# ── Division name harmoniser (shared across models) ───────────────────────────
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

# ── Load per-disease models ───────────────────────────────────────────────────
def load_disease_models():
    """Import all 5 disease models. Returns dict of name → model instance."""
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
        log("  ℹ️  Falling back to legacy single-model scoring")
        return None

# ── Load disease queues ───────────────────────────────────────────────────────
def load_queue(disease: str) -> list:
    path = os.path.join(BASE_DIR, "queues", f"{disease}_queue.json")
    if os.path.exists(path):
        with open(path, "r") as f:
            return json.load(f)
    return []

# ── Helpers ───────────────────────────────────────────────────────────────────
OUTCOME_NUDGE = {
    "referred":   6.0,
    "treated":    3.0,
    "monitoring": 1.5,
}

DISEASE_SEVERITY = {
    "dengue": 1.4, "measles": 1.5, "malaria": 1.3,
    "tuberculosis": 1.2, "maternal": 1.3, "maternal_complication": 1.3,
    "diabetes": 0.8, "bp": 0.7, "diarrhea": 1.1,
    "pneumonia": 1.2, "other": 1.0,
}

def score_to_level(s):
    if s >= 70: return "CRITICAL"
    if s >= 50: return "HIGH"
    if s >= 30: return "MODERATE"
    return "LOW"

def score_to_color(s):
    return {"CRITICAL": "#d32f2f", "HIGH": "#f57c00",
            "MODERATE": "#fbc02d", "LOW": "#388e3c"}[score_to_level(s)]

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
    "tb_incidence_national":    "TB incidence burden",
    "anc_coverage_gap":         "Low antenatal care coverage",
    "malaria_risk_weight":      "Malaria transmission risk",
    "measles_outbreak_weight":  "Active measles outbreak (2026)",
    "underweight_pct_national": "Child undernutrition",
}

# ════════════════════════════════════════════════════════════════════════════
# MAIN — try per-disease models first, fall back to legacy scoring
# ════════════════════════════════════════════════════════════════════════════
log("\n📊 Niramoy — Baseline Risk Model Initializer\n")

disease_models = load_disease_models()
disease_scores = {}  # disease → {division → score_dict}

if disease_models:
    log("✅ Per-disease models loaded\n")
    for disease, model in disease_models.items():
        try:
            queue = load_queue(disease)
            scores = model.compute_scores(DATA_DIR, queue_entries=queue)
            disease_scores[disease] = scores
            log(f"  ✅ {disease} model computed ({len(queue)} queue entries)")
        except Exception as e:
            log(f"  ⚠️  {disease} model failed: {e}")

    # ── Merge per-disease scores into unified division score ──────────────────
    # Outbreak diseases (dengue + measles) carry higher weight in composite
    DISEASE_COMPOSITE_WEIGHTS = {
        "dengue":   0.30,
        "measles":  0.25,
        "maternal": 0.20,
        "diabetes": 0.13,
        "bp":       0.12,
    }

    composite_score = {div: 0.0 for div in DIVISIONS}
    for disease, weight in DISEASE_COMPOSITE_WEIGHTS.items():
        if disease in disease_scores:
            for div in DIVISIONS:
                composite_score[div] += (
                    disease_scores[disease][div]["score"] * weight
                )

    # Normalise composite to 0–100
    max_score = max(composite_score.values()) or 1
    for div in DIVISIONS:
        composite_score[div] = round(
            (composite_score[div] / max_score) * 100, 1
        )

else:
    # ── Legacy fallback (original single-model logic) ─────────────────────────
    log("⚠️  Running legacy single-model fallback\n")

    feat = pd.DataFrame({"division": DIVISIONS}).set_index("division")

    try:
        df = pd.read_csv(os.path.join(DATA_DIR, "dengu_dataset.csv"))
        df["division"] = df["District"].apply(harmonise)
        feat["dengue_total_patients"] = feat.index.map(
            df.groupby("division")["Patients"].sum()
        ).fillna(0)
    except: feat["dengue_total_patients"] = 0

    try:
        df = pd.read_csv(os.path.join(DATA_DIR, "dataset.csv"))
        positive_rate = df["Outcome"].mean()
        feat["dengue_positive_rate"] = positive_rate * 0.5
        feat.loc["Dhaka", "dengue_positive_rate"] = positive_rate
    except: feat["dengue_positive_rate"] = 0.3

    try:
        df = pd.read_csv(os.path.join(DATA_DIR, "DengueAndClimateBangladesh.csv"))
        climate_risk = (df["HUMIDITY"].mean() / 100) * 0.5 + (df["RAINFALL"].mean() / df["RAINFALL"].max()) * 0.5
        feat["climate_dengue_risk"] = climate_risk
    except: feat["climate_dengue_risk"] = 0.5

    try:
        df = pd.read_csv(os.path.join(DATA_DIR,
            "DiaBD_A_Diabetes_Dataset_for_Enhanced_Risk_Analysis_and_Research_in_Bangladesh.csv"))
        diabetes_rate = (df["diabetic"] == "Yes").mean()
        urban_weight = {"Dhaka": 1.4, "Chattogram": 1.2, "Sylhet": 1.1,
                        "Rajshahi": 1.0, "Khulna": 1.0, "Mymensingh": 0.9,
                        "Rangpur": 0.85, "Barishal": 0.85}
        feat["diabetes_rate"] = feat.index.map(lambda d: diabetes_rate * urban_weight.get(d, 1.0))
        feat["hypertension_rate"] = df["hypertensive"].mean()
    except:
        feat["diabetes_rate"] = 0.065
        feat["hypertension_rate"] = 0.2

    try:
        df = pd.read_csv(os.path.join(DATA_DIR, "anemia_subnational_bgd.csv"))
        df_any = df[df["Indicator"] == "Children with any anemia"].copy()
        df_any["division"] = df_any["Location"].apply(harmonise)
        latest = df_any.sort_values("SurveyYear").groupby("division").last()["Value"]
        feat["child_anemia_pct"] = feat.index.map(latest).fillna(latest.mean())
    except: feat["child_anemia_pct"] = 45.0

    try:
        df = pd.read_csv(os.path.join(DATA_DIR, "dhs-quickstats_subnational_bgd.csv"))
        df["division"] = df["Location"].apply(harmonise)
        def extract_indicator(name):
            sub = df[df["Indicator"] == name].copy()
            return sub.sort_values("SurveyYear").groupby("division").last()["Value"]
        imr  = extract_indicator("Infant mortality rate")
        u5mr = extract_indicator("Under-five mortality rate")
        feat["infant_mortality_rate"] = feat.index.map(imr).fillna(imr.mean() if not imr.empty else 30)
        feat["u5_mortality_rate"]     = feat.index.map(u5mr).fillna(u5mr.mean() if not u5mr.empty else 40)
    except:
        feat["infant_mortality_rate"] = 30.0
        feat["u5_mortality_rate"]     = 40.0

    try:
        df = pd.read_csv(os.path.join(DATA_DIR, "dhs-mobile_subnational_bgd.csv"))
        df["division"] = df["Location"].apply(harmonise)
        unmet = df[df["Indicator"] == "Unmet need for family planning"].copy()
        latest_unmet = unmet.sort_values("SurveyYear").groupby("division").last()["Value"]
        feat["unmet_health_need_pct"] = feat.index.map(latest_unmet).fillna(15.0)
    except: feat["unmet_health_need_pct"] = 15.0

    def get_latest_national(filepath, indicator_display, col="Numeric"):
        try:
            df = pd.read_csv(filepath)
            sub = df[df["GHO (DISPLAY)"] == indicator_display].dropna(subset=[col])
            if sub.empty: return None
            return sub.sort_values("YEAR (DISPLAY)").iloc[-1][col]
        except: return None

    tb_incidence  = get_latest_national(os.path.join(DATA_DIR, "tuberculosis_indicators_bgd.csv"), "Incidence of tuberculosis (per 100 000 population per year)")
    anc_coverage  = get_latest_national(os.path.join(DATA_DIR, "maternal_and_reproductive_health_indicators_bgd.csv"), "Antenatal care coverage - at least four visits (%)")
    malaria_cases = get_latest_national(os.path.join(DATA_DIR, "malaria_indicators_bgd.csv"), "Number of confirmed malaria cases")
    u5_deaths     = get_latest_national(os.path.join(DATA_DIR, "child_mortality_indicators_bgd.csv"), "Deaths per 1 000 live births")
    underweight   = get_latest_national(os.path.join(DATA_DIR, "nutrition_indicators_bgd.csv"), "Underweight prevalence among children under 5 years of age   (% weight-for-age <-2 SD), survey-based estimates")

    feat["tb_incidence_national"]    = tb_incidence or 221.0
    feat["anc_coverage_gap"]         = 100 - (anc_coverage or 31.0)
    feat["malaria_cases_national"]   = (malaria_cases or 7294) / 1e5
    feat["u5_deaths_national"]       = u5_deaths or 0.8
    feat["underweight_pct_national"] = underweight or 22.6

    feat["malaria_risk_weight"] = feat.index.map(
        {"Chattogram": 3.5, "Sylhet": 1.8, "Rangpur": 1.2, "Mymensingh": 1.0,
         "Rajshahi": 0.8, "Khulna": 0.6, "Barishal": 0.5, "Dhaka": 0.4}
    )
    feat["measles_outbreak_weight"] = feat.index.map(
        {"Dhaka": 2.0, "Mymensingh": 1.8, "Barishal": 1.6, "Chattogram": 1.2,
         "Sylhet": 1.0, "Rajshahi": 0.9, "Khulna": 0.8, "Rangpur": 0.7}
    )

    feat_norm = feat.copy()
    for col in feat.columns:
        feat_norm[col] = minmax(feat[col].fillna(feat[col].mean()))

    WEIGHTS = {
        "dengue_total_patients": 0.18, "dengue_positive_rate": 0.06,
        "climate_dengue_risk": 0.04, "diabetes_rate": 0.08,
        "hypertension_rate": 0.05, "child_anemia_pct": 0.07,
        "infant_mortality_rate": 0.09, "u5_mortality_rate": 0.07,
        "unmet_health_need_pct": 0.06, "tb_incidence_national": 0.04,
        "anc_coverage_gap": 0.07, "malaria_cases_national": 0.02,
        "u5_deaths_national": 0.04, "underweight_pct_national": 0.04,
        "malaria_risk_weight": 0.05, "measles_outbreak_weight": 0.10,
    }

    score = pd.Series(0.0, index=DIVISIONS)
    for feat_col, weight in WEIGHTS.items():
        if feat_col in feat_norm.columns:
            score += feat_norm[feat_col] * weight
    score = (score / score.max() * 100).round(1)

    # Apply field reports (legacy path)
    field_reports_path = os.path.join(OUT_DIR, "field_reports.json")
    report_adj    = {div: 0.0 for div in DIVISIONS}
    report_counts = {div: 0   for div in DIVISIONS}

    if os.path.exists(field_reports_path):
        try:
            with open(field_reports_path, "r") as f:
                reports = json.load(f)
            for report in reports:
                division  = report.get("division", "")
                div_match = next((d for d in DIVISIONS if d.lower() == division.lower()), None)
                if not div_match: continue
                outcome    = report.get("outcome", "monitoring")
                disease    = report.get("disease_suspected", "other")
                nudge      = OUTCOME_NUDGE.get(outcome, 1.5)
                multiplier = DISEASE_SEVERITY.get(disease, 1.0)
                report_adj[div_match]    += nudge * multiplier
                report_counts[div_match] += 1
            for div in DIVISIONS:
                if report_counts[div] > 0:
                    adj = report_adj[div] * (1 + np.log1p(report_counts[div]) * 0.3)
                    score[div] = min(round(score[div] + min(adj, 15.0), 1), 100.0)
        except Exception as e:
            log(f"  ⚠️  Field report application failed: {e}")

    composite_score = {div: float(score[div]) for div in DIVISIONS}

# ── Build unified risk_scores.json ───────────────────────────────────────────
log("\n💾 Building risk_scores.json...\n")

risk_output = {}
for div in DIVISIONS:
    s = composite_score[div]

    # Gather per-disease scores for this division
    per_disease = {}
    for disease in ["dengue", "measles", "maternal", "diabetes", "bp"]:
        if disease in disease_scores:
            per_disease[disease] = {
                "score":      disease_scores[disease][div]["score"],
                "risk_level": disease_scores[disease][div]["risk_level"],
                "top_factors": disease_scores[disease][div]["top_factors"],
            }

    # Top factors from highest-scoring disease
    top_factors_list = []
    if per_disease:
        top_disease = max(per_disease, key=lambda d: per_disease[d]["score"])
        top_factors_list = per_disease[top_disease]["top_factors"]
    else:
        top_factors_list = ["Multiple health risk factors"]

    districts = DIVISION_DISTRICTS[div]
    entry = {
        "division":           div,
        "score":              float(s),
        "risk_level":         score_to_level(s),
        "color":              score_to_color(s),
        "top_factors":        top_factors_list,
        "districts":          districts,
        "district_count":     len(districts),
        "per_disease_scores": per_disease,
        "district_scores": {
            d: round(float(np.clip(s + np.random.normal(0, 4), 0, 100)), 1)
            for d in districts
        }
    }

    # Worker briefing
    level   = entry["risk_level"]
    factors = entry["top_factors"]
    lines   = [f"{div} is at {level} risk (score: {s}/100)."]
    lines.append(f"Primary concerns: {', '.join(factors[:2]) if factors else 'Multiple factors'}.")
    fstr = " ".join(factors).lower()
    screening = []
    if "dengue"    in fstr: screening.append("Screen for dengue: fever, rash, joint pain, bleeding gums")
    if "measles"   in fstr: screening.append("Screen for measles: fever, rash, red eyes — check vaccination")
    if "anemia"    in fstr: screening.append("Screen children under 5 for anemia: pallor, fatigue")
    if "maternal"  in fstr or "antenatal" in fstr or "infant" in fstr:
        screening.append("Prioritise pregnant women: ANC visits, skilled birth attendance")
    if "diabetes"  in fstr: screening.append("Screen adults for diabetes: thirst, frequent urination")
    if "hypertension" in fstr or "bp" in fstr:
        screening.append("Screen adults for hypertension: measure BP at every visit")
    if screening:
        lines.append("\nToday's screening priorities:")
        lines.extend([f"  • {s}" for s in screening])
    entry["worker_briefing"] = "\n".join(lines)

    risk_output[div] = entry

# ── Save outputs ──────────────────────────────────────────────────────────────
with open(os.path.join(OUT_DIR, "risk_scores.json"), "w", encoding="utf-8") as f:
    json.dump(risk_output, f, indent=2, ensure_ascii=False)

feature_importance = {d: round(disease_scores[d][DIVISIONS[0]]["score"], 2)
                      for d in disease_scores} if disease_scores else {}
with open(os.path.join(OUT_DIR, "feature_importance.json"), "w") as f:
    json.dump(feature_importance, f, indent=2)

with open(os.path.join(OUT_DIR, "risk_model.pkl"), "wb") as f:
    pickle.dump({"composite_scores": composite_score,
                 "disease_scores": disease_scores,
                 "version": "2.0.0"}, f)

log("  ✅ risk_scores.json")
log("  ✅ feature_importance.json")
log("  ✅ risk_model.pkl\n")

if not silent:
    print("=" * 65)
    print("  NIRAMOY — DIVISION HEALTH RISK SCORES (v2.0 per-disease)")
    print("=" * 65)
    for div in sorted(DIVISIONS, key=lambda d: composite_score[d], reverse=True):
        s     = composite_score[div]
        level = score_to_level(s)
        print(f"  {div:<15} {s:>5.1f}  {level}")
        if div in disease_scores.get("dengue", {}):
            for disease in ["dengue", "measles", "maternal", "diabetes", "bp"]:
                if disease in disease_scores:
                    ds = disease_scores[disease][div]["score"]
                    print(f"    └─ {disease:<10} {ds:>5.1f}")
    print("=" * 65)

def get_scores():
    return risk_output