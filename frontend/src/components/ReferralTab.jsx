import { useEffect, useMemo, useRef, useState } from 'react'

import {
  Activity,
  Ambulance,
  Building2,
  Cross,
  ExternalLink,
  HeartHandshake,
  Hospital,
  Loader2,
  MapPinned,
  Phone,
  ShieldCheck,
} from 'lucide-react'

import { motion } from 'framer-motion'

import { REFERRAL_FACILITIES } from '../constants'

const EMERGENCY_CONTACTS = [
  {
    icon: Ambulance,
    label: 'National Emergency',
    number: '999',
    description: '24/7 emergency ambulance & police support',
    accent: 'from-red-500 to-rose-500',
  },
  {
    icon: Hospital,
    label: 'DGHS Hotline',
    number: '16767',
    description: 'Government health information hotline',
    accent: 'from-blue-500 to-cyan-500',
  },
  {
    icon: HeartHandshake,
    label: 'Maternal Care',
    number: '16743',
    description: 'Maternal & neonatal emergency assistance',
    accent: 'from-pink-500 to-rose-500',
  },
  {
    icon: Activity,
    label: 'Dengue Support',
    number: '10655',
    description: 'Dengue prevention & response hotline',
    accent: 'from-emerald-500 to-teal-500',
  },
]

