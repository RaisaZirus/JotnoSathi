import {
  useState,
  useEffect,
  useCallback,
} from 'react'

import {
  Activity,
  AlertCircle,
  Brain,
  FileText,
  HeartPulse,
  Loader2,
  Send,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  XCircle,
  MapPin,
  ClipboardList,
  Sparkles,
} from 'lucide-react'

import { motion, AnimatePresence } from 'framer-motion'

import {
  API,
  DIVISIONS,
  DISEASE_FIELDS,
} from '../constants'

import DiseaseFields, {
  parseFieldValue,
} from './DiseaseFields'

/* ─────────────────────────────────────────────────────── */
/* Styles                                                  */
/* ─────────────────────────────────────────────────────── */

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap');

.rt * {
  box-sizing: border-box;
}

.rt {
  font-family: 'Inter', sans-serif;
  background:
    radial-gradient(circle at top left, rgba(26,127,90,.08), transparent 32%),
    radial-gradient(circle at top right, rgba(21,87,176,.08), transparent 28%),
    #F4F7FB;

  min-height: 100vh;

  --bg: #F4F7FB;
  --surface: rgba(255,255,255,.92);
  --surface2: #FFFFFF;
  --border: #E3E8F2;
  --border2: #D1D9E8;

  --t1: #0F172A;
  --t2: #475569;
  --t3: #94A3B8;

  --accent: #1557B0;
  --accent-soft: #EAF2FF;
  --forest: #1A7F5A;
  --forest-soft: #ECFDF5;

  --danger: #C62828;
  --warn: #D97706;
  --ok: #15803D;

  --shadow:
    0 1px 2px rgba(15,23,42,.03),
    0 10px 30px rgba(15,23,42,.05);

  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 24px;
}

/* ───────────────────────────── */
/* Wrapper                       */
/* ───────────────────────────── */

.rt-wrap {
  width: 100%;
  max-width: 860px;
  margin: 0 auto;
  padding: 28px 18px 60px;
}

@media (min-width: 640px) {
  .rt-wrap {
    padding: 38px 24px 80px;
  }
}

/* ───────────────────────────── */
/* Header                        */
/* ───────────────────────────── */

.rt-header {
  margin-bottom: 24px;
}

.rt-page-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 7px;

  padding: 7px 12px;

  border-radius: 999px;
  border: 1px solid #D9E5FF;

  background: rgba(255,255,255,.9);
  color: var(--accent);

  font-size: 11px;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;

  backdrop-filter: blur(10px);

  margin-bottom: 16px;
}

.rt-page-title {
  font-size: 30px;
  font-weight: 800;
  letter-spacing: -.04em;
  color: var(--t1);
  margin: 0 0 10px;
  line-height: 1.1;
}

@media (max-width: 640px) {
  .rt-page-title {
    font-size: 25px;
  }
}

.rt-page-sub {
  font-size: 14px;
  line-height: 1.8;
  color: var(--t2);
  max-width: 680px;
  margin: 0;
}

/* ───────────────────────────── */
/* Vertical layout               */
/* ───────────────────────────── */

