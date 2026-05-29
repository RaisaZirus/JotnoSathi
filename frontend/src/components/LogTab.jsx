import {
  Activity,
  AlertTriangle,
  CalendarClock,
  ClipboardList,
  Clock3,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from 'lucide-react'

import { motion, AnimatePresence } from 'framer-motion'

import { DISEASE_FIELDS } from '../constants'
import Badge from './Badge'

/* ───────────────────────────── */
/* EMPTY STATE (THEME FIXED)     */
/* ───────────────────────────── */

function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center rounded-3xl border border-[#E6F2EF] bg-white px-6 py-20 text-center shadow-sm"
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#ECFDF5] to-[#F0FDFA] text-[#0F766E] shadow-inner">
        <ClipboardList size={34} />
      </div>

      <h3 className="mt-6 text-xl font-black tracking-tight text-[#0F172A]">
        No cases logged yet
      </h3>

      <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#64748B]">
        Field observations and patient sessions recorded today will appear here in real time.
      </p>

      <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#A7F3D0] bg-[#ECFDF5] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#0F766E]">
        <Sparkles size={13} />
        Live session monitoring active
      </div>
    </motion.div>
  )
}

/* ───────────────────────────── */
/* STATS CARD (THEME FIXED)      */
/* ───────────────────────────── */

function StatCard({ icon, label, value, color }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="rounded-3xl border border-[#E6F2EF] bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#94A3B8]">
            {label}
          </p>

          <div className="mt-3 text-3xl font-black tracking-tight" style={{ color }}>
            {value}
          </div>
        </div>

        <div
          className="flex h-12 w-12 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: `${color}15`,
            color,
          }}
        >
          {icon}
        </div>
      </div>
    </motion.div>
  )
}

/* ───────────────────────────── */
/* LOG CARD (FULL FIXED THEME)   */
/* ───────────────────────────── */

