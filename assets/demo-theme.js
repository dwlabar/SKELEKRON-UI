// Demo only: apply a saved preference before styles load to avoid a theme flash.
(() => {
  const root = document.documentElement;
  const storageKey = 'skel-theme';
  let preference = 'system';

  try {
    const saved = localStorage.getItem(storageKey);
    if (saved === 'light' || saved === 'dark') preference = saved;
  } catch {
    // Storage may be unavailable; switching still works for this page.
  }

  const apply = () => {
    if (preference === 'system') root.removeAttribute('data-skel-theme');
    else root.setAttribute('data-skel-theme', preference);
  };

  apply();
  document.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById('demo-theme');
    selector.value = preference;
    selector.parentElement.hidden = false;
    selector.addEventListener('change', () => {
      preference = selector.value;
      apply();
      try {
        if (preference === 'system') localStorage.removeItem(storageKey);
        else localStorage.setItem(storageKey, preference);
      } catch {
        // Keep the current selection even when persistence is unavailable.
      }
    });
  });
})();
