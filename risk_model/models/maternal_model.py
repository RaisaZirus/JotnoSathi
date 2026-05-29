"""
risk_model/models/maternal_model.py
Rebalanced v2.1 — ANC gap weight reduced to prevent Sylhet domination.
"""
import os
import pandas as pd
from .base_model import BaseRiskModel, DIVISIONS


class MaternalModel(BaseRiskModel):

    disease_name = "maternal"

    weights = {
        "anc_coverage_gap":      0.25,  # was 0.30 — reduced, was dominating
        "infant_mortality_rate": 0.30,  # was 0.25 — increased, more concrete
        "skilled_birth_gap":     0.25,  # was 0.20 — increased
        "child_anemia_pct":      0.12,  # was 0.15 — reduced
        "unmet_health_need_pct": 0.08,  # was 0.10 — reduced
    }

    factor_labels = {
        "anc_coverage_gap":      "Low antenatal care coverage",
        "infant_mortality_rate": "Elevated infant mortality",
        "skilled_birth_gap":     "Low skilled birth attendance",
        "child_anemia_pct":      "High maternal/child anemia",
        "unmet_health_need_pct": "Unmet reproductive health needs",
    }

    # Rebalanced — Sylhet gap was too large vs other divisions
    SKILLED_BIRTH_GAP = {
        "Sylhet":     0.42,   # was 0.45
        "Mymensingh": 0.36,   # was 0.40
        "Barishal":   0.34,   # was 0.38
        "Rangpur":    0.30,   # was 0.35
        "Rajshahi":   0.26,   # was 0.30
        "Chattogram": 0.22,   # was 0.25
        "Khulna":     0.19,   # was 0.22
        "Dhaka":      0.15,   # was 0.18
    }

    # ANC gap weights — tighter spread
    ANC_GAP_WEIGHTS = {
        "Sylhet":     1.20,   # was 1.30
        "Mymensingh": 1.15,   # was 1.25
        "Barishal":   1.10,   # was 1.20
        "Rangpur":    1.08,   # was 1.15
        "Rajshahi":   1.05,   # was 1.10
        "Chattogram": 0.98,   # was 1.00
        "Khulna":     0.92,   # was 0.95
        "Dhaka":      0.82,   # was 0.85
    }

    def build_features(self, data_dir: str) -> pd.DataFrame:
        feat = pd.DataFrame({"division": DIVISIONS}).set_index("division")

        # ANC coverage gap
        try:
            df = pd.read_csv(
                os.path.join(data_dir, "maternal_and_reproductive_health_indicators_bgd.csv"))
            sub = df[df["GHO (DISPLAY)"] == "Antenatal care coverage - at least four visits (%)"]
            anc = sub.sort_values("YEAR (DISPLAY)").iloc[-1]["Numeric"] if not sub.empty else 31.0
            anc_gap = 100 - anc
        except Exception:
            anc_gap = 69.0

        feat["anc_coverage_gap"] = feat.index.map(
            lambda d: anc_gap * self.ANC_GAP_WEIGHTS.get(d, 1.0))

        # Infant mortality rate
        try:
            df = pd.read_csv(os.path.join(data_dir, "dhs-quickstats_subnational_bgd.csv"))
            from train_model import harmonise
            df["division"] = df["Location"].apply(harmonise)
            imr = (df[df["Indicator"] == "Infant mortality rate"]
                   .sort_values("SurveyYear").groupby("division").last()["Value"])
            feat["infant_mortality_rate"] = feat.index.map(imr).fillna(
                imr.mean() if not imr.empty else 30)
        except Exception:
            defaults = {"Sylhet": 42, "Mymensingh": 38, "Barishal": 36,
                        "Rangpur": 35, "Rajshahi": 30, "Chattogram": 28,
                        "Khulna": 26, "Dhaka": 22}
            feat["infant_mortality_rate"] = feat.index.map(defaults)

        feat["skilled_birth_gap"] = feat.index.map(self.SKILLED_BIRTH_GAP)

        try:
            df = pd.read_csv(os.path.join(data_dir, "anemia_subnational_bgd.csv"))
            df_any = df[df["Indicator"] == "Children with any anemia"].copy()
            from train_model import harmonise
            df_any["division"] = df_any["Location"].apply(harmonise)
            latest = df_any.sort_values("SurveyYear").groupby("division").last()["Value"]
            feat["child_anemia_pct"] = feat.index.map(latest).fillna(latest.mean())
        except Exception:
            feat["child_anemia_pct"] = 45.0

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
# risk_model/models/maternal_model.py
# Rebalanced v2.1 — ANC gap weight reduced to prevent Sylhet domination.
# """
# import os
# import pandas as pd
# from .base_model import BaseRiskModel, DIVISIONS


# class MaternalModel(BaseRiskModel):

#     disease_name = "maternal"

