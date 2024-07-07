self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('my-cache').then(cache => {
        return cache.addAll([
          '/Cr1bio/Food-Delivery/',
          '/Cr1bio/Food-Delivery/index.html',
          '/Cr1bio/Food-Delivery/icon.jpg',
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
  
