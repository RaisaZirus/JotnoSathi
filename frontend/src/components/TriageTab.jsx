import { useState } from 'react'
import { API, DIVISIONS, DISEASE_FIELDS } from '../constants'
import Badge from './Badge'

const DIVISION_BN = {
  Dhaka: 'ঢাকা',
  Chattogram: 'চট্টগ্রাম',
  Rajshahi: 'রাজশাহী',
  Khulna: 'খুলনা',
  Barishal: 'বরিশাল',
  Sylhet: 'সিলেট',
  Rangpur: 'রংপুর',
  Mymensingh: 'ময়মনসিংহ',
}

const QUICK_DISEASES = [
  {
    id: 'dengue',
    label: 'Dengue',
    bn: 'ডেঙ্গু',
    icon: '🦟',
    color: '#EF4444',
  },
  {
    id: 'measles',
    label: 'Measles',
    bn: 'হাম',
    icon: '🔴',
    color: '#F59E0B',
  },
  {
    id: 'maternal',
    label: 'Maternal',
    bn: 'মাতৃস্বাস্থ্য',
    icon: '🤰',
    color: '#EC4899',
  },
  {
    id: 'diabetes',
    label: 'Diabetes',
    bn: 'ডায়াবেটিস',
    icon: '🩸',
    color: '#3B82F6',
  },
  {
    id: 'bp',
    label: 'Hypertension',
    bn: 'উচ্চ রক্তচাপ',
    icon: '💊',
    color: '#10B981',
  },
]

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;700;800&display=swap');

:root{
  --primary:#0F766E;
  --primary-dark:#115E59;
  --primary-soft:#F0FDFA;
  --text:#0F172A;
  --muted:#64748B;
  --border:rgba(15,118,110,0.12);
  --card:#FFFFFF;
  --bg:#F8FAFC;
}

.triage-wrap{
  padding:32px 22px 60px;
  display:flex;
  flex-direction:column;
  gap:24px;
  background:linear-gradient(to bottom,#F8FAFC,#F0FDFA);
  min-height:100%;
  font-family:'Inter',sans-serif;
}

/* HERO */

.hero{
  position:relative;
  overflow:hidden;
  border-radius:28px;
  padding:34px 32px;
  background:
    radial-gradient(circle at top right, rgba(45,212,191,0.18), transparent 32%),
    linear-gradient(135deg,#0F766E 0%,#115E59 100%);
  color:white;
  box-shadow:
    0 10px 40px rgba(15,118,110,0.20),
    inset 0 1px 0 rgba(255,255,255,0.08);
}

.hero::before{
  content:'';
  position:absolute;
  width:240px;
  height:240px;
  border-radius:999px;
  background:rgba(255,255,255,0.05);
  top:-100px;
  right:-60px;
}

.hero-top{
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  gap:20px;
  position:relative;
  z-index:2;
}

.hero-badge{
  background:rgba(255,255,255,0.14);
  border:1px solid rgba(255,255,255,0.15);
  backdrop-filter:blur(8px);
  color:white;
  padding:10px 16px;
  border-radius:999px;
  font-size:12px;
  font-weight:700;
  letter-spacing:.4px;
  white-space:nowrap;
}

.hero-title{
  font-family:'Plus Jakarta Sans',sans-serif;
  font-size:34px;
  line-height:1.1;
  margin:0 0 12px;
  font-weight:800;
  letter-spacing:-1.2px;
}

.hero-desc{
  margin:0;
  max-width:760px;
  line-height:1.8;
  color:rgba(255,255,255,0.82);
  font-size:15px;
}

.hero-stats{
  margin-top:26px;
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(160px,1fr));
  gap:14px;
  position:relative;
  z-index:2;
}

.hero-stat{
  background:rgba(255,255,255,0.08);
  border:1px solid rgba(255,255,255,0.08);
  border-radius:20px;
  padding:16px;
  backdrop-filter:blur(10px);
}

.hero-stat-value{
  font-size:22px;
  font-weight:800;
  margin-bottom:4px;
}

.hero-stat-label{
  font-size:12px;
  color:rgba(255,255,255,0.7);
}

/* CARD */

.card{
  background:rgba(255,255,255,0.92);
  backdrop-filter:blur(10px);
  border:1px solid rgba(255,255,255,0.6);
  border-radius:28px;
  box-shadow:
    0 10px 30px rgba(15,23,42,0.06),
    0 1px 2px rgba(15,23,42,0.04);
  overflow:hidden;
}

.section{
  padding:26px 28px;
  border-bottom:1px solid rgba(148,163,184,0.12);
}

.section:last-child{
  border-bottom:none;
}

.section-title{
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom:18px;
}

.section-title h3{
  margin:0;
  font-size:13px;
  font-weight:800;
  letter-spacing:1.2px;
  text-transform:uppercase;
  color:#0F766E;
}

.section-sub{
  font-size:12px;
  color:#94A3B8;
  font-weight:600;
}

/* GRID */

.grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
  gap:18px;
}

