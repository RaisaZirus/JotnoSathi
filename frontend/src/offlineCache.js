// ─────────────────────────────────────────────────────────────────
// JotnoSathi Offline Cache
// Tiny localStorage helper: tabs save their last successful API
// response, and show it again when the backend is unreachable.
// ─────────────────────────────────────────────────────────────────

const PREFIX = 'jotnosathi_cache_'

/** Save data under a key (silently ignores storage errors). */
export function cacheSet(key, data) {
  try {
    localStorage.setItem(
      PREFIX + key,
      JSON.stringify({ data, savedAt: new Date().toISOString() })
    )
  } catch { /* storage full or unavailable — not critical */ }
}

/** Get { data, savedAt } for a key, or null if nothing cached. */
export function cacheGet(key) {
  try {
    const raw = localStorage.getItem(PREFIX + key)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}