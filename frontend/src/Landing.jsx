import { useEffect, useRef } from 'react'
import jotnoLogo from './jotno.png'

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;700;800&display=swap');

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: 'Inter', sans-serif;
  background: #F8FAFC;
  color: #0F172A;
  -webkit-font-smoothing: antialiased;
}

.land-root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(160deg, #0c1f2e 0%, #0F3D38 45%, #0c4a43 100%);
  position: relative;
  overflow: hidden;
}

/* ── Background grid ── */
.land-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(15,118,110,0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(15,118,110,0.08) 1px, transparent 1px);
  background-size: 48px 48px;
  pointer-events: none;
}

/* ── Glow orbs ── */
.land-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}
.land-orb-1 {
  width: 480px; height: 480px;
  background: radial-gradient(circle, rgba(15,118,110,0.35) 0%, transparent 70%);
  top: -120px; left: -100px;
}
.land-orb-2 {
  width: 320px; height: 320px;
  background: radial-gradient(circle, rgba(20,184,166,0.2) 0%, transparent 70%);
  bottom: 80px; right: -60px;
}

/* ── Nav ── */
.land-nav {
  position: relative; z-index: 10;
  display: flex; align-items: center;
  padding: 20px 40px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
@media (max-width: 600px) { .land-nav { padding: 16px 20px; } }

.land-nav-logo {
  display: flex; align-items: center; gap: 10px;
}
.land-nav-mark {
  width: 36px; height: 36px;
  border-radius: 10px;
  overflow: hidden;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 2px 12px rgba(15,118,110,0.5);
}
.land-nav-name {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 18px; font-weight: 800;
  color: white; letter-spacing: -0.3px;
}
.land-nav-sub {
  font-size: 10px; color: rgba(255,255,255,0.45);
  margin-top: 1px;
}
.land-nav-badge {
  margin-left: auto;
  font-size: 10.5px; font-weight: 600;
  background: rgba(15,118,110,0.3);
  border: 1px solid rgba(15,118,110,0.5);
  color: #5eead4;
  padding: 4px 12px; border-radius: 20px;
}

/* ── Hero ── */
.land-hero {
  position: relative; z-index: 10;
  flex: 1;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  text-align: center;
  padding: 60px 24px 40px;
  gap: 32px;
}

.land-pill {
  display: inline-flex; align-items: center; gap: 7px;
  background: rgba(15,118,110,0.2);
  border: 1px solid rgba(15,118,110,0.4);
  color: #5eead4;
  font-size: 12px; font-weight: 600;
  padding: 6px 16px; border-radius: 20px;
  letter-spacing: 0.3px;
}
.land-pill-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: #2dd4bf;
  animation: pulse-dot 2s ease-in-out infinite;
}
@keyframes pulse-dot {
  0%,100% { box-shadow: 0 0 0 0 rgba(45,212,191,0.4); }
  50%      { box-shadow: 0 0 0 5px rgba(45,212,191,0); }
}

.land-headline {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(36px, 6vw, 64px);
  font-weight: 800;
  color: white;
  line-height: 1.1;
  letter-spacing: -1.5px;
  max-width: 720px;
}
.land-headline-accent {
  background: linear-gradient(135deg, #2dd4bf, #0F766E);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.land-sub {
  font-size: clamp(15px, 2vw, 18px);
  color: rgba(255,255,255,0.55);
  max-width: 520px;
  line-height: 1.7;
}

.land-cta-group {
  display: flex; gap: 12px; flex-wrap: wrap;
  justify-content: center;
}

.land-btn-primary {
  display: inline-flex; align-items: center; gap: 8px;
  background: linear-gradient(135deg, #0F766E, #0d5c56);
  color: white; font-size: 15px; font-weight: 700;
  padding: 14px 32px; border-radius: 12px; border: none;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(15,118,110,0.5);
  transition: all 180ms ease;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
}
.land-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(15,118,110,0.6);
}
.land-btn-primary svg { width: 18px; height: 18px; }

.land-btn-secondary {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  color: rgba(255,255,255,0.85); font-size: 15px; font-weight: 600;
  padding: 14px 28px; border-radius: 12px;
  cursor: pointer; transition: all 180ms ease;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
}
.land-btn-secondary:hover {
  background: rgba(255,255,255,0.13);
  border-color: rgba(255,255,255,0.25);
}

/* ── Stats strip ── */
.land-stats {
  position: relative; z-index: 10;
  display: flex; justify-content: center;
  gap: 0; flex-wrap: wrap;
  padding: 0 24px 24px;
}
.land-stat {
  padding: 20px 40px;
  text-align: center;
  border-right: 1px solid rgba(255,255,255,0.07);
}
.land-stat:last-child { border-right: none; }
@media (max-width: 600px) {
  .land-stat { padding: 14px 24px; border-right: none; border-bottom: 1px solid rgba(255,255,255,0.07); width: 50%; }
}
.land-stat-num {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 26px; font-weight: 800; color: #2dd4bf;
  letter-spacing: -0.5px;
}
.land-stat-label {
  font-size: 11.5px; color: rgba(255,255,255,0.4);
  margin-top: 3px; font-weight: 500;
}

/* ── Feature cards ── */
.land-features {
  position: relative; z-index: 10;
  background: #F8FAFC;
  padding: 64px 40px;
}
@media (max-width: 600px) { .land-features { padding: 40px 20px; } }

.land-features-title {
  text-align: center;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(24px, 4vw, 36px); font-weight: 800;
  color: #0F172A; letter-spacing: -0.8px;
  margin-bottom: 8px;
}
.land-features-sub {
  text-align: center; font-size: 15px;
  color: #64748B; margin-bottom: 48px;
}

.land-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px; max-width: 1000px; margin: 0 auto;
}

