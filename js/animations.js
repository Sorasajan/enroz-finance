/* ============================================================
   Enroz Financial Solution — Animations
   Handles: scroll reveal, counter animation
   ============================================================ */

let revealObserver;

/**
 * Initialise IntersectionObserver for scroll-reveal elements.
 * Called on every page navigation to re-observe new content.
 */
function initReveal() {
  if (revealObserver) revealObserver.disconnect();

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll(
    '.page.active .reveal, .page.active .reveal-left, .page.active .reveal-right'
  ).forEach(el => {
    el.classList.remove('visible');
    revealObserver.observe(el);
  });
}

/**
 * Animate number counters from 0 to their target value.
 * Triggered on the Home page hero section.
 */
function initCounters() {
  const counters = document.querySelectorAll('.page.active [data-counter]');
  if (!counters.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;

      const el     = e.target;
      const target = +el.dataset.counter;
      const suffix = el.dataset.suffix || '';
      let current  = 0;
      const step   = target / 40;

      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = Math.floor(current) + suffix;
        if (current >= target) clearInterval(timer);
      }, 30);

      obs.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => obs.observe(c));
}
