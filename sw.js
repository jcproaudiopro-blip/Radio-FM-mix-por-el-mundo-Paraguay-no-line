self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('radio-cache').then(cache => {
      return cache.addAll(['/', '/index.html']);
    })
  );
});