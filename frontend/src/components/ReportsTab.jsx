import { useState, useEffect, useCallback } from 'react'
import { API, DIVISIONS, DISEASE_FIELDS } from '../constants'
import DiseaseFields, { parseFieldValue } from './DiseaseFields'

function QueueBar({ label, count, threshold }) {
  const pct   = Math.min((count / threshold) * 100, 100)
  const color = count >= threshold ? '#2e7d32' : count >= 3 ? '#e65100' : '#9e9e9e'
  return (
    <div className="mb-3 last:mb-0">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-xs font-semibold text-gray-600">{label}</span>
        <span className="text-xs font-mono font-semibold" style={{ color }}>{count}/{threshold}</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full rounded-full transition-all duration-500" style={{ width: `${pct}%`, background: color }} />
      </div>
      {count >= threshold && (
        <p className="text-xs text-green-700 mt-1">✅ Ready to retrain</p>
      )}
    </div>
  )
}

export default function ReportsTab() {
  const [division, setDivision]     = useState('')
  const [disease, setDisease]       = useState('')
  const [outcome, setOutcome]       = useState('monitoring')
  const [notes, setNotes]           = useState('')
  const [fieldVals, setFieldVals]   = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus]         = useState(null)   // { ok: bool, msg: string }
  const [queueData, setQueueData]   = useState(null)
  const [registry, setRegistry]     = useState(null)

  const loadQueueStatus = useCallback(async () => {
    try {
      const res  = await fetch(`${API}/queue-status`)
      const data = await res.json()
      setQueueData(data)
    } catch {}
  }, [])

  const loadRegistryStatus = useCallback(async () => {
    try {
      const res  = await fetch(`${API}/case-registry`)
      const data = await res.json()
      setRegistry(data.registry)
    } catch {}
  }, [])

  useEffect(() => {
    loadQueueStatus()
    loadRegistryStatus()
  }, [])

  function handleDiseaseChange(val) {
    setDisease(val)
    setFieldVals({})
    setStatus(null)
  }

  const def = DISEASE_FIELDS[disease]

  async function submitManualReport() {
    if (!division) { alert('Please select a division.'); return }
    if (!disease)  { alert('Please select a disease.'); return }
    setSubmitting(true)
    setStatus(null)

    const payload = {
      division,
      symptoms: notes || 'Manual field observation',
      outcome,
      disease_suspected: disease,
      worker_id: 'shebika_' + Math.random().toString(36).substr(2, 6),
    }
    if (def) {
      def.fields.forEach(f => {
        const val = parseFieldValue(f, fieldVals[f.id])
        if (val !== null) payload[f.id] = val
      })
    }

    try {
      const res  = await fetch(`${API}/field-report`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(payload),
      })
      const data = await res.json()

      if (data.report_type === 'outbreak') {
        const qs = data.queue_size || 0
        setStatus({
          ok:  true,
          msg: data.retrain_triggered
            ? `✅ Submitted + Model retrained! ${division}: ${data.score_before} → ${data.score_after} (+${data.score_delta})`
            : `✅ Submitted. Queue: ${qs}/5. Need ${5 - qs} more to trigger retrain.`,
        })
      } else {
        setStatus({ ok: true, msg: `✅ Case logged. ${disease} cases in ${division}: ${data.case_count}` })
      }

      loadQueueStatus()
      loadRegistryStatus()
    } catch {
      setStatus({ ok: false, msg: '⚠️ Submission failed. Check connection.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="page-body space-y-4 animate-fadeIn">
      <div>
        <h2 className="page-title">Field Reports</h2>
        <p className="page-subtitle">Submit manual case observations not captured through triage</p>
      </div>
      {/* Manual field report form */}
      <div className="card">
        <div className="mb-4">
          <h3 className="font-semibold text-gray-800 text-sm">Manual Field Report</h3>
          <p className="text-xs text-gray-400 mt-0.5">For cases not captured through triage</p>
        </div>

        <label className="form-label">Division</label>
        <select className="form-input mb-3" value={division} onChange={e => setDivision(e.target.value)}>
          <option value="">Select division...</option>
          {DIVISIONS.map(d => <option key={d}>{d}</option>)}
        </select>

        <label className="form-label">Disease Domain</label>
        <select className="form-input mb-3" value={disease} onChange={e => handleDiseaseChange(e.target.value)}>
          <option value="">Select disease...</option>
          <option value="dengue">🦟 Dengue</option>
          <option value="measles">🔴 Measles (Active Outbreak 2026)</option>
          <option value="maternal">🤰 Maternal / ANC</option>
          <option value="diabetes">🩸 Diabetes</option>
          <option value="bp">💊 Blood Pressure / Hypertension</option>
        </select>

        {def && (
          <div className="animate-slideDown space-y-3">
            {/* Report type banner */}
            <div className={`rounded-xl p-3 text-xs font-medium border-l-4
              ${def.report_type === 'outbreak'
                ? 'bg-orange-50 border-orange-500 text-orange-800'
                : 'bg-blue-50 border-blue-500 text-blue-800'}`}
            >
              <strong>{def.icon} {def.report_type === 'outbreak' ? 'Outbreak disease' : 'Registry disease'}</strong>
              {' — '}
              {def.report_type === 'outbreak'
                ? 'This report feeds the division risk map. 5 reports trigger a model refit.'
                : 'This report adds to the district case registry for caseload tracking.'}
            </div>

            {/* Disease-specific fields */}
            <DiseaseFields
              disease={disease}
              values={fieldVals}
              onChange={(id, val) => setFieldVals(prev => ({ ...prev, [id]: val }))}
            />

            {/* Common fields */}
            <div>
              <label className="form-label">Outcome</label>
              <select className="form-input" value={outcome} onChange={e => setOutcome(e.target.value)}>
                <option value="monitoring">Monitoring at home</option>
                <option value="treated">Treated on site</option>
                <option value="referred">Referred to facility</option>
              </select>
            </div>

            <div>
              <label className="form-label">Additional notes (optional)</label>
              <textarea
                className="form-input resize-y"
                style={{ height: 72 }}
                placeholder="Any other observations..."
                value={notes}
                onChange={e => setNotes(e.target.value)}
              />
            </div>

            <button className="btn-primary" onClick={submitManualReport} disabled={submitting}>
              {submitting ? '⏳ Submitting...' : '📤 Submit Field Report'}
            </button>

            {status && (
              <div className={`rounded-xl p-3 text-xs font-medium animate-fadeIn
                ${status.ok ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                {status.msg}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Queue status */}
      <div className="card">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1.5 h-1.5 bg-forest-500 rounded-full animate-pulse" />
          <h4 className="text-sm font-semibold text-gray-700">Outbreak Queue Status</h4>
        </div>
        {queueData
          ? ['dengue', 'measles'].map(d => {
              const q = queueData[d] || { count: 0, threshold: 5 }
              return <QueueBar key={d} label={d.charAt(0).toUpperCase() + d.slice(1)} count={q.count} threshold={q.threshold} />
            })
          : <p className="text-xs text-gray-400">Loading...</p>
        }
        <p className="text-xs text-gray-400 mt-2">Dengue and measles reports build toward model retrain at N=5</p>
      </div>

      {/* Registry status */}
      <div className="card">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">📊 Case Registry (NCD + Maternal)</h4>
        {registry === null && <p className="text-xs text-gray-400">Loading...</p>}
        {registry && !Object.keys(registry).length && (
          <p className="text-xs text-gray-400">No cases logged yet.</p>
        )}
        {registry && Object.entries(registry).map(([key, d]) => (
          <div key={key} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0 text-sm">
            <span className="text-gray-700">
              <strong className="text-gray-800">{d.disease.toUpperCase()}</strong>
              <span className="text-gray-400 font-normal"> — {d.division}</span>
            </span>
            <span className="bg-forest-100 text-forest-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              {d.case_count} cases
            </span>
          </div>
        ))}
        <p className="text-xs text-gray-400 mt-2">Diabetes, BP, and maternal cases build district caseload data</p>
      </div>
    </div>
  )
}
