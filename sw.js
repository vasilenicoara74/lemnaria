const CACHE_NAME = 'lemnaria-v13';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg',
  './css/app.css',
  './vendor/three.module.js',
  './vendor/OrbitControls.js',
  './vendor/TransformControls.js',
  './vendor/STLExporter.js',
  './vendor/jspdf.umd.min.js',
  './vendor/xlsx.full.min.js',
  './js/app.js',
  './js/data/woods.js',
  './js/data/plans.js',
  './js/data/catalog500.js',
  './js/data/illustrations.js',
  './js/components/viewer3d.js',
  './js/components/bom.js',
  './js/components/cutlist.js',
  './js/components/blueprint.js',
  './js/components/identifier.js',
  './js/components/ai.js',
  './js/components/sketcher.js',
  './js/components/joinery.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS).catch((err) => console.warn('Cache addAll warning:', err));
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((k) => {
          if (k !== CACHE_NAME) return caches.delete(k);
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request)
      .then((networkRes) => {
        if (networkRes && networkRes.status === 200) {
          const resClone = networkRes.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, resClone));
        }
        return networkRes;
      })
      .catch(() => {
        return caches.match(e.request).then((cached) => {
          return cached || caches.match('./index.html');
        });
      })
  );
});
