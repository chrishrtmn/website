(function () {
  var root = document.documentElement;
  var on = true;
  try {
    var stored = localStorage.getItem('motion');
    on = stored ? stored === 'on' : !matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch (e) {}
  root.dataset.motion = on ? 'on' : 'off';
  if (!on || !root.hasAttribute('data-hero')) return;
  try {
    if (!sessionStorage.getItem('intro')) {
      sessionStorage.setItem('intro', '1');
      root.dataset.intro = 'play';
    }
  } catch (e) {
    root.dataset.intro = 'play';
  }
})();
