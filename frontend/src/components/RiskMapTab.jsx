import { useState, useEffect, useRef, useCallback } from 'react'
import { API, DISEASE_FIELDS, LEVEL_COLORS } from '../constants'
import Badge from './Badge'
import { parseFieldValue } from './DiseaseFields'

function countUp(setter, from, to, duration = 800) {
  const start = performance.now()
  const diff  = to - from
  function step(now) {
    const progress = Math.min((now - start) / duration, 1)
    const eased    = 1 - Math.pow(1 - progress, 3)
    setter(parseFloat((from + diff * eased).toFixed(1)))
    if (progress < 1) requestAnimationFrame(step)
    else setter(parseFloat(to.toFixed(1)))
  }
  requestAnimationFrame(step)
}

// ─── Division row ────────────────────────────────────────────────
function DivisionRow({ name, data, selected, onClick }) {
  const [barW, setBarW]         = useState(0)
  const [displayScore, setDisplayScore] = useState(data.score)
  const color = LEVEL_COLORS[data.risk_level] || '#888'

  useEffect(() => { setTimeout(() => setBarW(data.score), 100) }, [data.score])
  useEffect(() => { setDisplayScore(data.score) }, [data.score])

  return (
    <div
      className={`relative bg-white rounded-xl cursor-pointer transition-all duration-200 overflow-hidden
        border-2 shadow-sm hover:shadow-md hover:translate-x-1
        ${selected ? 'border-forest-500 shadow-hover' : 'border-transparent'}`}
      onClick={onClick}
    >
      {/* Left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl" style={{ background: color }} />
      <div className="pl-4 pr-3.5 py-3">
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold text-sm text-gray-800">{name}</span>
          <div className="flex items-center gap-2">
            <Badge level={data.risk_level} />
            <span className="font-mono text-sm font-semibold" style={{ color }}>{displayScore}</span>
          </div>
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-1.5">
          <div
            className="h-full rounded-full transition-all duration-700 ease-out"
            style={{ width: `${barW}%`, background: color }}
          />
        </div>
        {data.top_factors?.[0] && (
          <p className="text-xs text-gray-400 truncate">{data.top_factors[0]}</p>
        )}
      </div>
    </div>
  )
}

// ─── Detail panel ────────────────────────────────────────────────
function DetailPanel({ division, data, onClose }) {
  const [briefing, setBriefing]     = useState('Loading briefing...')
  const [barW, setBarW]             = useState(0)
  const [frDisease, setFrDisease]   = useState('')
  const [frOutcome, setFrOutcome]   = useState('monitoring')
  const [frFields, setFrFields]     = useState({})
  const [frStatus, setFrStatus]     = useState(null)
  const color = LEVEL_COLORS[data.risk_level] || '#888'

  useEffect(() => {
    setBarW(0)
    setBriefing('Loading briefing...')
    setTimeout(() => setBarW(data.score), 80)
    fetch(`${API}/risk/${division}`)
      .then(r => r.json())
      .then(d => setBriefing(d.worker_briefing || ''))
      .catch(() => setBriefing((data.top_factors || []).join('\n• ')))
  }, [division])

  const frDef = DISEASE_FIELDS[frDisease]

  async function submitFieldReport() {
    if (!frDisease) { alert('Please select a suspected disease.'); return }
    setFrStatus({ msg: '⏳ Submitting...', ok: null })
    const payload = {
      division,
      symptoms: 'Field observation',
      outcome: frOutcome,
      disease_suspected: frDisease,
      worker_id: 'shebika_' + Math.random().toString(36).substr(2, 6),
    }
    if (frDef) {
      frDef.fields.slice(0, 2).forEach(f => {
        const val = parseFieldValue(f, frFields[f.id])
        if (val !== null) payload[f.id] = val
      })
    }
    try {
      const res  = await fetch(`${API}/field-report`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const d = await res.json()
      const delta = d.score_delta || 0
      const dStr  = delta > 0 ? `+${delta}` : `${delta}`
      let msg
      if (d.report_type === 'outbreak') {
        msg = d.retrain_triggered
          ? `✅ Model retrained! ${division}: ${d.score_before} → ${d.score_after} (${dStr})`
          : `✅ Submitted. Queue: ${d.queue_size}/5`
      } else {
        msg = `✅ Case logged. Registry: ${d.case_count} ${frDisease} cases in ${division}`
      }
      setFrStatus({ ok: true, msg })
    } catch {
      setFrStatus({ ok: false, msg: '⚠️ Could not submit. Check connection.' })
    }
  }

  return (
    <div className="card animate-slideDown border-t-4" style={{ borderTopColor: color }}>
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-base font-semibold text-gray-800">{division} Division</h3>
          <p className="text-xs text-gray-400 mt-0.5">{data.district_count} districts · {data.risk_level} risk</p>
        </div>
        <div className="text-right">
          <div className="font-mono text-3xl font-medium leading-none" style={{ color }}>{data.score}</div>
          <div className="text-xs text-gray-400">/100</div>
          <Badge level={data.risk_level} className="mt-1.5" />
        </div>
      </div>

      <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-3">
        <div className="h-full rounded-full transition-all duration-700 ease-out" style={{ width: `${barW}%`, background: color }} />
      </div>

      {/* Per-disease mini scores */}
      {data.per_disease_scores && Object.keys(data.per_disease_scores).length > 0 && (
        <div className="grid grid-cols-2 gap-2 mb-3">
          {Object.entries(data.per_disease_scores).map(([d, pd]) => {
            const dc = DISEASE_FIELDS[d]
            return (
              <div key={d} className="bg-gray-50 rounded-xl p-2.5">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs font-semibold text-gray-600">{dc?.icon} {d.toUpperCase()}</span>
                  <span className="text-xs font-mono text-gray-400">{pd.score}</span>
                </div>
                <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-700" style={{ width: `${pd.score}%`, background: dc?.color || '#888' }} />
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Factor tags */}
      {data.top_factors?.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {data.top_factors.map(f => (
            <span key={f} className="bg-slate-100 text-slate-600 rounded-full px-2.5 py-1 text-xs font-medium">⚠️ {f}</span>
          ))}
        </div>
      )}

      {/* Briefing */}
      <div className="bg-green-50 border-l-3 border-green-600 p-3 rounded-r-xl text-xs text-gray-700 leading-relaxed whitespace-pre-wrap mb-4"
        style={{ borderLeftWidth: 3, borderLeftColor: '#558b2f' }}>
        {briefing}
      </div>

      {/* Quick field report */}
      <div className="border-t border-gray-100 pt-4">
        <p className="text-xs font-semibold text-gray-600 mb-2">📋 Quick field observation</p>
        <div className="grid grid-cols-2 gap-2 mb-2">
          <select className="form-input text-xs" value={frDisease} onChange={e => { setFrDisease(e.target.value); setFrFields({}) }}>
            <option value="">Suspected disease...</option>
            <option value="dengue">🦟 Dengue</option>
            <option value="measles">🔴 Measles</option>
            <option value="maternal">🤰 Maternal</option>
            <option value="diabetes">🩸 Diabetes</option>
            <option value="bp">💊 Blood Pressure</option>
          </select>
          <select className="form-input text-xs" value={frOutcome} onChange={e => setFrOutcome(e.target.value)}>
            <option value="monitoring">Monitoring</option>
            <option value="treated">Treated</option>
            <option value="referred">Referred</option>
          </select>
        </div>

        {frDef && (
          <div className="space-y-1.5 mb-2">
            <p className="text-xs font-medium" style={{ color: frDef.report_type === 'outbreak' ? '#e65100' : '#1565c0' }}>
              {frDef.icon} {frDef.label}
            </p>
            {frDef.fields.slice(0, 2).map(f => (
              <div key={f.id}>
                {f.type === 'select' ? (
                  <select className="form-input text-xs"
                    value={frFields[f.id] ?? ''}
                    onChange={e => setFrFields(prev => ({ ...prev, [f.id]: e.target.value }))}>
                    {f.options.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                  </select>
                ) : (
                  <input type="number" className="form-input text-xs"
                    placeholder={`${f.label}: ${f.placeholder || ''}`}
                    value={frFields[f.id] ?? ''}
                    min={f.min} max={f.max}
                    onChange={e => setFrFields(prev => ({ ...prev, [f.id]: e.target.value }))} />
                )}
              </div>
            ))}
          </div>
        )}

        <button className="btn-outline text-xs py-2" onClick={submitFieldReport}>
          📤 Submit → feeds model
        </button>

        {frStatus && (
          <div className={`mt-2 p-2 rounded-lg text-xs font-medium animate-fadeIn
            ${frStatus.ok === true ? 'bg-green-50 text-green-800' : frStatus.ok === false ? 'bg-red-50 text-red-800' : 'bg-gray-50 text-gray-600'}`}>
            {frStatus.msg}
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Main RiskMapTab ─────────────────────────────────────────────
export default function RiskMapTab({ isActive }) {
  const [riskData, setRiskData]             = useState({})
  const [summary, setSummary]               = useState({ critical: [], high: [], moderate: [] })
  const [lastUpdated, setLastUpdated]       = useState(null)
  const [selectedDiv, setSelectedDiv]       = useState(null)
  const [loadError, setLoadError]           = useState(false)
  const pollRef = useRef(null)

  const loadRiskMap = useCallback(async (silent = false) => {
    try {
      const [riskRes, alertRes] = await Promise.all([
        fetch(`${API}/risk/all`),
        fetch(`${API}/alerts`),
      ])
      const riskJson  = await riskRes.json()
      await alertRes.json()  // alerts handled in App.jsx
      setRiskData(riskJson.divisions)
      setSummary(riskJson.summary)
      setLastUpdated(new Date().toLocaleTimeString())
      setLoadError(false)
    } catch {
      if (!silent) setLoadError(true)
    }
  }, [])

  useEffect(() => {
    if (!isActive) { clearInterval(pollRef.current); return }
    loadRiskMap()
    pollRef.current = setInterval(() => loadRiskMap(true), 30000)
    return () => clearInterval(pollRef.current)
  }, [isActive, loadRiskMap])

  const sorted = Object.entries(riskData).sort((a, b) => b[1].score - a[1].score)

  return (
    <div className="page-body space-y-4 animate-fadeIn">
      <div>
        <h2 className="page-title">Risk Map</h2>
        <p className="page-subtitle">Live division-level outbreak risk scores</p>
      </div>
      {/* Summary stats */}
      <div className="grid grid-cols-4 gap-2">
        {[
          { label: 'Critical', val: summary.critical?.length ?? '–', color: '#c62828' },
          { label: 'High',     val: summary.high?.length ?? '–',     color: '#e65100' },
          { label: 'Moderate', val: summary.moderate?.length ?? '–', color: '#f57f17' },
          { label: 'Datasets', val: 13,                               color: '#1a7f5a' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-2xl shadow-card p-3 text-center transition-transform hover:-translate-y-0.5">
            <div className="font-mono text-2xl font-semibold leading-none" style={{ color: s.color }}>{s.val}</div>
            <div className="text-[10px] text-gray-400 uppercase tracking-wide mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Feedback loop card */}
      <div className="card">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 bg-forest-500 rounded-full animate-pulse" />
          <span className="text-xs font-semibold text-gray-700">Closed feedback loop — active</span>
          {lastUpdated && (
            <span className="ml-auto text-xs text-gray-300">{lastUpdated}</span>
          )}
        </div>
        <div className="flex items-center gap-1 flex-wrap">
          {[
            { label: 'Risk Engine', sub: 'WHO/DHS data' },
            { label: 'Worker Briefing', sub: 'District priorities' },
            { label: 'Field Observation', sub: 'Shebika reports' },
            { label: 'Score Update', sub: 'Live retrain' },
          ].map((step, i, arr) => (
            <div key={i} className="flex items-center gap-1">
              <div className="bg-forest-50 border border-forest-300 text-forest-700 rounded-lg px-2.5 py-1.5 text-center">
                <div className="text-xs font-semibold leading-none">{step.label}</div>
                <div className="text-[10px] text-forest-500 mt-0.5">{step.sub}</div>
              </div>
              {i < arr.length - 1 && <span className="text-gray-300 text-xs">→</span>}
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-2">
          13 real datasets · Field reports trigger live model retrain · Scores update in real time
        </p>
      </div>

      {/* Division detail panel */}
      {selectedDiv && riskData[selectedDiv] && (
        <DetailPanel
          division={selectedDiv}
          data={riskData[selectedDiv]}
          onClose={() => setSelectedDiv(null)}
        />
      )}

      {/* Division list */}
      <div className="card">
        <div className="flex justify-between items-center mb-3">
          <span className="font-semibold text-sm text-gray-800">Division Risk Scores</span>
          <span className="text-xs text-gray-400">Tap for briefing</span>
        </div>
        {loadError && (
          <div className="text-center py-8 text-red-600 text-xs">
            ⚠️ Could not load risk data.<br />Is the backend running on port 8000?
          </div>
        )}
        {!sorted.length && !loadError && (
          <div className="text-center py-8 text-gray-400 text-xs">Loading risk data...</div>
        )}
        <div className="space-y-2">
          {sorted.map(([name, data]) => (
            <DivisionRow
              key={name}
              name={name}
              data={data}
              selected={selectedDiv === name}
              onClick={() => setSelectedDiv(prev => prev === name ? null : name)}
            />
          ))}
        </div>
      </div>

      {/* Model coverage */}
      <div className="card">
        <p className="text-xs font-semibold text-gray-600 mb-2">Model coverage</p>
        <div className="flex flex-wrap gap-1.5">
          {['Dengue','Measles 2026','Maternal health','Diabetes','Hypertension','Child mortality','Anemia','Nutrition','NCD','Climate risk','ANC coverage'].map(t => (
            <span key={t} className="bg-forest-50 text-forest-700 rounded-full px-2.5 py-1 text-xs font-medium">{t}</span>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-2">WHO/HDX · DHS Bangladesh · Kaggle · ScienceDirect</p>
      </div>
    </div>
  )
}
