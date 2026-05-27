"""
risk_model/models/bp_model.py
───────────────────────────────
Blood pressure / hypertension risk model.
Features: hypertension rate, salt/diet risk proxy, NCD burden, unmet need.
Note: feeds case registry (not outbreak map).
"""

import os
import pandas as pd
from .base_model import BaseRiskModel, DIVISIONS


class BPModel(BaseRiskModel):

    disease_name = "bp"

    weights = {
        "hypertension_rate":      0.40,
        "diabetes_rate":          0.25,  # strong co-morbidity
        "diet_risk_proxy":        0.20,
        "unmet_health_need_pct":  0.15,
    }

    factor_labels = {
        "hypertension_rate":     "High hypertension prevalence",
        "diabetes_rate":         "Co-morbid diabetes risk",
        "diet_risk_proxy":       "Dietary salt / lifestyle risk",
        "unmet_health_need_pct": "Limited BP screening access",
    }

    # Diet/lifestyle risk proxy — coastal divisions have higher salt intake
    DIET_RISK = {
        "Barishal":   0.80,
        "Khulna":     0.75,
        "Chattogram": 0.70,
        "Sylhet":     0.65,
        "Dhaka":      0.60,
        "Rajshahi":   0.55,
        "Mymensingh": 0.50,
        "Rangpur":    0.45,
    }

    def build_features(self, data_dir: str) -> pd.DataFrame:
        feat = pd.DataFrame({"division": DIVISIONS}).set_index("division")

        # Hypertension and diabetes rates (from DiaBD dataset)
        try:
            df = pd.read_csv(
                os.path.join(data_dir,
                    "DiaBD_A_Diabetes_Dataset_for_Enhanced_Risk_Analysis_and_Research_in_Bangladesh.csv")
            )
            hypertension_rate = df["hypertensive"].mean()
            diabetes_rate     = (df["diabetic"] == "Yes").mean()

            # Urban divisions have higher NCD burden
            urban_weight = {
                "Dhaka": 1.35, "Chattogram": 1.20, "Sylhet": 1.10,
                "Rajshahi": 1.00, "Khulna": 1.00, "Mymensingh": 0.90,
                "Rangpur": 0.85, "Barishal": 0.85,
            }
            feat["hypertension_rate"] = feat.index.map(
                lambda d: hypertension_rate * urban_weight.get(d, 1.0)
            )
            feat["diabetes_rate"] = feat.index.map(
                lambda d: diabetes_rate * urban_weight.get(d, 1.0)
            )
        except Exception:
            feat["hypertension_rate"] = 0.20
            feat["diabetes_rate"]     = 0.065

        # Diet/lifestyle risk (coastal salt intake proxy)
        feat["diet_risk_proxy"] = feat.index.map(self.DIET_RISK)

        # Unmet health need
        try:
            df = pd.read_csv(os.path.join(data_dir, "dhs-mobile_subnational_bgd.csv"))
            from train_model import harmonise
            df["division"] = df["Location"].apply(harmonise)
            unmet = df[df["Indicator"] == "Unmet need for family planning"].copy()
            latest = unmet.sort_values("SurveyYear").groupby("division").last()["Value"]
            feat["unmet_health_need_pct"] = feat.index.map(latest).fillna(15.0)
        except Exception:
            feat["unmet_health_need_pct"] = 15.0

        return feat