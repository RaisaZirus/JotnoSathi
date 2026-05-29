import { useState } from 'react'
import { API, DIVISIONS } from './constants'

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;700;800&display=swap');

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
}

.auth-root {
  min-height: 100vh;
  background: linear-gradient(160deg, #0c1f2e 0%, #0F3D38 50%, #0c4a43 100%);
  display: flex; align-items: center; justify-content: center;
  padding: 24px;
  position: relative;
  overflow: hidden;
}

.auth-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(15,118,110,0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(15,118,110,0.07) 1px, transparent 1px);
  background-size: 48px 48px;
  pointer-events: none;
}
.auth-orb {
  position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none;
}
.auth-orb-1 {
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(15,118,110,0.3) 0%, transparent 70%);
  top: -120px; left: -80px;
}
.auth-orb-2 {
  width: 280px; height: 280px;
  background: radial-gradient(circle, rgba(20,184,166,0.18) 0%, transparent 70%);
  bottom: -60px; right: -40px;
}

.auth-card {
  position: relative; z-index: 10;
  width: 100%; max-width: 440px;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 24px 64px rgba(0,0,0,0.3);
}

/* Header */
.auth-header {
  background: linear-gradient(135deg, #0F766E, #115E59);
  padding: 28px 32px 24px;
}
.auth-header-top {
  display: flex; align-items: center; gap: 12px; margin-bottom: 20px;
}
.auth-logo-mark {
  width: 40px; height: 40px; border-radius: 11px;
  background: rgba(255,255,255,0.15);
  display: flex; align-items: center; justify-content: center;
  font-size: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}
.auth-logo-name {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 17px; font-weight: 800; color: white; letter-spacing: -0.3px;
}
.auth-logo-sub { font-size: 11px; color: rgba(255,255,255,0.55); margin-top: 1px; }
.auth-header-badge {
  margin-left: auto;
  font-size: 10px; font-weight: 600;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.2);
  color: rgba(255,255,255,0.85);
  padding: 4px 10px; border-radius: 20px;
}

/* Tab toggle */
.auth-tabs {
  display: flex;
  background: rgba(0,0,0,0.15);
  border-radius: 10px;
  padding: 3px;
}
.auth-tab {
  flex: 1; padding: 8px;
  font-size: 13px; font-weight: 600;
  border: none; border-radius: 8px; cursor: pointer;
  transition: all 160ms ease;
  font-family: 'Inter', sans-serif;
}
.auth-tab-active {
  background: white; color: #0F766E;
  box-shadow: 0 1px 4px rgba(0,0,0,0.12);
}
.auth-tab-inactive {
  background: transparent; color: rgba(255,255,255,0.65);
}

/* Body */
.auth-body { padding: 28px 32px 32px; }

.auth-field { margin-bottom: 16px; }
.auth-label {
  display: block; font-size: 12.5px; font-weight: 600;
  color: #374151; margin-bottom: 6px;
}
.auth-input {
  width: 100%; padding: 11px 14px;
  border: 1.5px solid #E5E7EB;
  border-radius: 10px;
  font-size: 14px; color: #0F172A;
  font-family: 'Inter', sans-serif;
  transition: border-color 150ms, box-shadow 150ms;
  outline: none;
  background: #FAFAFA;
}
.auth-input:focus {
  border-color: #0F766E;
  box-shadow: 0 0 0 3px rgba(15,118,110,0.1);
  background: white;
}
.auth-select {
  width: 100%; padding: 11px 14px;
  border: 1.5px solid #E5E7EB;
  border-radius: 10px;
  font-size: 14px; color: #0F172A;
  font-family: 'Inter', sans-serif;
  transition: border-color 150ms, box-shadow 150ms;
  outline: none;
  background: #FAFAFA;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  padding-right: 38px;
}
.auth-select:focus {
  border-color: #0F766E;
  box-shadow: 0 0 0 3px rgba(15,118,110,0.1);
  background-color: white;
}

.auth-btn {
  width: 100%; padding: 13px;
  background: linear-gradient(135deg, #0F766E, #115E59);
  color: white; font-size: 15px; font-weight: 700;
  border: none; border-radius: 11px; cursor: pointer;
  font-family: 'Inter', sans-serif;
  transition: all 160ms ease;
  margin-top: 8px;
  display: flex; align-items: center; justify-content: center; gap: 8px;
  box-shadow: 0 4px 14px rgba(15,118,110,0.35);
}
.auth-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(15,118,110,0.45); }
.auth-btn:active { transform: translateY(0); }
.auth-btn:disabled { opacity: 0.65; cursor: not-allowed; transform: none; }

.auth-error {
  background: #FEF2F2; border: 1px solid #FECACA;
  color: #DC2626; font-size: 13px; font-weight: 500;
  padding: 10px 14px; border-radius: 8px;
  margin-bottom: 14px;
  display: flex; align-items: center; gap: 7px;
}
.auth-success {
  background: #F0FDFA; border: 1px solid #99F6E4;
  color: #0F766E; font-size: 13px; font-weight: 500;
  padding: 10px 14px; border-radius: 8px;
  margin-bottom: 14px;
  display: flex; align-items: center; gap: 7px;
}

