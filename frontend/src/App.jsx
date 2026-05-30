import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink, useLocation, Navigate } from 'react-router-dom'
import { API } from './constants'
import jotnoLogo from './jotno.png'
import Login    from './Login'
import Landing  from './Landing'
import TriageTab          from './components/TriageTab'
import ReportsTab         from './components/ReportsTab'
import LogTab             from './components/LogTab'
import RiskMapTab         from './components/RiskMapTab'
import ReferralTab        from './components/ReferralTab'
import EthicalDisclaimer  from './components/EthicalDisclaimer'
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

  :root {
    --blue-900: #0B2D5E;
    --blue-700: #1A4F8A;
    --blue-600: #1A6DB5;
    --blue-500: #2E85D4;
    --blue-200: #B8D8F5;
    --blue-100: #D8ECFB;
    --blue-50:  #EEF6FD;
    --orange:   #F07D3A;
    --orange-50:#FEF1E8;
    --red-soft: #FDE8E8;
    --red-text: #C13333;
    --green-50: #E8F5EE;
    --green-600:#2E7D4A;
    --surface:  #F5F7FA;
    --border:   #E4EAF2;
    --border-md:#C8D6E8;
    --text-1:   #0F1E35;
    --text-2:   #3D546E;
    --text-3:   #7A90A8;
    --white:    #FFFFFF;
    --font:     'DM Sans', sans-serif;
    --mono:     'DM Mono', monospace;
    --radius-sm: 6px;
    --radius-md: 10px;
    --radius-lg: 14px;
    --radius-xl: 20px;
    --shadow-sm: 0 1px 3px rgba(11,45,94,0.06), 0 1px 2px rgba(11,45,94,0.04);
    --shadow-md: 0 4px 12px rgba(11,45,94,0.08), 0 2px 4px rgba(11,45,94,0.05);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: var(--font);
    background: var(--surface);
    color: var(--text-1);
    -webkit-font-smoothing: antialiased;
  }

  /* ── Sidebar ─────────────────────────────────────────────────── */
  .sidebar {
    display: none;
    flex-direction: column;
    background: var(--white);
    border-right: 1px solid var(--border);
    transition: width 280ms cubic-bezier(0.4,0,0.2,1);
    flex-shrink: 0;
    overflow: hidden;
  }
  @media (min-width: 768px) { .sidebar { display: flex; } }

  .sidebar-logo {
    display: flex;
    align-items: center;
    height: 64px;
    border-bottom: 1px solid var(--border);
    padding: 0 16px;
    gap: 12px;
    overflow: hidden;
  }
  .logo-mark {
    width: 34px; height: 34px; flex-shrink: 0;
    border-radius: var(--radius-md);
    display: flex; align-items: center; justify-content: center;
    overflow: hidden;
  }
  .logo-mark img { width: 34px; height: 34px; object-fit: contain; }
  .logo-text-wrap { overflow: hidden; white-space: nowrap; }
  .logo-name { font-size: 15px; font-weight: 600; color: var(--text-1); letter-spacing: -0.2px; }
  .logo-sub  { font-size: 10.5px; color: var(--text-3); font-weight: 400; margin-top: 1px; }

  .sidebar-nav { flex: 1; padding: 10px 8px; display: flex; flex-direction: column; gap: 2px; overflow-y: auto; }

  .nav-item {
    display: flex; align-items: center; gap: 10px;
    padding: 9px 10px; border-radius: var(--radius-md);
    font-size: 13.5px; font-weight: 500; color: var(--text-2);
    text-decoration: none; transition: all 150ms ease;
    cursor: pointer; overflow: hidden; white-space: nowrap;
    position: relative;
  }
  .nav-item:hover { background: var(--blue-50); color: var(--blue-700); }
  .nav-item.active {
    background: var(--blue-50);
    color: var(--blue-600);
  }
  .nav-item.active::before {
    content: '';
    position: absolute; left: 0; top: 20%; bottom: 20%;
    width: 3px; border-radius: 0 3px 3px 0;
    background: var(--blue-600);
  }
  .nav-item svg { width: 18px; height: 18px; flex-shrink: 0; opacity: 0.7; }
  .nav-item.active svg { opacity: 1; }
  .nav-dot {
    margin-left: auto; width: 6px; height: 6px;
    border-radius: 50%; background: var(--blue-500);
    flex-shrink: 0;
  }

  /* Tooltip for collapsed state */
  .nav-tooltip {
    position: absolute; left: calc(100% + 12px); top: 50%;
    transform: translateY(-50%);
    background: var(--blue-900); color: white;
    font-size: 12px; font-weight: 500; padding: 5px 10px;
    border-radius: var(--radius-sm); white-space: nowrap;
    opacity: 0; pointer-events: none;
    transition: opacity 120ms ease;
    box-shadow: var(--shadow-md);
    z-index: 999;
  }
  .nav-tooltip::before {
    content: '';
    position: absolute; right: 100%; top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-right-color: var(--blue-900);
  }
  .nav-item:hover .nav-tooltip { opacity: 1; }

  .sidebar-footer {
    border-top: 1px solid var(--border);
    padding: 10px 8px;
    display: flex; flex-direction: column; gap: 6px;
  }
  .status-chip {
    display: flex; align-items: center; gap: 7px;
    padding: 7px 10px; border-radius: var(--radius-md);
    font-size: 12px; font-weight: 500;
    overflow: hidden; white-space: nowrap;
  }
  .status-chip.online  { background: var(--green-50); color: var(--green-600); }
  .status-chip.offline { background: var(--orange-50); color: #A04B1A; }
  .status-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
  .status-dot.online  { background: var(--green-600); animation: pulse-dot 2s ease-in-out infinite; }
  .status-dot.offline { background: var(--orange); }
  @keyframes pulse-dot {
    0%,100% { box-shadow: 0 0 0 0 rgba(46,125,74,0.4); }
    50%      { box-shadow: 0 0 0 4px rgba(46,125,74,0); }
  }
  .collapse-btn {
    display: flex; align-items: center; gap: 8px;
    padding: 7px 10px; border-radius: var(--radius-md);
    font-size: 12px; color: var(--text-3);
    background: none; border: none; cursor: pointer;
    transition: all 150ms ease; width: 100%;
    overflow: hidden; white-space: nowrap;
  }
  .collapse-btn:hover { background: var(--surface); color: var(--text-2); }
  .collapse-btn svg { width: 15px; height: 15px; flex-shrink: 0; transition: transform 280ms ease; }

  /* ── Top bar ─────────────────────────────────────────────────── */
  .topbar {
    height: 64px; background: var(--white);
    border-bottom: 1px solid var(--border);
    display: none; align-items: center;
    padding: 0 24px; gap: 16px; flex-shrink: 0;
  }
  @media (min-width: 768px) { .topbar { display: flex; } }
  .topbar-title { font-size: 16px; font-weight: 600; color: var(--text-1); flex: 1; min-width: 0; }
  .topbar-alert {
    font-size: 11.5px; color: var(--red-text); font-weight: 500;
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }

  /* Alert ticker strip */
  .alert-ticker {
    background: var(--orange-50);
    border-bottom: 1px solid rgba(240,125,58,0.18);
    padding: 6px 24px;
    font-size: 12px; color: #7A3B1A;
    display: flex; align-items: center; gap: 10px;
    overflow: hidden;
  }
  .ticker-badge {
    display: flex; align-items: center; gap: 5px;
    background: var(--orange); color: white;
    font-size: 10.5px; font-weight: 600; padding: 3px 9px;
    border-radius: 20px; white-space: nowrap; flex-shrink: 0;
  }
  .ticker-badge svg { width: 11px; height: 11px; }
  .ticker-scroll { overflow: hidden; white-space: nowrap; }

  .live-badge {
    display: flex; align-items: center; gap: 6px;
    font-size: 12px; font-weight: 500; padding: 5px 12px;
    border-radius: 20px; white-space: nowrap;
    flex-shrink: 0;
  }
  .live-badge.online  { background: var(--green-50); color: var(--green-600); }
  .live-badge.offline { background: var(--orange-50); color: #A04B1A; }
  .live-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
  .live-dot.online  { background: var(--green-600); animation: pulse-dot 2s ease-in-out infinite; }
  .live-dot.offline { background: var(--orange); }

  .emergency-btn {
    display: flex; align-items: center; gap: 6px;
    background: var(--red-soft); color: var(--red-text);
    font-size: 12px; font-weight: 600; padding: 6px 14px;
    border-radius: 20px; text-decoration: none;
    transition: background 150ms ease; white-space: nowrap; flex-shrink: 0;
    border: 1px solid rgba(193,51,51,0.15);
  }
  .emergency-btn:hover { background: #fbd6d6; }
  .emergency-btn svg { width: 13px; height: 13px; }

  /* ── Mobile header / bottom nav ──────────────────────────────── */
  .mobile-header {
    display: flex; height: 56px;
    background: var(--white); border-bottom: 1px solid var(--border);
    align-items: center; padding: 0 16px; gap: 10px;
    flex-shrink: 0; position: sticky; top: 0; z-index: 40;
  }
  @media (min-width: 768px) { .mobile-header { display: none; } }
  .mobile-logo {
    width: 28px; height: 28px;
    background: linear-gradient(145deg, var(--blue-600), var(--blue-900));
    border-radius: 8px; display: flex; align-items: center; justify-content: center;
    box-shadow: 0 1px 6px rgba(26,109,181,0.3);
  }
  .mobile-logo svg { width: 14px; height: 14px; color: white; }
  .mobile-title { font-size: 14px; font-weight: 600; color: var(--text-1); flex: 1; }

  .bottom-nav {
    display: flex;
    position: fixed; bottom: 0; left: 0; right: 0; z-index: 50;
    background: var(--white);
    border-top: 1px solid var(--border);
    box-shadow: 0 -4px 16px rgba(11,45,94,0.06);
  }
  @media (min-width: 768px) { .bottom-nav { display: none; } }
  .bottom-nav-item {
    flex: 1; display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    gap: 3px; padding: 8px 0;
    font-size: 10px; font-weight: 600; color: var(--text-3);
    text-decoration: none; transition: color 150ms ease;
  }
  .bottom-nav-item.active { color: var(--blue-600); }
  .bottom-nav-item svg { width: 20px; height: 20px; }

  /* ── Offline banner ───────────────────────────────────────────── */
  .offline-banner {
    background: var(--orange);
    color: white; text-align: center;
    padding: 7px 16px; font-size: 12px; font-weight: 600;
    letter-spacing: 0.2px; flex-shrink: 0;
  }

  /* ── Main layout ──────────────────────────────────────────────── */
  .app-shell { display: flex; height: 100vh; overflow: hidden; }
  .content-wrap { flex: 1; display: flex; flex-direction: column; min-width: 0; overflow: hidden; }
  .main-scroll { flex: 1; overflow-y: auto; padding-bottom: 64px; }
  @media (min-width: 768px) { .main-scroll { padding-bottom: 0; } }
  .main-inner { max-width: 680px; margin: 0 auto; }

  /* ── Footer ───────────────────────────────────────────────────── */
  .footer {
    margin-top: auto; border-top: 1px solid var(--border);
    padding: 16px 24px; background: var(--white);
  }
  .footer-inner {
    display: flex; flex-wrap: wrap;
    align-items: center; justify-content: space-between; gap: 10px;
  }
  .footer-brand { display: flex; align-items: center; gap: 8px; }
  .footer-logo {
    width: 20px; height: 20px;
    background: linear-gradient(145deg, var(--blue-600), var(--blue-900));
    border-radius: 5px; display: flex; align-items: center; justify-content: center;
  }
  .footer-logo svg { width: 11px; height: 11px; color: white; }
  .footer-name { font-size: 12px; font-weight: 600; color: var(--text-2); }
  .footer-sep  { color: var(--border-md); font-size: 12px; }
  .footer-desc { font-size: 11.5px; color: var(--text-3); }
  .footer-links { display: flex; align-items: center; gap: 16px; }
  .footer-link {
    font-size: 11.5px; color: var(--text-3);
    text-decoration: none; transition: color 150ms;
  }
  .footer-link:hover { color: var(--blue-600); }
  .footer-link.active { color: var(--blue-600); font-weight: 600; }
  .footer-meta { font-size: 10.5px; color: var(--text-3); font-family: var(--mono); }
`

const NAV_ITEMS = [
  { to: '/triage',   label: 'Triage',   icon: TriageIcon },
  { to: '/reports',  label: 'Reports',  icon: ReportsIcon },
  { to: '/log',      label: 'Log',      icon: LogIcon },
  { to: '/riskmap',  label: 'Risk Map', icon: RiskIcon },
  { to: '/referral', label: 'Referral', icon: ReferralIcon },
]

/* ── SVG Icons ─────────────────────────────────────────────────── */
function TriageIcon({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  )
}
function ReportsIcon({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14,2 14,8 20,8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
    </svg>
  )
}
function LogIcon({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  )
}
function RiskIcon({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="3,11 22,2 13,21 11,13 3,11"/>
    </svg>
  )
}
function ReferralIcon({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9,22 9,12 15,12 15,22"/>
    </svg>
  )
}
function HeartPlusIcon({ style }) {
  return (
    <svg style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      <line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>
    </svg>
  )
}
function ChevronIcon({ style, flipped }) {
  return (
    <svg style={{ ...style, transform: flipped ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 280ms ease' }}
      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9,18 15,12 9,6"/>
    </svg>
  )
}
function BroadcastIcon({ style }) {
  return (
    <svg style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="2"/><path d="M8.56 2.9A10 10 0 1 0 15.44 2.9"/><path d="M6.3 6.3a6 6 0 1 0 11.4 0"/>
    </svg>
  )
}
function AmbulanceIcon({ style }) {
  return (
    <svg style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 17H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h12l3 4v7a1 1 0 0 1-1 1h-2"/>
      <circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>
      <path d="M8 9h2v2H8zM11 10h2"/>
    </svg>
  )
}

/* ── Sidebar ────────────────────────────────────────────────────── */
function Sidebar({ collapsed, setCollapsed, isOnline, onLogout }) {
  return (
    <aside
      className="sidebar"
      style={{ width: collapsed ? 64 : 220 }}
    >
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="logo-mark">
          <img src={jotnoLogo} alt="JotnoSathi" />
        </div>
        {!collapsed && (
          <div className="logo-text-wrap">
            <div className="logo-name">JotnoSathi</div>
            <div className="logo-sub">AI Health Assistant</div>
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="sidebar-nav">
        {NAV_ITEMS.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}
            style={{ justifyContent: collapsed ? 'center' : undefined }}
          >
            {({ isActive }) => (
              <>
                <Icon style={{ width: 18, height: 18, flexShrink: 0, opacity: isActive ? 1 : 0.65 }} />
                {!collapsed && <span style={{ flex: 1 }}>{label}</span>}
                {!collapsed && isActive && <span className="nav-dot" />}
                {collapsed && <span className="nav-tooltip">{label}</span>}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="sidebar-footer">
        {!collapsed && (
          <div className={`status-chip ${isOnline ? 'online' : 'offline'}`}>
            <span className={`status-dot ${isOnline ? 'online' : 'offline'}`} />
            {isOnline ? 'Connected' : 'Offline mode'}
          </div>
        )}
        <button
          onClick={onLogout}
          className="collapse-btn"
          style={{ justifyContent: collapsed ? 'center' : undefined, color: 'var(--red-text)', marginBottom: 2 }}
          title="Logout"
        >
          <svg style={{ width: 15, height: 15, flexShrink: 0 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          {!collapsed && <span>Logout</span>}
        </button>
        <button
          onClick={() => setCollapsed(c => !c)}
          className="collapse-btn"
          style={{ justifyContent: collapsed ? 'center' : undefined }}
        >
          <ChevronIcon style={{ width: 15, height: 15, flexShrink: 0 }} flipped={!collapsed} />
          {!collapsed && <span>Collapse</span>}
        </button>
      </div>
    </aside>
  )
}

/* ── Top bar ────────────────────────────────────────────────────── */
function Topbar({ isOnline, alerts }) {
  const location = useLocation()
  const current  = NAV_ITEMS.find(n => n.to === location.pathname)

  return (
    <>
      <div className="topbar">
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="topbar-title">{current?.label ?? 'JotnoSathi'}</div>
          {alerts.length > 0 && (
            <div className="topbar-alert">
              🔴 {alerts[0].message}
              {alerts.length > 1 && (
                <span style={{ color: 'var(--text-3)', marginLeft: 4 }}>
                  +{alerts.length - 1} more
                </span>
              )}
            </div>
          )}
        </div>

        <div className={`live-badge ${isOnline ? 'online' : 'offline'}`}>
          <span className={`live-dot ${isOnline ? 'online' : 'offline'}`} />
          {isOnline ? 'Live' : 'Offline'}
        </div>

        <a href="tel:999" className="emergency-btn">
          <AmbulanceIcon style={{ width: 13, height: 13 }} />
          999
        </a>
      </div>

      {/* Alert ticker — shown only when there are alerts */}
      {alerts.length > 0 && (
        <div className="alert-ticker">
          <span className="ticker-badge">
            <BroadcastIcon style={{ width: 11, height: 11 }} />
            Live alerts
          </span>
          <div className="ticker-scroll">
            {alerts.map((a, i) => (
              <span key={i}>
                {i > 0 && <span style={{ margin: '0 10px', opacity: 0.4 }}>·</span>}
                ⚠ {a.message}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

/* ── Mobile header ──────────────────────────────────────────────── */
function MobileHeader({ isOnline, alerts }) {
  const location = useLocation()
  const current  = NAV_ITEMS.find(n => n.to === location.pathname)

  return (
    <header className="mobile-header">
      <div className="mobile-logo">
        <HeartPlusIcon style={{ width: 14, height: 14 }} />
      </div>
      <span className="mobile-title">{current?.label ?? 'JotnoSathi'}</span>
      {alerts.length > 0 && (
        <span style={{ fontSize: 11, color: 'var(--red-text)', fontWeight: 600 }}>🔴</span>
      )}
      <span
        style={{
          width: 8, height: 8, borderRadius: '50%', flexShrink: 0,
          background: isOnline ? 'var(--green-600)' : 'var(--orange)',
          marginLeft: 4,
        }}
      />
    </header>
  )
}

/* ── Mobile bottom nav ──────────────────────────────────────────── */
function BottomNav() {
  return (
    <nav className="bottom-nav">
      {NAV_ITEMS.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) => `bottom-nav-item${isActive ? ' active' : ''}`}
        >
          {({ isActive }) => (
            <>
              <Icon style={{ width: 20, height: 20, opacity: isActive ? 1 : 0.5 }} />
              {label}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  )
}

/* ── Footer ─────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <HeartPlusIcon style={{ width: 11, height: 11 }} />
          </div>
          <span className="footer-name">JotnoSathi</span>
          <span className="footer-sep">·</span>
          <span className="footer-desc">AI Health Assistant · Bangladesh</span>
        </div>
        <div className="footer-links">
          {NAV_ITEMS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `footer-link${isActive ? ' active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
        </div>
        <p className="footer-meta">WHO · HDX · DHS Bangladesh · Kaggle · 13 datasets</p>
      </div>
    </footer>
  )
}

/* ── Offline banner ─────────────────────────────────────────────── */
function OfflineBanner({ isOnline }) {
  if (isOnline) return null
  return (
    <div className="offline-banner">
      ⚠️ Offline Mode — Using cached data
    </div>
  )
}

/* ── Main layout ────────────────────────────────────────────────── */
function AppLayout({ isOnline, alerts, sessionLog, addToLog, onLogout }) {
  const [collapsed, setCollapsed] = useState(false)
  const location   = useLocation()
  const isRiskMap  = location.pathname === '/riskmap'
  const isReferral = location.pathname === '/referral'

  return (
    <div className="app-shell">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} isOnline={isOnline} onLogout={onLogout} />

      <div className="content-wrap">
        <OfflineBanner isOnline={isOnline} />
        <MobileHeader isOnline={isOnline} alerts={alerts} />

        <div style={{ display: 'none' }} className="md-show">
          <Topbar isOnline={isOnline} alerts={alerts} />
        </div>
        {/* desktop topbar — always render, CSS hides on mobile */}
        <Topbar isOnline={isOnline} alerts={alerts} />

        <main className="main-scroll">
          <div className="main-inner">
            <Routes>
              <Route path="/"          element={<Navigate to="/triage" replace />} />
              <Route path="/triage"    element={<TriageTab addToLog={addToLog} />} />
              <Route path="/reports"   element={<ReportsTab />} />
              <Route path="/log"       element={<LogTab sessionLog={sessionLog} />} />
              <Route path="/riskmap"   element={<RiskMapTab isActive={isRiskMap} />} />
              <Route path="/referral"  element={<ReferralTab isActive={isReferral} />} />
            </Routes>
          </div>
          <Footer />
        </main>
      </div>

      <BottomNav />
    </div>
  )
}

/* ── Root ───────────────────────────────────────────────────────── */
export default function App() {
  const [screen, setScreen] = useState(
    localStorage.getItem('token') ? 'app' : 'landing'
  )
  const [isOnline, setIsOnline]     = useState(navigator.onLine)
  const [alerts, setAlerts]         = useState([])
  const [sessionLog, setSessionLog] = useState(() =>
    JSON.parse(localStorage.getItem('jotnosathi_log') || '[]')
  )
  const [disclaimerAck, setDisclaimerAck] = useState(
    () => !!sessionStorage.getItem('jotnosathi_disclaimer_ack')
  )

  function acknowledgeDisclaimer() {
    sessionStorage.setItem('jotnosathi_disclaimer_ack', '1')
    setDisclaimerAck(true)
  }

  function handleLogin() { setScreen('app') }

  function handleLogout() {
    localStorage.removeItem('token')
    sessionStorage.removeItem('jotnosathi_disclaimer_ack')
    setDisclaimerAck(false)
    setScreen('landing')
  }

  useEffect(() => {
    const on  = () => setIsOnline(true)
    const off = () => setIsOnline(false)
    window.addEventListener('online',  on)
    window.addEventListener('offline', off)
    return () => {
      window.removeEventListener('online',  on)
      window.removeEventListener('offline', off)
    }
  }, [])

  useEffect(() => {
    if (screen !== 'app') return
    fetch(`${API}/alerts`)
      .then(r => r.json())
      .then(d => { if (d.alerts?.length) setAlerts(d.alerts) })
      .catch(() => {})

    // Keep Render backend alive — pings /health every 10 min to prevent spin-down
    const keepAlive = setInterval(() => {
      fetch(`${API}/health`).catch(() => {})
    }, 10 * 60 * 1000)
    return () => clearInterval(keepAlive)
  }, [screen])

  function addToLog(entry) {
    setSessionLog(prev => {
      const next = [entry, ...prev].slice(0, 50)
      localStorage.setItem('jotnosathi_log', JSON.stringify(next))
      return next
    })
  }

  if (screen === 'landing') {
    return (
      <Landing
        onGetStarted={() => setScreen('login')}
        onLogin={() => setScreen('login')}
      />
    )
  }

  if (screen === 'login') {
    return (
      <Login
        onLogin={handleLogin}
        onBack={() => setScreen('landing')}
      />
    )
  }

  return (
    <>
      <style>{CSS}</style>

      {!disclaimerAck && (
        <EthicalDisclaimer onAcknowledge={acknowledgeDisclaimer} />
      )}

      <BrowserRouter>
        <AppLayout
          isOnline={isOnline}
          alerts={alerts}
          sessionLog={sessionLog}
          addToLog={addToLog}
          onLogout={handleLogout}
        />
      </BrowserRouter>
    </>
  )
}