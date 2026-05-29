import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink, useLocation, Navigate } from 'react-router-dom'
import { API } from './constants'
import TriageTab          from './components/TriageTab'
import ReportsTab         from './components/ReportsTab'
import LogTab             from './components/LogTab'
import RiskMapTab         from './components/RiskMapTab'
import ReferralTab        from './components/ReferralTab'
import EthicalDisclaimer  from './components/EthicalDisclaimer'

const NAV_ITEMS = [
  { to: '/triage',   label: 'Triage',    icon: TriageIcon },
  { to: '/reports',  label: 'Reports',   icon: ReportsIcon },
  { to: '/log',      label: 'Log',       icon: LogIcon },
  { to: '/riskmap',  label: 'Risk Map',  icon: RiskIcon },
  { to: '/referral', label: 'Referral',  icon: ReferralIcon },
]

/* ── SVG Icons ─────────────────────────────────────────────────── */
function TriageIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  )
}
function ReportsIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14,2 14,8 20,8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10,9 9,9 8,9"/>
    </svg>
  )
}
function LogIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  )
}
function RiskIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="3,11 22,2 13,21 11,13 3,11"/>
    </svg>
  )
}
function ReferralIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9,22 9,12 15,12 15,22"/>
    </svg>
  )
}
function ChevronIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9,18 15,12 9,6"/>
    </svg>
  )
}