.field{
  display:flex;
  flex-direction:column;
  gap:8px;
}

.label{
  font-size:13px;
  font-weight:700;
  color:#334155;
}

.select,
.textarea{
  width:100%;
  border:none;
  outline:none;
  border-radius:18px;
  background:#F8FAFC;
  border:1.5px solid rgba(148,163,184,0.16);
  transition:all .2s ease;
  color:#0F172A;
  font-size:14px;
  font-family:'Inter',sans-serif;
}

.select{
  padding:14px 16px;
  font-weight:600;
}

.select:hover,
.textarea:hover{
  border-color:rgba(15,118,110,0.24);
}

.select:focus,
.textarea:focus{
  background:white;
  border-color:rgba(15,118,110,0.45);
  box-shadow:0 0 0 4px rgba(20,184,166,0.10);
}

.textarea{
  min-height:150px;
  resize:vertical;
  line-height:1.8;
  padding:18px;
}

/* QUICK DISEASES */

.quick-wrap{
  display:flex;
  flex-wrap:wrap;
  gap:12px;
}

.quick-chip{
  display:flex;
  align-items:center;
  gap:10px;
  padding:12px 16px;
  border-radius:18px;
  background:white;
  border:1.5px solid rgba(148,163,184,0.12);
  cursor:pointer;
  transition:all .18s ease;
  min-width:170px;
}

.quick-chip:hover{
  transform:translateY(-2px);
  border-color:rgba(15,118,110,0.18);
  box-shadow:0 8px 20px rgba(15,23,42,0.06);
}

.quick-chip.active{
  background:#ECFDF5;
  border-color:rgba(16,185,129,0.28);
  box-shadow:0 8px 20px rgba(16,185,129,0.12);
}

.quick-icon{
  width:42px;
  height:42px;
  border-radius:14px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:20px;
  flex-shrink:0;
}

.quick-text{
  display:flex;
  flex-direction:column;
}

.quick-name{
  font-size:13px;
  font-weight:700;
  color:#0F172A;
}

.quick-bn{
  font-size:11px;
  color:#64748B;
  margin-top:2px;
}

/* VOICE */

