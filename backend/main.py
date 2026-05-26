from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from backend.rag.query import load_rag_chain, query
from deep_translator import GoogleTranslator
import json, os, pickle, subprocess, sys
from datetime import datetime

app = FastAPI(title="Niramoy API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

# ── Paths ─────────────────────────────────────────────────────────────────────
_HERE              = os.path.dirname(__file__)
RISK_MODEL_DIR     = os.path.join(_HERE, "..", "risk_model")
RISK_SCORES_PATH   = os.path.join(RISK_MODEL_DIR, "risk_scores.json")
FIELD_REPORTS_PATH = os.path.join(RISK_MODEL_DIR, "field_reports.json")
TRAIN_SCRIPT_PATH  = os.path.join(RISK_MODEL_DIR, "train_model.py")

# ── Load RAG chain ────────────────────────────────────────────────────────────
print("🔄 Loading Niramoy AI engine...")
db, llm = load_rag_chain()
print("✅ RAG engine ready!")

# ── Load risk scores ──────────────────────────────────────────────────────────
def load_risk_scores():
    try:
        with open(RISK_SCORES_PATH, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception as e:
        print(f"⚠️  Risk scores not found: {e}")
        return {}

RISK_SCORES = load_risk_scores()
print(f"✅ Risk model loaded — {len(RISK_SCORES)} divisions")

# ── Load field reports ────────────────────────────────────────────────────────
def load_field_reports():
    if os.path.exists(FIELD_REPORTS_PATH):
        with open(FIELD_REPORTS_PATH, "r") as f:
            return json.load(f)
    return []

def save_field_reports(reports):
    with open(FIELD_REPORTS_PATH, "w") as f:
        json.dump(reports, f, indent=2)

# ════════════════════════════════════════════════════════════════════════════
# MODELS
# ════════════════════════════════════════════════════════════════════════════
class TriageRequest(BaseModel):
    symptoms: str
    language: str = "en"

class TriageResponse(BaseModel):
    raw_response: str
    language: str

class FieldReport(BaseModel):
    division: str
    symptoms: str
    outcome: str
    disease_suspected: str
    worker_id: str = "anonymous"

# ════════════════════════════════════════════════════════════════════════════
# EXISTING ENDPOINTS
# ════════════════════════════════════════════════════════════════════════════
@app.get("/health")
def health_check():
    reports = load_field_reports()
    return {
        "status": "online",
        "model": "phi3:mini",
        "risk_model": "loaded" if RISK_SCORES else "unavailable",
        "divisions_tracked": len(RISK_SCORES),
        "field_reports_total": len(reports),
    }

@app.post("/triage", response_model=TriageResponse)
def triage(request: TriageRequest):
    symptoms = request.symptoms
    if request.language == "bn":
        symptoms = GoogleTranslator(source="bn", target="en").translate(symptoms)
    result = query(symptoms, db, llm)
    if request.language == "bn":
        result = GoogleTranslator(source="en", target="bn").translate(result)
    return TriageResponse(raw_response=result, language=request.language)

@app.get("/protocols")
def list_protocols():
    return {"protocols": ["WHO IMCI Guidelines", "WHO ANC Guidelines"]}

# ════════════════════════════════════════════════════════════════════════════
# RISK ENDPOINTS
# ════════════════════════════════════════════════════════════════════════════
@app.get("/risk/all")
def get_all_risk_scores():
    if not RISK_SCORES:
        raise HTTPException(status_code=503, detail="Risk model not loaded")
    return {
        "divisions": RISK_SCORES,
        "summary": {
            "critical": [d for d, v in RISK_SCORES.items() if v["risk_level"] == "CRITICAL"],
            "high":     [d for d, v in RISK_SCORES.items() if v["risk_level"] == "HIGH"],
            "moderate": [d for d, v in RISK_SCORES.items() if v["risk_level"] == "MODERATE"],
            "low":      [d for d, v in RISK_SCORES.items() if v["risk_level"] == "LOW"],
        },
        "data_sources": 13,
        "diseases_covered": ["Dengue", "Diabetes", "Tuberculosis", "Malaria",
                              "Measles", "Maternal Health", "Child Mortality",
                              "Anemia", "Nutrition", "NCD"]
    }

@app.get("/risk/{division}")
def get_division_risk(division: str):
    match = next((k for k in RISK_SCORES if k.lower() == division.lower()), None)
    if not match:
        raise HTTPException(status_code=404, detail=f"Division '{division}' not found")
    return RISK_SCORES[match]

@app.get("/alerts")
def get_alerts():
    if not RISK_SCORES:
        raise HTTPException(status_code=503, detail="Risk model not loaded")
    sorted_divs = sorted(RISK_SCORES.items(), key=lambda x: x[1]["score"], reverse=True)
    alerts = []
    for division, data in sorted_divs[:5]:
        alerts.append({
            "division":   division,
            "score":      data["score"],
            "risk_level": data["risk_level"],
            "color":      data["color"],
            "top_factor": data["top_factors"][0] if data["top_factors"] else "Multiple risk factors",
            "message":    f"{division}: {data['top_factors'][0]} — {data['risk_level']} risk"
        })
    return {"alerts": alerts, "total_critical": len([d for d in RISK_SCORES.values() if d["risk_level"] == "CRITICAL"])}

@app.get("/risk/districts/{division}")
def get_district_scores(division: str):
    match = next((k for k in RISK_SCORES if k.lower() == division.lower()), None)
    if not match:
        raise HTTPException(status_code=404, detail=f"Division '{division}' not found")
    data = RISK_SCORES[match]
    return {
        "division": match,
        "division_score": data["score"],
        "division_risk_level": data["risk_level"],
        "districts": [
            {"name": name, "score": score,
             "risk_level": _score_to_level(score), "color": _score_to_color(score)}
            for name, score in sorted(data.get("district_scores", {}).items(),
                                       key=lambda x: x[1], reverse=True)
        ]
    }

@app.get("/model/features")
def get_feature_importance():
    try:
        fi_path = os.path.join(RISK_MODEL_DIR, "feature_importance.json")
        with open(fi_path) as f:
            return {"feature_importance": json.load(f)}
    except:
        return {"feature_importance": {}}

# ════════════════════════════════════════════════════════════════════════════
# FIELD REPORT — saves to disk, then retrains
# ════════════════════════════════════════════════════════════════════════════
@app.post("/field-report")
def submit_field_report(report: FieldReport):
    global RISK_SCORES

    # 1. Validate division
    match = next((k for k in RISK_SCORES if k.lower() == report.division.lower()), None)
    score_before = RISK_SCORES[match]["score"] if match else None

    # 2. Save report to disk
    reports = load_field_reports()
    new_report = {
        "id":               len(reports) + 1,
        "division":         report.division,
        "symptoms":         report.symptoms,
        "outcome":          report.outcome,
        "disease_suspected": report.disease_suspected,
        "worker_id":        report.worker_id,
        "timestamp":        datetime.now().isoformat(),
    }
    reports.append(new_report)
    save_field_reports(reports)

    # 3. Retrain model with new reports
    retrain_result = _retrain_model()

    # 4. Reload updated scores into memory
    RISK_SCORES = load_risk_scores()
    score_after = RISK_SCORES[match]["score"] if match else None

    score_delta = round(score_after - score_before, 1) if (score_before and score_after) else 0

    return {
        "status":        "success",
        "report_id":     new_report["id"],
        "division":      report.division,
        "disease":       report.disease_suspected,
        "outcome":       report.outcome,
        "score_before":  score_before,
        "score_after":   score_after,
        "score_delta":   score_delta,
        "retrain_ok":    retrain_result,
        "total_reports": len(reports),
        "new_scores":    {d: v["score"] for d, v in RISK_SCORES.items()},
        "message":       f"Report saved. {report.division} score: {score_before} → {score_after} ({'+' if score_delta >= 0 else ''}{score_delta})"
    }

@app.get("/field-reports")
def get_field_reports():
    reports = load_field_reports()
    return {
        "total": len(reports),
        "reports": reports[-20:],  # last 20
        "by_division": {
            div: len([r for r in reports if r["division"].lower() == div.lower()])
            for div in RISK_SCORES.keys()
        }
    }

@app.delete("/field-reports/reset")
def reset_field_reports():
    """Clear all field reports and retrain baseline. Useful for demo reset."""
    global RISK_SCORES
    save_field_reports([])
    _retrain_model()
    RISK_SCORES = load_risk_scores()
    return {
        "status": "reset",
        "message": "All field reports cleared. Scores restored to baseline.",
        "new_scores": {d: v["score"] for d, v in RISK_SCORES.items()}
    }

# ════════════════════════════════════════════════════════════════════════════
# HELPERS
# ════════════════════════════════════════════════════════════════════════════
def _retrain_model():
    """Run train_model.py as subprocess. Returns True if successful."""
    try:
        result = subprocess.run(
            [sys.executable, TRAIN_SCRIPT_PATH, "--silent"],
            capture_output=True, text=True, timeout=60
        )
        return result.returncode == 0
    except Exception as e:
        print(f"⚠️  Retrain failed: {e}")
        return False

def _score_to_level(score):
    if score >= 70: return "CRITICAL"
    if score >= 50: return "HIGH"
    if score >= 30: return "MODERATE"
    return "LOW"

def _score_to_color(score):
    if score >= 70: return "#d32f2f"
    if score >= 50: return "#f57c00"
    if score >= 30: return "#fbc02d"
    return "#388e3c"