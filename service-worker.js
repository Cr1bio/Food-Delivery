self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('my-cache').then(cache => {
        return cache.addAll([
          '/Food-Delivery/',
          '/Food-Delivery/index.html',
          '/Food-Delivery/icon.jpg',
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
  