.land-card {
  background: white;
  border: 1px solid #E2E8F0;
  border-radius: 16px;
  padding: 28px 24px;
  transition: all 200ms ease;
}
.land-card:hover {
  box-shadow: 0 8px 30px rgba(15,118,110,0.1);
  border-color: rgba(15,118,110,0.25);
  transform: translateY(-2px);
}
.land-card-icon {
  width: 44px; height: 44px; border-radius: 12px;
  background: #F0FDFA;
  display: flex; align-items: center; justify-content: center;
  font-size: 22px; margin-bottom: 16px;
}
.land-card-title {
  font-size: 15px; font-weight: 700; color: #0F172A;
  margin-bottom: 6px;
}
.land-card-desc {
  font-size: 13px; color: #64748B; line-height: 1.65;
}

/* ── Diseases banner ── */
.land-diseases {
  position: relative; z-index: 10;
  background: white;
  border-top: 1px solid #E2E8F0;
  border-bottom: 1px solid #E2E8F0;
  padding: 40px;
  text-align: center;
}
.land-diseases-title {
  font-size: 13px; font-weight: 600; color: #64748B;
  letter-spacing: 1px; text-transform: uppercase;
  margin-bottom: 24px;
}
.land-disease-chips {
  display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;
}
.land-chip {
  display: inline-flex; align-items: center; gap: 7px;
  background: #F8FAFC; border: 1px solid #E2E8F0;
  border-radius: 20px; padding: 8px 16px;
  font-size: 13px; font-weight: 600; color: #334155;
}

