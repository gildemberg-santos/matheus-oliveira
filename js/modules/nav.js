function setOpen(toggle, nav, open) {
  toggle.setAttribute('aria-expanded', String(open));
  nav.dataset.open = String(open);
}

export function initNavigation() {
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-site-nav]');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    setOpen(toggle, nav, !isOpen);
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(toggle, nav, false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || toggle.getAttribute('aria-expanded') !== 'true') return;
    setOpen(toggle, nav, false);
    toggle.focus();
  });
}