.auth-divider {
  display: flex; align-items: center; gap: 10px;
  margin: 16px 0;
}
.auth-divider-line { flex: 1; height: 1px; background: #E5E7EB; }
.auth-divider-text { font-size: 12px; color: #9CA3AF; font-weight: 500; }

.auth-back {
  text-align: center; margin-top: 18px;
  font-size: 13px; color: #64748B;
}
.auth-back-btn {
  background: none; border: none; cursor: pointer;
  color: #0F766E; font-weight: 600; font-size: 13px;
  font-family: 'Inter', sans-serif;
  text-decoration: underline; padding: 0;
}

/* Bangla note */
.auth-bn {
  background: #F0FDFA;
  border-left: 3px solid #0F766E;
  padding: 10px 14px;
  border-radius: 0 8px 8px 0;
  margin-top: 20px;
}
.auth-bn-main { font-size: 13px; font-weight: 600; color: #0F766E; }
.auth-bn-sub  { font-size: 11px; color: #64748B; margin-top: 2px; }
`

export default function Login({ onLogin, onBack }) {
  const [mode, setMode]       = useState('login')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [division, setDivision] = useState('Dhaka')
  const [error, setError]     = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin() {
    setError(''); setLoading(true)
    try {
      const form = new URLSearchParams({ username, password, grant_type: 'password' })
      const res = await fetch(`${API}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: form,
      })
      if (res.ok) {
        const data = await res.json()
        localStorage.setItem('token', data.access_token)
        onLogin()
      } else {
        setError('Invalid username or password')
      }
    } catch {
      setError('Could not connect to server')
    }
    setLoading(false)
  }

  async function handleSignup() {
    setError(''); setSuccess(''); setLoading(true)
    if (!username || !password) { setError('Please fill in all fields'); setLoading(false); return }
    try {
      const res = await fetch(`${API}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, division }),
      })
      if (res.ok) {
        setSuccess('Account created! Signing you in…')
        // Auto-login after signup
        const form = new URLSearchParams({ username, password, grant_type: 'password' })
        const loginRes = await fetch(`${API}/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: form,
        })
        if (loginRes.ok) {
          const data = await loginRes.json()
          localStorage.setItem('token', data.access_token)
          setTimeout(() => onLogin(), 800)
        }
      } else {
        const data = await res.json()
        setError(data.detail || 'Registration failed')
      }
    } catch {
      setError('Could not connect to server')
    }
    setLoading(false)
  }

  function handleKey(e) {
    if (e.key === 'Enter') mode === 'login' ? handleLogin() : handleSignup()
  }

  return (
    <>
      <style>{CSS}</style>
      <div className="auth-root">
        <div className="auth-grid" />
        <div className="auth-orb auth-orb-1" />
        <div className="auth-orb auth-orb-2" />

        <div className="auth-card">
          {/* Header */}
          <div className="auth-header">
            <div className="auth-header-top">
              <div className="auth-logo-mark">🏥</div>
              <div>
                <div className="auth-logo-name">JotnoSathi</div>
                <div className="auth-logo-sub">AI Clinical Decision Support</div>
              </div>
              <div className="auth-header-badge">BuildFest 2026</div>
            </div>

            <div className="auth-tabs">
              <button
                className={`auth-tab ${mode === 'login' ? 'auth-tab-active' : 'auth-tab-inactive'}`}
                onClick={() => { setMode('login'); setError(''); setSuccess('') }}
              >Sign In</button>
              <button
                className={`auth-tab ${mode === 'signup' ? 'auth-tab-active' : 'auth-tab-inactive'}`}
                onClick={() => { setMode('signup'); setError(''); setSuccess('') }}
              >Create Account</button>
            </div>
          </div>

          {/* Body */}
          <div className="auth-body">
            {error   && <div className="auth-error">⚠ {error}</div>}
            {success && <div className="auth-success">✓ {success}</div>}

            <div className="auth-field">
              <label className="auth-label">Username</label>
              <input
                className="auth-input"
                placeholder="e.g. raisa"
                value={username}
                onChange={e => setUsername(e.target.value)}
                onKeyDown={handleKey}
                autoFocus
              />
            </div>

            <div className="auth-field">
              <label className="auth-label">Password</label>
              <input
                className="auth-input"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                onKeyDown={handleKey}
              />
            </div>

            {mode === 'signup' && (
              <div className="auth-field">
                <label className="auth-label">Division</label>
                <select
                  className="auth-select"
                  value={division}
                  onChange={e => setDivision(e.target.value)}
                >
                  {DIVISIONS.map(d => <option key={d}>{d}</option>)}
                </select>
              </div>
            )}

            <button
              className="auth-btn"
              onClick={mode === 'login' ? handleLogin : handleSignup}
              disabled={loading}
            >
              {loading ? '…' : mode === 'login' ? '→ Sign In' : '→ Create Account'}
            </button>

            <div className="auth-bn">
              <div className="auth-bn-main">তুমি একজন সহায়তাকারী, রোগ নির্ণয় করছ না।</div>
              <div className="auth-bn-sub">You are assisting, not diagnosing · For Shasthya Shebikas only</div>
            </div>

            {onBack && (
              <div className="auth-back">
                <button className="auth-back-btn" onClick={onBack}>← Back to home</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
