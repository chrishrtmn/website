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
  window.si =
    window.si ||
    function () {
      (window.siq = window.siq || []).push(arguments);
    };

  var send = function (name, data) {
    data.page = location.pathname;
    window.va('event', { name: name, data: data });
  };

  document.addEventListener('click', function (e) {
    var tagged = e.target.closest && e.target.closest('[data-event]');
    if (tagged) {
      // data-event-foo="bar" rides along as { foo: 'bar' }
      var extra = {};
      for (var key in tagged.dataset) {
        if (key.length > 5 && key.indexOf('event') === 0) {
          extra[key.charAt(5).toLowerCase() + key.slice(6)] = tagged.dataset[key];
        }
      }
      send(tagged.getAttribute('data-event'), extra);
      return;
    }
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    var href = a.getAttribute('href');
    if (href.indexOf('mailto:') === 0) {
      var subject = /[?&]subject=([^&]*)/.exec(href);
      send('email', { subject: subject ? decodeURIComponent(subject[1]) : '' });
    } else if (a.hasAttribute('download')) {
      send('download', { file: a.pathname.split('/').pop() });
    } else if (a.host && a.host !== location.host && /^https?:$/.test(a.protocol)) {
      send('outbound', { host: a.hostname.replace(/^www\./, ''), url: a.href.split(/[?#]/)[0] });
    }
  });

  ['/_vercel/insights/script.js', '/_vercel/speed-insights/script.js'].forEach(function (src) {
    var s = document.createElement('script');
    s.defer = true;
    s.src = src;
    document.head.appendChild(s);
  });
})();
