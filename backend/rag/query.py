from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.vectorstores import Chroma
from langchain_community.llms import Ollama

# ── Disease keyword router ────────────────────────────────────────────────────
# IMPORTANT: Keywords here are for ROUTING only, not for limiting RAG answers.
# Keep them specific to avoid false matches between diseases.
DISEASE_KEYWORDS = {
    "dengue": [
        # Dengue-specific only — no generic "rash" or "fever"
        "dengue", "ডেঙ্গু", "dengue fever",
        "aedes", "platelet", "প্লেটলেট",
        "bone pain", "হাড়ে ব্যথা",
        "eye pain", "চোখে ব্যথা",
        "retro-orbital", "retroorbital",
        "breakbone", "dengue shock",
        "bleeding gums", "মাড়ি থেকে রক্ত",
        "warning sign dengue",
        "severe abdominal pain vomiting fever",
    ],
    "measles": [
        # Measles-specific — rash only counts WITH cough/runny nose/red eyes
        "measles", "হাম",
        "koplik",
        "unvaccinated", "টিকা নেই",
        "cough rash", "fever rash cough",
        "runny nose rash", "সর্দি ফুসকুড়ি",
        "red eyes rash", "চোখ লাল ফুসকুড়ি",
        "জ্বর ফুসকুড়ি কাশি",
        "rash cough unvaccinated",
        "fever rash unvaccinated",
    ],
    "maternal": [
        "pregnant", "গর্ভবতী", "pregnancy", "গর্ভাবস্থা",
        "antenatal", "prenatal", "anc",
        "delivery", "প্রসব", "labour", "labor", "প্রসব ব্যথা",
        "postpartum", "প্রসব পরবর্তী",
        "bleeding pregnancy", "গর্ভাবস্থায় রক্তপাত",
        "eclampsia", "preeclampsia", "high bp pregnant",
        "week", "সপ্তাহ", "trimester", "kicks", "fetal",
        "miscarriage", "গর্ভপাত",
    ],
    "diabetes": [
        "diabetes", "ডায়াবেটিস", "diabetic", "sugar",
        "blood sugar", "রক্তে শর্করা", "glucose", "গ্লুকোজ",
        "fasting glucose", "hba1c",
        "frequent urination", "ঘন ঘন প্রস্রাব",
        "excessive thirst", "অতিরিক্ত তৃষ্ণা",
        "slow healing", "ধীরে সারছে",
        "numbness feet", "পায়ে অসাড়তা",
        "gestational diabetes", "গর্ভকালীন ডায়াবেটিস",
    ],
    "bp": [
        "blood pressure", "রক্তচাপ", "hypertension", "উচ্চ রক্তচাপ",
        "systolic", "diastolic", "bp ",
        "headache dizziness", "মাথাব্যথা মাথা ঘোরা",
        "chest pain", "বুকে ব্যথা",
        "shortness of breath", "শ্বাসকষ্ট",
        "180/", "170/", "160/",  # BP readings with slash
        "hypertensive", "হাইপারটেনসিভ",
    ],
}

# ── Per-disease prompt fragments ──────────────────────────────────────────────
DISEASE_PROMPTS = {
    "dengue": """
DISEASE DOMAIN: Dengue Fever

Assessment priorities:
- Day of fever onset (danger zone: day 3–7)
- Warning signs: severe abdominal pain, vomiting, bleeding, restlessness
- Platelet drop risk: refer if day 4+ with any warning sign

RISK LEVEL: (Low / Medium / High / EMERGENCY)
IMMEDIATE ACTION:
REFERRAL NEEDED: (Yes / No — if Yes, state urgency: Routine / Urgent / Emergency)
REASON:
DENGUE WARNING SIGNS PRESENT: (Yes / No — list if Yes)
""",

    "measles": """
DISEASE DOMAIN: Measles (ACTIVE OUTBREAK — Bangladesh 2026)

Assessment priorities:
- Classic triad: fever + cough/runny nose + red eyes THEN rash
- Vaccination status: unvaccinated or partially vaccinated = HIGH RISK
- Danger signs: difficulty breathing, convulsions, unable to drink
- Measles is HIGHLY CONTAGIOUS — isolation advice is mandatory

⚠️ MEASLES ALERT: If fever + rash + cough/runny nose in unvaccinated child → EMERGENCY REFERRAL immediately.

RISK LEVEL: (Low / Medium / High / EMERGENCY)
IMMEDIATE ACTION:
REFERRAL NEEDED: (Yes / No — if Yes, state urgency: Routine / Urgent / Emergency)
REASON:
ISOLATION ADVISED: (Yes / No)
VACCINATION STATUS: (Vaccinated / Unvaccinated / Unknown)
""",

    "maternal": """
DISEASE DOMAIN: Maternal / Antenatal Health

Assessment priorities:
- Gestational week and trimester
- Danger signs: heavy bleeding, severe headache, blurred vision, fits, no fetal movement
- Pre-eclampsia flags: BP ≥140/90 + headache + swelling
- Immediate referral if any danger sign present

RISK LEVEL: (Low / Medium / High / EMERGENCY)
IMMEDIATE ACTION:
REFERRAL NEEDED: (Yes / No — if Yes, state urgency: Routine / Urgent / Emergency)
REASON:
DANGER SIGNS PRESENT: (Yes / No — list if Yes)
GESTATIONAL WEEK: (if mentioned)
""",

    "diabetes": """
DISEASE DOMAIN: Diabetes / Blood Sugar

Assessment priorities:
- Fasting glucose reading (normal <5.6, pre-diabetic 5.6–6.9, diabetic ≥7.0 mmol/L)
- HbA1c if available (diabetic ≥6.5%)
- Symptoms: thirst, frequent urination, blurred vision, slow-healing wounds
- Gestational diabetes: refer immediately regardless of severity

Advice tiers:
- Normal reading + no symptoms → lifestyle advice, retest in 3 months
- Pre-diabetic → lifestyle advice + refer to upazila for confirmation
- Diabetic reading → refer to upazila health complex
- Gestational diabetes → emergency referral

RISK LEVEL: (Low / Medium / High / EMERGENCY)
IMMEDIATE ACTION:
REFERRAL NEEDED: (Yes / No — if Yes, state urgency: Routine / Urgent / Emergency)
REASON:
GLUCOSE READING: (if mentioned)
""",

    "bp": """
DISEASE DOMAIN: Blood Pressure / Hypertension

Assessment priorities:
- Classify reading:
  Normal: <120/80
  Elevated: 120–129/<80
  Stage 1 HTN: 130–139/80–89
  Stage 2 HTN: ≥140/90
  Hypertensive Crisis: ≥180/120 → EMERGENCY
- Associated symptoms: headache, chest pain, shortness of breath, vision changes
- If pregnant + BP ≥140/90 → pre-eclampsia protocol (refer to maternal domain)

⚠️ BP ≥180/120: EMERGENCY referral. Do not wait.

RISK LEVEL: (Low / Medium / High / EMERGENCY)
IMMEDIATE ACTION:
REFERRAL NEEDED: (Yes / No — if Yes, state urgency: Routine / Urgent / Emergency)
REASON:
BP CLASSIFICATION: (Normal / Elevated / Stage 1 / Stage 2 / Crisis)
BP READING: (if mentioned)
""",

    "general": """
DISEASE DOMAIN: General / Unspecified

Assess the situation carefully using available protocols.

RISK LEVEL: (Low / Medium / High / EMERGENCY)
IMMEDIATE ACTION:
REFERRAL NEEDED: (Yes / No)
REASON:
""",
}

