"""
Niramoy — Retrain Scheduler
════════════════════════════
Threshold-based retrain trigger for outbreak diseases (dengue + measles).
Called by main.py after every field report submission.
"""

import os
import sys
import json
import csv
import numpy as np
import pandas as pd
from datetime import datetime

# ── Paths ─────────────────────────────────────────────────────────────────────
BASE_DIR    = os.path.dirname(os.path.abspath(__file__))
DATA_DIR    = os.path.join(BASE_DIR, "data")
QUEUES_DIR  = os.path.join(BASE_DIR, "queues")
TRAINED_DIR = os.path.join(BASE_DIR, "trained")
SCORES_PATH = os.path.join(BASE_DIR, "risk_scores.json")

os.makedirs(QUEUES_DIR,  exist_ok=True)
os.makedirs(TRAINED_DIR, exist_ok=True)

# ── Add risk_model/ to sys.path so model imports always resolve ───────────────
if BASE_DIR not in sys.path:
    sys.path.insert(0, BASE_DIR)

# Also add project root so "risk_model.models.x" imports work from uvicorn
PROJECT_ROOT = os.path.dirname(BASE_DIR)
if PROJECT_ROOT not in sys.path:
    sys.path.insert(0, PROJECT_ROOT)

# ── Config ────────────────────────────────────────────────────────────────────
RETRAIN_THRESHOLD = 5

OUTBREAK_DISEASES = ["dengue", "measles"]
REGISTRY_DISEASES = ["maternal", "diabetes", "bp"]

DIVISIONS = [
    "Barishal", "Chattogram", "Dhaka", "Khulna",
    "Mymensingh", "Rajshahi", "Rangpur", "Sylhet"
]

OUTCOME_NUDGE = {
    "referred":   6.0,
    "treated":    3.0,
    "monitoring": 1.5,
    "EMERGENCY":  7.0,
    "HIGH":       5.0,
    "MEDIUM":     3.0,
    "LOW":        1.5,
    "UNKNOWN":    2.0,
}

# ── Queue helpers ─────────────────────────────────────────────────────────────
def _queue_path(disease: str) -> str:
    return os.path.join(QUEUES_DIR, f"{disease}_queue.json")

def load_queue(disease: str) -> list:
    path = _queue_path(disease)
    if os.path.exists(path):
        with open(path, "r") as f:
            return json.load(f)
    return []

def save_queue(disease: str, queue: list):
    with open(_queue_path(disease), "w") as f:
        json.dump(queue, f, indent=2)

def clear_queue(disease: str):
    save_queue(disease, [])

def queue_size(disease: str) -> int:
    return len(load_queue(disease))

# ── Trained scores helpers ────────────────────────────────────────────────────
def _trained_path(disease: str) -> str:
    return os.path.join(TRAINED_DIR, f"{disease}_scores.json")

def load_trained_scores(disease: str) -> dict:
    path = _trained_path(disease)
    if os.path.exists(path):
        with open(path, "r") as f:
            return json.load(f)
    return {}

def save_trained_scores(disease: str, scores: dict):
    with open(_trained_path(disease), "w") as f:
        json.dump(scores, f, indent=2)

# ── Risk scores helpers ───────────────────────────────────────────────────────
def load_risk_scores() -> dict:
    if os.path.exists(SCORES_PATH):
        with open(SCORES_PATH, "r", encoding="utf-8") as f:
            return json.load(f)
    return {}

def save_risk_scores(scores: dict):
    with open(SCORES_PATH, "w", encoding="utf-8") as f:
        json.dump(scores, f, indent=2, ensure_ascii=False)

def score_to_level(s: float) -> str:
    if s >= 70: return "CRITICAL"
    if s >= 50: return "HIGH"
    if s >= 30: return "MODERATE"
    return "LOW"

def score_to_color(s: float) -> str:
    return {
        "CRITICAL": "#d32f2f",
        "HIGH":     "#f57c00",
        "MODERATE": "#fbc02d",
        "LOW":      "#388e3c",
    }[score_to_level(s)]