.rt-stack {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

/* ───────────────────────────── */
/* Card                          */
/* ───────────────────────────── */

.rt-card {
  background: var(--surface);
  border: 1px solid rgba(255,255,255,.7);
  border-radius: var(--radius-lg);
  overflow: hidden;

  backdrop-filter: blur(16px);

  box-shadow: var(--shadow);
}

.rt-card-head {
  display: flex;
  align-items: center;
  gap: 14px;

  padding: 22px 24px 18px;

  border-bottom: 1px solid var(--border);
}

.rt-card-icon {
  width: 46px;
  height: 46px;

  border-radius: 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;
}

.rt-card-body {
  padding: 24px;
}

@media (max-width: 640px) {
  .rt-card-head,
  .rt-card-body {
    padding: 18px;
  }
}

/* ───────────────────────────── */
/* Form                          */
/* ───────────────────────────── */

.rt-form {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.rt-field-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.rt-label {
  display: flex;
  align-items: center;
  gap: 7px;

  font-size: 11px;
  font-weight: 800;
  letter-spacing: .1em;
  text-transform: uppercase;

  color: var(--t3);
}

.rt-input,
.rt-textarea {
  width: 100%;
  border: 1.5px solid var(--border);

  background: #F8FAFD;
  color: var(--t1);

  font-family: inherit;
  outline: none;

  transition:
    border-color .18s ease,
    box-shadow .18s ease,
    background .18s ease;
}

.rt-input {
  height: 52px;
  padding: 0 16px;
  border-radius: var(--radius-md);

  font-size: 14px;
  font-weight: 600;

  appearance: none;
}

.rt-textarea {
  min-height: 120px;
  resize: vertical;

  padding: 14px 16px;
  border-radius: 18px;

  font-size: 14px;
  line-height: 1.7;
}

.rt-input:focus,
.rt-textarea:focus {
  background: #fff;
  border-color: rgba(21,87,176,.5);

  box-shadow: 0 0 0 4px rgba(21,87,176,.08);
}

.rt-input::placeholder,
.rt-textarea::placeholder {
  color: var(--t3);
}

select.rt-input {
  padding-right: 42px;

  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2394A3B8' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");

  background-repeat: no-repeat;
  background-position: right 16px center;
}

/* ───────────────────────────── */
/* Quick Select                  */
/* ───────────────────────────── */

.rt-section-title {
  display: flex;
  align-items: center;
  gap: 7px;

  font-size: 11px;
  font-weight: 800;
  letter-spacing: .1em;
  text-transform: uppercase;

  color: var(--t3);

  margin-bottom: 12px;
}

.rt-quick-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.rt-quick-btn {
  width: 100%;

  display: flex;
  align-items: center;
  gap: 14px;

  padding: 15px;

  border-radius: 18px;
  border: 1.5px solid var(--border);

  background: #fff;

  cursor: pointer;
  text-align: left;

  transition:
    transform .18s ease,
    border-color .18s ease,
    background .18s ease,
    box-shadow .18s ease;
}

.rt-quick-btn:hover {
  transform: translateY(-1px);

  border-color: #C7D6F8;

  box-shadow:
    0 6px 20px rgba(15,23,42,.05);
}

.rt-quick-btn.active {
  border-color: rgba(21,87,176,.45);

  background: linear-gradient(
    180deg,
    #FFFFFF 0%,
    #F4F8FF 100%
  );

  box-shadow:
    0 0 0 4px rgba(21,87,176,.06);
}

.rt-pill-icon {
  width: 48px;
  height: 48px;

  border-radius: 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;

  background: #F3F6FB;

  flex-shrink: 0;
}

/* ───────────────────────────── */
/* Divider                       */
/* ───────────────────────────── */

.rt-divider {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--border),
    transparent
  );
}

/* ───────────────────────────── */
/* Notice                        */
/* ───────────────────────────── */

.rt-notice {
  display: flex;
  align-items: flex-start;
  gap: 12px;

  padding: 16px;

  border-radius: 18px;
  border: 1px solid;

  font-size: 13px;
  line-height: 1.7;
}

/* ───────────────────────────── */
/* Button                        */
/* ───────────────────────────── */

.rt-btn {
  width: 100%;
  height: 54px;

  border: none;
  border-radius: 18px;

  background:
    linear-gradient(
      135deg,
      #1557B0,
      #1A7F5A
    );

  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  font-family: inherit;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: .01em;

  cursor: pointer;

  transition:
    transform .16s ease,
    opacity .16s ease,
    box-shadow .18s ease;

  box-shadow:
    0 10px 25px rgba(21,87,176,.20);
}

.rt-btn:hover:not(:disabled) {
  transform: translateY(-1px);

  box-shadow:
    0 14px 28px rgba(21,87,176,.24);
}

.rt-btn:disabled {
  opacity: .7;
  cursor: not-allowed;
}

/* ───────────────────────────── */
/* Status                        */
/* ───────────────────────────── */

.rt-status {
  display: flex;
  align-items: flex-start;
  gap: 10px;

  margin-top: 14px;

  padding: 14px 16px;

  border-radius: 16px;
  border: 1px solid;

  font-size: 13px;
  font-weight: 600;
  line-height: 1.6;
}

/* ───────────────────────────── */
/* Queue / Registry              */
/* ───────────────────────────── */

.rt-vertical-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.rt-qbar,
.rt-reg-row {
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 16px;

  border-radius: 18px;

  border: 1px solid var(--border);

  background:
    linear-gradient(
      180deg,
      #FFFFFF 0%,
      #FAFBFD 100%
    );
}

