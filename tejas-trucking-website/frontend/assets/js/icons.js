/**
 * Tejas Trucking & Construction — Icon Library
 * All icons are inline SVGs styled with brand colors.
 * Usage: document.querySelector('.icon-slot').innerHTML = ICONS.truck;
 *
 * Color palette:
 *   Navy  #0d1f3c
 *   Orange #e85d1a
 *   White  #ffffff
 */

const ICONS = {

  /* ── Services ── */
  truck: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="18" width="38" height="26" rx="3" fill="#0d1f3c"/>
    <path d="M40 26h10l8 10v8H40V26z" fill="#1a3560"/>
    <rect x="4" y="20" width="34" height="18" rx="2" fill="#e85d1a" opacity=".15"/>
    <circle cx="14" cy="46" r="6" fill="#0d1f3c" stroke="#e85d1a" stroke-width="2"/>
    <circle cx="14" cy="46" r="2.5" fill="#e85d1a"/>
    <circle cx="50" cy="46" r="6" fill="#0d1f3c" stroke="#e85d1a" stroke-width="2"/>
    <circle cx="50" cy="46" r="2.5" fill="#e85d1a"/>
    <rect x="6" y="22" width="28" height="12" rx="1.5" fill="#e85d1a" opacity=".25"/>
    <path d="M42 28h7l5 6.5V42h-12V28z" fill="#e85d1a" opacity=".2"/>
    <rect x="44" y="30" width="6" height="7" rx="1" fill="#9aa0b0" opacity=".5"/>
  </svg>`,

  excavator: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="40" width="36" height="12" rx="3" fill="#0d1f3c"/>
    <rect x="2" y="46" width="40" height="6" rx="2" fill="#1a3560"/>
    <circle cx="10" cy="54" r="5" fill="#0d1f3c" stroke="#e85d1a" stroke-width="2"/>
    <circle cx="10" cy="54" r="2" fill="#e85d1a"/>
    <circle cx="30" cy="54" r="5" fill="#0d1f3c" stroke="#e85d1a" stroke-width="2"/>
    <circle cx="30" cy="54" r="2" fill="#e85d1a"/>
    <rect x="14" y="34" width="16" height="12" rx="2" fill="#e85d1a"/>
    <path d="M26 34 L38 20 L44 26 L32 40z" fill="#0d1f3c"/>
    <path d="M40 20 L56 28 L52 36 L38 28z" fill="#1a3560"/>
    <path d="M52 34 L60 42 L56 46 L46 36z" fill="#0d1f3c"/>
    <rect x="46" y="40" width="14" height="8" rx="1" fill="#e85d1a" opacity=".3"/>
    <circle cx="20" cy="36" r="4" fill="#e85d1a" opacity=".2"/>
  </svg>`,

  crane: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect x="24" y="8" width="6" height="48" rx="2" fill="#0d1f3c"/>
    <rect x="10" y="8" width="44" height="6" rx="2" fill="#e85d1a"/>
    <line x1="27" y1="14" x2="50" y2="14" stroke="#0d1f3c" stroke-width="2"/>
    <rect x="48" y="14" width="4" height="18" rx="1" fill="#1a3560"/>
    <rect x="46" y="30" width="8" height="6" rx="1" fill="#e85d1a"/>
    <line x1="50" y1="36" x2="50" y2="48" stroke="#9aa0b0" stroke-width="1.5" stroke-dasharray="3,2"/>
    <rect x="44" y="48" width="12" height="6" rx="1" fill="#0d1f3c"/>
    <rect x="14" y="52" width="36" height="6" rx="2" fill="#0d1f3c"/>
    <rect x="16" y="54" width="32" height="3" rx="1" fill="#e85d1a" opacity=".3"/>
    <circle cx="27" cy="10" r="2" fill="#e85d1a"/>
  </svg>`,

  demolition: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="28" width="28" height="28" rx="2" fill="#0d1f3c" opacity=".4"/>
    <path d="M18 42 L46 42 L46 56 L18 56z" fill="#0d1f3c"/>
    <path d="M22 28 L42 28 L46 42 L18 42z" fill="#1a3560"/>
    <path d="M26 20 L38 20 L42 28 L22 28z" fill="#0d1f3c"/>
    <path d="M8 18 L20 8 L28 20 L16 30z" fill="#e85d1a"/>
    <path d="M12 22 L6 16 L14 10 L20 18z" fill="#e85d1a" opacity=".6"/>
    <path d="M34 10 L42 4 L50 14 L40 18z" fill="#e85d1a" opacity=".4"/>
    <path d="M42 24 L52 18 L58 28 L48 32z" fill="#e85d1a" opacity=".25"/>
    <rect x="26" y="44" width="12" height="12" rx="1" fill="#e85d1a" opacity=".15"/>
  </svg>`,

  delivery: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="20" width="42" height="26" rx="3" fill="#0d1f3c"/>
    <rect x="46" y="28" width="14" height="18" rx="2" fill="#1a3560"/>
    <path d="M46 28 h10 l4 8 v10 h-14 V28z" fill="#1a3560"/>
    <circle cx="16" cy="48" r="6" fill="#0d1f3c" stroke="#e85d1a" stroke-width="2"/>
    <circle cx="16" cy="48" r="2.5" fill="#e85d1a"/>
    <circle cx="50" cy="48" r="6" fill="#0d1f3c" stroke="#e85d1a" stroke-width="2"/>
    <circle cx="50" cy="48" r="2.5" fill="#e85d1a"/>
    <rect x="10" y="14" width="22" height="10" rx="2" fill="#e85d1a"/>
    <rect x="14" y="16" width="14" height="6" rx="1" fill="#e85d1a" opacity=".5"/>
    <rect x="6" y="22" width="38" height="16" rx="1" fill="#e85d1a" opacity=".1"/>
    <rect x="12" y="25" width="12" height="8" rx="1" fill="#fff" opacity=".08"/>
  </svg>`,

  construction: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="42" width="48" height="14" rx="2" fill="#0d1f3c"/>
    <rect x="16" y="28" width="8" height="16" rx="1" fill="#1a3560"/>
    <rect x="28" y="20" width="8" height="24" rx="1" fill="#1a3560"/>
    <rect x="40" y="32" width="8" height="12" rx="1" fill="#1a3560"/>
    <rect x="12" y="38" width="40" height="6" rx="1" fill="#e85d1a"/>
    <rect x="18" y="14" width="6" height="16" rx="1" fill="#e85d1a" opacity=".3"/>
    <rect x="30" y="8" width="6" height="14" rx="1" fill="#e85d1a" opacity=".3"/>
    <path d="M8 42 L20 12 L24 14 L14 42z" fill="#e85d1a" opacity=".15"/>
    <path d="M28 42 L34 8 L38 10 L34 42z" fill="#e85d1a" opacity=".15"/>
    <rect x="10" y="44" width="44" height="3" rx="1" fill="#e85d1a" opacity=".25"/>
  </svg>`,

  /* ── Trust Bar ── */
  location: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 6C21.5 6 13 14.5 13 25c0 15 19 33 19 33s19-18 19-33C51 14.5 42.5 6 32 6z" fill="#e85d1a"/>
    <circle cx="32" cy="25" r="8" fill="#fff"/>
    <circle cx="32" cy="25" r="4" fill="#e85d1a"/>
  </svg>`,

  star: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 6l6.5 13.2 14.5 2.1-10.5 10.2 2.5 14.4L32 39.2l-13 6.8 2.5-14.4L11 21.3l14.5-2.1z" fill="#e85d1a"/>
    <path d="M32 10l5.5 11.2 12.3 1.8L41 31.2l2.1 12.2L32 37.5l-11.1 5.8 2.1-12.2-8.8-8.2 12.3-1.8z" fill="#fff" opacity=".2"/>
  </svg>`,

  shield: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 4L10 14v18c0 13.3 9.3 25.7 22 29 12.7-3.3 22-15.7 22-29V14L32 4z" fill="#0d1f3c"/>
    <path d="M32 8L14 17v15c0 11.1 7.8 21.4 18 24.3 10.2-2.9 18-13.2 18-24.3V17L32 8z" fill="#1a3560"/>
    <path d="M24 32l6 6 12-12" stroke="#e85d1a" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  </svg>`,

  clock: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="26" fill="#0d1f3c"/>
    <circle cx="32" cy="32" r="22" fill="#1a3560"/>
    <line x1="32" y1="32" x2="32" y2="16" stroke="#e85d1a" stroke-width="3" stroke-linecap="round"/>
    <line x1="32" y1="32" x2="44" y2="38" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="32" cy="32" r="3" fill="#e85d1a"/>
    <circle cx="32" cy="10" r="2" fill="#fff" opacity=".4"/>
    <circle cx="32" cy="54" r="2" fill="#fff" opacity=".4"/>
    <circle cx="10" cy="32" r="2" fill="#fff" opacity=".4"/>
    <circle cx="54" cy="32" r="2" fill="#fff" opacity=".4"/>
  </svg>`,

  phone: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 8h24a4 4 0 014 4v40a4 4 0 01-4 4H20a4 4 0 01-4-4V12a4 4 0 014-4z" fill="#0d1f3c"/>
    <rect x="18" y="14" width="28" height="28" rx="1" fill="#1a3560"/>
    <circle cx="32" cy="50" r="3" fill="#e85d1a"/>
    <rect x="26" y="10" width="12" height="2" rx="1" fill="#e85d1a" opacity=".5"/>
    <path d="M22 22h20M22 28h14M22 34h10" stroke="#e85d1a" stroke-width="1.5" stroke-linecap="round" opacity=".3"/>
  </svg>`,

  /* ── Contact page ── */
  map: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="10" width="52" height="44" rx="3" fill="#0d1f3c"/>
    <rect x="8" y="12" width="48" height="40" rx="2" fill="#1a3560"/>
    <path d="M8 32 Q20 20 32 32 Q44 44 56 32" stroke="#e85d1a" stroke-width="2" fill="none" opacity=".4"/>
    <path d="M8 42 Q20 30 32 42 Q44 54 56 42" stroke="#e85d1a" stroke-width="1.5" fill="none" opacity=".2"/>
    <path d="M32 12 L32 52 M8 32 L56 32" stroke="#fff" stroke-width=".8" opacity=".1"/>
    <path d="M32 14C27 14 22 18.5 22 24c0 8.5 10 18 10 18s10-9.5 10-18c0-5.5-5-10-10-10z" fill="#e85d1a"/>
    <circle cx="32" cy="24" r="4" fill="#fff"/>
  </svg>`,

  /* ── Values / About ── */
  handshake: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 28h12l8-8h12l10 8H58v14H46l-8 6H28l-8-6H4V28z" fill="#0d1f3c"/>
    <path d="M16 28l8-8h10l-6 8H16z" fill="#e85d1a" opacity=".5"/>
    <path d="M36 20h6l10 8H40l-6-8z" fill="#e85d1a" opacity=".3"/>
    <path d="M28 34l8-6 8 6-8 8-8-8z" fill="#e85d1a"/>
    <path d="M4 30h10v10H4z" rx="1" fill="#1a3560"/>
    <path d="M50 30h10v10H50z" rx="1" fill="#1a3560"/>
    <circle cx="32" cy="34" r="4" fill="#fff" opacity=".15"/>
  </svg>`,

  gear: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <path d="M26 6h12l2 8a20 20 0 014.5 2.6l8-2.6 6 10.4-6.2 5.6a20 20 0 010 5.2l6.2 5.6-6 10.4-8-2.6A20 20 0 0140 52l-2 8H26l-2-8a20 20 0 01-4.5-2.6l-8 2.6-6-10.4 6.2-5.6a20 20 0 010-5.2L5.5 24.8 11.5 14.4l8 2.6A20 20 0 0124 14l2-8z" fill="#0d1f3c"/>
    <circle cx="32" cy="32" r="10" fill="#e85d1a"/>
    <circle cx="32" cy="32" r="5" fill="#0d1f3c"/>
    <circle cx="32" cy="32" r="2" fill="#e85d1a"/>
  </svg>`,

  safety: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="10" width="52" height="8" rx="2" fill="#e85d1a"/>
    <rect x="10" y="18" width="44" height="36" rx="2" fill="#0d1f3c"/>
    <rect x="6" y="10" width="52" height="4" rx="2" fill="#e85d1a" opacity=".5"/>
    <path d="M18 8 L46 8" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
    <path d="M26 36l6 6 14-14" stroke="#e85d1a" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <rect x="14" y="22" width="36" height="4" rx="1" fill="#e85d1a" opacity=".2"/>
  </svg>`,

  reliability: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="26" fill="#0d1f3c"/>
    <circle cx="32" cy="32" r="20" fill="#1a3560"/>
    <path d="M32 16v16l10 6" stroke="#e85d1a" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <circle cx="32" cy="32" r="3" fill="#e85d1a"/>
    <path d="M18 10 L12 6 M46 10 L52 6" stroke="#e85d1a" stroke-width="2" stroke-linecap="round" opacity=".4"/>
    <path d="M10 28 L6 26 M58 28 L62 26" stroke="#e85d1a" stroke-width="2" stroke-linecap="round" opacity=".4"/>
  </svg>`,

  community: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="20" r="10" fill="#0d1f3c"/>
    <circle cx="14" cy="26" r="8" fill="#1a3560"/>
    <circle cx="50" cy="26" r="8" fill="#1a3560"/>
    <path d="M4 54c0-8.8 4.5-16 10-18 2.5 3.5 5.5 6 10 6s7.5-2.5 10-6c2.5 4 5.5 6.5 10 6.5s7.5-2.5 10-6c5.5 2 10 9.2 10 18H4z" fill="#0d1f3c"/>
    <path d="M22 54c0-6.6 4.5-12 10-12s10 5.4 10 12H22z" fill="#e85d1a"/>
    <circle cx="32" cy="20" r="5" fill="#e85d1a" opacity=".3"/>
  </svg>`,

  trophy: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 8h24v20a12 12 0 01-24 0V8z" fill="#e85d1a"/>
    <path d="M8 10h12v14a6 6 0 01-12 0V10z" fill="#0d1f3c"/>
    <path d="M44 10h12v14a6 6 0 01-12 0V10z" fill="#0d1f3c"/>
    <rect x="26" y="40" width="12" height="10" rx="1" fill="#1a3560"/>
    <rect x="18" y="50" width="28" height="6" rx="2" fill="#0d1f3c"/>
    <path d="M26 18l4 8 8-4-6 8" stroke="#fff" stroke-width="1.5" fill="none" opacity=".3"/>
    <circle cx="32" cy="22" r="5" fill="#fff" opacity=".15"/>
    <rect x="20" y="50" width="24" height="3" rx="1" fill="#e85d1a" opacity=".3"/>
  </svg>`,

  /* ── Review / rating ── */
  quote: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="10" width="52" height="38" rx="4" fill="#0d1f3c"/>
    <path d="M6 38 L6 48 L18 38z" fill="#0d1f3c"/>
    <rect x="14" y="20" width="8" height="18" rx="2" fill="#e85d1a"/>
    <rect x="26" y="20" width="8" height="18" rx="2" fill="#e85d1a"/>
    <path d="M16 20 C16 16 22 14 22 20" stroke="#e85d1a" stroke-width="2" fill="none"/>
    <path d="M28 20 C28 16 34 14 34 20" stroke="#e85d1a" stroke-width="2" fill="none"/>
    <rect x="40" y="22" width="12" height="2" rx="1" fill="#fff" opacity=".2"/>
    <rect x="40" y="27" width="10" height="2" rx="1" fill="#fff" opacity=".2"/>
    <rect x="40" y="32" width="8" height="2" rx="1" fill="#fff" opacity=".2"/>
  </svg>`,

  /* ── Nav logo icon ── */
  logo: `<svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 18L8 10L14 15L19 8L23 18H3Z" fill="white" opacity=".3"/>
    <rect x="2" y="16" width="7" height="5" rx="1" fill="white" opacity=".8"/>
    <path d="M2 20H24M6 20V22M20 20V22" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="6" cy="22" r="1.5" fill="white"/>
    <circle cx="20" cy="22" r="1.5" fill="white"/>
  </svg>`,

  /* ── Admin Dashboard icons ── */
  dashboard: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="24" height="24" rx="3" fill="#0d1f3c"/>
    <rect x="36" y="4" width="24" height="24" rx="3" fill="#e85d1a"/>
    <rect x="4" y="36" width="24" height="24" rx="3" fill="#e85d1a" opacity=".6"/>
    <rect x="36" y="36" width="24" height="24" rx="3" fill="#0d1f3c"/>
    <path d="M12 20 L16 14 L20 18 L24 12" stroke="#e85d1a" stroke-width="2" fill="none" stroke-linecap="round"/>
    <circle cx="48" cy="16" r="6" fill="#fff" opacity=".3"/>
    <rect x="10" y="44" width="12" height="3" rx="1" fill="#fff" opacity=".4"/>
    <rect x="10" y="50" width="8" height="3" rx="1" fill="#fff" opacity=".25"/>
    <path d="M44 50 L48 44 L52 50z" fill="#fff" opacity=".4"/>
  </svg>`,

  lead: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="20" r="14" fill="#0d1f3c"/>
    <circle cx="32" cy="20" r="8" fill="#e85d1a" opacity=".4"/>
    <path d="M10 54c0-12.1 9.9-22 22-22s22 9.9 22 22H10z" fill="#0d1f3c"/>
    <path d="M16 54c0-8.8 7.2-16 16-16s16 7.2 16 16H16z" fill="#1a3560"/>
    <circle cx="32" cy="20" r="4" fill="#e85d1a"/>
  </svg>`,

  logout: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <path d="M26 10H12a4 4 0 00-4 4v36a4 4 0 004 4h14" stroke="#e85d1a" stroke-width="3" stroke-linecap="round" fill="none"/>
    <path d="M40 20l12 12-12 12M52 32H24" stroke="#0d1f3c" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M40 20l12 12-12 12M52 32H24" stroke="#e85d1a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  </svg>`,

  search: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="28" r="18" fill="none" stroke="#0d1f3c" stroke-width="4"/>
    <line x1="41" y1="41" x2="56" y2="56" stroke="#e85d1a" stroke-width="4.5" stroke-linecap="round"/>
    <circle cx="28" cy="28" r="10" fill="#e85d1a" opacity=".1"/>
  </svg>`,

  trash: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="18" width="44" height="6" rx="2" fill="#e85d1a" opacity=".6"/>
    <path d="M16 24 L18 54 a2 2 0 002 2 h24 a2 2 0 002-2 L48 24z" fill="#0d1f3c"/>
    <path d="M26 24 L26 50 M32 24 L32 50 M38 24 L38 50" stroke="#e85d1a" stroke-width="2" stroke-linecap="round" opacity=".4"/>
    <rect x="22" y="12" width="20" height="8" rx="2" fill="#1a3560"/>
    <rect x="26" y="10" width="12" height="4" rx="1" fill="#0d1f3c"/>
  </svg>`,

  check: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="28" fill="#22c55e" opacity=".15"/>
    <circle cx="32" cy="32" r="22" fill="#22c55e" opacity=".2"/>
    <path d="M18 32 L28 42 L46 22" stroke="#22c55e" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  </svg>`,

};

// Inject icon into all elements with data-icon attribute
function injectIcons() {
  document.querySelectorAll('[data-icon]').forEach(el => {
    const key = el.getAttribute('data-icon');
    if (ICONS[key]) {
      el.innerHTML = ICONS[key];
    }
  });
}

document.addEventListener('DOMContentLoaded', injectIcons);
