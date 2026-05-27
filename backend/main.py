from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from backend.rag.query import load_rag_chain, query, detect_disease, DISEASE_REPORT_TYPE
from risk_model.retrain_scheduler import check_and_retrain, initialize_trained_scores
from deep_translator import GoogleTranslator
import json, os, subprocess, sys
from datetime import datetime

app = FastAPI(title="Niramoy API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

# ── Startup ───────────────────────────────────────────────────────────────────
@app.on_event("startup")
def startup_event():
    initialize_trained_scores()
    print("✅ Trained scores initialised")

# ── Paths ─────────────────────────────────────────────────────────────────────
_HERE               = os.path.dirname(__file__)
RISK_MODEL_DIR      = os.path.join(_HERE, "..", "risk_model")
RISK_SCORES_PATH    = os.path.join(RISK_MODEL_DIR, "risk_scores.json")
FIELD_REPORTS_PATH  = os.path.join(RISK_MODEL_DIR, "field_reports.json")
CASE_REGISTRY_PATH  = os.path.join(RISK_MODEL_DIR, "case_registry.json")
TRAIN_SCRIPT_PATH   = os.path.join(RISK_MODEL_DIR, "train_model.py")

QUEUES_DIR = os.path.join(RISK_MODEL_DIR, "queues")
os.makedirs(QUEUES_DIR, exist_ok=True)

QUEUE_FILES = {
    "dengue":   os.path.join(QUEUES_DIR, "dengue_queue.json"),
    "measles":  os.path.join(QUEUES_DIR, "measles_queue.json"),
    "maternal": os.path.join(QUEUES_DIR, "maternal_queue.json"),
    "diabetes": os.path.join(QUEUES_DIR, "diabetes_queue.json"),
    "bp":       os.path.join(QUEUES_DIR, "bp_queue.json"),
}

RETRAIN_THRESHOLD = 5

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

# ── Queue helpers ─────────────────────────────────────────────────────────────
def load_queue(disease: str) -> list:
    path = QUEUE_FILES.get(disease)
    if not path:
        return []
    if os.path.exists(path):
        with open(path, "r") as f:
            return json.load(f)
    return []

def save_queue(disease: str, queue: list):
    path = QUEUE_FILES.get(disease)
    if path:
        with open(path, "w") as f:
            json.dump(queue, f, indent=2)

def append_to_queue(disease: str, entry: dict) -> int:
    queue = load_queue(disease)
    queue.append(entry)
    save_queue(disease, queue)
    return len(queue)

def clear_queue(disease: str):
    save_queue(disease, [])

# ── Case registry helpers ─────────────────────────────────────────────────────
def load_case_registry() -> dict:
    if os.path.exists(CASE_REGISTRY_PATH):
        with open(CASE_REGISTRY_PATH, "r") as f:
            return json.load(f)
    return {}

def save_case_registry(registry: dict):
    with open(CASE_REGISTRY_PATH, "w") as f:
        json.dump(registry, f, indent=2)

def append_to_registry(disease: str, division: str, entry: dict) -> int:
    registry = load_case_registry()
    key = f"{disease}:{division}"
    if key not in registry:
        registry[key] = {"disease": disease, "division": division, "cases": []}
    registry[key]["cases"].append(entry)
    save_case_registry(registry)
    return len(registry[key]["cases"])

# ── Field report helpers ──────────────────────────────────────────────────────
def load_field_reports():
    if os.path.exists(FIELD_REPORTS_PATH):
        with open(FIELD_REPORTS_PATH, "r") as f:
            return json.load(f)
    return []

def save_field_reports(reports):
    with open(FIELD_REPORTS_PATH, "w") as f:
        json.dump(reports, f, indent=2)

# ── LLM response parsers ──────────────────────────────────────────────────────
def extract_risk_level(response_text: str) -> str:
    for line in response_text.splitlines():
        if "RISK LEVEL" in line.upper():
            for level in ["EMERGENCY", "HIGH", "MEDIUM", "LOW"]:
                if level in line.upper():
                    return level
    return "UNKNOWN"

def extract_referral(response_text: str) -> bool:
    for line in response_text.splitlines():
        if "REFERRAL NEEDED" in line.upper():
            return "YES" in line.upper()
    return False

# ════════════════════════════════════════════════════════════════════════════
# MODELS
# ════════════════════════════════════════════════════════════════════════════
class TriageRequest(BaseModel):
    symptoms:  str
    division:  str = "Unknown"
    worker_id: str = "anonymous"
    language:  str = "en"

class TriageResponse(BaseModel):
    raw_response:      str
    language:          str
    disease_detected:  str
    report_type:       str
    risk_level:        str
    referral_needed:   bool
    auto_report_id:    int | None = None
    queue_size:        int | None = None
    retrain_triggered: bool = False

class FieldReport(BaseModel):
    division:          str
    symptoms:          str
    outcome:           str
    disease_suspected: str
    worker_id:         str = "anonymous"
    fever_days:          int   | None = None
    rash_present:        bool  | None = None
    bleeding:            bool  | None = None
    vaccination_status:  str   | None = None
    week:                int   | None = None
    complication_type:   str   | None = None
    fasting_glucose:     float | None = None
    hba1c:               float | None = None
    systolic:            int   | None = None
    diastolic:           int   | None = None

# ════════════════════════════════════════════════════════════════════════════
# TRIAGE
# ════════════════════════════════════════════════════════════════════════════
@app.post("/triage", response_model=TriageResponse)
def triage(request: TriageRequest):
    global RISK_SCORES

    symptoms_en = request.symptoms
    if request.language == "bn":
        symptoms_en = GoogleTranslator(source="bn", target="en").translate(request.symptoms)

    disease       = detect_disease(symptoms_en)
    result        = query(symptoms_en, db, llm, disease=disease)
    response_text = result["response"]
    report_type   = result["report_type"]

    if request.language == "bn":
        response_text = GoogleTranslator(source="en", target="bn").translate(response_text)

    risk_level      = extract_risk_level(response_text)
    referral_needed = extract_referral(response_text)

    auto_report_id    = None
    queue_size        = None
    retrain_triggered = False
    timestamp         = datetime.now().isoformat()

    auto_entry = {
        "source":      "triage_auto",
        "disease":     disease,
        "division":    request.division,
        "severity":    risk_level,
        "referred":    referral_needed,
        "worker_id":   request.worker_id,
        "timestamp":   timestamp,
        "symptoms_en": symptoms_en,
    }

    if report_type == "outbreak":
        queue_size     = append_to_queue(disease, auto_entry)
        auto_report_id = queue_size

        if queue_size >= RETRAIN_THRESHOLD:
            retrain_result    = check_and_retrain(disease=disease, division=request.division)
            retrain_triggered = retrain_result["retrain_triggered"]
            if retrain_triggered:
                RISK_SCORES = load_risk_scores()
    else:
        case_count     = append_to_registry(disease, request.division, auto_entry)
        auto_report_id = case_count

    reports       = load_field_reports()
    unified_entry = {**auto_entry, "id": len(reports) + 1, "report_origin": "triage_auto"}
    reports.append(unified_entry)
    save_field_reports(reports)

    return TriageResponse(
        raw_response      = response_text,
        language          = request.language,
        disease_detected  = disease,
        report_type       = report_type,
        risk_level        = risk_level,
        referral_needed   = referral_needed,
        auto_report_id    = auto_report_id,
        queue_size        = queue_size,
        retrain_triggered = retrain_triggered,
    )

# ════════════════════════════════════════════════════════════════════════════
# HEALTH + PROTOCOLS
# ════════════════════════════════════════════════════════════════════════════
@app.get("/health")
def health_check():
    reports = load_field_reports()
    return {
        "status":              "online",
        "model":               "phi3:mini",
        "risk_model":          "loaded" if RISK_SCORES else "unavailable",
        "divisions_tracked":   len(RISK_SCORES),
        "field_reports_total": len(reports),
    }

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
        "data_sources":     13,
        "diseases_covered": ["Dengue", "Measles", "Maternal Health", "Diabetes", "Blood Pressure"]
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
        top_factor = data["top_factors"][0] if data["top_factors"] else "Multiple risk factors"
        alerts.append({
            "division":   division,
            "score":      data["score"],
            "risk_level": data["risk_level"],
            "color":      data["color"],
            "top_factor": top_factor,
            "message":    f"{division}: {top_factor} — {data['risk_level']} risk",
        })
    return {
        "alerts":         alerts,
        "total_critical": len([d for d in RISK_SCORES.values() if d["risk_level"] == "CRITICAL"])
    }

@app.get("/risk/districts/{division}")
def get_district_scores(division: str):
    match = next((k for k in RISK_SCORES if k.lower() == division.lower()), None)
    if not match:
        raise HTTPException(status_code=404, detail=f"Division '{division}' not found")
    data = RISK_SCORES[match]
    return {
        "division":            match,
        "division_score":      data["score"],
        "division_risk_level": data["risk_level"],
        "per_disease_scores":  data.get("per_disease_scores", {}),
        "districts": [
            {
                "name":       name,
                "score":      score,
                "risk_level": _score_to_level(score),
                "color":      _score_to_color(score),
            }
            for name, score in sorted(
                data.get("district_scores", {}).items(),
                key=lambda x: x[1], reverse=True
            )
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
# FIELD REPORT
# ════════════════════════════════════════════════════════════════════════════
@app.post("/field-report")
def submit_field_report(report: FieldReport):
    global RISK_SCORES

    disease     = report.disease_suspected.lower()
    report_type = DISEASE_REPORT_TYPE.get(disease, "registry")
    timestamp   = datetime.now().isoformat()

    match        = next((k for k in RISK_SCORES if k.lower() == report.division.lower()), None)
    score_before = RISK_SCORES[match]["score"] if match else None

    entry = {
        "source":             "manual_report",
        "disease":            disease,
        "division":           report.division,
        "symptoms":           report.symptoms,
        "outcome":            report.outcome,
        "severity":           report.outcome,
        "worker_id":          report.worker_id,
        "timestamp":          timestamp,
        "fever_days":         report.fever_days,
        "rash_present":       report.rash_present,
        "bleeding":           report.bleeding,
        "vaccination_status": report.vaccination_status,
        "week":               report.week,
        "complication_type":  report.complication_type,
        "fasting_glucose":    report.fasting_glucose,
        "hba1c":              report.hba1c,
        "systolic":           report.systolic,
        "diastolic":          report.diastolic,
    }

    retrain_triggered = False
    queue_size        = None
    case_count        = None

    if report_type == "outbreak":
        queue_size = append_to_queue(disease, entry)
        if queue_size >= RETRAIN_THRESHOLD:
            retrain_result    = check_and_retrain(disease=disease, division=report.division)
            retrain_triggered = retrain_result["retrain_triggered"]
            if retrain_triggered:
                RISK_SCORES = load_risk_scores()
    else:
        case_count = append_to_registry(disease, report.division, entry)

    reports = load_field_reports()
    unified = {**entry, "id": len(reports) + 1, "report_origin": "manual"}
    reports.append(unified)
    save_field_reports(reports)

    score_after = RISK_SCORES[match]["score"] if match else None
    score_delta = round(score_after - score_before, 1) if (
        score_before is not None and score_after is not None
    ) else 0

    return {
        "status":            "success",
        "report_id":         unified["id"],
        "division":          report.division,
        "disease":           disease,
        "report_type":       report_type,
        "outcome":           report.outcome,
        "score_before":      score_before,
        "score_after":       score_after,
        "score_delta":       score_delta,
        "retrain_triggered": retrain_triggered,
        "queue_size":        queue_size,
        "case_count":        case_count,
        "total_reports":     len(reports),
        "new_scores":        {d: v["score"] for d, v in RISK_SCORES.items()},
        "message": (
            f"Outbreak report saved. Queue: {queue_size}/{RETRAIN_THRESHOLD}. "
            f"{report.division} score: {score_before} → {score_after}"
            if report_type == "outbreak"
            else f"Case logged in registry. {disease.title()} cases in {report.division}: {case_count}"
        )
    }

# ════════════════════════════════════════════════════════════════════════════
# FIELD REPORT UTILITIES
# ════════════════════════════════════════════════════════════════════════════
@app.get("/field-reports")
def get_field_reports():
    reports = load_field_reports()
    return {
        "total":   len(reports),
        "reports": reports[-20:],
        "by_division": {
            div: len([r for r in reports if r["division"].lower() == div.lower()])
            for div in RISK_SCORES.keys()
        }
    }

@app.get("/queue-status")
def get_queue_status():
    return {
        disease: {
            "count":            len(load_queue(disease)),
            "threshold":        RETRAIN_THRESHOLD,
            "ready_to_retrain": len(load_queue(disease)) >= RETRAIN_THRESHOLD,
        }
        for disease in QUEUE_FILES.keys()
    }

@app.get("/case-registry")
def get_case_registry():
    registry = load_case_registry()
    summary  = {}
    for key, data in registry.items():
        summary[key] = {
            "disease":    data["disease"],
            "division":   data["division"],
            "case_count": len(data["cases"]),
            "last_case":  data["cases"][-1]["timestamp"] if data["cases"] else None,
        }
    return {"registry": summary, "total_keys": len(summary)}

@app.post("/retrain/{disease}")
def manual_retrain(disease: str):
    """Manual retrain trigger — for demo/testing."""
    global RISK_SCORES
    if disease not in ["dengue", "measles"]:
        raise HTTPException(
            status_code=400,
            detail=f"'{disease}' is not an outbreak disease. Only dengue and measles support retrain."
        )
    retrain_result = check_and_retrain(disease=disease)
    if retrain_result["retrain_triggered"]:
        RISK_SCORES = load_risk_scores()
    return {
        **retrain_result,
        "new_scores": {d: v["score"] for d, v in RISK_SCORES.items()}
    }

@app.delete("/field-reports/reset")
def reset_field_reports():
    """Clear everything. Restore baseline. Run before each demo."""
    global RISK_SCORES
    save_field_reports([])
    save_case_registry({})
    for disease in QUEUE_FILES:
        clear_queue(disease)
    try:
        subprocess.run(
            [sys.executable, TRAIN_SCRIPT_PATH, "--silent"],
            capture_output=True, text=True, timeout=60
        )
    except Exception as e:
        print(f"⚠️  Baseline restore failed: {e}")
    RISK_SCORES = load_risk_scores()
    initialize_trained_scores()
    return {
        "status":     "reset",
        "message":    "All field reports, queues, and registry cleared. Scores restored to baseline.",
        "new_scores": {d: v["score"] for d, v in RISK_SCORES.items()}
    }

# ════════════════════════════════════════════════════════════════════════════
# HELPERS
# ════════════════════════════════════════════════════════════════════════════
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