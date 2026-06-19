/* ============================================================
   Enroz Financial Solution — Forms
   Handles: contact form validation, submission, FAQ accordion
   ============================================================ */

/* ── Contact Form ─────────────────────────────────────────── */

/**
 * Bind validation + async submission to the contact form.
 * Safe to call multiple times — skips if already bound.
 */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form || form._bound) return;
  form._bound = true;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    let valid = true;

    // Clear previous errors
    document.querySelectorAll('[id$="Err"]').forEach(el => el.classList.add('hidden'));

    // Field references
    const fname   = document.getElementById('fname')?.value?.trim();
    const email   = document.getElementById('email')?.value?.trim();
    const message = document.getElementById('message')?.value?.trim();

    // Validate
    if (!fname) {
      document.getElementById('fnameErr')?.classList.remove('hidden');
      valid = false;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      document.getElementById('emailErr')?.classList.remove('hidden');
      valid = false;
    }

    if (!message) {
      document.getElementById('msgErr')?.classList.remove('hidden');
      valid = false;
    }

    if (!valid) return;

    // Show spinner
    const btn       = document.getElementById('submitBtn');
    const btnText   = document.getElementById('btnText');
    const btnSpinner = document.getElementById('btnSpinner');

    if (btnText)    btnText.classList.add('hidden');
    if (btnSpinner) btnSpinner.classList.remove('hidden');
    if (btn)        btn.disabled = true;

    // Simulate API call — replace with real fetch() to your backend
    setTimeout(() => {
      if (btnText)    btnText.classList.remove('hidden');
      if (btnSpinner) btnSpinner.classList.add('hidden');
      if (btn)        btn.disabled = false;

      const success = document.getElementById('formSuccess');
      if (success) {
        success.classList.remove('hidden');
        setTimeout(() => success.classList.add('hidden'), 6000);
      }

      form.reset();
    }, 1800);
  });
}

/* ── FAQ Accordion ────────────────────────────────────────── */

/**
 * Global event delegation for FAQ accordions.
 * Attached once on DOMContentLoaded — works across all pages.
 */
function initFAQ() {
  if (window._faqDelegated) return;
  window._faqDelegated = true;

  document.addEventListener('click', function (e) {
    const btn = e.target.closest('[data-faq-btn]');
    if (!btn) return;

    const item = btn.closest('.faq-item');
    if (!item) return;

    const isOpen = item.classList.contains('open');

    // Close all sibling items in the same FAQ list
    item.closest('.space-y-3')?.querySelectorAll('.faq-item.open').forEach(other => {
      if (other !== item) {
        other.classList.remove('open');
        other.querySelector('[data-faq-btn]')?.setAttribute('aria-expanded', 'false');
      }
    });

    // Toggle current
    item.classList.toggle('open', !isOpen);
    btn.setAttribute('aria-expanded', String(!isOpen));
  });
}
