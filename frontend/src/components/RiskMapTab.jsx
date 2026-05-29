
import {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from 'react'

import {
  Activity,
  AlertCircle,
  ArrowRight,
  Brain,
  CheckCircle2,
  ChevronDown,
  ClipboardPlus,
  Loader2,
  MapPinned,
  ShieldAlert,
  Sparkles,
  TrendingUp,
  Waves,
  XCircle,
} from 'lucide-react'

import {
  motion,
  AnimatePresence,
} from 'framer-motion'

import {
  API,
  DISEASE_FIELDS,
  LEVEL_COLORS,
} from '../constants'

import Badge from './Badge'
import { parseFieldValue } from './DiseaseFields'

/* ────────────────────────────────────────────────────────────── */
/* Constants */
/* ────────────────────────────────────────────────────────────── */

const CARD_CLASS =
  'rounded-2xl border border-slate-200 bg-white'

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
}

const slideUp = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
}

const DISEASE_OPTIONS = [
  {
    value: 'dengue',
    label: 'Dengue',
    icon: '🦟',
  },
  {
    value: 'measles',
    label: 'Measles',
    icon: '🔴',
  },
  {
    value: 'maternal',
    label: 'Maternal / ANC',
    icon: '🤰',
  },
  {
    value: 'diabetes',
    label: 'Diabetes',
    icon: '🩸',
  },
  {
    value: 'bp',
    label: 'Hypertension',
    icon: '💊',
  },
]

/* ────────────────────────────────────────────────────────────── */
/* Helpers */
/* ────────────────────────────────────────────────────────────── */

function getRiskConfig(level) {
  switch ((level || '').toLowerCase()) {
    case 'critical':
      return {
        glow: 'shadow-red-100',
        bg: 'bg-red-50',
        border: 'border-red-200',
        text: 'text-red-700',
      }

    case 'high':
      return {
        glow: 'shadow-orange-100',
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        text: 'text-orange-700',
      }

    default:
      return {
        glow: 'shadow-amber-100',
        bg: 'bg-amber-50',
        border: 'border-amber-200',
        text: 'text-amber-700',
      }
  }
}

function clampScore(score) {
  return Math.max(
    0,
    Math.min(Number(score || 0), 100)
  )
}

/* ────────────────────────────────────────────────────────────── */
/* Stat Card */
/* ────────────────────────────────────────────────────────────── */

function StatCard({
  label,
  value,
  icon,
  color,
}) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className={`${CARD_CLASS} relative overflow-hidden px-5 py-4 shadow-sm`}
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
          className="flex h-11 w-11 items-center justify-center rounded-2xl"
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

/* ────────────────────────────────────────────────────────────── */
/* Division Row */
/* ────────────────────────────────────────────────────────────── */

