"""
risk_model/models/diabetes_model.py
Rebalanced v2.1
"""
import os
import pandas as pd
from .base_model import BaseRiskModel, DIVISIONS


class DiabetesModel(BaseRiskModel):

    disease_name = "diabetes"

    weights = {
        "diabetes_rate":            0.40,
        "diabetes_prevalence_natl": 0.25,
        "hypertension_rate":        0.20,
        "unmet_health_need_pct":    0.15,
    }

    factor_labels = {
        "diabetes_rate":            "Elevated local diabetes prevalence",
        "diabetes_prevalence_natl": "National NCD burden",
        "hypertension_rate":        "Co-morbid hypertension risk",
        "unmet_health_need_pct":    "Limited diabetes screening access",
    }

    URBAN_WEIGHT = {
        "Dhaka":      1.40,
        "Chattogram": 1.20,
        "Sylhet":     1.10,
        "Rajshahi":   1.00,
        "Khulna":     1.00,
        "Mymensingh": 0.90,
        "Rangpur":    0.85,
        "Barishal":   0.85,
    }

    def build_features(self, data_dir: str) -> pd.DataFrame:
        feat = pd.DataFrame({"division": DIVISIONS}).set_index("division")

        try:
            df = pd.read_csv(os.path.join(data_dir,
                "DiaBD_A_Diabetes_Dataset_for_Enhanced_Risk_Analysis_and_Research_in_Bangladesh.csv"))
            diabetes_rate = (df["diabetic"] == "Yes").mean()
            feat["diabetes_rate"] = feat.index.map(
                lambda d: diabetes_rate * self.URBAN_WEIGHT.get(d, 1.0))
            feat["hypertension_rate"] = df["hypertensive"].mean()
        except Exception:
            feat["diabetes_rate"] = feat.index.map(
                lambda d: 0.065 * self.URBAN_WEIGHT.get(d, 1.0))
            feat["hypertension_rate"] = 0.20

        try:
            df = pd.read_csv(os.path.join(data_dir,
                "noncommunicable_diseases_indicators_bgd.csv"))
            sub = df[df["GHO (DISPLAY)"] == "Prevalence of diabetes, age-standardized"]
            natl = sub.sort_values("YEAR (DISPLAY)").iloc[-1]["Numeric"] if not sub.empty else 8.4
            feat["diabetes_prevalence_natl"] = natl
        except Exception:
            feat["diabetes_prevalence_natl"] = 8.4

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
# risk_model/models/diabetes_model.py
# ─────────────────────────────────────
# Diabetes risk model.
# Features: diabetes prevalence rate, urban weight, NCD prevalence, unmet need.
# Note: feeds case registry (not outbreak map).
# """

# import os
# import pandas as pd
# from .base_model import BaseRiskModel, DIVISIONS


# class DiabetesModel(BaseRiskModel):

#     disease_name = "diabetes"

#     weights = {
#         "diabetes_rate":          0.40,
#         "diabetes_prevalence_natl": 0.25,
#         "hypertension_rate":      0.20,
#         "unmet_health_need_pct":  0.15,
#     }

#     factor_labels = {
#         "diabetes_rate":           "Elevated local diabetes prevalence",
#         "diabetes_prevalence_natl":"National NCD burden",
#         "hypertension_rate":       "Co-morbid hypertension risk",
#         "unmet_health_need_pct":   "Limited diabetes screening access",
#     }

#     # Urban weight — diabetes is higher in urban/semi-urban divisions
#     URBAN_WEIGHT = {
#         "Dhaka":      1.40,
#         "Chattogram": 1.20,
#         "Sylhet":     1.10,
#         "Rajshahi":   1.00,
#         "Khulna":     1.00,
#         "Mymensingh": 0.90,
#         "Rangpur":    0.85,
#         "Barishal":   0.85,
#     }

#     def build_features(self, data_dir: str) -> pd.DataFrame:
#         feat = pd.DataFrame({"division": DIVISIONS}).set_index("division")

#         # Diabetes prevalence rate (survey-based, weighted by urbanisation)
#         try:
#             df = pd.read_csv(
#                 os.path.join(data_dir,
#                     "DiaBD_A_Diabetes_Dataset_for_Enhanced_Risk_Analysis_and_Research_in_Bangladesh.csv")
#             )
#             diabetes_rate = (df["diabetic"] == "Yes").mean()
#             feat["diabetes_rate"] = feat.index.map(
#                 lambda d: diabetes_rate * self.URBAN_WEIGHT.get(d, 1.0)
#             )
#             feat["hypertension_rate"] = df["hypertensive"].mean()
#         except Exception:
#             feat["diabetes_rate"] = feat.index.map(
#                 lambda d: 0.065 * self.URBAN_WEIGHT.get(d, 1.0)
#             )
#             feat["hypertension_rate"] = 0.20

#         # National NCD prevalence
#         try:
#             df = pd.read_csv(
#                 os.path.join(data_dir, "noncommunicable_diseases_indicators_bgd.csv")
#             )
#             sub = df[df["GHO (DISPLAY)"] == "Prevalence of diabetes, age-standardized"]
#             natl = sub.sort_values("YEAR (DISPLAY)").iloc[-1]["Numeric"] if not sub.empty else 8.4
#             feat["diabetes_prevalence_natl"] = natl
#         except Exception:
#             feat["diabetes_prevalence_natl"] = 8.4

#         # Unmet health need
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