<div align="center">

<img src="frontend/src/jotno.png" alt="JotnoSathi Logo" width="120" height="120" style="border-radius: 24px;" />

<h1>JotnoSathi &nbsp;·&nbsp; জত্নসাথী</h1>

<p><strong>AI Clinical Decision Support for Bangladeshi Community Health Workers</strong></p>

<p>
  <a href="https://jotno-sathi.vercel.app"><img src="https://img.shields.io/badge/Live%20App-jotno--sathi.vercel.app-0F766E?style=for-the-badge&logo=vercel&logoColor=white" alt="Live App" /></a>
  &nbsp;
  <a href="https://jotnosathi-backe.onrender.com/health"><img src="https://img.shields.io/badge/Backend-Online-2E7D4A?style=for-the-badge&logo=fastapi&logoColor=white" alt="Backend" /></a>
  &nbsp;
  <a href="https://jotnosathi-backe.onrender.com/docs"><img src="https://img.shields.io/badge/API-Docs-1565C0?style=for-the-badge&logo=swagger&logoColor=white" alt="API Docs" /></a>
</p>

<p>
  <img src="https://img.shields.io/badge/LLaMA%203.3-70B-7B1FA2?style=flat-square" />
  <img src="https://img.shields.io/badge/RAG-5%2C934%20WHO%20Chunks-E65100?style=flat-square" />
  <img src="https://img.shields.io/badge/Offline--First-PWA-0F766E?style=flat-square" />
  <img src="https://img.shields.io/badge/Bengali%20Script-Native-C62828?style=flat-square" />
  <img src="https://img.shields.io/badge/License-MIT-64748B?style=flat-square" />
</p>

<br />

> *"One Shebika, one triage, one field report — and the whole system gets a little smarter."*

<br />

</div>

---

## The Problem

Bangladesh has **13,000 Shasthya Shebikas** — frontline community health workers serving millions in rural areas. They make life-or-death triage decisions with nothing but memory and paper checklists. Two things make AI tools fail in this setting:

1. **The internet drops** — rural connectivity is unreliable and often absent entirely.
2. **AI must never guess** — a hallucinated diagnosis in a clinical setting is dangerous.

JotnoSathi was built to solve both, from the architecture up.

---

## What It Does

<table>
<tr>
<td width="50%">

### 🏥 AI Triage in Bangla
Type or speak symptoms in Bangla or English. JotnoSathi reasons directly in Bengali script — not translated — using LLaMA 3.3 70B via Groq, grounded in WHO and MSF clinical guidelines. Returns structured advice with risk level and referral flag in seconds.

</td>
<td width="50%">

### 📡 Offline-First Protocol Lookup
When connectivity drops, the app doesn't fail. An on-device TF-IDF engine searches the same 5,934 WHO protocol chunks and returns the **exact protocol text** — zero AI generation, zero hallucination risk offline.

</td>
</tr>
<tr>
<td width="50%">

### 🗺️ Live District Risk Map
All 8 divisions of Bangladesh scored across 5 diseases, calibrated from 13 real-world datasets (WHO, DHS Bangladesh, Kaggle). Every score is **explainable** — breaks down into exact additive contributions per disease.

</td>
<td width="50%">

### 🔄 Self-Improving Feedback Loop
Every triage auto-generates a field report. Every 5 reports for a district trigger a **genuine model refit** — the risk map updates in real time from ground-truth observations. The system gets smarter with every case.

</td>
</tr>
<tr>
<td width="50%">

### 📦 Offline Queue & Auto-Sync
Failed submissions (triages + field reports) are saved in IndexedDB and automatically re-sent the moment connectivity returns. No work is ever lost — every observation eventually feeds the risk model.

</td>
<td width="50%">

### 📱 Installable PWA
Works as a native-feeling app on any Android phone. Add to home screen, launch full-screen, use in airplane mode. No app store. No platform lock-in. One codebase for web, mobile, and installable app.

</td>
</tr>
</table>

---

## Demo

