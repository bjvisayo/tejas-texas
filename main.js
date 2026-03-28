/* ============================================================
   TEJAS TRUCKING & CONSTRUCTION L.L.C.
   JavaScript — main.js
   ============================================================
   TABLE OF CONTENTS
   1.  Page Router — showPage()
   2.  Mobile Menu — toggleMob()
   3.  Form Handler — handleFormSubmit()
   4.  Scroll Reveal — initReveal()
   5.  Gallery Filters
   6.  Init on DOMContentLoaded
   ============================================================ */


/* ============================================================
   1. PAGE ROUTER
   Switches between the 6 SPA pages, updates nav active state,
   scrolls to top, and re-triggers scroll reveal.
   ============================================================ */

/**
 * Navigate to a named page.
 * @param {string} name       - Page identifier: 'home' | 'services' | 'gallery' | 'about' | 'reviews' | 'contact'
 * @param {HTMLElement} [btn] - The nav button that was clicked (optional, used for active state)
 */
function go(name, btn) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  // Show target page
  const target = document.getElementById('page-' + name);
  if (target) target.classList.add('active');

  // Update nav link active state
  document.querySelectorAll('.nl').forEach(l => l.classList.remove('active'));

  if (btn) {
    btn.classList.add('active');
  } else {
    document.querySelectorAll('.nl').forEach(l => {
      const text = l.textContent.toLowerCase().trim();
      const isHome  = name === 'home' && text === 'home';
      const isOther = name !== 'home' && text.includes(name);
      if (isHome || isOther) l.classList.add('active');
    });
  }

  // Always close mobile menu when navigating
  const mobMenu = document.getElementById('mobMenu');
  if (mobMenu) mobMenu.classList.remove('open');

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Re-run reveal after DOM has painted the new page
  requestAnimationFrame(() => setTimeout(initReveal, 80));
}


/* ============================================================
   2. MOBILE MENU
   Toggles the mobile dropdown open/closed.
   ============================================================ */

function toggleMob() {
  const menu = document.getElementById('mobMenu');
  if (menu) menu.classList.toggle('open');
}


/* ============================================================
   3. FORM HANDLER
   Simulates form submission with a loading state and success message.
   In production, replace the setTimeout with a real fetch() call.
   ============================================================ */

/**
 * Handle quote form submission.
 * @param {Event}  e         - The form submit event
 * @param {string} successId - The ID of the success message element to show
 */
function handleFormSubmit(e, successId) {
  e.preventDefault();

  const submitBtn = e.target.querySelector('button[type="submit"]');

  // Loading state
  submitBtn.textContent = 'Sending…';
  submitBtn.disabled = true;
  submitBtn.style.background = 'var(--g3)';

  // Simulate async request (replace with real API call in production)
  setTimeout(() => {
    const successEl = document.getElementById(successId);
    if (successEl) successEl.style.display = 'block';

    submitBtn.textContent  = '✓ Sent!';
    submitBtn.style.background = '#2e7d32';
    submitBtn.style.color  = '#fff';
  }, 1200);
}


/* ============================================================
   4. SCROLL REVEAL
   Uses IntersectionObserver to animate elements with class .rv
   into view by adding class .vis. Staggered by index.
   ============================================================ */

function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Stagger each element slightly
        setTimeout(() => {
          entry.target.classList.add('vis');
        }, index * 90);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  // Only observe elements not yet revealed
  document.querySelectorAll('.rv:not(.vis)').forEach(el => observer.observe(el));
}


/* ============================================================
   5. GALLERY FILTERS
   Visual-only filter buttons on the Gallery page.
   (In production, wire these up to show/hide .gi items by category.)
   ============================================================ */

function initGalleryFilters() {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('gf')) {
      // Remove active from all filter buttons
      document.querySelectorAll('.gf').forEach(btn => btn.classList.remove('active'));
      // Set clicked as active
      e.target.classList.add('active');

      // --- Production hook ---
      // const category = e.target.textContent.trim().toLowerCase();
      // document.querySelectorAll('.gi').forEach(item => {
      //   const match = category === 'all projects' || item.dataset.category === category;
      //   item.style.display = match ? 'block' : 'none';
      // });
    }
  });
}


/* ============================================================
   6. INIT
   Run once the DOM is fully loaded.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initGalleryFilters();
});