# ── Report type mapping ───────────────────────────────────────────────────────
DISEASE_REPORT_TYPE = {
    "dengue":   "outbreak",
    "measles":  "outbreak",
    "maternal": "registry",
    "diabetes": "registry",
    "bp":       "registry",
    "general":  "registry",
}


def detect_disease(text: str) -> str:
    """
    Detect disease domain from symptom text.
    Priority order is carefully chosen to avoid false matches:
    - maternal first (pregnancy keywords are unambiguous)
    - bp second (numeric readings are unambiguous)
    - diabetes third (glucose/sugar are unambiguous)
    - dengue before measles (bone pain / eye pain / platelet are dengue-specific)
    - measles last (catches fever+rash+cough combos not caught above)
    """
    text_lower = text.lower()

    priority_order = ["maternal", "bp", "diabetes", "dengue", "measles"]

    for disease in priority_order:
        keywords = DISEASE_KEYWORDS[disease]
        if any(kw.lower() in text_lower for kw in keywords):
            return disease

    return "general"


def load_rag_chain(persist_dir: str = "backend/rag/db"):
    embeddings = HuggingFaceEmbeddings(
        model_name="sentence-transformers/all-MiniLM-L6-v2"
    )
    db = Chroma(persist_directory=persist_dir, embedding_function=embeddings)
    llm = Ollama(model="phi3:mini")
    return db, llm


def query(question: str, db, llm, disease: str = None):
    """
    Run RAG query with disease-aware prompt.
    If disease not provided, auto-detects from question text.
    Returns dict with response text + detected disease + report type.
    """
    if disease is None:
        disease = detect_disease(question)

    docs = db.similarity_search(question, k=3)
    context = "\n\n".join([doc.page_content for doc in docs])

    disease_fragment = DISEASE_PROMPTS.get(disease, DISEASE_PROMPTS["general"])

    prompt = f"""You are Niramoy — a clinical decision support assistant for Bangladeshi community health workers (Shasthya Shebikas).
You assist, you do NOT diagnose. Always recommend referral when in doubt.
Use ONLY the provided WHO/DGHS protocol context.
Respond in simple, clear language a health worker can act on immediately.
তুমি একজন সহায়তাকারী, রোগ নির্ণয় করছ না। (You are assisting, not diagnosing.)

Protocol Context:
{context}

Patient Situation:
{question}

{disease_fragment}"""

    response = llm.invoke(prompt)

    return {
        "response":    response,
        "disease":     disease,
        "report_type": DISEASE_REPORT_TYPE.get(disease, "registry"),
    }


if __name__ == "__main__":
    print("🔄 Loading RAG chain...")
    db, llm = load_rag_chain()
    print("✅ Ready!\n")

    test_cases = [
        ("জ্বর, ফুসকুড়ি, কাশি, টিকা নেই",                     "measles"),
        ("গর্ভবতী, ৩২ সপ্তাহ, রক্তচাপ ১৬০/১১০, মাথাব্যথা",    "maternal"),
        ("fasting glucose 8.2 mmol/L, excessive thirst",         "diabetes"),
        ("bp 185/120, severe headache, chest pain",              "bp"),
        ("high fever day 5, bone pain, eye pain, platelet low",  "dengue"),
        ("fever rash cough unvaccinated child",                  "measles"),
    ]

    print("── Routing test (no LLM call) ──")
    all_pass = True
    for text, expected in test_cases:
        detected = detect_disease(text)
        status = "✅" if detected == expected else "❌"
        if detected != expected:
            all_pass = False
        print(f"{status} Expected={expected:<10} Got={detected:<10} | {text[:50]}")

    print(f"\n{'✅ All routing correct!' if all_pass else '❌ Some routes failed — check keywords.'}")