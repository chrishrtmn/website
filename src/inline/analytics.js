(function () {
  var s = document.currentScript;
  var id = s && s.dataset.website;
  if (!id) return;
  // Do Not Track and Global Privacy Control both mean no analytics, and so does an opt-out from the privacy tray
  var dnt = navigator.doNotTrack === '1' || window.doNotTrack === '1' || navigator.globalPrivacyControl === true;
  var off = false;
  try {
    off = localStorage.getItem('umami.disabled') === '1';
  } catch (e) {}
  if (dnt || off) return;
  var u = document.createElement('script');
  u.defer = true;
  u.src = 'https://cloud.umami.is/script.js';
  u.dataset.websiteId = id;
  document.head.appendChild(u);
})();