function DivisionRow({
  name,
  data,
  selected,
  onClick,
}) {
  const [barWidth, setBarWidth] =
    useState(0)

  const score = clampScore(data?.score)

  const color =
    LEVEL_COLORS[
      data?.risk_level
    ] || '#64748b'

  const risk = getRiskConfig(
    data?.risk_level
  )

  useEffect(() => {
    const timer = setTimeout(() => {
      setBarWidth(score)
    }, 120)

    return () => clearTimeout(timer)
  }, [score])

  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.995 }}
      onClick={onClick}
      aria-expanded={selected}
      aria-label={`View ${name} division details`}
      className={`group relative w-full overflow-hidden rounded-2xl border bg-white text-left transition-all duration-200 ${
        selected
          ? `border-slate-300 shadow-lg ${risk.glow}`
          : 'border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md'
      }`}
    >
      <div
        className="absolute left-0 top-0 h-full w-1.5"
        style={{
          background: color,
        }}
      />

      <div className="px-5 py-4">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <MapPinned
                size={15}
                className="text-slate-400"
              />

              <h3 className="truncate text-sm font-bold text-slate-800">
                {name} Division
              </h3>
            </div>

            <p className="mt-1 truncate text-xs text-slate-400">
              {data?.top_factors?.[0] ||
                'Live outbreak surveillance'}
            </p>
          </div>

          <div className="flex flex-col items-end gap-2">
            <Badge
              level={data?.risk_level}
            />

            <div
              className="text-lg font-black tabular-nums"
              style={{ color }}
            >
              {score}
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
              Risk Score
            </span>

            <span className="text-[11px] font-semibold text-slate-500">
              /100
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-100">
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: `${barWidth}%`,
              }}
              transition={{
                duration: 0.7,
                ease: 'easeOut',
              }}
              className="h-full rounded-full"
              style={{
                background: color,
              }}
            />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-[11px] font-medium text-slate-400">
            Tap for live briefing
          </span>

          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${
              selected
                ? 'rotate-180 text-slate-700'
                : 'text-slate-300'
            }`}
          />
        </div>
      </div>
    </motion.button>
  )
}

/* ────────────────────────────────────────────────────────────── */
/* Quick Report Form */
/* ────────────────────────────────────────────────────────────── */

function QuickReportForm({
  division,
}) {
  const [disease, setDisease] =
    useState('')

  const [outcome, setOutcome] =
    useState('monitoring')

  const [fields, setFields] =
    useState({})

  const [status, setStatus] =
    useState(null)

  const [submitting, setSubmitting] =
    useState(false)

  const def =
    DISEASE_FIELDS[disease]

  async function submitFieldReport() {
    if (!disease) {
      setStatus({
        ok: false,
        msg: 'Please select a suspected disease.',
      })

      return
    }

    setSubmitting(true)
    setStatus(null)

    const payload = {
      division,
      symptoms: 'Field observation',
      outcome,
      disease_suspected: disease,
      worker_id:
        'shebika_' +
        Math.random()
          .toString(36)
          .slice(2, 8),
    }

    if (def) {
      def.fields
        .slice(0, 2)
        .forEach(f => {
          const val =
            parseFieldValue(
              f,
              fields[f.id]
            )

          if (val !== null) {
            payload[f.id] = val
          }
        })
    }

    try {
      const res = await fetch(
        `${API}/field-report`,
        {
          method: 'POST',
          headers: {
            'Content-Type':
              'application/json',
          },
          body: JSON.stringify(
            payload
          ),
        }
      )

      if (!res.ok) {
        throw new Error(
          'Failed to submit report'
        )
      }

      const d = await res.json()

      let msg =
        'Registry updated successfully.'

      if (
        d.report_type ===
        'outbreak'
      ) {
        msg = d.retrain_triggered
          ? `AI retraining triggered for ${division}.`
          : `Queue updated: ${d.queue_size}/5`
      }

      setStatus({
        ok: true,
        msg,
      })

      setFields({})
    } catch {
      setStatus({
        ok: false,
        msg: 'Could not submit report.',
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
          <ClipboardPlus size={18} />
        </div>

        <div>
          <h4 className="text-sm font-bold text-slate-800">
            Quick Field Observation
          </h4>

          <p className="text-xs text-slate-400">
            Submit real-time community
            health data
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <select
            value={disease}
            onChange={e => {
              setDisease(
                e.target.value
              )

              setFields({})
            }}
            className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 outline-none transition-all focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
          >
            <option value="">
              Select disease
            </option>

            {DISEASE_OPTIONS.map(
              d => (
                <option
                  key={d.value}
                  value={d.value}
                >
                  {d.icon} {d.label}
                </option>
              )
            )}
          </select>

          <select
            value={outcome}
            onChange={e =>
              setOutcome(
                e.target.value
              )
            }
            className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 outline-none transition-all focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
          >
            <option value="monitoring">
              Monitoring
            </option>

            <option value="treated">
              Treated
            </option>

            <option value="referred">
              Referred
            </option>
          </select>
        </div>

        <AnimatePresence>
          {def && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: 'auto',
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              className="space-y-3 overflow-hidden"
            >
              <div
                className={`rounded-xl border px-4 py-3 text-xs font-semibold ${
                  def.report_type ===
                  'outbreak'
                    ? 'border-orange-200 bg-orange-50 text-orange-700'
                    : 'border-blue-200 bg-blue-50 text-blue-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Sparkles size={13} />

                  <span>
                    {def.icon}{' '}
                    {def.label}
                  </span>
                </div>
              </div>

              {def.fields
                .slice(0, 2)
                .map(f => (
                  <div key={f.id}>
                    {f.type ===
                    'select' ? (
                      <select
                        value={
                          fields[
                            f.id
                          ] ?? ''
                        }
                        onChange={e =>
                          setFields(
                            prev => ({
                              ...prev,
                              [f.id]:
                                e.target
                                  .value,
                            })
                          )
                        }
                        className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none transition-all focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                      >
                        {f.options.map(
                          ([v, l]) => (
                            <option
                              key={v}
                              value={v}
                            >
                              {l}
                            </option>
                          )
                        )}
                      </select>
                    ) : (
                      <input
                        type="number"
                        min={f.min}
                        max={f.max}
                        placeholder={
                          f.placeholder ||
                          f.label
                        }
                        value={
                          fields[
                            f.id
                          ] ?? ''
                        }
                        onChange={e =>
                          setFields(
                            prev => ({
                              ...prev,
                              [f.id]:
                                e.target
                                  .value,
                            })
                          )
                        }
                        className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 placeholder:text-slate-400 outline-none transition-all focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                      />
                    )}
                  </div>
                ))}
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={submitFieldReport}
          disabled={submitting}
          className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-sm font-bold text-white shadow-lg shadow-blue-100 transition-all hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? (
            <>
              <Loader2
                size={15}
                className="animate-spin"
              />

              Submitting...
            </>
          ) : (
            <>
              Submit Observation

              <ArrowRight size={15} />
            </>
          )}
        </button>

        <AnimatePresence>
          {status && (
            <motion.div
              {...fadeIn}
              exit={{
                opacity: 0,
              }}
              className={`flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold ${
                status.ok
                  ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                  : 'border-red-200 bg-red-50 text-red-700'
              }`}
            >
              {status.ok ? (
                <CheckCircle2 size={15} />
              ) : (
                <XCircle size={15} />
              )}

              {status.msg}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

/* ────────────────────────────────────────────────────────────── */
/* Detail Panel */
/* ────────────────────────────────────────────────────────────── */

function DetailPanel({
  division,
  data,
}) {
  const [briefing, setBriefing] =
    useState('Loading briefing...')

  const score = clampScore(
    data?.score
  )

  const color =
    LEVEL_COLORS[
      data?.risk_level
    ] || '#64748b'

  const risk = getRiskConfig(
    data?.risk_level
  )

  useEffect(() => {
    const controller =
      new AbortController()

    async function loadBriefing() {
      try {
        setBriefing(
          'Loading briefing...'
        )

        const res = await fetch(
          `${API}/risk/${division}`,
          {
            signal:
              controller.signal,
          }
        )

        if (!res.ok) {
          throw new Error()
        }

        const d =
          await res.json()

        setBriefing(
          d.worker_briefing ||
            'No briefing available.'
        )
      } catch {
        setBriefing(
          (data?.top_factors || [])
            .map(f => `• ${f}`)
            .join('\n') ||
            'Unable to load briefing.'
        )
      }
    }

    loadBriefing()

    return () =>
      controller.abort()
  }, [division, data?.top_factors])

  return (
    <motion.div
      {...slideUp}
      className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-100"
    >
      <div
        className={`border-b px-6 py-5 ${risk.bg} ${risk.border}`}
      >
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-md"
                style={{
                  background: color,
                }}
              >
                <ShieldAlert size={20} />
              </div>

              <div>
                <h3 className="text-xl font-black tracking-tight text-slate-900">
                  {division} Division
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {data?.district_count ||
                    0}{' '}
                  districts monitored ·{' '}
                  {data?.risk_level} risk
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Badge
              level={data?.risk_level}
            />

            <div className="text-right">
              <div
                className="text-4xl font-black leading-none"
                style={{ color }}
              >
                {score}
              </div>

              <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
                Risk Score
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="h-3 overflow-hidden rounded-full bg-white/60">
            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: `${score}%`,
              }}
              transition={{
                duration: 0.8,
              }}
              className="h-full rounded-full"
              style={{
                background: color,
              }}
            />
          </div>
        </div>
      </div>

      <div className="space-y-6 px-6 py-6">
        <div className="overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-green-50">
          <div className="flex items-center gap-2 border-b border-emerald-100 px-5 py-4">
            <Brain
              size={16}
              className="text-emerald-600"
            />

            <h4 className="text-sm font-bold text-emerald-700">
              AI Worker Briefing
            </h4>
          </div>

          <div className="px-5 py-5">
            <p className="whitespace-pre-wrap text-sm leading-relaxed text-slate-700">
              {briefing}
            </p>
          </div>
        </div>

        <QuickReportForm
          division={division}
        />
      </div>
    </motion.div>
  )
}

