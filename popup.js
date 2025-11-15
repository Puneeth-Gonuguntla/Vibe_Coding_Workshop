document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('toggle-blocker');
  toggle.addEventListener('change', function() {
    chrome.storage.local.set({ enabled: toggle.checked });
    // Note: Actual logic to enable/disable rules goes in background.js
  });
});