#     weights = {
#         "anc_coverage_gap":      0.25,  # was 0.30 — reduced, was dominating
#         "infant_mortality_rate": 0.30,  # was 0.25 — increased, more concrete
#         "skilled_birth_gap":     0.25,  # was 0.20 — increased
#         "child_anemia_pct":      0.12,  # was 0.15 — reduced
#         "unmet_health_need_pct": 0.08,  # was 0.10 — reduced
#     }

#     factor_labels = {
#         "anc_coverage_gap":      "Low antenatal care coverage",
#         "infant_mortality_rate": "Elevated infant mortality",
#         "skilled_birth_gap":     "Low skilled birth attendance",
#         "child_anemia_pct":      "High maternal/child anemia",
#         "unmet_health_need_pct": "Unmet reproductive health needs",
#     }

#     # Rebalanced — Sylhet gap was too large vs other divisions
#     SKILLED_BIRTH_GAP = {
#         "Sylhet":     0.42,   # was 0.45
#         "Mymensingh": 0.36,   # was 0.40
#         "Barishal":   0.34,   # was 0.38
#         "Rangpur":    0.30,   # was 0.35
#         "Rajshahi":   0.26,   # was 0.30
#         "Chattogram": 0.22,   # was 0.25
#         "Khulna":     0.19,   # was 0.22
#         "Dhaka":      0.15,   # was 0.18
#     }

#     # ANC gap weights — tighter spread
#     ANC_GAP_WEIGHTS = {
#         "Sylhet":     1.20,   # was 1.30
#         "Mymensingh": 1.15,   # was 1.25
#         "Barishal":   1.10,   # was 1.20
#         "Rangpur":    1.08,   # was 1.15
#         "Rajshahi":   1.05,   # was 1.10
#         "Chattogram": 0.98,   # was 1.00
#         "Khulna":     0.92,   # was 0.95
#         "Dhaka":      0.82,   # was 0.85
#     }

#     def build_features(self, data_dir: str) -> pd.DataFrame:
#         feat = pd.DataFrame({"division": DIVISIONS}).set_index("division")

#         # ANC coverage gap
#         try:
#             df = pd.read_csv(
#                 os.path.join(data_dir, "maternal_and_reproductive_health_indicators_bgd.csv"))
#             sub = df[df["GHO (DISPLAY)"] == "Antenatal care coverage - at least four visits (%)"]
#             anc = sub.sort_values("YEAR (DISPLAY)").iloc[-1]["Numeric"] if not sub.empty else 31.0
#             anc_gap = 100 - anc
#         except Exception:
#             anc_gap = 69.0

#         feat["anc_coverage_gap"] = feat.index.map(
#             lambda d: anc_gap * self.ANC_GAP_WEIGHTS.get(d, 1.0))

#         # Infant mortality rate
#         try:
#             df = pd.read_csv(os.path.join(data_dir, "dhs-quickstats_subnational_bgd.csv"))
#             from train_model import harmonise
#             df["division"] = df["Location"].apply(harmonise)
#             imr = (df[df["Indicator"] == "Infant mortality rate"]
#                    .sort_values("SurveyYear").groupby("division").last()["Value"])
#             feat["infant_mortality_rate"] = feat.index.map(imr).fillna(
#                 imr.mean() if not imr.empty else 30)
#         except Exception:
#             defaults = {"Sylhet": 42, "Mymensingh": 38, "Barishal": 36,
#                         "Rangpur": 35, "Rajshahi": 30, "Chattogram": 28,
#                         "Khulna": 26, "Dhaka": 22}
#             feat["infant_mortality_rate"] = feat.index.map(defaults)

#         feat["skilled_birth_gap"] = feat.index.map(self.SKILLED_BIRTH_GAP)

#         try:
#             df = pd.read_csv(os.path.join(data_dir, "anemia_subnational_bgd.csv"))
#             df_any = df[df["Indicator"] == "Children with any anemia"].copy()
#             from train_model import harmonise
#             df_any["division"] = df_any["Location"].apply(harmonise)
#             latest = df_any.sort_values("SurveyYear").groupby("division").last()["Value"]
#             feat["child_anemia_pct"] = feat.index.map(latest).fillna(latest.mean())
#         except Exception:
#             feat["child_anemia_pct"] = 45.0

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



# # """
# # risk_model/models/maternal_model.py
# # ─────────────────────────────────────
# # Maternal health risk model.
# # Features: ANC coverage gap, infant mortality, skilled birth attendance gap,
# #           unmet need, anemia prevalence.
# # """

# # import os
# # import pandas as pd
# # from .base_model import BaseRiskModel, DIVISIONS


# # class MaternalModel(BaseRiskModel):

# #     disease_name = "maternal"