/* ── Sidebar ────────────────────────────────────────────────────── */
function Sidebar({ collapsed, setCollapsed, isOnline }) {
  return (
    <aside className={`
      hidden md:flex flex-col bg-white border-r border-gray-100
      transition-all duration-300 ease-in-out shrink-0
      ${collapsed ? 'w-[64px]' : 'w-[220px]'}
    `}>
      {/* Logo area */}
      <div className={`flex items-center h-16 border-b border-gray-100 px-4 ${collapsed ? 'justify-center' : 'gap-3'}`}>
        <div className="w-8 h-8 bg-forest-600 rounded-lg flex items-center justify-center text-white text-sm font-bold shrink-0 select-none">N</div>
        {!collapsed && (
          <div className="overflow-hidden">
            <div className="text-sm font-semibold text-gray-900 leading-tight">Niramoy</div>
            <div className="text-[10px] text-gray-400 leading-tight">AI Health Assistant</div>
          </div>
        )}
      </div>

      {/* Nav links */}
      <nav className="flex-1 py-3 px-2 space-y-0.5 overflow-y-auto">
        {NAV_ITEMS.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `
              flex items-center gap-3 rounded-lg px-2.5 py-2.5 text-sm font-medium
              transition-all duration-150 group relative
              ${isActive
                ? 'bg-forest-50 text-forest-700'
                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'
              }
              ${collapsed ? 'justify-center' : ''}
            `}
          >
            {({ isActive }) => (
              <>
                <Icon className={`w-[18px] h-[18px] shrink-0 transition-colors ${isActive ? 'text-forest-600' : 'text-gray-400 group-hover:text-gray-600'}`} />
                {!collapsed && <span className="truncate">{label}</span>}
                {isActive && !collapsed && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-forest-500" />
                )}
                {collapsed && (
                  <div className="absolute left-full ml-3 px-2.5 py-1.5 bg-gray-900 text-white text-xs rounded-lg
                    opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 shadow-lg">
                    {label}
                    <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-900" />
                  </div>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Bottom section */}
      <div className="border-t border-gray-100 p-3 space-y-2">
        {!collapsed && (
          <div className={`flex items-center gap-2 px-2.5 py-2 rounded-lg text-xs font-medium
            ${isOnline ? 'bg-green-50 text-green-700' : 'bg-orange-50 text-orange-700'}`}>
            <div className={`w-1.5 h-1.5 rounded-full ${isOnline ? 'bg-green-500' : 'bg-orange-500'}`} />
            {isOnline ? 'Connected' : 'Offline'}
          </div>
        )}
        <button
          onClick={() => setCollapsed(c => !c)}
          className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs
            text-gray-400 hover:text-gray-700 hover:bg-gray-50 transition-colors
            ${collapsed ? 'justify-center' : ''}`}
        >
          <ChevronIcon className={`w-4 h-4 shrink-0 transition-transform duration-300 ${collapsed ? 'rotate-0' : 'rotate-180'}`} />
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
    <div className="h-16 bg-white border-b border-gray-100 flex items-center px-6 gap-4 shrink-0">
      <div className="flex-1 min-w-0">
        <h2 className="text-base font-semibold text-gray-900 truncate">{current?.label ?? 'Niramoy'}</h2>
        {alerts.length > 0 && (
          <div className="text-xs text-red-600 font-medium truncate">
            🔴 {alerts[0].message}
            {alerts.length > 1 && <span className="text-red-400"> +{alerts.length - 1} more</span>}
          </div>
        )}
      </div>
      <div className={`hidden sm:flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full
        ${isOnline ? 'bg-green-50 text-green-700' : 'bg-orange-50 text-orange-700'}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${isOnline ? 'bg-green-500 animate-pulse' : 'bg-orange-500'}`} />
        {isOnline ? 'Live' : 'Offline'}
      </div>
      <a href="tel:999"
        className="hidden sm:flex items-center gap-1.5 bg-red-50 hover:bg-red-100 text-red-700 text-xs font-semibold px-3 py-1.5 rounded-full transition-colors">
        🚑 999
      </a>
    </div>
  )
}

/* ── Mobile bottom nav ──────────────────────────────────────────── */
function BottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 flex">
      {NAV_ITEMS.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) => `
            flex-1 flex flex-col items-center justify-center gap-1 py-2.5
            text-[10px] font-semibold transition-colors
            ${isActive ? 'text-forest-600' : 'text-gray-400'}
          `}
        >
          {({ isActive }) => (
            <>
              <Icon className={`w-5 h-5 ${isActive ? 'text-forest-600' : 'text-gray-400'}`} />
              {label}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  )
}

/* ── Mobile header ──────────────────────────────────────────────── */
function MobileHeader({ isOnline, alerts }) {
  const location = useLocation()
  const current  = NAV_ITEMS.find(n => n.to === location.pathname)

  return (
    <header className="md:hidden h-14 bg-white border-b border-gray-100 flex items-center px-4 gap-3 shrink-0 sticky top-0 z-40">
      <div className="w-7 h-7 bg-forest-600 rounded-lg flex items-center justify-center text-white text-xs font-bold">N</div>
      <div className="flex-1 min-w-0">
        <span className="text-sm font-semibold text-gray-900">{current?.label ?? 'Niramoy'}</span>
        {alerts.length > 0 && (
          <span className="ml-2 text-xs text-red-600 font-medium">🔴 Alert</span>
        )}
      </div>
      <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-400' : 'bg-orange-400'}`} />
    </header>
  )
}

/* ── Footer ─────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-100 px-6 py-4 bg-white">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-forest-600 rounded flex items-center justify-center text-white text-[10px] font-bold">N</div>
          <span className="text-xs font-medium text-gray-500">Niramoy</span>
          <span className="text-xs text-gray-300">·</span>
          <span className="text-xs text-gray-400">AI Health Assistant · Bangladesh</span>
        </div>
        <div className="flex items-center gap-4">
          {NAV_ITEMS.map(({ to, label }) => (
            <NavLink key={to} to={to}
              className={({ isActive }) =>
                `text-xs transition-colors ${isActive ? 'text-forest-600 font-semibold' : 'text-gray-400 hover:text-gray-600'}`}>
              {label}
            </NavLink>
          ))}
        </div>
        <p className="text-[10px] text-gray-300 w-full sm:w-auto text-right">
          WHO/HDX · DHS Bangladesh · Kaggle · 13 datasets
        </p>
      </div>
    </footer>
  )
}

/* ── Offline banner ─────────────────────────────────────────────── */
function OfflineBanner({ isOnline }) {
  if (isOnline) return null
  return (
    <div className="bg-orange-500 text-white text-center py-2 text-xs font-semibold tracking-wide shrink-0">
      ⚠️ Offline Mode — Using cached data
    </div>
  )
}

/* ── Main layout ────────────────────────────────────────────────── */
function AppLayout({ isOnline, alerts, sessionLog, addToLog }) {
  const [collapsed, setCollapsed] = useState(false)
  const location   = useLocation()
  const isRiskMap  = location.pathname === '/riskmap'
  const isReferral = location.pathname === '/referral'

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} isOnline={isOnline} />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <OfflineBanner isOnline={isOnline} />
        <MobileHeader isOnline={isOnline} alerts={alerts} />
        <div className="hidden md:block">
          <Topbar isOnline={isOnline} alerts={alerts} />
        </div>
        <main className="flex-1 overflow-y-auto pb-16 md:pb-0">
          <div className="max-w-2xl mx-auto">
            <Routes>
              <Route path="/"          element={<Navigate to="/triage" replace />} />
              <Route path="/triage"    element={<TriageTab  addToLog={addToLog} />} />
              <Route path="/reports"   element={<ReportsTab />} />
              <Route path="/log"       element={<LogTab sessionLog={sessionLog} />} />
              <Route path="/riskmap"   element={<RiskMapTab  isActive={isRiskMap} />} />
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
  const [isOnline, setIsOnline]     = useState(navigator.onLine)
  const [alerts, setAlerts]         = useState([])
  const [sessionLog, setSessionLog] = useState(() =>
    JSON.parse(localStorage.getItem('niramoy_log') || '[]')
  )

  // ── Disclaimer state — persists for the browser session only ──────────────
  const [disclaimerAck, setDisclaimerAck] = useState(
    () => !!sessionStorage.getItem('niramoy_disclaimer_ack')
  )

  function acknowledgeDisclaimer() {
    sessionStorage.setItem('niramoy_disclaimer_ack', '1')
    setDisclaimerAck(true)
  }
  // ─────────────────────────────────────────────────────────────────────────

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
    fetch(`${API}/alerts`)
      .then(r => r.json())
      .then(d => { if (d.alerts?.length) setAlerts(d.alerts) })
      .catch(() => {})
  }, [])

  function addToLog(entry) {
    setSessionLog(prev => {
      const next = [entry, ...prev].slice(0, 50)
      localStorage.setItem('niramoy_log', JSON.stringify(next))
      return next
    })
  }

  return (
    <>
      {/* Ethical AI disclaimer — shown on every new session until acknowledged */}
      {!disclaimerAck && (
        <EthicalDisclaimer onAcknowledge={acknowledgeDisclaimer} />
      )}

      <BrowserRouter>
        <AppLayout
          isOnline={isOnline}
          alerts={alerts}
          sessionLog={sessionLog}
          addToLog={addToLog}
        />
      </BrowserRouter>
    </>
  )
}