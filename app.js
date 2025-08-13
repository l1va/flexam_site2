// Feather icons
document.addEventListener('DOMContentLoaded', () => {
  if (window.feather) window.feather.replace();

  // Mobile menu
  const btn = document.querySelector('.hamburger');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    const toggleMenu = () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!isOpen));
      menu.hidden = isOpen;
    };
    btn.addEventListener('click', toggleMenu);
    // Close menu when a link is clicked
    menu.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        btn.setAttribute('aria-expanded', 'false');
        menu.hidden = true;
      }
    });
  }

  // Add shadow to header on scroll
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (window.scrollY > 10) header.style.boxShadow = 'var(--shadow)';
    else header.style.boxShadow = 'none';
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
});
