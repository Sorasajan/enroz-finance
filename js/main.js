/* ============================================================
   Enroz Financial Solution — Main Entry Point
   Bootstraps all modules after DOM is ready
   ============================================================ */

/**
 * Initialise features specific to a given page.
 * Called by router.js after each navigation.
 * @param {string} page
 */
function initPageFeatures(page) {
  if (page === 'home')    initCounters();
  if (page === 'contact') initContactForm();
  // FAQ uses global event delegation — no per-page init needed
}

/* ── Boot ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {

  // FAQ global delegation (must be first — works on all pages)
  initFAQ();

  // Route to correct page based on URL hash
  handleHash();

  // Trigger reveal animations after short delay
  setTimeout(initReveal, 150);

  // Trigger counter animations on home
  setTimeout(initCounters, 200);

  // Position services dropdown
  positionDropdown();

  // Update footer year dynamically
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
