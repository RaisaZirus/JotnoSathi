import { DISEASE_FIELDS } from '../constants'

export default function DiseaseFields({ disease, prefix, values, onChange }) {
  const def = DISEASE_FIELDS[disease]
  if (!def) return null

  return (
    <div className="space-y-3">
      {def.fields.map(f => (
        <div key={f.id}>
          <label className="form-label">{f.label}</label>
          {f.type === 'select' ? (
            <select
              className="form-input"
              value={values[f.id] ?? ''}
              onChange={e => onChange(f.id, e.target.value)}
            >
              {f.options.map(([v, l]) => (
                <option key={v} value={v}>{l}</option>
              ))}
            </select>
          ) : (
            <input
              type="number"
              className="form-input"
              placeholder={f.placeholder}
              value={values[f.id] ?? ''}
              min={f.min}
              max={f.max}
              step={f.step}
              onChange={e => onChange(f.id, e.target.value)}
            />
          )}
        </div>
      ))}
    </div>
  )
}

/** Parse field values before sending to API — mirrors original _getFieldValue logic */
export function parseFieldValue(fieldDef, rawVal) {
  if (rawVal === '' || rawVal === null || rawVal === undefined) return null
  if (fieldDef.type === 'number') return parseFloat(rawVal) || null
  if (rawVal === 'true')  return true
  if (rawVal === 'false') return false
  return rawVal
}
