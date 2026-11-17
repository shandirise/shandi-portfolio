/*
  All page-wide behaviour, kept small and dependency-free:
  1. Reveal-on-scroll       (adds .is-in to [data-reveal])
  2. Count-up numbers       ([data-count])
  3. Live clock             ([data-clock])
  4. Header: hide on scroll down, show on scroll up, progress line
  5. Active section in nav  ([data-nav])
  6. Mobile menu
  7. Language switch keeps your place on the page
*/

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* 1 ── Reveal on scroll ───────────────────────────────────────────── */
const revealables = document.querySelectorAll<HTMLElement>('[data-reveal]');
if (reduceMotion || !('IntersectionObserver' in window)) {
  revealables.forEach((el) => el.classList.add('is-in'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        // Also reveal anything already scrolled past (e.g. after a reload mid-page).
        if (e.isIntersecting || e.boundingClientRect.top < 0) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0 },
  );
  revealables.forEach((el) => io.observe(el));
}

/* 2 ── Count-up numbers ───────────────────────────────────────────── */
function countUp(el: HTMLElement) {
  const final = el.dataset.count ?? '';
  const match = final.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return;
  const [, numText, rest] = match;
  const target = parseFloat(numText);
  const decimals = (numText.split('.')[1] ?? '').length;
  const padTo = numText.startsWith('0') && !numText.startsWith('0.') ? numText.length : 0;
  const format = (v: number) => {
    const s = v.toFixed(decimals);
    return (padTo ? s.padStart(padTo, '0') : s) + rest;
  };
  const duration = 1400;
  const start = performance.now();
  el.textContent = format(0);
  const frame = (now: number) => {
    const p = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - p, 4);
    el.textContent = format(target * eased);
    if (p < 1) requestAnimationFrame(frame);
    else el.textContent = final;
  };
  requestAnimationFrame(frame);
}

const counters = document.querySelectorAll<HTMLElement>('[data-count]');
if (!reduceMotion && 'IntersectionObserver' in window) {
  const co = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const el = e.target as HTMLElement;
        // Wait a beat so the number starts counting as its cell fades in.
        setTimeout(() => countUp(el), 250);
        co.unobserve(el);
      }
    },
    { threshold: 0.6 },
  );
  counters.forEach((el) => co.observe(el));
}

/* 3 ── Live clock ─────────────────────────────────────────────────── */
document.querySelectorAll<HTMLElement>('[data-clock]').forEach((el) => {
  const fmt = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: el.dataset.tz,
  });
  const label = el.dataset.label ?? '';
  const tick = () => {
    const [h, m] = fmt.format(new Date()).split(':');
    el.innerHTML = `${h}<span class="blink">:</span>${m} ${label}`;
  };
  tick();
  setInterval(tick, 15_000);
});

/* 4 ── Header ─────────────────────────────────────────────────────── */
const header = document.querySelector<HTMLElement>('[data-header]');
const progress = document.querySelector<HTMLElement>('[data-progress]');
let lastY = window.scrollY;
let ticking = false;

function onScroll() {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  if (progress) progress.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
  if (header) {
    header.classList.toggle('is-scrolled', y > 8);
    if (!header.classList.contains('menu-open')) {
      const goingDown = y > lastY + 4;
      const goingUp = y < lastY - 4;
      if (goingDown && y > 480) header.classList.add('is-hidden');
      else if (goingUp || y < 480) header.classList.remove('is-hidden');
    }
  }
  lastY = y;
  ticking = false;
}
window.addEventListener(
  'scroll',
  () => {
    if (!ticking) {
      requestAnimationFrame(onScroll);
      ticking = true;
    }
  },
  { passive: true },
);
onScroll();

/* 5 ── Active section ─────────────────────────────────────────────── */
let currentSection = '';
const navLinks = document.querySelectorAll<HTMLElement>('[data-nav]');
function setActive(id: string) {
  currentSection = id;
  navLinks.forEach((a) => a.classList.toggle('is-active', a.dataset.nav === id));
}
if ('IntersectionObserver' in window) {
  const spy = new IntersectionObserver(
    (entries) => {
      for (const e of entries) if (e.isIntersecting) setActive(e.target.id === 'top' ? '' : e.target.id);
    },
    { rootMargin: '-45% 0px -50% 0px' },
  );
  document.querySelectorAll('main section[id]').forEach((s) => spy.observe(s));
}

/* 6 ── Mobile menu ────────────────────────────────────────────────── */
const menuToggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const menu = document.querySelector<HTMLElement>('[data-menu]');
function setMenu(open: boolean) {
  if (!header || !menu || !menuToggle) return;
  header.classList.toggle('menu-open', open);
  header.classList.remove('is-hidden');
  menuToggle.setAttribute('aria-expanded', String(open));
  document.documentElement.classList.toggle('no-scroll', open);
  if (open) menu.removeAttribute('inert');
  else menu.setAttribute('inert', '');
}
menuToggle?.addEventListener('click', () => setMenu(!header?.classList.contains('menu-open')));
menu?.querySelectorAll('[data-menu-link]').forEach((a) => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && header?.classList.contains('menu-open')) {
    setMenu(false);
    menuToggle?.focus();
  }
});
window.matchMedia('(min-width: 1200px)').addEventListener('change', (e) => e.matches && setMenu(false));

/* 7 ── Language switch keeps your place ───────────────────────────── */
document.querySelectorAll<HTMLAnchorElement>('[data-lang-link]').forEach((a) =>
  a.addEventListener('click', () => {
    if (a.getAttribute('aria-current') === 'true') return;
    const url = new URL(a.href);
    url.hash = currentSection ? `#${currentSection}` : '';
    a.href = url.toString();
  }),
);