**Try it live:** [jotno-sathi.vercel.app](https://jotno-sathi.vercel.app)

```
Login:  raisa / test123   (or create your own account)
```

**Offline demo:** Open the app, visit Triage + Risk Map once to cache data, then turn on airplane mode. The app still works.

**Test symptoms (measles):**
```
জ্বর, র্যাশ, কাশি, টিকা নেই
(Fever, rash, cough, unvaccinated)
```

---

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│  CLIENT  (React + Vite · Vercel)                            │
│                                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌───────────┐  │
│  │  Triage  │  │ Risk Map │  │ Reports  │  │ Referral  │  │
│  │   Tab    │  │   Tab    │  │   Tab    │  │   Tab     │  │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └───────────┘  │
│       │             │             │                         │
│  ┌────▼─────────────▼─────────────▼──────────────────────┐ │
│  │  Service Worker · IndexedDB Queue · Offline Cache      │ │
│  │  On-device TF-IDF Protocol Lookup (who_docs.json)     │ │
│  └─────────────────────────────┬──────────────────────────┘ │
└────────────────────────────────┼────────────────────────────┘
                                 │ HTTPS (when online)
┌────────────────────────────────▼────────────────────────────┐
│  BACKEND  (FastAPI · Render free tier · 512MB RAM)          │
│                                                             │
│  /triage ──► TF-IDF RAG ──► LLaMA 3.3 70B (Groq)          │
│  /risk/all ──► Risk Model · XGBoost · v2.2                 │
│  /field-report ──► Queue ──► Retraining Trigger            │
│  /auth ──► JWT + SQLite + bcrypt                           │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  RAG: 5,934 WHO/MSF chunks · TF-IDF (docs.json)     │  │
│  │  Risk: 5 disease models · 13 datasets · clamped v2.2│  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

---

## Tech Stack

| Layer | Technology | Why |
|---|---|---|
| **LLM** | LLaMA 3.3 70B via Groq | Fluent Bengali reasoning, fast inference |
| **RAG** | TF-IDF over docs.json (~5MB) | Replaced ChromaDB — fits in 512MB RAM, no external API |
| **Risk Models** | XGBoost · 5 diseases · 13 datasets | Calibrated, clamped scores (v2.2) — no inflated 100s |
| **Offline AI** | On-device TF-IDF (offlineProtocols.js) | Exact protocol text offline — no generation, no hallucination |
| **Offline Queue** | IndexedDB (offlineQueue.js) | Survives reloads, syncs triages + reports on reconnect |
| **Frontend** | React + Vite + Tailwind + Framer Motion | PWA, installable, service worker cached |
| **Backend** | FastAPI + uvicorn | Render free tier, stateless, horizontally scalable |
| **Auth** | JWT + SQLite + bcrypt | 8hr tokens, auto-seeded users, absolute DB paths for Render |
| **Voice Input** | Web Speech API | Hardcoded `bn-BD`, live interim transcription, append mode |
| **Hosting** | Vercel (frontend) + Render (backend) | Zero cost — genuinely $0/month |

---

## Key Engineering Decisions

<details>
<summary><strong>Why TF-IDF instead of ChromaDB?</strong></summary>

Render's free tier has 512MB RAM. Loading a HuggingFace embedding model requires ~300MB alone, and Render also blocks `api-inference.huggingface.co`. TF-IDF over a static `docs.json` uses ~5MB, needs no external API, and retrieval quality for medical terminology is identical — clinical terms are distinctive enough that semantic similarity adds little over keyword matching.

</details>

<details>
<summary><strong>Why is max_tokens set to 700?</strong></summary>

Bengali script uses significantly more tokens per character than English. At `max_tokens=400` (the original setting), structured Bangla responses were being truncated mid-sentence. Raising to 700 adds ~0.5–1s per response but eliminates cut-offs entirely.

</details>

<details>
<summary><strong>Why is voice input hardcoded to bn-BD?</strong></summary>

When the recognition language followed the UI dropdown (default: English), Chrome's Web Speech API would phonetically spell Bangla words in English — e.g. `"Amar boys photo"` instead of `"আমার বয়স চল্লিশ"`. Hardcoding `bn-BD` with append mode and live interim transcription solved the problem entirely.

</details>

<details>
<summary><strong>How does the offline protocol lookup work?</strong></summary>

`offlineProtocols.js` is a browser-side port of `backend/rag/query.py`. It uses the same tokenizer (regex over ASCII + Bengali Unicode range), the same IDF scoring, and the same top-k selection. On first load, it fetches `who_docs.json` (~5MB), builds the TF-IDF index in a Web Worker, and caches both via the service worker. Subsequent lookups are instant, fully offline, and return the same chunks the backend would have retrieved.

</details>

<details>
<summary><strong>How does the risk model retraining work?</strong></summary>

Field reports are queued per disease in `risk_model/queues/`. When the queue for a disease+division combination reaches 5 entries, `retrain_scheduler.py` triggers a refit of that disease model using the original training data *plus* the new observations. Scores are then re-clamped using `clamp_disease_score()` (v2.2 ceilings: dengue 65, measles 60, maternal 55, diabetes/BP 50) before the composite is recomputed. This prevents the max-normalisation inflation bug that produced impossible 100-scores at baseline.

</details>

---

## Explainability

Every district risk score is **additively attributable**. The composite decomposes exactly:

```
composite = Σ (disease_score × weight) / Σ weights × Σ weights

Weights (v2.2):  Dengue 28%  ·  Measles 22%  ·  Maternal 22%
                 Diabetes 15%  ·  Hypertension 13%
```

The Risk Map's "Why this score?" panel shows each disease's exact point contribution with animated bars. For linear weighted models, this is mathematically identical to SHAP — no approximation.

---

## Offline Architecture

```
First visit (online):
  1. Service worker caches app shell, JS, CSS, jotno.png
  2. who_docs.json (~5MB) downloaded + TF-IDF indexed in background
  3. Risk Map + Reports data saved to localStorage cache

Subsequent visits (offline):
  ├── App shell loads from service worker cache
  ├── Risk Map shows last-known scores (cached)
  ├── Reports show last-known queue + registry (cached)
  └── Triage → exact WHO protocol excerpts (on-device TF-IDF)
             → triage saved to IndexedDB queue

On reconnect:
  └── IndexedDB queue auto-syncs → /triage + /field-report
      → feeds risk model → scores update
```

---

## Project Structure

```
JotnoSathi/
├── frontend/
│   ├── public/
│   │   ├── manifest.json          # PWA manifest
│   │   ├── sw.js                  # Service worker
│   │   ├── who_docs.json          # WHO/MSF protocol chunks (offline RAG)
│   │   └── jotno.png              # App icon
│   └── src/
│       ├── components/
│       │   ├── TriageTab.jsx      # AI triage + offline protocol lookup
│       │   ├── RiskMapTab.jsx     # District map + explainability panel
│       │   ├── ReportsTab.jsx     # Field reports + offline queue
│       │   ├── ReferralTab.jsx    # Nearest hospital finder
│       │   ├── LogTab.jsx         # Session history
│       │   └── EthicalDisclaimer.jsx
│       ├── offlineQueue.js        # IndexedDB queue for offline submissions
│       ├── offlineProtocols.js    # On-device TF-IDF protocol retrieval
│       ├── offlineCache.js        # localStorage cache for tab data
│       ├── App.jsx                # Root · auth · backend health check
│       ├── Landing.jsx
│       └── Login.jsx
├── backend/
│   ├── auth/                      # JWT + SQLite auth
│   ├── rag/
│   │   ├── docs.json              # 5,934 WHO/MSF chunks
│   │   ├── query.py               # TF-IDF retrieval + LLM prompt
│   │   └── ingest.py
│   └── main.py                    # FastAPI routes
└── risk_model/
    ├── models/                    # Disease-specific XGBoost models
    ├── data/                      # 13 training datasets
    ├── queues/                    # Field report retraining queues
    ├── trained/                   # Per-disease score JSONs
    ├── train_model.py             # v2.2 — clamp_disease_score()
    ├── retrain_scheduler.py       # Trigger on queue threshold
    └── risk_scores.json           # Live composite scores
```

---

## Running Locally

### Backend

```powershell
# Windows (PowerShell)
cd E:\path\to\JotnoSathi
python -m venv venv
.\venv\Scripts\activate
pip install -r requirements.txt

# Set your API keys
$env:GROQ_API_KEY="your_groq_key_here"
$env:SECRET_KEY="your_secret_key_here"

uvicorn backend.main:app --host 0.0.0.0 --port 8000 --reload
```

```bash
# Mac / Linux
cd /path/to/JotnoSathi
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt

export GROQ_API_KEY="your_groq_key_here"
export SECRET_KEY="your_secret_key_here"

uvicorn backend.main:app --host 0.0.0.0 --port 8000 --reload
```

### Frontend

```bash
cd frontend

# Point at local backend
# In src/constants.js, uncomment:
# export const API = 'http://127.0.0.1:8000'

npm install
npm run dev
# → http://localhost:5173
```

### PWA / Offline Testing

```bash
# Service worker only registers in production builds
npm run build
npm run preview
# → http://localhost:4173
# DevTools → Application → Service Workers → tick "Update on reload"
# DevTools → Application → Service Workers → tick "Offline" to simulate
```

---

## Environment Variables

| Variable | Where | Description |
|---|---|---|
| `GROQ_API_KEY` | Backend `.env` | Groq API key for LLaMA 3.3 70B |
| `SECRET_KEY` | Backend `.env` | JWT signing secret (any random string) |

---

## Seeded Login Credentials

| Username | Password | Division | Role |
|---|---|---|---|
| `raisa` | `test123` | Dhaka | admin |
| `worker1` | `test123` | Rajshahi | worker |
| `worker2` | `test123` | Mymensingh | worker |

---

## API Reference

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/auth/login` | JWT login |
| `POST` | `/auth/register` | Create account |
| `POST` | `/triage` | AI triage + RAG |
| `GET` | `/risk/all` | All 8 division scores |
| `GET` | `/risk/{division}` | Division detail + AI briefing |
| `POST` | `/field-report` | Submit field observation |
| `GET` | `/queue-status` | Retraining queue per disease |
| `GET` | `/case-registry` | Chronic disease case registry |
| `GET` | `/alerts` | Live outbreak alerts |
| `GET` | `/health` | Backend status check |
| `DELETE` | `/field-reports/reset` | Reset queue (demo use) |

Full interactive docs: [jotnosathi-backe.onrender.com/docs](https://jotnosathi-backe.onrender.com/docs)

---

## Dataset Sources

| Disease | Dataset | Source |
|---|---|---|
| Dengue | Dengue fever dataset | Kaggle |
| Measles | Vaccination coverage by division | WHO / UNICEF |
| Maternal | DHS Bangladesh subnational | DHS Program |
| Diabetes | DHS mobile subnational BGD | DHS Program |
| Blood Pressure | Anemia/BP subnational BGD | DHS Program |

All datasets are public domain or openly licensed for research use.

---

## Ethical AI

- **Mandatory disclaimer** on every session: *"তুমি একজন সহায়তাকারী, রোগ নির্ণয় করছ না।"* Cannot be dismissed without acknowledgment.
- **No patient identifiers stored.** Triage payloads contain symptoms and division only.
- **Every recommendation** traces back to a named WHO or DGHS protocol chunk.
- **Explainable scores** — every composite risk score decomposes into exact, auditable disease contributions.
- **Offline mode** returns protocol text, not generated text — zero hallucination risk when connectivity is absent.

---

## Roadmap

- [ ] SHAP beeswarm plots for per-division risk drivers
- [ ] Merge `dolaFinal1` → `master`
- [ ] Proper 192×192 + 512×512 PWA icons
- [ ] Push notifications for CRITICAL risk threshold alerts
- [ ] Ethiopia / Myanmar protocol dataset integration
- [ ] DHIS2-compatible field report export
- [ ] Hotspot / local-network deployment guide

---

## Team — AlephNullSeekers

| Name | Role |
|---|---|
| **Rubaiyat Zaman Raisa** | Team Lead · ML/AI Engineer · Backend · RAG pipeline |
| **Kongkona Saha Dola** | ML/AI Engineer · Backend · Risk models |
| **Sarah Humayra** | Frontend Engineer · UI/UX |

Built for **Infinity AI BuildFest 2026 · HealthTech Domain**

---

<div align="center">

<img src="frontend/src/jotno.png" alt="JotnoSathi" width="48" />

<br />

**JotnoSathi** &nbsp;·&nbsp; জত্নসাথী

*AI Health Worker Assistant · Bangladesh*

[Live App](https://jotno-sathi.vercel.app) · [API Docs](https://jotnosathi-backe.onrender.com/docs) · [Health Check](https://jotnosathi-backe.onrender.com/health)

<br />

<sub>WHO · HDX · DHS Bangladesh · Kaggle · 13 datasets · 5,934 protocol chunks · 8 divisions · 5 diseases</sub>

</div>
