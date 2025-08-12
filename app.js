// Feather icons
document.addEventListener('DOMContentLoaded', () => {
  if (window.feather) window.feather.replace();

  // Mobile menu
  const btn = document.querySelector('.hamburger');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!isOpen));
      menu.hidden = isOpen;
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
