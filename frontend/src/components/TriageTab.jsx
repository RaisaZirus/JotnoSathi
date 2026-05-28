import { useState } from 'react'
import { API, DIVISIONS, DISEASE_FIELDS } from '../constants'
import Badge from './Badge'

export default function TriageTab({ addToLog }) {
  const [lang, setLang]           = useState('en')
  const [division, setDivision]   = useState('Unknown')
  const [symptoms, setSymptoms]   = useState('')
  const [loading, setLoading]     = useState(false)
  const [result, setResult]       = useState(null)
  const [listening, setListening] = useState(false)

  function startVoice() {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      alert('Voice input not supported. Use Chrome.'); return
    }
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new SR()
    recognition.lang = lang === 'bn' ? 'bn-BD' : 'en-US'
    recognition.interimResults = false
    setListening(true)
    recognition.onresult = e => {
      setSymptoms(e.results[0][0].transcript)
      setListening(false)
    }
    recognition.onerror = () => setListening(false)
    recognition.start()
  }

  async function submitTriage() {
    if (!symptoms.trim()) { alert('Please enter symptoms first.'); return }
    setLoading(true)
    setResult(null)
    try {
      const res  = await fetch(`${API}/triage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ symptoms, language: lang, division, worker_id: 'shebika_field' }),
      })
      const data = await res.json()
      setResult(data)
      addToLog({
        time:     new Date().toLocaleTimeString(),
        symptoms: symptoms.substring(0, 60) + '...',
        disease:  data.disease_detected,
        risk:     data.risk_level || 'UNKNOWN',
        response: data.raw_response,
      })
    } catch {
      alert('Connection error. Check if the backend is running.')
    } finally {
      setLoading(false)
    }
  }

  const queuePct   = result ? Math.min(((result.queue_size || 0) / 5) * 100, 100) : 0
  const queueColor = result?.queue_size >= 5 ? '#2e7d32' : result?.queue_size >= 3 ? '#e65100' : '#888'
  const dc         = result?.disease_detected ? DISEASE_FIELDS[result.disease_detected] : null

  return (
    <div className="page-body space-y-4 animate-fadeIn">
      <div>
        <h2 className="page-title">AI Triage</h2>
        <p className="page-subtitle">Describe symptoms for an AI-powered clinical recommendation</p>
      </div>
      {/* Input card */}
      <div className="card">
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div>
            <label className="form-label">Language</label>
            <select className="form-input" value={lang} onChange={e => setLang(e.target.value)}>
              <option value="en">English</option>
              <option value="bn">বাংলা</option>
            </select>
          </div>
          <div>
            <label className="form-label">Division</label>
            <select className="form-input" value={division} onChange={e => setDivision(e.target.value)}>
              <option value="Unknown">Select...</option>
              {DIVISIONS.map(d => <option key={d}>{d}</option>)}
            </select>
          </div>
        </div>

        {/* Voice button */}
        <button
          onClick={startVoice}
          className={`w-full py-2.5 mb-3 rounded-xl font-semibold text-sm border-2 transition-all duration-150
            ${listening
              ? 'bg-red-50 border-red-400 text-red-600 animate-pulse'
              : 'bg-blue-50 border-blue-500 text-blue-700 hover:bg-blue-100'
            }`}
        >
          {listening ? '🔴 Listening...' : '🎤 Tap to speak symptoms'}
        </button>

        <label className="form-label">Patient Symptoms</label>
        <textarea
          className="form-input resize-y"
          style={{ height: 96 }}
          placeholder="Describe the patient's symptoms..."
          value={symptoms}
          onChange={e => setSymptoms(e.target.value)}
        />

        <button
          className="btn-primary mt-1"
          onClick={submitTriage}
          disabled={loading}
        >
          {loading ? '⏳ Analyzing...' : '✨ Get AI Recommendation'}
        </button>
      </div>

      {/* Loading shimmer */}
      {loading && (
        <div className="card flex items-center gap-3">
          <div className="w-5 h-5 border-2 border-forest-600 border-t-transparent rounded-full animate-spin" />
          <span className="text-sm text-forest-700 font-medium">Analyzing with AI… please wait</span>
        </div>
      )}

      {/* Result card */}
      {result && !loading && (
        <div className="card animate-slideDown border-t-4 border-forest-500">
          {/* Header row */}
          <div className="flex justify-between items-center mb-3">
            <span className="font-semibold text-sm text-gray-800">AI Recommendation</span>
            <Badge level={result.risk_level || 'UNKNOWN'} />
          </div>

          {/* Disease + report type tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {dc && result.disease_detected !== 'general' && (
              <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 rounded-full px-3 py-0.5 text-xs font-semibold">
                {dc.icon} {result.disease_detected.toUpperCase()}
              </span>
            )}
            {result.report_type === 'outbreak' ? (
              <span className={`text-xs font-medium ${result.queue_size >= 4 ? 'text-orange-600' : 'text-gray-400'}`}>
                📊 Queue: {result.queue_size}/5
              </span>
            ) : (
              <span className="text-xs text-gray-400">📋 Added to case registry</span>
            )}
          </div>

          {/* Response text */}
          <div className="bg-forest-50 border-l-4 border-forest-500 p-3.5 rounded-r-xl text-sm text-gray-700 leading-relaxed whitespace-pre-wrap font-sans">
            {result.raw_response}
          </div>

          {/* Queue progress */}
          {result.report_type === 'outbreak' && result.queue_size != null && (
            <div className="mt-3">
              <p className="text-xs text-gray-400 mb-1.5">Queue status after this report:</p>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${queuePct}%`, background: queueColor }}
                />
              </div>
              <p className="text-xs mt-1" style={{ color: queueColor }}>
                {result.queue_size}/5 —{' '}
                {5 - result.queue_size > 0
                  ? `${5 - result.queue_size} more until model retrain`
                  : '✅ Retrain triggered!'}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
