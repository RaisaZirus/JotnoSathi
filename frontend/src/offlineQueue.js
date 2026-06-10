// ─────────────────────────────────────────────────────────────────
// JotnoSathi Offline Queue (v2)
// Saves failed submissions in IndexedDB (survives reloads and app
// restarts) and re-sends them to the backend when it's reachable.
// v2: each item remembers its endpoint, so both triages (/triage)
// and field reports (/field-report) can be queued.
// ─────────────────────────────────────────────────────────────────

const DB_NAME    = 'jotnosathi-offline'
const DB_VERSION = 1
const STORE      = 'triage-queue'

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION)
    req.onupgradeneeded = () => {
      const db = req.result
      if (!db.objectStoreNames.contains(STORE)) {
        db.createObjectStore(STORE, { keyPath: 'id', autoIncrement: true })
      }
    }
    req.onsuccess = () => resolve(req.result)
    req.onerror   = () => reject(req.error)
  })
}

/** Save one submission for later. endpoint e.g. '/triage' or '/field-report'. */
export async function queueSubmission(payload, endpoint = '/triage') {
  const db = await openDB()
  return new Promise((resolve, reject) => {
    const tx  = db.transaction(STORE, 'readwrite')
    const req = tx.objectStore(STORE).add({
      payload,
      endpoint,
      queuedAt: new Date().toISOString(),
    })
    req.onsuccess = () => resolve(req.result)
    tx.onerror    = () => reject(tx.error)
  })
}

/** Backwards-compatible alias used by TriageTab. */
export function queueTriage(payload) {
  return queueSubmission(payload, '/triage')
}

/** All queued items, oldest first. */
export async function getQueued() {
  const db = await openDB()
  return new Promise((resolve, reject) => {
    const req = db.transaction(STORE, 'readonly').objectStore(STORE).getAll()
    req.onsuccess = () => resolve(req.result || [])
    req.onerror   = () => reject(req.error)
  })
}

/** Number of items waiting to sync. */
export async function queueCount() {
  const db = await openDB()
  return new Promise((resolve, reject) => {
    const req = db.transaction(STORE, 'readonly').objectStore(STORE).count()
    req.onsuccess = () => resolve(req.result)
    req.onerror   = () => reject(req.error)
  })
}

function removeQueued(id) {
  return openDB().then(
    (db) =>
      new Promise((resolve, reject) => {
        const tx = db.transaction(STORE, 'readwrite')
        tx.objectStore(STORE).delete(id)
        tx.oncomplete = () => resolve(true)
        tx.onerror    = () => reject(tx.error)
      })
  )
}

/**
 * Try to send every queued item to the backend, oldest first.
 * Each item goes to its own endpoint ('/triage' by default).
 * Stops at the first failure (probably still offline) and keeps the rest.
 * Returns { synced, remaining }.
 */
export async function syncQueue(apiBase) {
  const items = await getQueued()
  let synced = 0

  for (const item of items) {
    try {
      const res = await fetch(`${apiBase}${item.endpoint || '/triage'}`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(item.payload),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      await removeQueued(item.id)
      synced++
    } catch {
      break // backend still unreachable — try again on the next check
    }
  }

  return { synced, remaining: items.length - synced }
}

/** Let the rest of the app know the queue changed (App.jsx listens). */
export function notifyQueueChanged() {
  window.dispatchEvent(new Event('jotno-queue-updated'))
}