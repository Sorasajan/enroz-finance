/* ============================================================
   Enroz Financial Solution — Navbar
   Handles: scroll behaviour, topbar hide/show,
            mobile drawer, services dropdown positioning
   ============================================================ */

let lastScrollY = 0;

/* ── Scroll: hide topbar on scroll-down, show on scroll-up ── */
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  const topbar = document.getElementById('topbar');

  if (topbar) {
    if (y > lastScrollY && y > 80) topbar.classList.add('hidden-bar');
    else topbar.classList.remove('hidden-bar');
  }

  lastScrollY = y;

  // Back to top button
  const btt = document.getElementById('btt');
  if (btt) btt.classList.toggle('show', y > 400);
}, { passive: true });

/* ── Mobile Drawer ────────────────────────────────────────── */
function openMobile() {
  document.getElementById('mobileDrawer').classList.add('open');
  document.getElementById('mobileBackdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('menuBtn').setAttribute('aria-expanded', 'true');

  // Animate hamburger → X
  document.getElementById('hb1').style.transform = 'rotate(45deg) translate(4px, 5px)';
  document.getElementById('hb2').style.opacity = '0';
  document.getElementById('hb3').style.transform = 'rotate(-45deg) translate(2px, -4px)';
  document.getElementById('hb3').style.width = '18px';

  // Focus trap
  setTimeout(() => document.getElementById('mobileDrawer').focus(), 50);
}

function closeMobile() {
  document.getElementById('mobileDrawer').classList.remove('open');
  document.getElementById('mobileBackdrop').classList.remove('open');
  document.body.style.overflow = '';
  document.getElementById('menuBtn').setAttribute('aria-expanded', 'false');

  // Reset hamburger icon
  document.getElementById('hb1').style.transform = '';
  document.getElementById('hb2').style.opacity = '1';
  document.getElementById('hb3').style.transform = '';
  document.getElementById('hb3').style.width = '';
}

// Toggle drawer on hamburger click
document.getElementById('menuBtn').addEventListener('click', () => {
  const isOpen = document.getElementById('mobileDrawer').classList.contains('open');
  isOpen ? closeMobile() : openMobile();
});

// Close with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMobile();
});

/* ── Services Dropdown Positioning ───────────────────────── */
function positionDropdown() {
  const trigger = document.getElementById('servicesDropdown');
  const panel   = trigger && trigger.querySelector('.services-panel');
  if (!trigger || !panel) return;

  const rect    = trigger.getBoundingClientRect();
  const panelW  = Math.min(520, window.innerWidth - 24);
  let left      = rect.left + rect.width / 2 - panelW / 2;
  left          = Math.max(12, Math.min(left, window.innerWidth - panelW - 12));

  panel.style.top    = (rect.bottom + 4) + 'px';
  panel.style.left   = left + 'px';
  panel.style.width  = panelW + 'px';
  panel.style.transform = 'none';
}

document.getElementById('servicesDropdown')
  .addEventListener('mouseenter', positionDropdown);

window.addEventListener('resize', positionDropdown, { passive: true });

/* ── Search Button ────────────────────────────────────────── */
document.getElementById('searchBtn').addEventListener('click', () => {
  const q = prompt('Search Enroz (e.g. "VAT", "payroll", "express", "pricing"):', '');
  if (!q || !q.trim()) return;

  const map = {
    vat: 'services', tds: 'services', payroll: 'services',
    tax: 'services', express: 'services', book: 'services',
    ocr: 'services', ssf: 'services', income: 'services',
    package: 'portfolio', pric: 'portfolio',
    about: 'about', team: 'about', mission: 'about',
    contact: 'contact', quote: 'contact',
  };

  const key = Object.keys(map).find(k => q.toLowerCase().includes(k));
  navigate(key ? map[key] : 'home');
});
