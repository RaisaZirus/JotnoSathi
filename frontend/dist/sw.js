// JotnoSathi Service Worker — v1
// Strategy:
//   - Navigations (page loads): network-first, fall back to cached app shell when offline
//   - Same-origin static assets (JS/CSS/images): cache-first with background refresh
//   - NEVER touches: non-GET requests (login/triage/report POSTs), the Render API,
//     Google Fonts, Leaflet CDN, map tiles — those pass through untouched.

const CACHE_NAME = 'jotnosathi-v1';

// Minimal app shell cached at install time.
// Vite's hashed /assets/*.js and *.css files get cached at runtime on first visit.
const APP_SHELL = ['/', '/manifest.json', '/jotno.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;

  // 1. Never intercept non-GET requests (POST /auth/login, POST /triage,
  //    DELETE /field-reports/reset, etc.) — cache.put() on these would throw.
  if (request.method !== 'GET') return;

  // 2. Never intercept cross-origin requests — the Render backend, Google Fonts,
  //    unpkg (Leaflet CSS), and OpenStreetMap tiles all bypass the SW entirely.
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // 3. SPA navigations: try the network, fall back to the cached shell offline.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put('/', clone));
          return response;
        })
        .catch(() =>
          caches.match('/').then((cached) => cached || caches.match(request))
        )
    );
    return;
  }

  // 4. Same-origin static assets: serve from cache instantly if present,
  //    refresh the cache in the background (stale-while-revalidate).
  event.respondWith(
    caches.match(request).then((cached) => {
      const networkFetch = fetch(request)
        .then((response) => {
          if (response && response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() => cached); // offline + not cached → original error propagates

      return cached || networkFetch;
    })
  );
});