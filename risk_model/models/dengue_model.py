"""
risk_model/models/dengue_model.py
Rebalanced v2.1
"""
import os
import pandas as pd
from .base_model import BaseRiskModel, DIVISIONS


class DengueModel(BaseRiskModel):

    disease_name = "dengue"

    weights = {
        "dengue_total_patients": 0.40,
        "dengue_positive_rate":  0.25,
        "climate_dengue_risk":   0.20,
        "unmet_health_need_pct": 0.15,
    }

    factor_labels = {
        "dengue_total_patients": "High dengue patient burden",
        "dengue_positive_rate":  "High dengue test positivity",
        "climate_dengue_risk":   "Climate-driven mosquito risk",
        "unmet_health_need_pct": "Limited healthcare access",
    }

    def build_features(self, data_dir: str) -> pd.DataFrame:
        feat = pd.DataFrame({"division": DIVISIONS}).set_index("division")

        try:
            df = pd.read_csv(os.path.join(data_dir, "dengu_dataset.csv"))
            from train_model import harmonise
            df["division"] = df["District"].apply(harmonise)
            feat["dengue_total_patients"] = feat.index.map(
                df.groupby("division")["Patients"].sum()
            ).fillna(0)
        except Exception:
            defaults = {
                "Dhaka": 9500, "Chattogram": 4200, "Khulna": 1800,
                "Sylhet": 1200, "Rajshahi": 900,   "Mymensingh": 1100,
                "Barishal": 700, "Rangpur": 500,
            }
            feat["dengue_total_patients"] = feat.index.map(defaults)

        try:
            df = pd.read_csv(os.path.join(data_dir, "dataset.csv"))
            positive_rate = df["Outcome"].mean()
            feat["dengue_positive_rate"] = positive_rate * 0.5
            feat.loc["Dhaka", "dengue_positive_rate"] = positive_rate
        except Exception:
            feat["dengue_positive_rate"] = 0.30

        try:
            df = pd.read_csv(os.path.join(data_dir, "DengueAndClimateBangladesh.csv"))
            climate_risk = (
                (df["HUMIDITY"].mean() / 100) * 0.5
                + (df["RAINFALL"].mean() / df["RAINFALL"].max()) * 0.5
            )
            feat["climate_dengue_risk"] = climate_risk
        except Exception:
            feat["climate_dengue_risk"] = 0.50

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


# """
# risk_model/models/dengue_model.py
# ──────────────────────────────────
# Dengue-specific risk model.
# Features: patient burden, positivity rate, climate/mosquito risk.
# """

# import os
# import pandas as pd
# from .base_model import BaseRiskModel, DIVISIONS, minmax


# class DengueModel(BaseRiskModel):

#     disease_name = "dengue"

#     weights = {
#         "dengue_total_patients":  0.40,
#         "dengue_positive_rate":   0.25,
#         "climate_dengue_risk":    0.20,
#         "unmet_health_need_pct":  0.15,
#     }

#     factor_labels = {
#         "dengue_total_patients": "High dengue patient burden",
#         "dengue_positive_rate":  "High dengue test positivity",
#         "climate_dengue_risk":   "Climate-driven mosquito risk",
#         "unmet_health_need_pct": "Limited healthcare access",
#     }

#     def build_features(self, data_dir: str) -> pd.DataFrame:
#         feat = pd.DataFrame({"division": DIVISIONS}).set_index("division")

#         # Patient burden by district → division
#         try:
#             from .base_model import minmax as _mm
#             df = pd.read_csv(os.path.join(data_dir, "dengu_dataset.csv"))
#             from train_model import harmonise
#             df["division"] = df["District"].apply(harmonise)
#             feat["dengue_total_patients"] = feat.index.map(
#                 df.groupby("division")["Patients"].sum()
#             ).fillna(0)
#         except Exception:
#             # Fallback: Dhaka highest, known dengue belt
#             defaults = {
#                 "Dhaka": 9500, "Chattogram": 4200, "Khulna": 1800,
#                 "Sylhet": 1200, "Rajshahi": 900, "Mymensingh": 1100,
#                 "Barishal": 700, "Rangpur": 500,
#             }
#             feat["dengue_total_patients"] = feat.index.map(defaults)

#         # Positivity rate (national, Dhaka highest)
#         try:
#             df = pd.read_csv(os.path.join(data_dir, "dataset.csv"))
#             positive_rate = df["Outcome"].mean()
#             feat["dengue_positive_rate"] = positive_rate * 0.5
#             feat.loc["Dhaka", "dengue_positive_rate"] = positive_rate
#         except Exception:
#             feat["dengue_positive_rate"] = 0.30

#         # Climate risk (humidity + rainfall)
#         try:
#             df = pd.read_csv(os.path.join(data_dir, "DengueAndClimateBangladesh.csv"))
#             climate_risk = (
#                 (df["HUMIDITY"].mean() / 100) * 0.5
#                 + (df["RAINFALL"].mean() / df["RAINFALL"].max()) * 0.5
#             )
#             feat["climate_dengue_risk"] = climate_risk
#         except Exception:
#             feat["climate_dengue_risk"] = 0.50

#         # Unmet health need (proxy for under-reporting / late presentation)
#         try:
#             df = pd.read_csv(os.path.join(data_dir, "dhs-mobile_subnational_bgd.csv"))
#             from train_model import harmonise
#             df["division"] = df["Location"].apply(harmonise)
#             unmet = df[df["Indicator"] == "Unmet need for family planning"].copy()
#             latest = unmet.sort_values("SurveyYear").groupby("division").last()["Value"]
#             feat["unmet_health_need_pct"] = feat.index.map(latest).fillna(15.0)
#         except Exception:
#             feat["unmet_health_need_pct"] = 15.0

#         return feat