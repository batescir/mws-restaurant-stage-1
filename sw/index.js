// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', function() {
//     navigator.serviceWorker.register('/serviceworker.js');
//   });
// }


if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/serviceworker.js').then(function(registration) {
      //pass
      console.log('sw - registered - ', registration.scope);
    }, function(err) {
      // or fail
      console.log('sw - fail - type: ', err);
    });
  });
}
