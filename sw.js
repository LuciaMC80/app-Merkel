/* Service worker de la app de manejo del carcinoma de células de Merkel.
   La interfaz y la lógica viajan en index.html; se cachean además las
   fuentes y los iconos para que funcione sin conexión. */

const VERSION = 'ccm-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './fonts/ibm-plex-sans-latin.woff2',
  './fonts/ibm-plex-sans-latin-ext.woff2',
  './fonts/jetbrains-mono-latin.woff2',
  './fonts/jetbrains-mono-latin-ext.woff2',
  './icons/icon-180.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(VERSION)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Navegación: primero la red, para recibir actualizaciones del contenido
  // clínico; si no hay cobertura, se sirve la copia guardada.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(VERSION).then((cache) => cache.put('./index.html', copy));
          return res;
        })
        .catch(() => caches.match('./index.html').then((hit) => hit || caches.match('./')))
    );
    return;
  }

  // Resto de recursos (fuentes, iconos, manifiesto): primero la caché.
  event.respondWith(
    caches.match(req).then((hit) => hit || fetch(req).then((res) => {
      if (res && res.status === 200 && res.type === 'basic') {
        const copy = res.clone();
        caches.open(VERSION).then((cache) => cache.put(req, copy));
      }
      return res;
    }).catch(() => new Response('', { status: 504, statusText: 'Sin conexion' })))
  );
});
