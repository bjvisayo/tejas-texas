/**
 * Tejas Trucking & Construction L.L.C.
 * JavaScript — main.js
 * ─────────────────────────────────────────
 * TABLE OF CONTENTS
 * 1. Config
 * 2. Page Router — go()
 * 3. Mobile Menu — toggleMob()
 * 4. Form Handler — handleFormSubmit() [hits backend API]
 * 5. Scroll Reveal — initReveal()
 * 6. Gallery Filters
 * 7. Init on DOMContentLoaded
 */


/* ─── 1. Config ─────────────────────────────────────────────── */

const API_BASE = 'http://localhost:3001/api';


/* ─── 2. Page Router ────────────────────────────────────────── */

function go(name, btn) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  const target = document.getElementById('page-' + name);
  if (target) target.classList.add('active');

  document.querySelectorAll('.nl').forEach(l => l.classList.remove('active'));
  if (btn) {
    btn.classList.add('active');
  } else {
    document.querySelectorAll('.nl').forEach(l => {
      const text  = l.textContent.toLowerCase().trim();
      const match = name === 'home' ? text === 'home' : text.includes(name);
      if (match) l.classList.add('active');
    });
  }

  const mobMenu = document.getElementById('mobMenu');
  if (mobMenu) mobMenu.classList.remove('open');

  window.scrollTo({ top: 0, behavior: 'instant' });
  requestAnimationFrame(() => setTimeout(initReveal, 80));
}


/* ─── 3. Mobile Menu ────────────────────────────────────────── */

function toggleMob() {
  document.getElementById('mobMenu')?.classList.toggle('open');
}


/* ─── 4. Form Handler — posts to backend API ────────────────── */

async function handleFormSubmit(e, successId) {
  e.preventDefault();

  const form      = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const successEl = document.getElementById(successId);

  // Collect all fields
  const data = {
    first_name: form.querySelector('[name="first_name"]')?.value  || '',
    last_name:  form.querySelector('[name="last_name"]')?.value   || '',
    phone:      form.querySelector('[name="phone"]')?.value       || '',
    email:      form.querySelector('[name="email"]')?.value       || '',
    company:    form.querySelector('[name="company"]')?.value     || '',
    service:    form.querySelector('[name="service"]')?.value     || '',
    location:   form.querySelector('[name="location"]')?.value    || '',
    message:    form.querySelector('[name="message"]')?.value     || '',
    source:     form.querySelector('[name="source"]')?.value      || '',
  };

  // Loading state
  const originalText      = submitBtn.textContent;
  submitBtn.textContent   = 'Sending…';
  submitBtn.disabled      = true;
  submitBtn.style.opacity = '0.7';

  try {
    const res = await fetch(`${API_BASE}/leads`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(data),
    });

    const json = await res.json();

    if (res.ok) {
      // Success
      if (successEl) successEl.style.display = 'block';
      submitBtn.textContent        = '✓ Sent!';
      submitBtn.style.background   = '#22c55e';
      submitBtn.style.color        = '#fff';
      submitBtn.style.opacity      = '1';
      form.reset();
    } else {
      throw new Error(json.error || 'Submission failed');
    }

  } catch (err) {
    // Fallback — show error but keep form usable
    submitBtn.textContent   = originalText;
    submitBtn.disabled      = false;
    submitBtn.style.opacity = '1';

    const errEl = document.getElementById(successId);
    if (errEl) {
      errEl.style.display    = 'block';
      errEl.style.background = '#fee2e2';
      errEl.style.color      = '#991b1b';
      errEl.textContent      = `Error: ${err.message}. Please call us at (832) 283-7084.`;
    }
  }
}


/* ─── 5. Scroll Reveal ──────────────────────────────────────── */

function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('vis'), index * 90);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.rv:not(.vis)').forEach(el => observer.observe(el));
}


/* ─── 6. Gallery Filters ────────────────────────────────────── */

function initGalleryFilters() {
  document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('gf')) return;
    document.querySelectorAll('.gf').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    // Wire to real category data-attributes when adding real project photos
    // const cat = e.target.textContent.trim().toLowerCase().replace(' ', '-');
    // document.querySelectorAll('.gi').forEach(item => {
    //   item.style.display = (cat === 'all-projects' || item.dataset.cat === cat) ? '' : 'none';
    // });
  });
}


/* ─── 7. Init ───────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initGalleryFilters();
  if (typeof injectIcons === 'function') injectIcons();
});
