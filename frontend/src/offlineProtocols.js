// ─────────────────────────────────────────────────────────────────
// JotnoSathi Offline Protocol Lookup
// Browser-side port of backend/rag/query.py's TF-IDF retrieval.
// When the backend is unreachable, this searches the same WHO/MSF
// protocol chunks directly on the device and returns the exact
// protocol excerpts — no AI generation, no hallucination risk.
//
// Requires /who_docs.json in frontend/public/ (a copy of
// backend/rag/docs.json). The service worker caches it after the
// first online visit, so it stays available fully offline.
// ─────────────────────────────────────────────────────────────────

let _docs    = null   // array of { text, meta } chunks
let _index   = null   // { tokenized: Set[], idf: Map, N }
let _loading = null   // in-flight load promise (prevents double loads)

// Same tokenizer as query.py: re.findall(r'[a-zA-Z\u0980-\u09FF]+', text.lower())
const TOKEN_RE = /[a-zA-Z\u0980-\u09FF]+/g

function tokenize(text) {
  return text.toLowerCase().match(TOKEN_RE) || []
}

async function loadIndex() {
  if (_index) return
  if (_loading) return _loading

  _loading = (async () => {
    const res = await fetch('/who_docs.json')
    if (!res.ok) throw new Error('Protocol file unavailable')
    _docs = await res.json()

    // Build the same TF-IDF index as query.py's _build_tfidf()
    const N  = _docs.length
    const df = new Map()
    const tokenized = new Array(N)

    for (let i = 0; i < N; i++) {
      const tokens = new Set(tokenize(_docs[i].text))
      tokenized[i] = tokens
      for (const t of tokens) df.set(t, (df.get(t) || 0) + 1)
    }

    const idf = new Map()
    for (const [t, count] of df) idf.set(t, Math.log(N / (1 + count)))

    _index = { tokenized, idf, N }
  })()

  try {
    await _loading
  } finally {
    _loading = null
  }
}

/**
 * Warm up the protocol index in the background. Call once when the
 * Triage tab mounts (while likely still online) so everything is
 * downloaded, cached, and indexed before connectivity drops.
 */
export function preloadProtocolIndex() {
  loadIndex().catch(() => { /* will retry on first real lookup */ })
}

/**
 * Same scoring as query.py's retrieve(): sum of IDF weights over
 * shared tokens, top-k chunks with score > 0.
 * Returns [{ text, source, page }] — empty array if nothing matches.
 */
export async function retrieveOffline(question, k = 3) {
  await loadIndex()

  const queryTokens = new Set(tokenize(question))
  const scores = []

  for (let i = 0; i < _index.N; i++) {
    let score = 0
    const docTokens = _index.tokenized[i]
    for (const t of queryTokens) {
      if (docTokens.has(t)) {
        const w = _index.idf.get(t)
        if (w) score += w
      }
    }
    if (score > 0) scores.push([i, score])
  }

  scores.sort((a, b) => b[1] - a[1])

  return scores.slice(0, k).map(([i]) => {
    const d = _docs[i]
    const sourceFile = (d.meta?.source || 'WHO guideline')
      .split(/[\\/]/)
      .pop()
    return {
      text:   d.text,
      source: sourceFile,
      page:   d.meta?.page != null ? d.meta.page + 1 : null,
    }
  })
}

// ── Disease keyword router — port of query.py's DISEASE_KEYWORDS ──
const DISEASE_KEYWORDS = {
  dengue: [
    'dengue', 'ডেঙ্গু', 'dengue fever',
    'aedes', 'platelet', 'প্লেটলেট',
    'bone pain', 'হাড়ে ব্যথা',
    'eye pain', 'চোখে ব্যথা',
    'retro-orbital', 'retroorbital',
    'breakbone', 'dengue shock',
    'bleeding gums', 'মাড়ি থেকে রক্ত',
    'warning sign dengue',
    'severe abdominal pain vomiting fever',
  ],
  measles: [
    'measles', 'হাম',
    'koplik',
    'unvaccinated', 'টিকা নেই',
    'cough rash', 'fever rash cough',
    'runny nose rash', 'সর্দি ফুসকুড়ি',
    'red eyes rash', 'চোখ লাল ফুসকুড়ি',
    'জ্বর ফুসকুড়ি কাশি',
    'rash cough unvaccinated',
    'fever rash unvaccinated',
  ],
  maternal: [
    'pregnant', 'গর্ভবতী', 'pregnancy', 'গর্ভাবস্থা',
    'antenatal', 'prenatal', 'anc',
    'delivery', 'প্রসব', 'labour', 'labor', 'প্রসব ব্যথা',
    'postpartum', 'প্রসব পরবর্তী',
    'bleeding pregnancy', 'গর্ভাবস্থায় রক্তপাত',
    'eclampsia', 'preeclampsia', 'high bp pregnant',
    'week', 'সপ্তাহ', 'trimester', 'kicks', 'fetal',
    'miscarriage', 'গর্ভপাত',
  ],
  diabetes: [
    'diabetes', 'ডায়াবেটিস', 'diabetic', 'sugar',
    'blood sugar', 'রক্তে শর্করা', 'glucose', 'গ্লুকোজ',
    'fasting glucose', 'hba1c',
    'frequent urination', 'ঘন ঘন প্রস্রাব',
    'excessive thirst', 'অতিরিক্ত তৃষ্ণা',
    'slow healing', 'ধীরে সারছে',
    'numbness feet', 'পায়ে অসাড়তা',
    'gestational diabetes', 'গর্ভকালীন ডায়াবেটিস',
  ],
  bp: [
    'blood pressure', 'রক্তচাপ', 'hypertension', 'উচ্চ রক্তচাপ',
    'systolic', 'diastolic', 'bp ',
    'headache dizziness', 'মাথাব্যথা মাথা ঘোরা',
    'chest pain', 'বুকে ব্যথা',
    'shortness of breath', 'শ্বাসকষ্ট',
    '180/', '170/', '160/',
    'hypertensive', 'হাইপারটেনসিভ',
  ],
}

// Same priority order as query.py's detect_disease()
const PRIORITY_ORDER = ['maternal', 'bp', 'diabetes', 'dengue', 'measles']

export function detectDiseaseOffline(text) {
  const lower = text.toLowerCase()
  for (const disease of PRIORITY_ORDER) {
    if (DISEASE_KEYWORDS[disease].some(kw => lower.includes(kw.toLowerCase()))) {
      return disease
    }
  }
  return 'general'
}