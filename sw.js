// sw.js
const CACHE_NAME = 'resources-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/package.html',
  '/resource.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});