function LogCard({ entry, index }) {
  const diseaseConfig = entry.disease ? DISEASE_FIELDS[entry.disease] : null

  const diseaseColor = diseaseConfig?.color || '#0F766E'
  const risk = (entry.risk || '').toLowerCase()

  const accentClass =
    risk === 'critical'
      ? 'from-[#EF4444] to-[#F97316]'
      : risk === 'high'
      ? 'from-[#F59E0B] to-[#FBBF24]'
      : 'from-[#0F766E] to-[#14B8A6]'

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      whileHover={{ y: -2 }}
      className="group overflow-hidden rounded-3xl border border-[#E6F2EF] bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
    >
      <div className={`h-1.5 w-full bg-gradient-to-r ${accentClass}`} />

      <div className="p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">

          {/* LEFT */}
          <div className="min-w-0 flex-1">

            <div className="flex items-center gap-3">

              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-lg shadow-sm"
                style={{ backgroundColor: `${diseaseColor}15`, color: diseaseColor }}
              >
                {diseaseConfig?.icon || '🩺'}
              </div>

              <div className="min-w-0">

                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="truncate text-base font-black tracking-tight text-[#0F172A]">
                    {entry.disease
                      ? entry.disease.replaceAll('_', ' ').replace(/\b\w/g, l => l.toUpperCase())
                      : 'General Case'}
                  </h3>

                  <Badge level={entry.risk || 'moderate'} />
                </div>

                <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-[#94A3B8]">
                  <div className="flex items-center gap-1">
                    <Clock3 size={12} />
                    {entry.time}
                  </div>

                  <div className="flex items-center gap-1">
                    <Activity size={12} />
                    Session #{index + 1}
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-[#E6F2EF] bg-gradient-to-br from-[#F0FDFA] to-[#F8FAFC] p-4">

              <div className="mb-2 flex items-center gap-2 text-[#0F766E]">
                <Stethoscope size={14} />
                <span className="text-xs font-bold uppercase tracking-wide">
                  Symptoms & Notes
                </span>
              </div>

              <p className="text-sm leading-relaxed text-[#334155]">
                {entry.symptoms || 'No symptoms recorded.'}
              </p>

            </div>
          </div>

          {/* RIGHT BADGES */}
          <div className="flex flex-row gap-3 lg:flex-col">

            {entry.followUp && (
              <div className="inline-flex items-center gap-2 rounded-2xl border border-[#A7F3D0] bg-[#ECFDF5] px-3 py-2 text-xs font-semibold text-[#0F766E]">
                <CalendarClock size={13} />
                Follow-up
              </div>
            )}

            {risk === 'critical' ? (
              <div className="inline-flex items-center gap-2 rounded-2xl border border-[#FECACA] bg-[#FEF2F2] px-3 py-2 text-xs font-semibold text-[#B91C1C]">
                <AlertTriangle size={13} />
                Immediate attention
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 rounded-2xl border border-[#A7F3D0] bg-[#ECFDF5] px-3 py-2 text-xs font-semibold text-[#0F766E]">
                <ShieldCheck size={13} />
                Logged safely
              </div>
            )}

          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ───────────────────────────── */
/* MAIN COMPONENT (UNCHANGED)    */
/* ───────────────────────────── */

export default function LogTab({ sessionLog = [] }) {
  const criticalCount = sessionLog.filter(s => s.risk?.toLowerCase() === 'critical').length
  const highCount = sessionLog.filter(s => s.risk?.toLowerCase() === 'high').length
  const uniqueDiseases = new Set(sessionLog.map(s => s.disease).filter(Boolean)).size

  return (
    <div className="mx-auto max-w-7xl space-y-8 bg-gradient-to-b from-[#F0FDFA] via-white to-[#F8FAFC] px-4 py-8 animate-fadeIn">

      {/* HEADER (unchanged logic, theme fixed) */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#A7F3D0] bg-[#ECFDF5] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#0F766E]">
            <Sparkles size={13} />
            Live Session Registry
          </div>

          <h1 className="mt-4 text-3xl font-black tracking-tight text-[#0F172A]">
            Session Log
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#64748B]">
            Real-time overview of field observations, disease reports,
            and patient interactions recorded during today’s surveillance session.
          </p>
        </div>

        <div className="rounded-3xl border border-[#E6F2EF] bg-white px-5 py-4 shadow-sm">
          <p className="text-[11px] font-bold uppercase tracking-wide text-[#94A3B8]">
            Active Cases Today
          </p>

          <div className="mt-2 flex items-end gap-2">
            <span className="text-4xl font-black text-[#0F766E]">
              {sessionLog.length}
            </span>

            <span className="pb-1 text-sm font-semibold text-[#94A3B8]">
              case{sessionLog.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>

      </div>

      {/* STATS */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

        <StatCard label="Total Cases" value={sessionLog.length} color="#0F766E" icon={<ClipboardList size={18} />} />
        <StatCard label="Critical" value={criticalCount} color="#EF4444" icon={<AlertTriangle size={18} />} />
        <StatCard label="High Risk" value={highCount} color="#F59E0B" icon={<Activity size={18} />} />
        <StatCard label="Disease Types" value={uniqueDiseases} color="#14B8A6" icon={<Stethoscope size={18} />} />

      </div>

      {/* TIMELINE */}
      <div className="overflow-hidden rounded-3xl border border-[#E6F2EF] bg-white shadow-sm">

        <div className="flex items-center justify-between border-b border-[#E6F2EF] px-6 py-5">

          <div>
            <h3 className="text-sm font-black text-[#0F172A]">Case Timeline</h3>
            <p className="mt-1 text-xs text-[#94A3B8]">
              Chronological activity from today’s field session
            </p>
          </div>

          <div className="hidden rounded-full border border-[#FDE68A] bg-[#FFFBEB] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#B45309] sm:block">
            Live Updates
          </div>

        </div>

        <div className="px-6 py-6">

          <AnimatePresence mode="popLayout">
            {!sessionLog.length ? (
              <EmptyState />
            ) : (
              <div className="space-y-5">
                {sessionLog.map((entry, index) => (
                  <LogCard key={`${entry.time}-${index}`} entry={entry} index={index} />
                ))}
              </div>
            )}
          </AnimatePresence>

        </div>

      </div>

    </div>
  )
}