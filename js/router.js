/* ============================================================
   Enroz Financial Solution — SPA Router
   Handles page navigation, URL hash, title updates
   ============================================================ */

const PAGES = ['home', 'about', 'services', 'portfolio', 'contact'];

const PAGE_TITLES = {
  home:      'Home | Enroz Financial Solution',
  about:     'About Us | Enroz Financial Solution',
  services:  'Services | Enroz Financial Solution',
  portfolio: 'Packages & Pricing | Enroz Financial Solution',
  contact:   'Contact Us | Enroz Financial Solution',
};

const PAGE_LABELS = {
  home: 'Home', about: 'About Us', services: 'Services',
  portfolio: 'Packages & Pricing', contact: 'Contact',
};

let currentPage = 'home';

/**
 * Navigate to a page (and optionally scroll to an anchor)
 * @param {string} page   - one of PAGES
 * @param {string} anchor - optional element id to scroll to
 */
function navigate(page, anchor) {
  if (!PAGES.includes(page)) return;

  // Hide all pages
  PAGES.forEach(p => {
    const el = document.getElementById('page-' + p);
    if (el) el.classList.remove('active');
  });

  // Show target
  const target = document.getElementById('page-' + page);
  if (target) target.classList.add('active');
  currentPage = page;

  // Update document title
  document.title = PAGE_TITLES[page] || PAGE_TITLES.home;

  // Update desktop nav links
  PAGES.forEach(p => {
    const link = document.getElementById('nav-' + p);
    if (link) {
      link.classList.toggle('active-page', p === page);
      link.setAttribute('aria-current', p === page ? 'page' : 'false');
    }
    // Mobile nav
    const mob = document.getElementById('mob-' + p);
    if (mob) {
      mob.classList.toggle('mob-active', p === page);
      mob.classList.toggle('text-white', p === page);
      mob.classList.toggle('text-white/70', p !== page);
    }
  });

  // Update URL hash safely (sandboxed iframe fallback)
  try { history.pushState(null, '', '#' + page); }
  catch (e) { try { location.hash = page; } catch (e2) {} }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Scroll to anchor after navigation
  if (anchor) {
    setTimeout(() => {
      const el = target && target.querySelector('#' + anchor);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
  }

  // Re-init animations and features
  setTimeout(initReveal, 80);
  setTimeout(() => initPageFeatures(page), 100);
  setTimeout(positionDropdown, 50);
}

/**
 * Read URL hash and navigate to matching page
 */
function handleHash() {
  const hash = (location.hash || '').replace('#', '').split('/')[0];
  if (PAGES.includes(hash)) navigate(hash);
  else navigate('home');
}

// Handle browser back / forward
window.addEventListener('popstate', handleHash);
window.addEventListener('hashchange', handleHash);