# ── Append queue rows to disease CSV ─────────────────────────────────────────
def _append_to_csv(disease: str, queue_entries: list):
    csv_map = {
        "dengue":  os.path.join(DATA_DIR, "dengu_dataset.csv"),
        "measles": os.path.join(DATA_DIR, "measles_field_reports.csv"),
    }
    path = csv_map.get(disease)
    if not path:
        return

    if disease == "dengue":
        rows_to_add = []
        for entry in queue_entries:
            division  = entry.get("division", "Unknown")
            severity  = entry.get("severity", "MEDIUM")
            patient_count = {"EMERGENCY": 8, "HIGH": 5, "MEDIUM": 3, "LOW": 1}.get(severity, 2)
            rows_to_add.append({
                "District":  division,
                "Patients":  patient_count,
                "source":    "field_report",
                "timestamp": entry.get("timestamp", datetime.now().isoformat()),
            })
        if rows_to_add and os.path.exists(path):
            try:
                df_existing = pd.read_csv(path)
                df_new      = pd.DataFrame(rows_to_add)
                common_cols = [c for c in df_new.columns if c in df_existing.columns]
                df_new      = df_new[common_cols] if common_cols else df_new[["District", "Patients"]]
                pd.concat([df_existing, df_new], ignore_index=True).to_csv(path, index=False)
            except Exception as e:
                print(f"⚠️  Could not append to {path}: {e}")

    elif disease == "measles":
        rows_to_add = []
        for entry in queue_entries:
            rows_to_add.append({
                "division":  entry.get("division", "Unknown"),
                "severity":  entry.get("severity", "MEDIUM"),
                "referred":  entry.get("referred", False),
                "worker_id": entry.get("worker_id", "anonymous"),
                "timestamp": entry.get("timestamp", datetime.now().isoformat()),
            })
        if rows_to_add:
            file_exists = os.path.exists(path)
            try:
                with open(path, "a", newline="", encoding="utf-8") as f:
                    writer = csv.DictWriter(f, fieldnames=rows_to_add[0].keys())
                    if not file_exists:
                        writer.writeheader()
                    writer.writerows(rows_to_add)
            except Exception as e:
                print(f"⚠️  Could not append to {path}: {e}")

# ── Per-disease refit ─────────────────────────────────────────────────────────
def _refit_disease(disease: str, queue_entries: list) -> dict:
    """
    Refit a single disease model.
    Uses absolute imports via sys.path so it works from any working directory.
    """
    try:
        # Ensure risk_model/ is on path for direct "models.x" imports
        if BASE_DIR not in sys.path:
            sys.path.insert(0, BASE_DIR)

        if disease == "dengue":
            # Try both import styles — direct (when run from risk_model/)
            # and absolute (when called from uvicorn at project root)
            try:
                from models.dengue_model import DengueModel
            except ImportError:
                from risk_model.models.dengue_model import DengueModel
            model = DengueModel()

        elif disease == "measles":
            try:
                from models.measles_model import MeaslesModel
            except ImportError:
                from risk_model.models.measles_model import MeaslesModel
            model = MeaslesModel()

        else:
            return {}

        scores = model.compute_scores(DATA_DIR, queue_entries=queue_entries)
        return scores

    except Exception as e:
        print(f"⚠️  Refit failed for {disease}: {e}")
        return {}

# ── Merge all disease scores → risk_scores.json ───────────────────────────────
def _merge_all_scores():
    DISEASE_COMPOSITE_WEIGHTS = {
        "dengue":   0.30,
        "measles":  0.25,
        "maternal": 0.20,
        "diabetes": 0.13,
        "bp":       0.12,
    }

    all_disease_scores = {}
    for disease in DISEASE_COMPOSITE_WEIGHTS:
        trained = load_trained_scores(disease)
        if trained:
            all_disease_scores[disease] = trained

    if not all_disease_scores:
        return

    composite = {div: 0.0 for div in DIVISIONS}
    for disease, weight in DISEASE_COMPOSITE_WEIGHTS.items():
        if disease in all_disease_scores:
            for div in DIVISIONS:
                if div in all_disease_scores[disease]:
                    composite[div] += all_disease_scores[disease][div].get("score", 0) * weight

    max_score = max(composite.values()) or 1
    for div in DIVISIONS:
        composite[div] = round((composite[div] / max_score) * 100, 1)

    risk_scores = load_risk_scores()
    for div in DIVISIONS:
        if div not in risk_scores:
            continue
        s = composite[div]
        risk_scores[div]["score"]      = s
        risk_scores[div]["risk_level"] = score_to_level(s)
        risk_scores[div]["color"]      = score_to_color(s)

        per_disease = {}
        for disease in DISEASE_COMPOSITE_WEIGHTS:
            if disease in all_disease_scores and div in all_disease_scores[disease]:
                per_disease[disease] = {
                    "score":       all_disease_scores[disease][div].get("score", 0),
                    "risk_level":  all_disease_scores[disease][div].get("risk_level", "LOW"),
                    "top_factors": all_disease_scores[disease][div].get("top_factors", []),
                }
        risk_scores[div]["per_disease_scores"] = per_disease

        if per_disease:
            top_disease = max(per_disease, key=lambda d: per_disease[d]["score"])
            risk_scores[div]["top_factors"] = per_disease[top_disease]["top_factors"]

    save_risk_scores(risk_scores)

