import { useEffect, useRef } from 'react'
import { REFERRAL_FACILITIES } from '../constants'

const EMERGENCY_CONTACTS = [
  { icon: '🚑', label: 'Emergency',   number: '999' },
  { icon: '🏥', label: 'DGHS Hotline',number: '16767' },
  { icon: '👶', label: 'Maternal',    number: '16743' },
  { icon: '🦟', label: 'Dengue',      number: '10655' },
]

export default function ReferralTab({ isActive }) {
  const mapRef     = useRef(null)
  const mapInitRef = useRef(false)

  useEffect(() => {
    if (!isActive || mapInitRef.current) return
    // Dynamically import Leaflet to avoid SSR issues
    import('leaflet').then(L => {
      if (mapInitRef.current) return
      mapInitRef.current = true

      const map = L.default.map(mapRef.current).setView([23.8103, 90.4125], 7)
      L.default.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap',
      }).addTo(map)

      const colors = { tertiary: '#c62828', district: '#1a7f5a' }
      REFERRAL_FACILITIES.forEach(f => {
        L.default.circleMarker([f.lat, f.lng], {
          radius:      f.type === 'tertiary' ? 10 : 7,
          fillColor:   colors[f.type],
          color:       'white',
          weight:      2,
          fillOpacity: 0.9,
        }).addTo(map)
          .bindPopup(`<strong>${f.name}</strong><br><span style="color:${colors[f.type]}">${f.type === 'tertiary' ? '🏥 Tertiary' : '🏨 District'}</span>`)
      })
    })
  }, [isActive])

  return (
    <div className="page-body space-y-4 animate-fadeIn">
      <div>
        <h2 className="page-title">Referral Map</h2>
        <p className="page-subtitle">30 health facilities across all 8 divisions</p>
      </div>
      <div className="card">
        <div className="flex gap-3 mb-3">
          <span className="flex items-center gap-1.5 text-xs text-gray-500">
            <div className="w-3 h-3 rounded-full bg-red-700" />Tertiary
          </span>
          <span className="flex items-center gap-1.5 text-xs text-gray-500">
            <div className="w-2.5 h-2.5 rounded-full bg-forest-600" />District
          </span>
          <span className="text-xs text-gray-400 ml-auto">30 hospitals · tap a marker</span>
        </div>
        <div ref={mapRef} className="rounded-xl overflow-hidden border border-gray-100" style={{ height: 420 }} />
      </div>

      <div className="card">
        <h3 className="font-semibold text-gray-800 mb-3">📞 Emergency Contacts</h3>
        <div className="grid grid-cols-2 gap-2">
          {EMERGENCY_CONTACTS.map(c => (
            <a key={c.number} href={`tel:${c.number}`}
              className="bg-gray-50 hover:bg-forest-50 rounded-xl p-3 transition-colors group border border-gray-100 hover:border-forest-200 block">
              <div className="text-lg mb-0.5">{c.icon}</div>
              <div className="text-xs text-gray-500 group-hover:text-forest-700">{c.label}</div>
              <div className="text-xl font-bold text-gray-800 font-mono group-hover:text-forest-700 leading-tight">{c.number}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
