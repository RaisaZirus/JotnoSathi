"""
risk_model/models/base_model.py
────────────────────────────────
Shared scoring logic inherited by all per-disease models.
v2.1: Removed max-normalisation — scores are now absolute (0-100 scale)
      so no single division is forced to 100.
"""

import numpy as np
import pandas as pd


DIVISIONS = [
    "Barishal", "Chattogram", "Dhaka", "Khulna",
    "Mymensingh", "Rajshahi", "Rangpur", "Sylhet"
]

RISK_COLORS = {
    "CRITICAL": "#d32f2f",
    "HIGH":     "#f57c00",
    "MODERATE": "#fbc02d",
    "LOW":      "#388e3c",
}

OUTCOME_NUDGE = {
    "referred":   6.0,
    "treated":    3.0,
    "monitoring": 1.5,
}

# Hard ceiling per disease — prevents any division reaching 100 at baseline.
# train_model.py applies absolute scaling on top of these raw scores,
# but we also cap internally so the base never outputs extreme values.
DISEASE_RAW_CEILING = {
    "dengue":   90.0,
    "measles":  85.0,
    "maternal": 75.0,
    "diabetes": 65.0,
    "bp":       65.0,
    "base":     80.0,
}


def minmax(series):
    mn, mx = series.min(), series.max()
    if mx == mn:
        return pd.Series([0.5] * len(series), index=series.index)
    return (series - mn) / (mx - mn)


def score_to_level(score):
    if score >= 70: return "CRITICAL"
    if score >= 50: return "HIGH"
    if score >= 30: return "MODERATE"
    return "LOW"


def score_to_color(score):
    return RISK_COLORS[score_to_level(score)]


class BaseRiskModel:

    disease_name  = "base"
    weights       = {}
    factor_labels = {}

    def build_features(self, data_dir: str) -> pd.DataFrame:
        raise NotImplementedError

    def compute_scores(self, data_dir: str, queue_entries: list = None) -> dict:
        feat = self.build_features(data_dir)

        # Normalise each feature to 0-1
        feat_norm = pd.DataFrame(index=feat.index)
        for col in feat.columns:
            feat_norm[col] = minmax(feat[col].fillna(feat[col].mean()))

        # Weighted sum → 0 to 1 range (weights sum to 1.0)
        raw = pd.Series(0.0, index=DIVISIONS)
        for col, weight in self.weights.items():
            if col in feat_norm.columns:
                raw += feat_norm[col] * weight

        # ── Key fix: use sqrt scaling instead of max-normalisation ────────────
        # sqrt spreads the scores more naturally and prevents clustering at top.
        # ceiling is disease-specific — no disease can dominate at baseline.
        ceiling = DISEASE_RAW_CEILING.get(self.disease_name, 80.0)
        score = (raw.apply(lambda x: ceiling * np.sqrt(max(x, 0)))).round(1)

        # Apply queue entries
        report_counts = {div: 0 for div in DIVISIONS}
        report_adj    = {div: 0.0 for div in DIVISIONS}

        if queue_entries:
            for entry in queue_entries:
                division  = entry.get("division", "")
                div_match = next(
                    (d for d in DIVISIONS if d.lower() == division.lower()), None
                )
                if not div_match:
                    continue
                outcome = entry.get("outcome", entry.get("severity", "monitoring"))
                nudge   = OUTCOME_NUDGE.get(outcome, 1.5)
                report_adj[div_match]    += nudge
                report_counts[div_match] += 1

            for div in DIVISIONS:
                if report_counts[div] > 0:
                    adj = report_adj[div] * (1 + np.log1p(report_counts[div]) * 0.3)
                    adj = min(adj, 15.0)
                    score[div] = min(round(score[div] + adj, 1), 100.0)

        result = {}
        for div in DIVISIONS:
            s = score[div]
            result[div] = {
                "disease":            self.disease_name,
                "division":           div,
                "score":              float(s),
                "risk_level":         score_to_level(s),
                "color":              score_to_color(s),
                "top_factors":        self._top_factors(div, feat_norm),
                "field_report_count": report_counts[div],
            }

        return result

    def _top_factors(self, division: str, feat_norm: pd.DataFrame, n: int = 3) -> list:
        if division not in feat_norm.index:
            return []
        row      = feat_norm.loc[division]
        weighted = {k: row[k] * self.weights.get(k, 0)
                    for k in row.index if k in self.weights}
        top = sorted(weighted.items(), key=lambda x: x[1], reverse=True)[:n]
        return [self.factor_labels.get(k, k) for k, _ in top]

