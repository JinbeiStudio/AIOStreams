// Covers the blank page at launch with the studio logo.
(function () {
  var inflight = 0;

  // Counted so the cover can wait for the first requests to finish.
  var nativeFetch = window.fetch;
  if (nativeFetch)
    window.fetch = function () {
      inflight++;
      var request = nativeFetch.apply(this, arguments);
      var done = function () {
        inflight--;
      };
      request.then(done, done);
      return request;
    };

  // Pictures on screen still loading, or not given a source yet by the app's image cache.
  function pending() {
    var imgs = document.images;
    for (var i = 0; i < imgs.length; i++) {
      var r = imgs[i].getBoundingClientRect();
      if (!r.width || !r.height || r.bottom < 0 || r.top > innerHeight)
        continue;
      if (r.right < 0 || r.left > innerWidth) continue;
      if (!imgs[i].getAttribute('src') || !imgs[i].complete) return true;
    }
    return false;
  }

  var shown = Date.now();
  var cover = document.createElement('div');
  cover.style.cssText =
    'position:fixed;left:0;top:0;right:0;bottom:0;z-index:2147483000;background:#070707;' +
    'display:flex;align-items:center;justify-content:center;transition:opacity .4s;pointer-events:none';
  var style = document.createElement('style');
  style.textContent =
    '@keyframes studio-pulse{0%{transform:scale3d(1,1,1);opacity:.75}' +
    '100%{transform:scale3d(1.08,1.08,1);opacity:1}}';
  var logo = document.createElement('img');
  logo.src = 'loader-logo.png';
  // On its own GPU layer, so a busy main thread doesn't stall the pulse.
  logo.style.cssText =
    'height:42.6vh;will-change:transform,opacity;backface-visibility:hidden;' +
    'animation:studio-pulse 1s ease-in-out infinite alternate';
  cover.appendChild(style);
  cover.appendChild(logo);
  document.documentElement.appendChild(cover);

  var settledAt = 0;
  var timer = setInterval(function () {
    var root = document.getElementById('root');
    var now = Date.now();
    // Held long enough for a full pulse, so it never just flashes.
    if (!root || !root.childNodes.length || now - shown < 2000) return;
    // The first screen's pictures are fetched and saved under the cover, not under a click; 5 s at most.
    if (now - shown < 5000) {
      if (inflight > 0 || pending()) return void (settledAt = 0);
      // A moment for the saves that follow each load.
      if (!settledAt) return void (settledAt = now);
      if (now - settledAt < 500) return;
    }
    clearInterval(timer);
    cover.style.opacity = '0';
    setTimeout(function () {
      cover.parentNode.removeChild(cover);
    }, 450);
  }, 100);
})();
