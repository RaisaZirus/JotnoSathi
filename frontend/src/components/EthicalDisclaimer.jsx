/* EthicalDisclaimer.jsx
 * Drop into: src/components/EthicalDisclaimer.jsx
 * Usage: imported and rendered in App.jsx (see instructions below)
 */

export default function EthicalDisclaimer({ onAcknowledge }) {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.72)' }}>

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden
                      animate-[slideDown_0.3s_ease]">

        {/* ── Green header bar ── */}
        <div className="bg-forest-600 px-6 py-4 flex items-center gap-3">
          <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center
                          text-white text-lg shrink-0">🏥</div>
          <div>
            <div className="text-white font-semibold text-sm leading-tight">Niramoy</div>
            <div className="text-forest-200 text-[11px] leading-tight">AI Clinical Decision Support</div>
          </div>
          {/* Infinity AI BuildFest badge */}
          <div className="ml-auto text-[10px] bg-white/15 text-white px-2.5 py-1
                          rounded-full font-medium shrink-0">
            BuildFest 2026
          </div>
        </div>

        {/* ── Body ── */}
        <div className="px-6 pt-5 pb-4">

          <p className="text-sm font-semibold text-forest-700 mb-4">
            ⚕️ Important — Please read before use
          </p>

          <div className="space-y-3 mb-5">

            <DisclaimerRow icon="🤝" title="Assists, does not replace">
              Niramoy supports your clinical judgment. Final decisions always
              rest with you and qualified medical personnel.
            </DisclaimerRow>

            <DisclaimerRow icon="📋" title="Protocol-grounded">
              All advice is based on WHO and DGHS guidelines. This tool does
              not diagnose — it recommends actions based on established protocols.
            </DisclaimerRow>

            <DisclaimerRow icon="🚨" title="Emergency cases">
              If a patient is in immediate danger, call{' '}
              <a href="tel:999" className="font-bold text-red-600 underline">999</a>{' '}
              or refer to the nearest facility without delay. Do not wait for
              AI output.
            </DisclaimerRow>

            <DisclaimerRow icon="🔒" title="No personal data stored">
              Field reports contain no patient names or identifiers. Data is
              used only for district-level risk modelling.
            </DisclaimerRow>

            <DisclaimerRow icon="🇧🇩" title="For Shasthya Shebikas only">
              Designed for trained community health workers under DGHS
              guidelines. Not for self-diagnosis by patients.
            </DisclaimerRow>

          </div>

          {/* Bangla reminder */}
          <div className="bg-forest-50 border-l-4 border-forest-500 rounded-r-xl
                          px-4 py-3 mb-5">
            <p className="text-sm text-forest-800 font-medium leading-relaxed">
              তুমি একজন সহায়তাকারী, রোগ নির্ণয় করছ না।
            </p>
            <p className="text-xs text-forest-500 mt-0.5">
              You are assisting, not diagnosing.
            </p>
          </div>

          {/* Acknowledge button */}
          <button
            onClick={onAcknowledge}
            className="btn-primary"
          >
            ✅ I understand — Continue to Niramoy
          </button>

          <p className="text-center text-[11px] text-gray-300 mt-3">
            This notice appears once per session
          </p>
        </div>
      </div>
    </div>
  )
}

/* ── Helper row ── */
function DisclaimerRow({ icon, title, children }) {
  return (
    <div className="flex gap-3 items-start">
      <span className="text-base shrink-0 mt-0.5">{icon}</span>
      <div className="text-xs text-gray-600 leading-relaxed">
        <span className="font-semibold text-gray-800">{title}. </span>
        {children}
      </div>
    </div>
  )
}