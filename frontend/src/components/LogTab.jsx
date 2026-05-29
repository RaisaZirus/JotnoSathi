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

function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center rounded-3xl border border-blue-100 bg-white px-6 py-20 text-center shadow-sm"
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-100 to-orange-100 text-blue-600 shadow-inner">
        <ClipboardList size={34} />
      </div>

      <h3 className="mt-6 text-xl font-black tracking-tight text-slate-800">
        No cases logged yet
      </h3>

      <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-500">
        Field observations and patient
        sessions recorded today will
        appear here in real time.
      </p>

      <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wide text-blue-700">
        <Sparkles size={13} />
        Live session monitoring active
      </div>
    </motion.div>
  )
}

function StatCard({
  icon,
  label,
  value,
  color,
}) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
            {label}
          </p>

          <div
            className="mt-3 text-3xl font-black tracking-tight"
            style={{ color }}
          >
            {value}
          </div>
        </div>

        <div
          className="flex h-12 w-12 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: `${color}14`,
            color,
          }}
        >
          {icon}
        </div>
      </div>
    </motion.div>
  )
}

function LogCard({
  entry,
  index,
}) {
  const diseaseConfig = entry.disease
    ? DISEASE_FIELDS[entry.disease]
    : null

  const diseaseColor =
    diseaseConfig?.color || '#2563eb'

  const risk =
    (entry.risk || '').toLowerCase()

  const accentClass =
    risk === 'critical'
      ? 'from-red-500 to-orange-400'
      : risk === 'high'
      ? 'from-orange-400 to-amber-300'
      : 'from-blue-500 to-cyan-400'

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 12,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: index * 0.04,
      }}
      whileHover={{
        y: -2,
      }}
      className="group overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
    >
      <div
        className={`h-1.5 w-full bg-gradient-to-r ${accentClass}`}
      />

      <div className="p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-3">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-lg shadow-sm"
                style={{
                  backgroundColor: `${diseaseColor}15`,
                }}
              >
                {diseaseConfig?.icon || '🩺'}
              </div>

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="truncate text-base font-black tracking-tight text-slate-800">
                    {entry.disease
                      ? entry.disease
                          .replaceAll(
                            '_',
                            ' '
                          )
                          .replace(
                            /\b\w/g,
                            l =>
                              l.toUpperCase()
                          )
                      : 'General Case'}
                  </h3>

                  <Badge
                    level={
                      entry.risk ||
                      'moderate'
                    }
                  />
                </div>

                <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-slate-400">
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

            <div className="mt-5 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50/60 to-orange-50/40 p-4">
              <div className="mb-2 flex items-center gap-2">
                <Stethoscope
                  size={14}
                  className="text-blue-500"
                />

                <span className="text-xs font-bold uppercase tracking-wide text-blue-700">
                  Symptoms & Notes
                </span>
              </div>

              <p className="text-sm leading-relaxed text-slate-700">
                {entry.symptoms ||
                  'No symptoms recorded.'}
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-3 lg:flex-col">
            {entry.followUp && (
              <div className="inline-flex items-center gap-2 rounded-2xl border border-blue-200 bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-700">
                <CalendarClock size={13} />
                Follow-up
              </div>
            )}

            {risk === 'critical' ? (
              <div className="inline-flex items-center gap-2 rounded-2xl border border-red-200 bg-orange-50 px-3 py-2 text-xs font-semibold text-orange-700">
                <AlertTriangle size={13} />
                Immediate attention
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 rounded-2xl border border-blue-200 bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-700">
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

export default function LogTab({
  sessionLog = [],
}) {
  const criticalCount =
    sessionLog.filter(
      s =>
        s.risk?.toLowerCase() ===
        'critical'
    ).length

  const highCount = sessionLog.filter(
    s =>
      s.risk?.toLowerCase() ===
      'high'
  ).length

  const uniqueDiseases = new Set(
    sessionLog
      .map(s => s.disease)
      .filter(Boolean)
  ).size

  return (
    <div className="mx-auto max-w-7xl space-y-8 bg-gradient-to-b from-blue-50/40 via-white to-orange-50/30 px-4 py-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-blue-700">
            <Sparkles size={13} />
            Live Session Registry
          </div>

          <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-900">
            Session Log
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500">
            Real-time overview of field
            observations, disease reports,
            and patient interactions
            recorded during today’s
            surveillance session.
          </p>
        </div>

        <div className="rounded-3xl border border-blue-100 bg-white px-5 py-4 shadow-sm">
          <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
            Active Cases Today
          </p>

          <div className="mt-2 flex items-end gap-2">
            <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-4xl font-black tracking-tight text-transparent">
              {sessionLog.length}
            </span>

            <span className="pb-1 text-sm font-semibold text-slate-400">
              case
              {sessionLog.length !== 1
                ? 's'
                : ''}
            </span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Total Cases"
          value={sessionLog.length}
          color="#2563eb"
          icon={<ClipboardList size={18} />}
        />

        <StatCard
          label="Critical"
          value={criticalCount}
          color="#f97316"
          icon={<AlertTriangle size={18} />}
        />

        <StatCard
          label="High Risk"
          value={highCount}
          color="#fb923c"
          icon={<Activity size={18} />}
        />

        <StatCard
          label="Disease Types"
          value={uniqueDiseases}
          color="#0ea5e9"
          icon={<Stethoscope size={18} />}
        />
      </div>

      {/* Timeline */}
      <div className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-blue-50 px-6 py-5">
          <div>
            <h3 className="text-sm font-black text-slate-800">
              Case Timeline
            </h3>

            <p className="mt-1 text-xs text-slate-400">
              Chronological activity from
              today’s field session
            </p>
          </div>

          <div className="hidden rounded-full border border-orange-100 bg-orange-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-orange-600 sm:block">
            Live Updates
          </div>
        </div>

        <div className="px-6 py-6">
          <AnimatePresence mode="popLayout">
            {!sessionLog.length ? (
              <EmptyState />
            ) : (
              <div className="space-y-5">
                {sessionLog.map(
                  (entry, index) => (
                    <LogCard
                      key={`${entry.time}-${index}`}
                      entry={entry}
                      index={index}
                    />
                  )
                )}
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}