/* ── CTA section ── */
.land-cta-section {
  position: relative; z-index: 10;
  background: linear-gradient(135deg, #0F3D38, #0c4a43);
  padding: 80px 40px;
  text-align: center;
  overflow: hidden;
}
.land-cta-section::before {
  content: '';
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(15,118,110,0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(15,118,110,0.1) 1px, transparent 1px);
  background-size: 40px 40px;
}
.land-cta-inner { position: relative; z-index: 1; }
.land-cta-title {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(28px, 4vw, 44px); font-weight: 800;
  color: white; letter-spacing: -1px; margin-bottom: 12px;
}
.land-cta-sub {
  font-size: 16px; color: rgba(255,255,255,0.55);
  margin-bottom: 36px;
}

/* ── Footer ── */
.land-footer {
  background: #0c1f2e;
  padding: 24px 40px;
  display: flex; align-items: center; justify-content: space-between;
  flex-wrap: wrap; gap: 12px;
  border-top: 1px solid rgba(255,255,255,0.06);
}
.land-footer-left {
  font-size: 12px; color: rgba(255,255,255,0.3);
}
.land-footer-right {
  font-size: 11px; color: rgba(255,255,255,0.2);
  font-family: 'DM Mono', monospace;
}

/* ── Bangla hero note ── */
.land-bn-note {
  display: inline-block;
  background: rgba(15,118,110,0.15);
  border: 1px solid rgba(15,118,110,0.3);
  border-radius: 10px;
  padding: 12px 20px;
  font-size: 14px; color: #5eead4;
  font-style: italic;
}
`

export default function Landing({ onGetStarted, onLogin }) {
  return (
    <>
      <style>{CSS}</style>
      <div className="land-root">
        <div className="land-grid" />
        <div className="land-orb land-orb-1" />
        <div className="land-orb land-orb-2" />

        {/* Nav */}
        <nav className="land-nav">
          <div className="land-nav-logo">
            <div className="land-nav-mark">
              <img src={jotnoLogo} alt="JotnoSathi" style={{ width: 36, height: 36, objectFit: 'contain' }} />
            </div>
            <div>
              <div className="land-nav-name">JotnoSathi</div>
              <div className="land-nav-sub">AI Health Assistant</div>
            </div>
          </div>
          <span className="land-nav-badge">BuildFest 2026</span>
        </nav>

        {/* Hero */}
        <section className="land-hero">
          <div className="land-pill">
            <span className="land-pill-dot" />
            <img src={jotnoLogo} alt="JotnoSathi" style={{ width: 28, height: 28, objectFit: 'contain' }} />
            Live · JotnoSathi
          </div>

          <h1 className="land-headline">
            AI-powered health<br />
            <span className="land-headline-accent">triage for Bangladesh</span>
          </h1>

          <p className="land-sub">
            Helping 13,000+ Shasthya Shebikas detect disease outbreaks,
            triage patients in Bangla, and update district risk models — in real time.
          </p>

          <div className="land-bn-note">
            তুমি একজন সহায়তাকারী, রোগ নির্ণয় করছ না।
          </div>

          <div className="land-cta-group">
            <button className="land-btn-primary" onClick={onGetStarted}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                <line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/>
              </svg>
              Create Account
            </button>
            <button className="land-btn-secondary" onClick={onLogin}>
              Sign In →
            </button>
          </div>
        </section>

        {/* Stats */}
        <div className="land-stats">
          {[
            { num: '13,000+', label: 'Shasthya Shebikas' },
            { num: '8',       label: 'WHO/MSF Guidelines' },
            { num: '5',       label: 'Disease Domains' },
            { num: '<10s',    label: 'AI Response Time' },
          ].map(s => (
            <div className="land-stat" key={s.label}>
              <div className="land-stat-num">{s.num}</div>
              <div className="land-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <section className="land-features">
        <h2 className="land-features-title">Built for frontline workers</h2>
        <p className="land-features-sub">Everything a Shebika needs, grounded in real WHO data</p>
        <div className="land-cards">
          {[
            { icon: '🧠', title: 'Bangla Triage AI',         desc: 'Type symptoms in Bangla or English. LLaMA 3.3 70B via Groq delivers clinical advice in under 10 seconds.' },
            { icon: '🗺️', title: 'Live District Risk Map',   desc: 'Choropleth risk scores for all 8 divisions. Auto-updates when field reports reach the retraining threshold.' },
            { icon: '🔄', title: 'Self-Learning Model',      desc: 'Every 5 outbreak reports trigger a genuine model refit. The system gets smarter with every case filed.' },
            { icon: '📋', title: 'Auto Field Reports',       desc: 'Triage silently generates a structured field report in the background — zero extra work for the worker.' },
            { icon: '🏥', title: '30 Referral Hospitals',    desc: 'Live map of district and tertiary hospitals across all divisions, ready for immediate referral routing.' },
            { icon: '🔒', title: 'Ethics First',             desc: 'Mandatory disclaimer every session. Assists not diagnoses. Protocol-grounded, explainable output.' },
          ].map(c => (
            <div className="land-card" key={c.title}>
              <div className="land-card-icon">{c.icon}</div>
              <div className="land-card-title">{c.title}</div>
              <div className="land-card-desc">{c.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Disease chips */}
      <div className="land-diseases">
        <div className="land-diseases-title">Supported disease domains</div>
        <div className="land-disease-chips">
          {[
            { icon: '🦟', label: 'Dengue' },
            { icon: '🔴', label: 'Measles' },
            { icon: '🤰', label: 'Maternal Health' },
            { icon: '🩸', label: 'Diabetes' },
            { icon: '💊', label: 'Hypertension' },
          ].map(d => (
            <span className="land-chip" key={d.label}>{d.icon} {d.label}</span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="land-cta-section">
        <div className="land-cta-inner">
          <h2 className="land-cta-title">Ready to get started?</h2>
          <p className="land-cta-sub">Create your free account in seconds</p>
          <div className="land-cta-group" style={{ justifyContent: 'center' }}>
            <button className="land-btn-primary" onClick={onGetStarted}>
              Create Account →
            </button>
            <button className="land-btn-secondary" onClick={onLogin}>
              Already have an account
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="land-footer">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={jotnoLogo} alt="JotnoSathi" style={{ width: 28, height: 28, objectFit: 'contain', borderRadius: 7 }} />
          <span className="land-footer-left">© 2026 JotnoSathi · Infinity AI BuildFest · HealthTech Domain</span>
        </div>
        <span className="land-footer-right">WHO · HDX · DHS Bangladesh · Kaggle · 13 datasets</span>
      </footer>
    </>
  )
}