.rt-qbar-top,
.rt-reg-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.rt-progress {
  width: 100%;
  height: 7px;

  border-radius: 999px;
  overflow: hidden;

  background: #E9EEF5;
}

.rt-stat {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 5px 10px;

  border-radius: 999px;

  background: #EAF2FF;
  color: var(--accent);

  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 700;

  white-space: nowrap;
}

/* ───────────────────────────── */
/* Promo                         */
/* ───────────────────────────── */

.rt-promo {
  position: relative;
  overflow: hidden;

  padding: 24px;

  border-radius: 24px;

  background:
    linear-gradient(
      135deg,
      #1557B0,
      #1A7F5A
    );

  color: white;

  box-shadow:
    0 18px 35px rgba(21,87,176,.18);
}

.rt-promo::before {
  content: '';

  position: absolute;
  top: -50px;
  right: -50px;

  width: 140px;
  height: 140px;

  border-radius: 50%;

  background: rgba(255,255,255,.07);
}

.rt-promo::after {
  content: '';

  position: absolute;
  bottom: -40px;
  left: -40px;

  width: 110px;
  height: 110px;

  border-radius: 50%;

  background: rgba(255,255,255,.06);
}

.rt-promo-icon {
  position: relative;
  z-index: 1;

  width: 50px;
  height: 50px;

  border-radius: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(255,255,255,.14);

  margin-bottom: 16px;
}

/* ───────────────────────────── */
/* Helpers                       */
/* ───────────────────────────── */

.rt-loading {
  display: flex;
  align-items: center;
  gap: 8px;

  color: var(--t3);

  font-size: 13px;
}

.rt-muted {
  color: var(--t3);
}