/* ──────────────────────────────────────────────────────────
   Reusable Section Card
────────────────────────────────────────────────────────── */
function SectionCard({
  title,
  subtitle,
  icon,
  children,
  accent = 'blue',
}) {
  const accents = {
    blue: 'from-blue-500 to-cyan-500',
    emerald: 'from-emerald-500 to-teal-500',
    rose: 'from-rose-500 to-red-500',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="bg-white border border-slate-200/80 rounded-3xl shadow-sm shadow-slate-100 overflow-hidden"
    >
      <div className="flex items-center gap-4 px-6 py-5 border-b border-slate-100">
        <div
          className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${accents[accent]} flex items-center justify-center text-white shadow-lg shadow-slate-200 flex-shrink-0`}
        >
          {icon}
        </div>

        <div className="min-w-0">
          <h2 className="text-[15px] font-bold text-slate-900 leading-tight">
            {title}
          </h2>

          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="p-6">{children}</div>
    </motion.div>
  )
}

/* ──────────────────────────────────────────────────────────
   Facility Card
────────────────────────────────────────────────────────── */
function FacilityCard({ facility }) {
  const tertiary = facility.type === 'tertiary'

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="group bg-slate-50/80 hover:bg-white border border-slate-200 rounded-2xl p-4 transition-all duration-200 hover:shadow-md"
    >
      <div className="flex items-start gap-4">
        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm ${
            tertiary
              ? 'bg-red-50 text-red-600'
              : 'bg-emerald-50 text-emerald-600'
          }`}
        >
          {tertiary ? (
            <Hospital size={20} />
          ) : (
            <Building2 size={20} />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="text-sm font-bold text-slate-800 leading-snug">
                {facility.name}
              </h3>

              <div className="flex flex-wrap items-center gap-2 mt-2">
                <span
                  className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase ${
                    tertiary
                      ? 'bg-red-100 text-red-700'
                      : 'bg-emerald-100 text-emerald-700'
                  }`}
                >
                  {tertiary
                    ? 'Tertiary Hospital'
                    : 'District Facility'}
                </span>
              </div>
            </div>

            <button
              className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 hover:text-slate-700"
              title="View location"
            >
              <ExternalLink size={15} />
            </button>
          </div>

          <div className="flex items-center gap-1.5 mt-3 text-xs text-slate-500">
            <MapPinned size={13} />
            <span>
              {facility.lat.toFixed(3)}, {facility.lng.toFixed(3)}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ──────────────────────────────────────────────────────────
   Emergency Contact Card
────────────────────────────────────────────────────────── */
function EmergencyCard({
  icon: Icon,
  label,
  number,
  description,
  accent,
}) {
  return (
    <motion.a
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      href={`tel:${number}`}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-200 hover:shadow-lg hover:shadow-slate-200 block"
    >
      <div
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent}`}
      />

      <div className="flex items-start gap-4">
        <div
          className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${accent} text-white flex items-center justify-center shadow-md flex-shrink-0`}
        >
          <Icon size={18} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-sm font-bold text-slate-800">
              {label}
            </h3>

            <Phone
              size={15}
              className="text-slate-300 group-hover:text-slate-500 transition-colors"
            />
          </div>

          <p className="mt-1.5 text-[11px] text-slate-500 leading-relaxed">
            {description}
          </p>

          <div className="mt-3 font-mono text-2xl font-black tracking-tight text-slate-900">
            {number}
          </div>
        </div>
      </div>
    </motion.a>
  )
}

/* ──────────────────────────────────────────────────────────
   Main Component
────────────────────────────────────────────────────────── */
export default function ReferralTab({ isActive }) {
  const mapRef = useRef(null)
  const mapInitRef = useRef(false)

  const [loadingMap, setLoadingMap] = useState(true)

  const tertiaryCount = useMemo(
    () =>
      REFERRAL_FACILITIES.filter(
        f => f.type === 'tertiary'
      ).length,
    []
  )

  const districtCount = useMemo(
    () =>
      REFERRAL_FACILITIES.filter(
        f => f.type === 'district'
      ).length,
    []
  )

  useEffect(() => {
    if (!isActive || mapInitRef.current) return

    import('leaflet').then(L => {
      if (mapInitRef.current) return

      mapInitRef.current = true

      const map = L.default
        .map(mapRef.current, {
          zoomControl: false,
        })
        .setView([23.8103, 90.4125], 7)

      L.default.control
        .zoom({
          position: 'topright',
        })
        .addTo(map)

      L.default
        .tileLayer(
          'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            attribution: '© OpenStreetMap',
          }
        )
        .addTo(map)

      const colors = {
        tertiary: '#dc2626',
        district: '#059669',
      }

      REFERRAL_FACILITIES.forEach(facility => {
        const tertiary = facility.type === 'tertiary'

        L.default
          .circleMarker([facility.lat, facility.lng], {
            radius: tertiary ? 10 : 8,
            fillColor: colors[facility.type],
            color: '#ffffff',
            weight: 3,
            fillOpacity: 0.95,
          })
          .addTo(map)
          .bindPopup(`
            <div style="padding:4px 2px;min-width:180px">
              <div style="font-weight:700;font-size:14px;color:#0f172a;margin-bottom:6px">
                ${facility.name}
              </div>

              <div style="
                display:inline-flex;
                align-items:center;
                gap:6px;
                padding:5px 10px;
                border-radius:999px;
                font-size:11px;
                font-weight:700;
                background:${tertiary ? '#fef2f2' : '#ecfdf5'};
                color:${tertiary ? '#b91c1c' : '#047857'};
              ">
                ${
                  tertiary
                    ? '🏥 Tertiary Hospital'
                    : '🏨 District Facility'
                }
              </div>
            </div>
          `)
      })

      setLoadingMap(false)
    })
  }, [isActive])

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-7 animate-fadeIn">

      {/* ── Header ───────────────────────── */}
      <div className="flex flex-col gap-4">

        <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold tracking-wide uppercase">
          <ShieldCheck size={13} />
          Emergency Referral Network
        </div>

        <div className="space-y-4">

          <div className="max-w-3xl">
            <h1 className="text-3xl font-black tracking-tight text-slate-900">
              National Referral Coordination
            </h1>

            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              Real-time healthcare referral mapping for tertiary hospitals,
              district facilities, emergency response coordination, and
              community healthcare escalation pathways across Bangladesh.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

            {[
              {
                label: 'Facilities',
                value: REFERRAL_FACILITIES.length,
                color:
                  'bg-blue-50 text-blue-700 border-blue-100',
              },
              {
                label: 'Tertiary',
                value: tertiaryCount,
                color:
                  'bg-red-50 text-red-700 border-red-100',
              },
              {
                label: 'District',
                value: districtCount,
                color:
                  'bg-emerald-50 text-emerald-700 border-emerald-100',
              },
              {
                label: 'Coverage',
                value: '8 Div',
                color:
                  'bg-violet-50 text-violet-700 border-violet-100',
              },
            ].map(stat => (
              <div
                key={stat.label}
                className={`rounded-2xl border px-4 py-4 ${stat.color}`}
              >
                <div className="text-2xl font-black leading-none">
                  {stat.value}
                </div>

                <div className="mt-1 text-[11px] font-bold uppercase tracking-wide opacity-80">
                  {stat.label}
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* ── Map Section ───────────────────────── */}
      <SectionCard
        title="Interactive Referral Map"
        subtitle="Live overview of hospitals and district referral facilities"
        icon={<MapPinned size={19} />}
        accent="blue"
      >

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4 mb-5">

          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded-full bg-red-600 ring-4 ring-red-100" />

            <span className="text-xs font-semibold text-slate-600">
              Tertiary Hospitals
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-600 ring-4 ring-emerald-100" />

            <span className="text-xs font-semibold text-slate-600">
              District Facilities
            </span>
          </div>

          <div className="text-xs text-slate-400 font-medium md:ml-auto">
            Tap a marker for facility details
          </div>
        </div>

        {/* Map */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-50">

          {loadingMap && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-white/90 backdrop-blur-sm">

              <Loader2
                size={24}
                className="animate-spin text-blue-500"
              />

              <p className="text-sm font-medium text-slate-500">
                Loading referral map...
              </p>
            </div>
          )}

          <div
            ref={mapRef}
            className="w-full"
            style={{ height: 540 }}
          />
        </div>
      </SectionCard>

      {/* ── Facilities Section ───────────────────────── */}
      <SectionCard
        title="Priority Referral Facilities"
        subtitle="High-capacity emergency and district healthcare centers"
        icon={<Cross size={18} />}
        accent="emerald"
      >

        <div className="space-y-4">

          {REFERRAL_FACILITIES.slice(0, 8).map(facility => (
            <FacilityCard
              key={`${facility.name}-${facility.lat}`}
              facility={facility}
            />
          ))}

        </div>
      </SectionCard>

      {/* ── Emergency Contacts ───────────────────────── */}
      <SectionCard
        title="Emergency Hotlines"
        subtitle="Direct access to national healthcare response services"
        icon={<Phone size={18} />}
        accent="rose"
      >

        <div className="space-y-4">

          {EMERGENCY_CONTACTS.map(contact => (
            <EmergencyCard
              key={contact.number}
              {...contact}
            />
          ))}

        </div>
      </SectionCard>

      {/* ── Promo Card ───────────────────────── */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white p-6 shadow-xl shadow-emerald-200">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_40%)]" />

        <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/10" />

        <div className="relative z-10">

          <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center mb-5">
            <ShieldCheck size={22} />
          </div>

          <h3 className="text-xl font-black tracking-tight leading-tight">
            Smart Referral Coordination
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-emerald-50">
            Integrated emergency routing and referral escalation improve
            healthcare accessibility, reduce response delays, and support
            rapid outbreak intervention across divisions.
          </p>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">

            {[
              '24/7 Emergency Support',
              'Division Coverage',
              'Live Referral Mapping',
              'Rapid Escalation',
            ].map(item => (
              <div
                key={item}
                className="rounded-2xl bg-white/10 backdrop-blur px-3 py-3 text-xs font-semibold text-center"
              >
                {item}
              </div>
            ))}

          </div>
        </div>
      </div>

    </div>
  )
}