# """
# risk_model/models/base_model.py
# ────────────────────────────────
# Shared scoring logic inherited by all per-disease models.
# """

# import numpy as np
# import pandas as pd


# DIVISIONS = [
#     "Barishal", "Chattogram", "Dhaka", "Khulna",
#     "Mymensingh", "Rajshahi", "Rangpur", "Sylhet"
# ]

# RISK_COLORS = {
#     "CRITICAL": "#d32f2f",
#     "HIGH":     "#f57c00",
#     "MODERATE": "#fbc02d",
#     "LOW":      "#388e3c",
# }

# OUTCOME_NUDGE = {
#     "referred":   6.0,
#     "treated":    3.0,
#     "monitoring": 1.5,
# }


# def minmax(series):
#     mn, mx = series.min(), series.max()
#     if mx == mn:
#         return pd.Series([0.5] * len(series), index=series.index)
#     return (series - mn) / (mx - mn)


# def score_to_level(score):
#     if score >= 70: return "CRITICAL"
#     if score >= 50: return "HIGH"
#     if score >= 30: return "MODERATE"
#     return "LOW"


# def score_to_color(score):
#     return RISK_COLORS[score_to_level(score)]


# class BaseRiskModel:
#     """
#     Base class for all per-disease risk models.
#     Subclasses must implement:
#         - self.disease_name  (str)
#         - self.weights       (dict: feature_col → weight)
#         - self.factor_labels (dict: feature_col → human label)
#         - build_features()   (returns pd.DataFrame indexed by division)
#     """

#     disease_name  = "base"
#     weights       = {}
#     factor_labels = {}

#     def build_features(self, data_dir: str) -> pd.DataFrame:
#         raise NotImplementedError

#     def compute_scores(self, data_dir: str, queue_entries: list = None) -> dict:
#         """
#         Full pipeline:
#         1. Build feature table
#         2. Normalise + weighted sum → raw score
#         3. Apply queue entries (field observations)
#         4. Return scores dict keyed by division
#         """
#         feat = self.build_features(data_dir)

#         # Normalise
#         feat_norm = pd.DataFrame(index=feat.index)
#         for col in feat.columns:
#             feat_norm[col] = minmax(feat[col].fillna(feat[col].mean()))

#         # Weighted sum
#         score = pd.Series(0.0, index=DIVISIONS)
#         for col, weight in self.weights.items():
#             if col in feat_norm.columns:
#                 score += feat_norm[col] * weight

#         # Scale to 0–100
#         if score.max() > 0:
#             score = (score / score.max() * 100).round(1)

#         # Apply queue entries (field observations from triage + manual reports)
#         report_counts = {div: 0 for div in DIVISIONS}
#         report_adj    = {div: 0.0 for div in DIVISIONS}

#         if queue_entries:
#             for entry in queue_entries:
#                 division = entry.get("division", "")
#                 div_match = next(
#                     (d for d in DIVISIONS if d.lower() == division.lower()), None
#                 )
#                 if not div_match:
#                     continue
#                 outcome    = entry.get("outcome", entry.get("severity", "monitoring"))
#                 nudge      = OUTCOME_NUDGE.get(outcome, 1.5)
#                 report_adj[div_match]    += nudge
#                 report_counts[div_match] += 1

#             for div in DIVISIONS:
#                 if report_counts[div] > 0:
#                     adj = report_adj[div] * (1 + np.log1p(report_counts[div]) * 0.3)
#                     adj = min(adj, 15.0)
#                     score[div] = min(round(score[div] + adj, 1), 100.0)

#         # Build output dict
#         result = {}
#         for div in DIVISIONS:
#             s = score[div]
#             result[div] = {
#                 "disease":            self.disease_name,
#                 "division":           div,
#                 "score":              float(s),
#                 "risk_level":         score_to_level(s),
#                 "color":              score_to_color(s),
#                 "top_factors":        self._top_factors(div, feat_norm),
#                 "field_report_count": report_counts[div],
#             }

#         return result

#     def _top_factors(self, division: str, feat_norm: pd.DataFrame, n: int = 3) -> list:
#         if division not in feat_norm.index:
#             return []
#         row      = feat_norm.loc[division]
#         weighted = {k: row[k] * self.weights.get(k, 0)
#                     for k in row.index if k in self.weights}
#         top = sorted(weighted.items(), key=lambda x: x[1], reverse=True)[:n]
#         return [self.factor_labels.get(k, k) for k, _ in top]