/* ────────────────────────────────────────────────────────────── */
/* Main Component */
/* ────────────────────────────────────────────────────────────── */

export default function RiskMapTab({
  isActive,
}) {
  const [riskData, setRiskData] =
    useState({})

  const [summary, setSummary] =
    useState({
      critical: [],
      high: [],
      moderate: [],
    })

  const [lastUpdated, setLastUpdated] =
    useState(null)

  const [selectedDiv, setSelectedDiv] =
    useState(null)

  const [loadError, setLoadError] =
    useState(false)

  const [loading, setLoading] =
    useState(true)

  const pollRef = useRef(null)

  const loadRiskMap =
    useCallback(
      async (
        silent = false
      ) => {
        try {
          if (!silent) {
            setLoading(true)
          }

          const [
            riskRes,
            alertRes,
          ] = await Promise.all([
            fetch(
              `${API}/risk/all`
            ),
            fetch(
              `${API}/alerts`
            ),
          ])

          if (
            !riskRes.ok ||
            !alertRes.ok
          ) {
            throw new Error()
          }

          const riskJson =
            await riskRes.json()

          await alertRes.json()

          setRiskData(
            riskJson.divisions ||
              {}
          )

          setSummary(
            riskJson.summary || {
              critical: [],
              high: [],
              moderate: [],
            }
          )

          setLastUpdated(
            new Date().toLocaleTimeString()
          )

          setLoadError(false)
        } catch {
          if (!silent) {
            setLoadError(true)
          }
        } finally {
          setLoading(false)
        }
      },
      []
    )

  useEffect(() => {
    if (!isActive) {
      if (pollRef.current) {
        clearInterval(
          pollRef.current
        )
      }

      return
    }

    loadRiskMap()

    pollRef.current =
      setInterval(() => {
        loadRiskMap(true)
      }, 30000)

    return () => {
      if (pollRef.current) {
        clearInterval(
          pollRef.current
        )
      }
    }
  }, [isActive, loadRiskMap])

  const sorted = useMemo(() => {
    return Object.entries(
      riskData
    ).sort(
      (a, b) =>
        clampScore(b[1]?.score) -
        clampScore(a[1]?.score)
    )
  }, [riskData])

  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 animate-fadeIn">
      <div className="flex flex-col gap-4">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-blue-700">
          <Waves size={13} />
          Live Surveillance Network
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Bangladesh Risk Map
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500">
              Real-time
              division-level
              outbreak
              intelligence powered
              by live field
              reports,
              retraining
              feedback loops,
              public health
              datasets, and
              AI-assisted
              surveillance.
            </p>
          </div>

          {lastUpdated && (
            <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />

              <div>
                <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
                  Last Updated
                </p>

                <p className="text-sm font-semibold text-slate-700">
                  {lastUpdated}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Critical"
          value={
            summary.critical
              ?.length ?? '–'
          }
          color="#dc2626"
          icon={
            <ShieldAlert size={18} />
          }
        />

        <StatCard
          label="High Risk"
          value={
            summary.high
              ?.length ?? '–'
          }
          color="#ea580c"
          icon={
            <TrendingUp size={18} />
          }
        />

        <StatCard
          label="Moderate"
          value={
            summary.moderate
              ?.length ?? '–'
          }
          color="#ca8a04"
          icon={
            <Activity size={18} />
          }
        />

        <StatCard
          label="Datasets"
          value="13"
          color="#0891b2"
          icon={<Brain size={18} />}
        />
      </div>

      <AnimatePresence>
        {selectedDiv &&
          riskData[
            selectedDiv
          ] && (
            <DetailPanel
              division={
                selectedDiv
              }
              data={
                riskData[
                  selectedDiv
                ]
              }
            />
          )}
      </AnimatePresence>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
          <div>
            <h3 className="text-sm font-black text-slate-800">
              Division Risk
              Scores
            </h3>

            <p className="mt-1 text-xs text-slate-400">
              Tap a division to
              view disease
              analytics and AI
              briefing
            </p>
          </div>
        </div>

        <div className="px-6 py-6">
          {loadError && (
            <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-6 text-center">
              <div className="text-sm font-bold text-red-700">
                Could not load
                risk data
              </div>

              <p className="mt-1 text-xs text-red-500">
                Is the backend
                running on port
                8000?
              </p>
            </div>
          )}

          {loading &&
            !loadError && (
              <div className="space-y-4">
                {[1, 2, 3].map(
                  item => (
                    <div
                      key={item}
                      className="h-28 animate-pulse rounded-2xl bg-slate-100"
                    />
                  )
                )}
              </div>
            )}

          {!loading &&
            !sorted.length &&
            !loadError && (
              <div className="flex items-center justify-center gap-2 py-10 text-sm text-slate-400">
                <Loader2
                  size={16}
                  className="animate-spin"
                />

                No live data
                available
              </div>
            )}

          <div className="space-y-4">
            {sorted.map(
              ([name, data]) => (
                <DivisionRow
                  key={name}
                  name={name}
                  data={data}
                  selected={
                    selectedDiv ===
                    name
                  }
                  onClick={() =>
                    setSelectedDiv(
                      prev =>
                        prev ===
                        name
                          ? null
                          : name
                    )
                  }
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

