import { DISEASE_FIELDS } from '../constants'
import Badge from './Badge'

export default function LogTab({ sessionLog }) {
  return (
    <div className="page-body animate-fadeIn">
      <div className="flex justify-between items-start mb-5">
        <div>
          <h2 className="page-title">Session Log</h2>
          <p className="page-subtitle mb-0">Cases seen today</p>
        </div>
        <span className="bg-forest-50 text-forest-700 text-xs font-bold px-3 py-1.5 rounded-full border border-forest-200">
          {sessionLog.length} case{sessionLog.length !== 1 ? 's' : ''}
        </span>
      </div>

      {!sessionLog.length && (
        <div className="text-center py-16 text-gray-400">
          <div className="text-4xl mb-3">📭</div>
          <p className="text-sm">No cases logged yet today.</p>
        </div>
      )}

      <div className="space-y-2">
        {sessionLog.map((entry, i) => {
          const dc = entry.disease ? DISEASE_FIELDS[entry.disease] : null
          return (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm border-l-4 border-forest-400 p-3.5 animate-fadeIn"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-400 font-mono">{entry.time}</span>
                <div className="flex items-center gap-2">
                  {dc && (
                    <span className="text-xs text-gray-500">{dc.icon} {entry.disease}</span>
                  )}
                  <Badge level={entry.risk} />
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">{entry.symptoms}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
