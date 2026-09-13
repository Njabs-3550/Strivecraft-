document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('#sidebar');
  const menuButton = document.querySelector('#menu-button');
  const closeButton = document.querySelector('#close-menu');

  if (!sidebar) {
    return;
  }

  const backdrop = document.createElement('button');
  backdrop.type = 'button';
  backdrop.className = 'menu-backdrop';
  backdrop.setAttribute('aria-label', 'Close menu');
  document.body.appendChild(backdrop);

  const closeMenu = (event) => {
    event?.preventDefault();
    event?.stopPropagation();
    sidebar.classList.remove('mobile-menu-open');
    sidebar.setAttribute('aria-hidden', 'true');
    backdrop.classList.remove('menu-backdrop-visible');
    document.body.classList.remove('menu-is-open');
  };

  const openMenu = (event) => {
    event?.preventDefault();
    event?.stopPropagation();
    sidebar.classList.add('mobile-menu-open');
    sidebar.setAttribute('aria-hidden', 'false');
    backdrop.classList.add('menu-backdrop-visible');
    document.body.classList.add('menu-is-open');
  };

  menuButton?.addEventListener('click', openMenu);
  menuButton?.addEventListener('touchend', openMenu, {
    passive: false
  });
  closeButton?.addEventListener('click', closeMenu);
  closeButton?.addEventListener('touchend', closeMenu, {
    passive: false
  });
  backdrop.addEventListener('click', closeMenu);
  backdrop.addEventListener('touchend', closeMenu, {
    passive: false
  });

  sidebar.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu(event);
    }
  });

  closeMenu();
});
