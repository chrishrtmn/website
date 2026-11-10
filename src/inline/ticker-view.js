(function () {
  try {
    if (localStorage.getItem('ticker-view') !== 'grid') return;
    var t = document.querySelector('.ticker');
    if (!t) return;
    t.dataset.view = 'grid';
    var r = t.querySelector('input[value="grid"]');
    if (r) r.checked = true;
  } catch (e) {}
})();
