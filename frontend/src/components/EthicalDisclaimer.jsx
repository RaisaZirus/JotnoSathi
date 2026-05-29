export default function EthicalDisclaimer({ onAcknowledge }) {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ background: 'rgba(15,23,42,0.72)' }}
    >
      <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">

        {/* HEADER */}
        <div className="flex items-center gap-3 bg-gradient-to-r from-[#0F766E] to-[#115E59] px-6 py-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-lg text-white">
            🏥
          </div>

          <div>
            <div className="text-sm font-semibold text-white">
              JotnoSathi
            </div>
            <div className="text-[11px] text-white/70">
              AI Clinical Decision Support
            </div>
          </div>

          <div className="ml-auto rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-medium text-white">
            BuildFest 2026
          </div>
        </div>

        {/* BODY */}
        <div className="px-6 py-5">

          <p className="mb-4 text-sm font-semibold text-[#0F766E]">
            ⚕️ Important — Please read before use
          </p>

          <div className="mb-5 space-y-3">

            <DisclaimerRow icon="🤝" title="Assists, does not replace">
              Supports clinical judgment. Final decisions remain with healthcare professionals.
            </DisclaimerRow>

            <DisclaimerRow icon="📋" title="Protocol-grounded">
              Based on WHO + DGHS guidelines. No diagnosis is provided — only recommendations.
            </DisclaimerRow>

            <DisclaimerRow icon="🚨" title="Emergency cases">
              Call{" "}
              <a href="tel:999" className="font-bold text-red-500 underline">
                999
              </a>{" "}
              immediately for emergencies. Do not wait for AI output.
            </DisclaimerRow>

            <DisclaimerRow icon="🔒" title="No personal data stored">
              Reports are anonymized for district-level risk analysis only.
            </DisclaimerRow>

            <DisclaimerRow icon="🇧🇩" title="For Shasthya Shebikas only">
              Intended for trained community health workers under DGHS guidelines.
            </DisclaimerRow>

          </div>

          {/* BANGLA NOTE */}
          <div className="mb-5 border-l-4 border-[#0F766E] bg-[#F0FDFA] px-4 py-3">
            <p className="text-sm font-medium text-[#0F766E]">
              তুমি একজন সহায়তাকারী, রোগ নির্ণয় করছ না।
            </p>
            <p className="mt-0.5 text-xs text-[#64748B]">
              You are assisting, not diagnosing.
            </p>
          </div>

          {/* BUTTON */}
          <button
            onClick={onAcknowledge}
            className="w-full rounded-xl bg-gradient-to-r from-[#0F766E] to-[#115E59] px-4 py-3 text-sm font-bold text-white shadow-md transition hover:opacity-95"
          >
            ✅ I understand — Continue
          </button>

          <p className="mt-3 text-center text-[11px] text-[#94A3B8]">
            This appears once per session
          </p>
        </div>
      </div>
    </div>
  )
}

function DisclaimerRow({ icon, title, children }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-base">{icon}</span>

      <div className="text-xs leading-relaxed text-[#64748B]">
        <span className="font-semibold text-[#0F172A]">
          {title}.{" "}
        </span>
        {children}
      </div>
    </div>
  )
}