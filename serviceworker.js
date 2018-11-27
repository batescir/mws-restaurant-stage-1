self.addEventListener('install', function(event) {

  event.waitUntil(
    caches.open('reviews').then(function(cache) {
      return cache.addAll(
        ['/',
        'css/styles.css',
        'js/main.js',
        'js/dbhelper.js',
        'js/restaurant_info.js',
        'index.html',
        'restaurant.html']
      );
    })
  )
  // event.respondWith(
  //   fetch(event.request).then(function(response) {
  //     if (response.status == 404) {
  //       return new Response("whoops, not found")
  //     }
  //     return response;
  //   }).catch(function() {
  //     return new Response('uh oh');
  //   })
  // );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) return response;
      return fetch(event.request);
    })
  );
});
