// Fallback: ensure orus-cgs-home is visible after 4s even if JS module fails
setTimeout(function() {
  var el = document.querySelector('orus-cgs-home');
  if (el && !customElements.get('orus-cgs-home')) {
    el.style.opacity = '1';
  }
}, 4000);
