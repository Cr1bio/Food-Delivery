self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('my-cache').then(cache => {
        return cache.addAll([
          'https://cr1bio.github.io/Food-Delivery/',
          'https://cr1bio.github.io/Food-Delivery/index.html',
          'https://cr1bio.github.io/Food-Delivery/icon.jpg',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  