.rt-hint {
  padding: 13px 14px;

  border-radius: 14px;

  background: #F8FAFD;
  border: 1px solid var(--border);

  font-size: 12px;
  line-height: 1.7;
  color: var(--t2);
}
`

/* ─────────────────────────────────────────────────────── */
/* Quick picks                                            */
/* ─────────────────────────────────────────────────────── */

const QUICK_DISEASES = [
  { id: 'dengue', label: 'Dengue', icon: '🦟' },
  { id: 'measles', label: 'Measles', icon: '🧒' },
  { id: 'maternal', label: 'Maternal / ANC', icon: '🤱' },
  { id: 'diabetes', label: 'Diabetes', icon: '🩸' },
  { id: 'bp', label: 'Hypertension', icon: '💓' },
]

/* ─────────────────────────────────────────────────────── */
/* Queue Bar                                               */
/* ─────────────────────────────────────────────────────── */

function QueueBar({ label, count, threshold }) {
  const pct = Math.min((count / threshold) * 100, 100)
  const done = count >= threshold

  return (
    <div className="rt-qbar">
      <div className="rt-qbar-top">
        <div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: 'var(--t1)',
              marginBottom: 4,
            }}
          >
            {label}
          </div>

          <div
            style={{
              fontSize: 12,
              color: 'var(--t3)',
            }}
          >
            {done
              ? 'Eligible for AI retraining'
              : `${threshold - count} reports remaining`}
          </div>
        </div>

        <span className="rt-stat">
          {count}/{threshold}
        </span>
      </div>

      <div className="rt-progress">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.7 }}
          style={{
            height: '100%',
            borderRadius: 999,
            background: done
              ? 'linear-gradient(90deg,#22C55E,#16A34A)'
              : 'linear-gradient(90deg,#1557B0,#1A7F5A)',
          }}
        />
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────── */
/* Section Card                                            */
/* ─────────────────────────────────────────────────────── */

const ACCENT = {
  blue: {
    bg: '#1557B0',
    soft: '#EAF2FF',
  },
  teal: {
    bg: '#1A7F5A',
    soft: '#ECFDF5',
  },
  violet: {
    bg: '#6B46C1',
    soft: '#F3EEFF',
  },
}

function SectionCard({
  title,
  subtitle,
  icon,
  accent = 'blue',
  children,
}) {
  const c = ACCENT[accent]

  return (
    <motion.div
      className="rt-card"
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.24 }}
    >
      <div className="rt-card-head">
        <div
          className="rt-card-icon"
          style={{
            background: c.soft,
            color: c.bg,
          }}
        >
          {icon}
        </div>

        <div>
          <h2
            style={{
              margin: 0,
              fontSize: 16,
              fontWeight: 800,
              color: 'var(--t1)',
              letterSpacing: '-.02em',
            }}
          >
            {title}
          </h2>

          <p
            style={{
              margin: '5px 0 0',
              fontSize: 12.5,
              lineHeight: 1.5,
              color: 'var(--t3)',
            }}
          >
            {subtitle}
          </p>
        </div>
      </div>

      <div className="rt-card-body">
        {children}
      </div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────────────── */
/* Field                                                   */
/* ─────────────────────────────────────────────────────── */

function Field({
  label,
  icon,
  children,
}) {
  return (
    <div className="rt-field-group">
      <label className="rt-label">
        {icon}
        {label}
      </label>

      {children}
    </div>
  )
}

/* ─────────────────────────────────────────────────────── */
/* Main                                                    */
/* ─────────────────────────────────────────────────────── */

export default function ReportsTab() {
  const [division, setDivision] = useState('')
  const [disease, setDisease] = useState('')
  const [outcome, setOutcome] = useState('monitoring')
  const [notes, setNotes] = useState('')
  const [fieldVals, setFieldVals] = useState({})

  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState(null)

  const [queueData, setQueueData] = useState(null)
  const [registry, setRegistry] = useState(null)

  const loadQueue = useCallback(async () => {
    try {
      const r = await fetch(`${API}/queue-status`)
      setQueueData(await r.json())
    } catch {}
  }, [])

  const loadRegistry = useCallback(async () => {
    try {
      const r = await fetch(`${API}/case-registry`)
      const d = await r.json()
      setRegistry(d.registry)
    } catch {}
  }, [])

  useEffect(() => {
    loadQueue()
    loadRegistry()
  }, [loadQueue, loadRegistry])

  function handleDiseaseChange(val) {
    setDisease(val)
    setFieldVals({})
    setStatus(null)
  }

  const def = DISEASE_FIELDS[disease]

  async function submit() {
    if (!division) {
      return alert('Please select a division.')
    }

    if (!disease) {
      return alert('Please select a disease.')
    }

    setSubmitting(true)
    setStatus(null)

    const payload = {
      division,
      symptoms: notes || 'Manual field observation',
      outcome,
      disease_suspected: disease,
      worker_id:
        'shebika_' +
        Math.random().toString(36).substr(2, 6),
    }

    if (def) {
      def.fields.forEach(f => {
        const v = parseFieldValue(
          f,
          fieldVals[f.id]
        )

        if (v !== null) {
          payload[f.id] = v
        }
      })
    }

    try {
      const res = await fetch(`${API}/field-report`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (data.report_type === 'outbreak') {
        const qs = data.queue_size || 0

        setStatus({
          ok: true,
          msg: data.retrain_triggered
            ? `AI retraining triggered for ${division}.`
            : `Queue progress: ${qs}/5`,
        })
      } else {
        setStatus({
          ok: true,
          msg: 'Case added successfully.',
        })
      }

      loadQueue()
      loadRegistry()
    } catch {
      setStatus({
        ok: false,
        msg: 'Submission failed. Please try again.',
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="rt">
      <style>{STYLES}</style>

      <div className="rt-wrap">

        {/* Header */}

        <header className="rt-header">
          <div className="rt-page-eyebrow">
            <ShieldCheck size={12} />
            Community Health Intelligence
          </div>

          <h1 className="rt-page-title">
            Field Reports Dashboard
          </h1>

          <p className="rt-page-sub">
            Submit disease observations, outbreak
            reports, and community health records for
            AI-assisted surveillance and real-time
            public health monitoring.
          </p>
        </header>

        {/* Fully Vertical Layout */}

        <div className="rt-stack">

          {/* Main Form */}

          <SectionCard
            title="Manual Health Report"
            subtitle="Create and submit a structured field observation"
            icon={<HeartPulse size={18} />}
            accent="blue"
          >
            <div className="rt-form">

              <Field
                label="Division"
                icon={<MapPin size={12} />}
              >
                <select
                  className="rt-input"
                  value={division}
                  onChange={e =>
                    setDivision(e.target.value)
                  }
                >
                  <option value="">
                    Select division
                  </option>

                  {DIVISIONS.map(d => (
                    <option
                      key={d}
                      value={d}
                    >
                      {d}
                    </option>
                  ))}
                </select>
              </Field>

              <Field
                label="Disease Domain"
                icon={<ClipboardList size={12} />}
              >
                <select
                  className="rt-input"
                  value={disease}
                  onChange={e =>
                    handleDiseaseChange(
                      e.target.value
                    )
                  }
                >
                  <option value="">
                    Select disease
                  </option>

                  <option value="dengue">
                    Dengue
                  </option>

                  <option value="measles">
                    Measles
                  </option>

                  <option value="maternal">
                    Maternal / ANC
                  </option>

                  <option value="diabetes">
                    Diabetes
                  </option>

                  <option value="bp">
                    Hypertension
                  </option>
                </select>
              </Field>

              {/* Quick Select */}

              <div>
                <div className="rt-section-title">
                  <Sparkles
                    size={11}
                    color="#1557B0"
                  />
                  Quick Select
                </div>

                <div className="rt-quick-grid">
                  {QUICK_DISEASES.map(item => (
                    <button
                      key={item.id}
                      type="button"
                      className={`rt-quick-btn${
                        disease === item.id
                          ? ' active'
                          : ''
                      }`}
                      onClick={() =>
                        handleDiseaseChange(item.id)
                      }
                    >
                      <div className="rt-pill-icon">
                        {item.icon}
                      </div>

                      <div>
                        <div
                          style={{
                            fontSize: 14,
                            fontWeight: 700,
                            color: 'var(--t1)',
                            marginBottom: 4,
                          }}
                        >
                          {item.label}
                        </div>

                        <div
                          style={{
                            fontSize: 12,
                            color: 'var(--t3)',
                          }}
                        >
                          Tap to select
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="rt-divider" />

              {/* Disease Notice */}

              <AnimatePresence>
                {def && (
                  <motion.div
                    key={disease}
                    initial={{
                      opacity: 0,
                      y: 4,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    className="rt-notice"
                    style={
                      def.report_type ===
                      'outbreak'
                        ? {
                            background:
                              '#FFF7ED',
                            borderColor:
                              '#FCD34D',
                            color:
                              'var(--warn)',
                          }
                        : {
                            background:
                              '#EFF6FF',
                            borderColor:
                              '#BFDBFE',
                            color:
                              'var(--accent)',
                          }
                    }
                  >
                    <AlertCircle
                      size={16}
                      style={{
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    />

                    <div>
                      <div
                        style={{
                          fontWeight: 700,
                          marginBottom: 6,
                        }}
                      >
                        {def.icon}{' '}
                        {def.report_type ===
                        'outbreak'
                          ? 'Outbreak Monitoring'
                          : 'Registry Tracking'}
                      </div>

                      <div
                        style={{
                          opacity: .9,
                        }}
                      >
                        {def.report_type ===
                        'outbreak'
                          ? 'This report contributes to outbreak surveillance and automatic AI retraining workflows.'
                          : 'This report contributes to long-term chronic disease registry analytics.'}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Disease Fields */}

              <AnimatePresence>
                {def && (
                  <motion.div
                    key={`f-${disease}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                      background: '#F8FAFD',
                      border:
                        '1px solid var(--border)',
                      borderRadius: 20,
                      padding: 18,
                    }}
                  >
                    <DiseaseFields
                      disease={disease}
                      values={fieldVals}
                      onChange={(id, val) =>
                        setFieldVals(prev => ({
                          ...prev,
                          [id]: val,
                        }))
                      }
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <Field
                label="Patient Outcome"
                icon={<Activity size={12} />}
              >
                <select
                  className="rt-input"
                  value={outcome}
                  onChange={e =>
                    setOutcome(e.target.value)
                  }
                >
                  <option value="monitoring">
                    Monitoring at home
                  </option>

                  <option value="treated">
                    Treated on site
                  </option>

                  <option value="referred">
                    Referred to facility
                  </option>
                </select>
              </Field>

              <Field
                label="Additional Notes"
                icon={<FileText size={12} />}
              >
                <textarea
                  className="rt-textarea"
                  rows={5}
                  value={notes}
                  onChange={e =>
                    setNotes(e.target.value)
                  }
                  placeholder="Symptoms, field observations, patient condition, or additional clinical context…"
                />

                <div
                  style={{
                    marginTop: 8,
                    textAlign: 'right',
                    fontSize: 12,
                    color: 'var(--t3)',
                  }}
                >
                  {notes.length} characters
                </div>
              </Field>

              {/* Submit */}

              <div>
                <button
                  className="rt-btn"
                  onClick={submit}
                  disabled={submitting}
                >
                  {submitting ? (
                    <>
                      <Loader2
                        size={16}
                        className="animate-spin"
                      />
                      Submitting…
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Submit Field Report
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {status && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: -3,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                      }}
                      className="rt-status"
                      style={
                        status.ok
                          ? {
                              background:
                                '#ECFDF5',
                              borderColor:
                                '#86EFAC',
                              color:
                                'var(--ok)',
                            }
                          : {
                              background:
                                '#FEF2F2',
                              borderColor:
                                '#FCA5A5',
                              color:
                                'var(--danger)',
                            }
                      }
                    >
                      {status.ok ? (
                        <CheckCircle2
                          size={15}
                          style={{
                            flexShrink: 0,
                            marginTop: 1,
                          }}
                        />
                      ) : (
                        <XCircle
                          size={15}
                          style={{
                            flexShrink: 0,
                            marginTop: 1,
                          }}
                        />
                      )}

                      {status.msg}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </SectionCard>

          {/* Queue */}

          <SectionCard
            title="Outbreak Queue"
            subtitle="AI retraining progress by disease"
            icon={<Brain size={18} />}
            accent="violet"
          >
            {queueData ? (
              <div className="rt-vertical-list">
                {['dengue', 'measles'].map(d => {
                  const q = queueData[d] || {
                    count: 0,
                    threshold: 5,
                  }

                  return (
                    <QueueBar
                      key={d}
                      label={
                        d.charAt(0).toUpperCase() +
                        d.slice(1)
                      }
                      count={q.count}
                      threshold={q.threshold}
                    />
                  )
                })}

                <div className="rt-hint">
                  AI retraining activates automatically
                  once outbreak thresholds are reached.
                </div>
              </div>
            ) : (
              <div className="rt-loading">
                <Loader2
                  size={14}
                  className="animate-spin"
                />
                Loading queue…
              </div>
            )}
          </SectionCard>

          {/* Registry */}

          <SectionCard
            title="District Registry"
            subtitle="Chronic disease case tracking"
            icon={<TrendingUp size={18} />}
            accent="teal"
          >
            {!registry ? (
              <div className="rt-loading">
                <Loader2
                  size={14}
                  className="animate-spin"
                />
                Loading registry…
              </div>
            ) : (
              <div className="rt-vertical-list">
                {Object.entries(registry).map(
                  ([key, d]) => (
                    <div
                      key={key}
                      className="rt-reg-row"
                    >
                      <div className="rt-reg-top">
                        <div
                          style={{
                            display: 'flex',
                            gap: 12,
                            alignItems:
                              'center',
                          }}
                        >
                          <div
                            style={{
                              width: 42,
                              height: 42,
                              borderRadius: 14,
                              background:
                                '#EFF6FF',
                              display: 'flex',
                              alignItems:
                                'center',
                              justifyContent:
                                'center',
                              color:
                                'var(--accent)',
                              flexShrink: 0,
                            }}
                          >
                            <FileText
                              size={16}
                            />
                          </div>

                          <div>
                            <div
                              style={{
                                fontSize: 13,
                                fontWeight: 800,
                                color:
                                  'var(--t1)',
                                letterSpacing:
                                  '-.01em',
                              }}
                            >
                              {d.disease.toUpperCase()}
                            </div>

                            <div
                              style={{
                                fontSize: 12,
                                color:
                                  'var(--t3)',
                                marginTop: 3,
                              }}
                            >
                              {d.division}
                            </div>
                          </div>
                        </div>

                        <span className="rt-stat">
                          {d.case_count} cases
                        </span>
                      </div>
                    </div>
                  )
                )}
              </div>
            )}
          </SectionCard>

          {/* Promo */}

          <div className="rt-promo">
            <div className="rt-promo-icon">
              <Brain size={20} />
            </div>

            <h3
              style={{
                position: 'relative',
                zIndex: 1,
                fontSize: 20,
                fontWeight: 800,
                margin: '0 0 10px',
                letterSpacing: '-.03em',
              }}
            >
              AI Health Monitoring
            </h3>

            <p
              style={{
                position: 'relative',
                zIndex: 1,
                fontSize: 14,
                lineHeight: 1.8,
                margin: 0,
                color: 'rgba(255,255,255,.86)',
              }}
            >
              Real-time disease surveillance helps
              identify outbreaks faster and
              strengthens healthcare response across
              communities.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}