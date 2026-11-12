(function () {
  // Do Not Track and Global Privacy Control both mean no analytics, and so does an opt-out from the privacy tray
  var dnt = navigator.doNotTrack === '1' || window.doNotTrack === '1' || navigator.globalPrivacyControl === true;
  var off = false;
  try {
    off = localStorage.getItem('analytics.disabled') === '1' || localStorage.getItem('umami.disabled') === '1';
  } catch (e) {}
  if (dnt || off) return;
  window.va =
    window.va ||
    function () {
      (window.vaq = window.vaq || []).push(arguments);
    };
  document.addEventListener('click', function (e) {
    var el = e.target.closest && e.target.closest('[data-event]');
    if (el) window.va('event', { name: el.getAttribute('data-event') });
  });
  var s = document.createElement('script');
  s.defer = true;
  s.src = '/_vercel/insights/script.js';
  document.head.appendChild(s);
})();