.voice-btn{
  width:100%;
  min-height:72px;
  border:none;
  outline:none;
  border-radius:22px;
  background:linear-gradient(135deg,#ECFEFF,#F0FDFA);
  border:1.5px solid rgba(15,118,110,0.12);
  display:flex;
  align-items:center;
  justify-content:center;
  gap:14px;
  cursor:pointer;
  transition:all .18s ease;
  padding:18px;
}

.voice-btn:hover{
  transform:translateY(-1px);
  box-shadow:0 10px 24px rgba(15,118,110,0.10);
}

.voice-btn.listening{
  background:linear-gradient(135deg,#FEF2F2,#FFF1F2);
  border-color:rgba(239,68,68,0.22);
}

.voice-circle{
  width:48px;
  height:48px;
  border-radius:16px;
  display:flex;
  align-items:center;
  justify-content:center;
  background:white;
  font-size:20px;
}

.voice-title{
  font-size:15px;
  font-weight:700;
  color:#0F172A;
}

.voice-sub{
  font-size:12px;
  color:#64748B;
  margin-top:2px;
}

/* SUBMIT */

.submit-row{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:18px;
  flex-wrap:wrap;
}

.disclaimer{
  max-width:420px;
  line-height:1.7;
  color:#64748B;
  font-size:13px;
}

.submit-btn{
  border:none;
  outline:none;
  height:56px;
  padding:0 28px;
  border-radius:18px;
  cursor:pointer;
  background:linear-gradient(135deg,#0F766E,#115E59);
  color:white;
  font-weight:800;
  font-size:15px;
  letter-spacing:.2px;
  transition:all .18s ease;
  box-shadow:0 12px 30px rgba(15,118,110,0.20);
}

.submit-btn:hover{
  transform:translateY(-2px);
  box-shadow:0 16px 34px rgba(15,118,110,0.28);
}

.submit-btn:disabled{
  opacity:.5;
  cursor:not-allowed;
  transform:none;
}

/* RESULT */

.result-card{
  background:white;
  border-radius:28px;
  overflow:hidden;
  border:1px solid rgba(148,163,184,0.12);
  box-shadow:0 10px 30px rgba(15,23,42,0.06);
  animation:fadeUp .3s ease;
}

@keyframes fadeUp{
  from{
    opacity:0;
    transform:translateY(14px);
  }
  to{
    opacity:1;
    transform:none;
  }
}

.result-head{
  padding:24px 28px;
  background:linear-gradient(135deg,#F0FDFA,#F8FAFC);
  border-bottom:1px solid rgba(148,163,184,0.12);
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  gap:16px;
  flex-wrap:wrap;
}

.result-title{
  font-size:20px;
  font-weight:800;
  margin-bottom:6px;
  color:#0F172A;
}

.result-sub{
  font-size:13px;
  color:#64748B;
}

.result-tags{
  display:flex;
  flex-wrap:wrap;
  gap:10px;
  margin-top:18px;
}

.tag{
  padding:8px 14px;
  border-radius:999px;
  font-size:12px;
  font-weight:700;
}

.tag.disease{
  background:#EFF6FF;
  color:#1D4ED8;
}

.tag.outbreak{
  background:#FFF7ED;
  color:#C2410C;
}

.tag.registry{
  background:#ECFDF5;
  color:#047857;
}

.result-body{
  padding:28px;
}

.response{
  background:#F8FAFC;
  border:1px solid rgba(148,163,184,0.14);
  border-radius:22px;
  padding:22px;
  line-height:1.9;
  color:#334155;
  font-size:15px;
  white-space:pre-wrap;
}

.queue{
  margin-top:22px;
  padding:20px;
  border-radius:22px;
  background:#F8FAFC;
}

.queue-top{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:12px;
}

.queue-label{
  font-size:13px;
  font-weight:700;
  color:#334155;
}

.queue-count{
  font-size:13px;
  font-weight:800;
}

.queue-track{
  height:12px;
  border-radius:999px;
  overflow:hidden;
  background:rgba(148,163,184,0.16);
}

.queue-fill{
  height:100%;
  border-radius:999px;
  transition:width .5s ease;
}

.queue-msg{
  margin-top:10px;
  font-size:13px;
  font-weight:700;
}

.loading{
  display:flex;
  align-items:center;
  gap:16px;
  padding:26px;
  border-radius:24px;
  background:white;
  border:1px solid rgba(148,163,184,0.12);
}

.loader{
  width:44px;
  height:44px;
  border-radius:999px;
  border:4px solid rgba(15,118,110,0.12);
  border-top-color:#0F766E;
  animation:spin .7s linear infinite;
}

@keyframes spin{
  to{
    transform:rotate(360deg);
  }
}

@media(max-width:640px){
  .hero{
    padding:28px 22px;
  }

  .hero-title{
    font-size:28px;
  }

  .hero-top{
    flex-direction:column;
  }

  .section{
    padding:22px 18px;
  }

  .submit-row{
    flex-direction:column;
    align-items:stretch;
  }

  .submit-btn{
    width:100%;
  }
}
`

export default function TriageTab({
  addToLog,
}) {
  const [lang, setLang] =
    useState('en')

  const [division, setDivision] =
    useState('Unknown')

  const [symptoms, setSymptoms] =
    useState('')

  const [loading, setLoading] =
    useState(false)

  const [result, setResult] =
    useState(null)

  const [listening, setListening] =
    useState(false)

  const [selectedDisease, setSelectedDisease] =
    useState('')

  function startVoice() {
    if (
      !(
        'webkitSpeechRecognition' in
          window ||
        'SpeechRecognition' in
          window
      )
    ) {
      alert(
        'Voice input is not supported on this browser. Please use Chrome.'
      )
      return
    }

    const SR =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition

    const recognition = new SR()

    // Always use Bangla recognition — all users are Bangladeshi health workers
    recognition.lang = 'bn-BD'

    // Show text live as the user speaks
    recognition.interimResults = true
    recognition.continuous = false

    setListening(true)

    const base = symptoms  // save existing text to append to

    recognition.onresult = e => {
      let interim = ''
      let final = ''
      for (let i = e.resultIndex; i < e.results.length; i++) {
        if (e.results[i].isFinal) {
          final += e.results[i][0].transcript
        } else {
          interim += e.results[i][0].transcript
        }
      }
      // Show live interim text, replace with final on completion
      setSymptoms(base + (final || interim))
      if (final) setListening(false)
    }

    recognition.onerror = (e) => {
      console.error('Voice error:', e.error)
      setListening(false)
    }

    recognition.onend = () => setListening(false)

    recognition.start()
  }

  async function submitTriage() {
    if (!symptoms.trim()) {
      alert(
        'Please describe symptoms first.'
      )
      return
    }

    setLoading(true)
    setResult(null)

    try {
      const res = await fetch(
        `${API}/triage`,
        {
          method: 'POST',

          headers: {
            'Content-Type':
              'application/json',
          },

          body: JSON.stringify({
            symptoms,
            language: lang,
            division,
            worker_id:
              'shebika_field',
          }),
        }
      )

      const data =
        await res.json()

      setResult(data)

      addToLog({
        time: new Date().toLocaleTimeString(),

        symptoms:
          symptoms.substring(0, 60) +
          '...',

        disease:
          data.disease_detected,

        risk:
          data.risk_level ||
          'UNKNOWN',

        response:
          data.raw_response,
      })
    } catch {
      alert(
        'Connection error. Please check if backend is running.'
      )
    } finally {
      setLoading(false)
    }
  }

  const queuePct = result
    ? Math.min(
        ((result.queue_size || 0) /
          5) *
          100,
        100
      )
    : 0

  const queueColor =
    result?.queue_size >= 5
      ? '#059669'
      : result?.queue_size >= 3
      ? '#D97706'
      : '#0F766E'

  const diseaseConfig =
    result?.disease_detected
      ? DISEASE_FIELDS[
          result.disease_detected
        ]
      : null

  return (
    <div className="triage-wrap">
      <style>{CSS}</style>

      {/* HERO */}

      <div className="hero">
        <div className="hero-top">
          <div>
            <h1 className="hero-title">
              AI Triage Assistant
            </h1>

            <p className="hero-desc">
              Smart multilingual
              patient triage for
              community healthcare
              workers. Capture
              symptoms in Bangla or
              English and receive
              real-time clinical
              recommendations,
              outbreak alerts, and
              AI-assisted guidance.
            </p>
          </div>

          <div className="hero-badge">
            ⚡ Live AI Analysis
          </div>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-value">
              5+
            </div>

            <div className="hero-stat-label">
              Disease Domains
            </div>
          </div>

          <div className="hero-stat">
            <div className="hero-stat-value">
              Bangla + English
            </div>

            <div className="hero-stat-label">
              Voice & Text Support
            </div>
          </div>

          <div className="hero-stat">
            <div className="hero-stat-value">
              Real-time
            </div>

            <div className="hero-stat-label">
              Outbreak Monitoring
            </div>
          </div>
        </div>
      </div>

      {/* FORM CARD */}

      <div className="card">
        {/* CONTEXT */}

        <div className="section">
          <div className="section-title">
            <h3>
              Patient Context
            </h3>

            <div className="section-sub">
              Required before AI
              analysis
            </div>
          </div>

          <div className="grid">
            <div className="field">
              <label className="label">
                Division
              </label>

              <select
                className="select"
                value={division}
                onChange={e =>
                  setDivision(
                    e.target.value
                  )
                }
              >
                <option value="Unknown">
                  {lang === 'bn'
                    ? 'বিভাগ নির্বাচন করুন'
                    : 'Select division'}
                </option>

                {DIVISIONS.map(d => (
                  <option
                    key={d}
                    value={d}
                  >
                    {lang === 'bn'
                      ? DIVISION_BN[
                          d
                        ] || d
                      : d}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label className="label">
                Language / ভাষা
              </label>

              <select
                className="select"
                value={lang}
                onChange={e =>
                  setLang(
                    e.target.value
                  )
                }
              >
                <option value="en">
                  English
                </option>

                <option value="bn">
                  বাংলা
                </option>
              </select>
            </div>
          </div>
        </div>

        {/* QUICK DISEASES */}

        <div className="section">
          <div className="section-title">
            <h3>
              Quick Disease Selection
            </h3>

            <div className="section-sub">
              Tap to autofill context
            </div>
          </div>

          <div className="quick-wrap">
            {QUICK_DISEASES.map(
              d => (
                <button
                  key={d.id}
                  className={`quick-chip ${
                    selectedDisease ===
                    d.id
                      ? 'active'
                      : ''
                  }`}
                  onClick={() => {
                    setSelectedDisease(
                      d.id
                    )

                    if (
                      !symptoms
                    ) {
                      setSymptoms(
                        `${d.label} symptoms`
                      )
                    }
                  }}
                >
                  <div
                    className="quick-icon"
                    style={{
                      background: `${d.color}15`,
                    }}
                  >
                    {d.icon}
                  </div>

                  <div className="quick-text">
                    <span className="quick-name">
                      {lang === 'bn'
                        ? d.bn
                        : d.label}
                    </span>

                    <span className="quick-bn">
                      {lang === 'bn'
                        ? d.label
                        : d.bn}
                    </span>
                  </div>
                </button>
              )
            )}
          </div>
        </div>

        {/* VOICE */}

        <div className="section">
          <div className="section-title">
            <h3>
              Voice Input
            </h3>

            <div className="section-sub">
              Smart speech capture
            </div>
          </div>

          <button
            className={`voice-btn ${
              listening
                ? 'listening'
                : ''
            }`}
            onClick={startVoice}
            disabled={loading}
          >
            <div className="voice-circle">
              🎤
            </div>

            <div>
              <div className="voice-title">
                {listening
                  ? lang ===
                    'bn'
                    ? 'শোনা হচ্ছে...'
                    : 'Listening...'
                  : lang ===
                    'bn'
                  ? 'উপসর্গ বলতে ট্যাপ করুন'
                  : 'Tap to speak symptoms'}
              </div>

              <div className="voice-sub">
                {lang === 'bn'
                  ? 'বাংলা ও ইংরেজি সমর্থিত'
                  : 'Supports Bangla & English'}
              </div>
            </div>
          </button>
        </div>

        {/* SYMPTOMS */}

        <div className="section">
          <div className="section-title">
            <h3>
              Symptom Description
            </h3>

            <div className="section-sub">
              Detailed input improves
              AI accuracy
            </div>
          </div>

          <textarea
            className="textarea"
            value={symptoms}
            onChange={e =>
              setSymptoms(
                e.target.value
              )
            }
            placeholder={
              lang === 'bn'
                ? 'রোগীর উপসর্গ বিস্তারিত লিখুন... যেমন: ৩ দিন জ্বর, শরীর ব্যথা, মাথাব্যথা, কাশি'
                : 'Describe symptoms in detail... e.g. Fever for 3 days, severe headache, cough, body pain'
            }
          />

          <div
            style={{
              marginTop: 10,
              display: 'flex',
              justifyContent:
                'space-between',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontSize: 12,
                color: '#94A3B8',
              }}
            >
              {lang === 'bn'
                ? 'বিস্তারিত তথ্য ভালো ফলাফল দেয়'
                : 'More detail improves recommendations'}
            </span>

            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                color:
                  symptoms.length >
                  180
                    ? '#059669'
                    : '#94A3B8',
              }}
            >
              {symptoms.length}{' '}
              chars
            </span>
          </div>
        </div>

        {/* SUBMIT */}

        <div className="section">
          <div className="submit-row">
            <div className="disclaimer">
              AI-generated guidance
              for preliminary
              community healthcare
              support only. Not a
              replacement for medical
              diagnosis.
            </div>

            <button
              className="submit-btn"
              onClick={submitTriage}
              disabled={
                loading ||
                !symptoms.trim()
              }
            >
              {loading
                ? 'Analysing Symptoms...'
                : 'Get AI Recommendation'}
            </button>
          </div>
        </div>
      </div>

      {/* LOADING */}

      {loading && (
        <div className="loading">
          <div className="loader" />

          <div>
            <div
              style={{
                fontWeight: 800,
                marginBottom: 4,
                color: '#0F172A',
              }}
            >
              AI Analysis Running
            </div>

            <div
              style={{
                color: '#64748B',
                fontSize: 14,
              }}
            >
              Evaluating symptoms,
              outbreak patterns, and
              clinical risk...
            </div>
          </div>
        </div>
      )}

      {/* RESULT */}

      {result && !loading && (
        <div className="result-card">
          <div className="result-head">
            <div>
              <div className="result-title">
                AI Recommendation
                Ready
              </div>

              <div className="result-sub">
                Clinical triage
                summary · AI-powered
                health analysis
              </div>

              <div className="result-tags">
                {diseaseConfig &&
                  result.disease_detected !==
                    'general' && (
                    <div className="tag disease">
                      {
                        diseaseConfig.icon
                      }{' '}
                      {result.disease_detected.toUpperCase()}
                    </div>
                  )}

                {result.report_type ===
                'outbreak' ? (
                  <div className="tag outbreak">
                    🚨 Outbreak
                    Monitoring
                  </div>
                ) : (
                  <div className="tag registry">
                    ✅ Registry Case
                  </div>
                )}
              </div>
            </div>

            <Badge
              level={
                result.risk_level ||
                'UNKNOWN'
              }
            />
          </div>

          <div className="result-body">
            <div className="response">
              {result.raw_response}
            </div>

            {result.report_type ===
              'outbreak' &&
              result.queue_size !=
                null && (
                <div className="queue">
                  <div className="queue-top">
                    <div className="queue-label">
                      AI Retraining
                      Queue
                    </div>

                    <div
                      className="queue-count"
                      style={{
                        color:
                          queueColor,
                      }}
                    >
                      {
                        result.queue_size
                      }{' '}
                      / 5
                    </div>
                  </div>

                  <div className="queue-track">
                    <div
                      className="queue-fill"
                      style={{
                        width: `${queuePct}%`,
                        background:
                          queueColor,
                      }}
                    />
                  </div>

                  <div
                    className="queue-msg"
                    style={{
                      color:
                        queueColor,
                    }}
                  >
                    {5 -
                      result.queue_size >
                    0
                      ? `${
                          5 -
                          result.queue_size
                        } more reports until automatic retraining`
                      : '✓ AI retraining triggered successfully'}
                  </div>
                </div>
              )}
          </div>
        </div>
      )}
    </div>
  )
}