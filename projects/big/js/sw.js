const cacheName = `airhorner-${version}`;
self.addEventListener('install', e => {
  const timeStamp = Date.now();
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        `/`,
        `/index.html?timestamp=${timeStamp}`,
        `/index.js?timestamp=${timeStamp}`,
        `/gulpfile.js?timestamp=${timeStamp}`,
        `/img/?timestamp=${timeStamp}`,
        `/scripts/main.min.js?timestamp=${timeStamp}`,
        `/scripts/comlink.global.js?timestamp=${timeStamp}`,
        `/scripts/messagechanneladapter.global.js?timestamp=${timeStamp}`,
        `/sounds/airhorn.mp3?timestamp=${timeStamp}`
      ])
          .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});
