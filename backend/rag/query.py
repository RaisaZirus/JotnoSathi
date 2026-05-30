import os
from langchain_community.embeddings import HuggingFaceInferenceAPIEmbeddings
from langchain_community.vectorstores import Chroma
from groq import Groq

# Load .env if present (for local dev)
try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    pass

# ── Lazy singletons ──────────────────────────────────────────────────────────
_groq_client = None
_db           = None   # ChromaDB loaded on first triage request
_embeddings   = None   # HuggingFace model loaded on first triage request

def get_groq_client():
    global _groq_client
    if _groq_client is None:
        api_key = os.environ.get("GROQ_API_KEY")
        if not api_key:
            raise ValueError("GROQ_API_KEY not set. Add it to your .env file.")
        _groq_client = Groq(api_key=api_key)
    return _groq_client

GROQ_MODEL = "llama-3.3-70b-versatile"

# ── Disease keyword router ────────────────────────────────────────────────────
# IMPORTANT: Keywords here are for ROUTING only, not for limiting RAG answers.
DISEASE_KEYWORDS = {
    "dengue": [
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
        "180/", "170/", "160/",
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
    Priority: maternal → bp → diabetes → dengue → measles → general
    """
    text_lower = text.lower()
    priority_order = ["maternal", "bp", "diabetes", "dengue", "measles"]
    for disease in priority_order:
        if any(kw.lower() in text_lower for kw in DISEASE_KEYWORDS[disease]):
            return disease
    return "general"


def get_db(persist_dir: str = "backend/rag/db"):
    """
    Lazy loader — uses HuggingFace Inference API for embeddings.
    Runs on HuggingFace servers instead of locally — zero RAM on Render.
    """
    global _db, _embeddings
    if _db is None:
        print("🔄 Connecting to HuggingFace embedding API...")
        hf_token = os.environ.get("HF_TOKEN", "")
        _embeddings = HuggingFaceInferenceAPIEmbeddings(
            api_key=hf_token,
            model_name="sentence-transformers/all-MiniLM-L6-v2"
        )
        _db = Chroma(persist_directory=persist_dir, embedding_function=_embeddings)
        print("✅ RAG db ready")
    return _db


def load_rag_chain(persist_dir: str = "backend/rag/db"):
    """
    Returns (None, None) — db now loads lazily on first triage call.
    Kept for API compatibility with main.py.
    """
    print(f"✅ Groq client ready — model: {GROQ_MODEL}")
    return None, None   # db loads lazily via get_db()


def query(question: str, db=None, llm=None, disease: str = None):
    """
    Run RAG query with disease-aware prompt via Groq API.
    llm parameter kept for API compatibility but ignored — Groq is used directly.
    Returns dict: {response, disease, report_type}
    """
    if db is None:
        db = get_db()   # lazy load on first request

    if disease is None:
        disease = detect_disease(question)

    # Retrieve relevant protocol chunks from ChromaDB
    docs    = db.similarity_search(question, k=3)
    context = "\n\n".join([doc.page_content for doc in docs])

    disease_fragment = DISEASE_PROMPTS.get(disease, DISEASE_PROMPTS["general"])

    system_prompt = """You are JotnoSathi — a clinical decision support assistant for Bangladeshi community health workers (Shasthya Shebikas).
You assist, you do NOT diagnose. Always recommend referral when in doubt.
Use ONLY the provided WHO/DGHS protocol context to guide your response.
Respond in simple, clear language a health worker can act on immediately.
তুমি একজন সহায়তাকারী, রোগ নির্ণয় করছ না। (You are assisting, not diagnosing.)
Keep your response concise and structured — under 200 words."""

    user_prompt = f"""Protocol Context:
{context}

Patient Situation:
{question}

{disease_fragment}"""

    client = get_groq_client()
    completion = client.chat.completions.create(
        model=GROQ_MODEL,
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user",   "content": user_prompt},
        ],
        temperature=0.2,      # low temp for clinical consistency
        max_tokens=400,
        top_p=0.9,
    )

    response = completion.choices[0].message.content

    return {
        "response":    response,
        "disease":     disease,
        "report_type": DISEASE_REPORT_TYPE.get(disease, "registry"),
    }


if __name__ == "__main__":
    print("🔄 Loading RAG chain + Groq client...")
    db, _ = load_rag_chain()
    print("✅ Ready!\n")

    test_cases = [
        ("জ্বর, ফুসকুড়ি, কাশি, টিকা নেই",                    "measles"),
        ("গর্ভবতী, ৩২ সপ্তাহ, রক্তচাপ ১৬০/১১০, মাথাব্যথা",   "maternal"),
        ("fasting glucose 8.2 mmol/L, excessive thirst",        "diabetes"),
        ("bp 185/120, severe headache, chest pain",             "bp"),
        ("high fever day 5, bone pain, eye pain, platelet low", "dengue"),
        ("fever rash cough unvaccinated child",                 "measles"),
    ]

    print("── Routing test (no API call) ──")
    all_pass = True
    for text, expected in test_cases:
        detected = detect_disease(text)
        status   = "✅" if detected == expected else "❌"
        if detected != expected: all_pass = False
        print(f"{status} Expected={expected:<10} Got={detected:<10} | {text[:50]}")
    print(f"\n{'✅ All routing correct!' if all_pass else '❌ Some routes failed.'}\n")

    print("── Live Groq test ──")
    result = query("fever day 5, bone pain, eye pain, platelet low", db)
    print(f"Disease: {result['disease'].upper()}")
    print(f"Response:\n{result['response']}")