# #     weights = {
# #         "anc_coverage_gap":          0.30,
# #         "infant_mortality_rate":     0.25,
# #         "skilled_birth_gap":         0.20,
# #         "child_anemia_pct":          0.15,
# #         "unmet_health_need_pct":     0.10,
# #     }

# #     factor_labels = {
# #         "anc_coverage_gap":      "Low antenatal care coverage",
# #         "infant_mortality_rate": "Elevated infant mortality",
# #         "skilled_birth_gap":     "Low skilled birth attendance",
# #         "child_anemia_pct":      "High maternal/child anemia",
# #         "unmet_health_need_pct": "Unmet reproductive health needs",
# #     }

# #     # Skilled birth attendance gap by division
# #     # (100 - % births attended by skilled personnel, DHS estimates)
# #     SKILLED_BIRTH_GAP = {
# #         "Sylhet":     0.45,
# #         "Mymensingh": 0.40,
# #         "Barishal":   0.38,
# #         "Rangpur":    0.35,
# #         "Rajshahi":   0.30,
# #         "Chattogram": 0.25,
# #         "Khulna":     0.22,
# #         "Dhaka":      0.18,
# #     }

# #     def build_features(self, data_dir: str) -> pd.DataFrame:
# #         feat = pd.DataFrame({"division": DIVISIONS}).set_index("division")

# #         # ANC coverage gap (national, distributed by proxy)
# #         try:
# #             df = pd.read_csv(
# #                 os.path.join(data_dir, "maternal_and_reproductive_health_indicators_bgd.csv")
# #             )
# #             sub = df[df["GHO (DISPLAY)"] == "Antenatal care coverage - at least four visits (%)"]
# #             anc = sub.sort_values("YEAR (DISPLAY)").iloc[-1]["Numeric"] if not sub.empty else 31.0
# #             anc_gap = 100 - anc
# #         except Exception:
# #             anc_gap = 69.0  # ~31% ANC4 coverage nationally

# #         # Weight ANC gap by division — rural divisions have larger gap
# #         anc_gap_weights = {
# #             "Sylhet": 1.30, "Mymensingh": 1.25, "Barishal": 1.20,
# #             "Rangpur": 1.15, "Rajshahi": 1.10, "Chattogram": 1.00,
# #             "Khulna": 0.95, "Dhaka": 0.85,
# #         }
# #         feat["anc_coverage_gap"] = feat.index.map(
# #             lambda d: anc_gap * anc_gap_weights.get(d, 1.0)
# #         )

# #         # Infant mortality rate
# #         try:
# #             df = pd.read_csv(
# #                 os.path.join(data_dir, "dhs-quickstats_subnational_bgd.csv")
# #             )
# #             from train_model import harmonise
# #             df["division"] = df["Location"].apply(harmonise)
# #             imr = (
# #                 df[df["Indicator"] == "Infant mortality rate"]
# #                 .sort_values("SurveyYear")
# #                 .groupby("division").last()["Value"]
# #             )
# #             feat["infant_mortality_rate"] = feat.index.map(imr).fillna(
# #                 imr.mean() if not imr.empty else 30
# #             )
# #         except Exception:
# #             defaults = {
# #                 "Sylhet": 42, "Mymensingh": 38, "Barishal": 36,
# #                 "Rangpur": 35, "Rajshahi": 30, "Chattogram": 28,
# #                 "Khulna": 26, "Dhaka": 22,
# #             }
# #             feat["infant_mortality_rate"] = feat.index.map(defaults)

# #         # Skilled birth attendance gap
# #         feat["skilled_birth_gap"] = feat.index.map(self.SKILLED_BIRTH_GAP)

# #         # Child anemia (proxy for maternal nutrition status)
# #         try:
# #             df = pd.read_csv(os.path.join(data_dir, "anemia_subnational_bgd.csv"))
# #             df_any = df[df["Indicator"] == "Children with any anemia"].copy()
# #             from train_model import harmonise
# #             df_any["division"] = df_any["Location"].apply(harmonise)
# #             latest = df_any.sort_values("SurveyYear").groupby("division").last()["Value"]
# #             feat["child_anemia_pct"] = feat.index.map(latest).fillna(latest.mean())
# #         except Exception:
# #             feat["child_anemia_pct"] = 45.0

# #         # Unmet health need
# #         try:
# #             df = pd.read_csv(os.path.join(data_dir, "dhs-mobile_subnational_bgd.csv"))
# #             from train_model import harmonise
# #             df["division"] = df["Location"].apply(harmonise)
# #             unmet = df[df["Indicator"] == "Unmet need for family planning"].copy()
# #             latest = unmet.sort_values("SurveyYear").groupby("division").last()["Value"]
# #             feat["unmet_health_need_pct"] = feat.index.map(latest).fillna(15.0)
# #         except Exception:
# #             feat["unmet_health_need_pct"] = 15.0

# #         return feat