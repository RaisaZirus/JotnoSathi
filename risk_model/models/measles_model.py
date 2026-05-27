"""
risk_model/models/measles_model.py
────────────────────────────────────
Measles-specific risk model.
Features: 2026 outbreak weight, vaccination gap, under-5 population density,
          unmet health need (proxy for incomplete immunisation).
"""

import os
import pandas as pd
from .base_model import BaseRiskModel, DIVISIONS


class MeaslesModel(BaseRiskModel):

    disease_name = "measles"

    weights = {
        "measles_outbreak_weight": 0.40,
        "vaccination_gap":         0.30,
        "u5_mortality_rate":       0.15,
        "unmet_health_need_pct":   0.15,
    }

    factor_labels = {
        "measles_outbreak_weight": "Active measles outbreak (Bangladesh 2026)",
        "vaccination_gap":         "Incomplete measles vaccination coverage",
        "u5_mortality_rate":       "High under-5 mortality",
        "unmet_health_need_pct":   "Limited healthcare access",
    }

    # 2026 outbreak distribution — Dhaka + Mymensingh epicentre
    # Based on DGHS reports and Al Jazeera / ReliefWeb coverage
    OUTBREAK_WEIGHTS = {
        "Dhaka":      2.0,
        "Mymensingh": 1.8,
        "Barishal":   1.6,
        "Chattogram": 1.2,
        "Sylhet":     1.0,
        "Rajshahi":   0.9,
        "Khulna":     0.8,
        "Rangpur":    0.7,
    }

    # Estimated vaccination gap by division (higher = worse coverage)
    VACCINATION_GAP = {
        "Sylhet":     0.35,
        "Mymensingh": 0.30,
        "Barishal":   0.28,
        "Rangpur":    0.25,
        "Rajshahi":   0.22,
        "Chattogram": 0.20,
        "Khulna":     0.18,
        "Dhaka":      0.15,
    }

    def build_features(self, data_dir: str) -> pd.DataFrame:
        feat = pd.DataFrame({"division": DIVISIONS}).set_index("division")

        # Outbreak weight
        feat["measles_outbreak_weight"] = feat.index.map(self.OUTBREAK_WEIGHTS)

        # Vaccination gap
        feat["vaccination_gap"] = feat.index.map(self.VACCINATION_GAP)

        # Under-5 mortality (proxy for child health system weakness)
        try:
            df = pd.read_csv(os.path.join(data_dir, "dhs-quickstats_subnational_bgd.csv"))
            from train_model import harmonise
            df["division"] = df["Location"].apply(harmonise)
            u5mr = (
                df[df["Indicator"] == "Under-five mortality rate"]
                .sort_values("SurveyYear")
                .groupby("division").last()["Value"]
            )
            feat["u5_mortality_rate"] = feat.index.map(u5mr).fillna(
                u5mr.mean() if not u5mr.empty else 40
            )
        except Exception:
            defaults = {
                "Sylhet": 55, "Mymensingh": 50, "Barishal": 48,
                "Rangpur": 45, "Rajshahi": 40, "Chattogram": 38,
                "Khulna": 35, "Dhaka": 30,
            }
            feat["u5_mortality_rate"] = feat.index.map(defaults)

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