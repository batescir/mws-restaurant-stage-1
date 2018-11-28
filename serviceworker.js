let theCache = 'reviews';
let urlCacheList =
['/',
'css/styles.css',
'js/main.js',
'js/dbhelper.js',
'js/restaurant_info.js',
'index.html',
'restaurant.html'];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(theCache)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlCacheList);
      })
  );
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});


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


// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request).then(function(response) {
//       if (response) return response;
//       return fetch(event.request);
//     })
//   );
// });
