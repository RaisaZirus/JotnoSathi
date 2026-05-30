import os
import json
import math
import re
from collections import Counter
from groq import Groq

# Load .env if present (for local dev)
try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    pass

# ── Lazy singletons ───────────────────────────────────────────────────────────
_groq_client = None
_docs        = None   # WHO document chunks loaded from docs.json
_tfidf_index = None   # TF-IDF index built on first request

def get_groq_client():
    global _groq_client
    if _groq_client is None:
        api_key = os.environ.get("GROQ_API_KEY")
        if not api_key:
            raise ValueError("GROQ_API_KEY not set.")
        _groq_client = Groq(api_key=api_key)
    return _groq_client

GROQ_MODEL = "llama-3.3-70b-versatile"

# ── TF-IDF retrieval ────────────────────────────────────────────────────────

def _tokenize(text):
    return re.findall(r'[a-zA-Z\u0980-\u09FF]+', text.lower())

def _build_tfidf(docs):
    """Build TF-IDF index from list of document texts."""
    N = len(docs)
    df = Counter()
    tokenized = []
    for doc in docs:
        tokens = set(_tokenize(doc["text"]))
        tokenized.append(tokens)
        for t in tokens:
            df[t] += 1

    idf = {t: math.log(N / (1 + df[t])) for t in df}
    return tokenized, idf, N

def _tfidf_score(query_tokens, doc_tokens, idf):
    """BM25-style score between query and document."""
    score = 0.0
    for t in query_tokens:
        if t in doc_tokens and t in idf:
            score += idf[t]
    return score

def get_retriever(docs_path: str = "backend/rag/docs.json"):
    """Lazy loader — builds TF-IDF index from docs.json on first call."""
    global _docs, _tfidf_index
    if _docs is None:
        print("🔄 Loading WHO document index...")
        if not os.path.exists(docs_path):
            print(f"⚠️  {docs_path} not found — RAG disabled, using prompts only")
            _docs = []
            _tfidf_index = ([], {}, 0)
            return _docs, _tfidf_index
        with open(docs_path, "r", encoding="utf-8") as f:
            _docs = json.load(f)
        _tfidf_index = _build_tfidf(_docs)
        print(f"✅ WHO index ready — {len(_docs)} chunks")
    return _docs, _tfidf_index

def retrieve(question: str, k: int = 3) -> str:
    """Retrieve top-k relevant WHO protocol chunks using TF-IDF."""
    docs, (tokenized, idf, N) = get_retriever()
    if not docs:
        return ""
    query_tokens = set(_tokenize(question))
    scores = [
        (i, _tfidf_score(query_tokens, doc_tokens, idf))
        for i, doc_tokens in enumerate(tokenized)
    ]
    top_k = sorted(scores, key=lambda x: x[1], reverse=True)[:k]
    chunks = [docs[i]["text"] for i, score in top_k if score > 0]
    return "\n\n".join(chunks) if chunks else ""

def load_rag_chain(persist_dir: str = "backend/rag/db"):
    """Kept for API compatibility with main.py."""
    print(f"✅ Groq + TF-IDF RAG ready — model: {GROQ_MODEL}")
    return None, None


# ── Disease keyword router ───────────────────────────────────────────────────
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


def query(question: str, db=None, llm=None, disease: str = None):
    """
    Run RAG query with TF-IDF retrieval + Groq generation.
    db/llm params kept for API compatibility but unused.
    """
    if disease is None:
        disease = detect_disease(question)

    # Retrieve relevant WHO protocol chunks via TF-IDF
    context = retrieve(question, k=3)

    disease_fragment = DISEASE_PROMPTS.get(disease, DISEASE_PROMPTS["general"])

    system_prompt = """You are JotnoSathi — a clinical decision support assistant for Bangladeshi community health workers (Shasthya Shebikas).
You assist, you do NOT diagnose. Always recommend referral when in doubt.
Use the provided WHO/DGHS protocol context to guide your response.
Respond in simple, clear language a health worker can act on immediately.
তুমি একজন সহায়তাকারী, রোগ নির্ণয় করছ না। (You are assisting, not diagnosing.)
Keep your response concise and structured — under 200 words."""

    user_prompt = f"""WHO Protocol Context:
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
        temperature=0.2,
        max_tokens=400,
        top_p=0.9,
    )

    response = completion.choices[0].message.content

    return {
        "response":    response,
        "disease":     disease,
        "report_type": DISEASE_REPORT_TYPE.get(disease, "registry"),
    }