# ════════════════════════════════════════════════════════════════════════════
# MAIN PUBLIC FUNCTION
# ════════════════════════════════════════════════════════════════════════════
def check_and_retrain(disease: str, division: str = None) -> dict:
    if disease not in OUTBREAK_DISEASES:
        return {
            "disease":           disease,
            "queue_size":        0,
            "threshold":         RETRAIN_THRESHOLD,
            "retrain_triggered": False,
            "score_before":      None,
            "score_after":       None,
            "score_delta":       0.0,
            "message":           f"{disease} is a registry disease — no retrain needed.",
        }

    current_queue = load_queue(disease)
    q_size        = len(current_queue)

    risk_scores  = load_risk_scores()
    score_before = None
    if division:
        div_match    = next((d for d in DIVISIONS if d.lower() == division.lower()), None)
        score_before = risk_scores.get(div_match, {}).get("score")

    if q_size < RETRAIN_THRESHOLD:
        return {
            "disease":           disease,
            "queue_size":        q_size,
            "threshold":         RETRAIN_THRESHOLD,
            "retrain_triggered": False,
            "score_before":      score_before,
            "score_after":       score_before,
            "score_delta":       0.0,
            "message": (
                f"{disease} queue: {q_size}/{RETRAIN_THRESHOLD}. "
                f"Need {RETRAIN_THRESHOLD - q_size} more report(s) to trigger refit."
            ),
        }

    # ── Threshold met ─────────────────────────────────────────────────────────
    print(f"🔄 Retrain triggered for {disease} — {q_size} reports in queue")

    _append_to_csv(disease, current_queue)

    new_scores = _refit_disease(disease, current_queue)

    if not new_scores:
        return {
            "disease":           disease,
            "queue_size":        q_size,
            "threshold":         RETRAIN_THRESHOLD,
            "retrain_triggered": False,
            "score_before":      score_before,
            "score_after":       score_before,
            "score_delta":       0.0,
            "message":           f"Refit failed for {disease} — scores unchanged.",
        }

    save_trained_scores(disease, new_scores)
    print(f"  ✅ {disease}_scores.json saved to trained/")

    _merge_all_scores()
    print(f"  ✅ risk_scores.json updated")

    clear_queue(disease)
    print(f"  ✅ {disease} queue cleared")

    risk_scores = load_risk_scores()
    score_after = None
    if division:
        div_match   = next((d for d in DIVISIONS if d.lower() == division.lower()), None)
        score_after = risk_scores.get(div_match, {}).get("score")

    score_delta = round((score_after - score_before), 1) if (
        score_before is not None and score_after is not None
    ) else 0.0

    return {
        "disease":           disease,
        "queue_size":        0,
        "threshold":         RETRAIN_THRESHOLD,
        "retrain_triggered": True,
        "score_before":      score_before,
        "score_after":       score_after,
        "score_delta":       score_delta,
        "message": (
            f"✅ {disease} model refitted on {q_size} field reports. "
            f"{division} score: {score_before} → {score_after} "
            f"({'+'if score_delta >= 0 else ''}{score_delta})"
        ),
    }


def get_all_queue_sizes() -> dict:
    return {
        disease: {
            "count":            queue_size(disease),
            "threshold":        RETRAIN_THRESHOLD,
            "ready_to_retrain": queue_size(disease) >= RETRAIN_THRESHOLD,
        }
        for disease in OUTBREAK_DISEASES
    }


def initialize_trained_scores():
    risk_scores = load_risk_scores()
    if not risk_scores:
        return

    diseases = ["dengue", "measles", "maternal", "diabetes", "bp"]
    for disease in diseases:
        path = _trained_path(disease)
        if os.path.exists(path):
            continue
        trained = {}
        for div, data in risk_scores.items():
            per_disease = data.get("per_disease_scores", {})
            if disease in per_disease:
                trained[div] = per_disease[disease]
            else:
                trained[div] = {
                    "score":       data.get("score", 50.0),
                    "risk_level":  data.get("risk_level", "MODERATE"),
                    "top_factors": data.get("top_factors", []),
                }
        save_trained_scores(disease, trained)
    print(f"✅ Trained scores initialised for {len(diseases)} diseases")


# ── Self test ─────────────────────────────────────────────────────────────────
if __name__ == "__main__":
    print("🔧 Retrain Scheduler — self test\n")
    print("Queue status:")
    for disease in OUTBREAK_DISEASES:
        q = queue_size(disease)
        print(f"  {disease}: {q}/{RETRAIN_THRESHOLD}")
    print("\nInitialising trained scores...")
    initialize_trained_scores()
    print("\nDone.")