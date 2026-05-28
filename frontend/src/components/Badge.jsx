export default function Badge({ level, className = '' }) {
  return (
    <span className={`inline-block px-3 py-0.5 rounded-full text-xs font-semibold tracking-wide badge-${level} ${className}`}>
      {level}
    </span>
  )
}
