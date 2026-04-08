(() => {
  const popUpContainer = document.querySelector('.js-pop-up-container');
  const openMenuBtn = document.querySelector('.js-open-pop-up');
  const closeMenuBtn = document.querySelector('.js-close-pop-up');

  if (!popUpContainer || !openMenuBtn || !closeMenuBtn) return;

  const toggleMenu = () => {
    const isOpen = openMenuBtn.getAttribute('aria-expanded') === 'true';
    openMenuBtn.setAttribute('aria-expanded', String(!isOpen));
    popUpContainer.classList.toggle('is-open');
    popUpContainer.toggleAttribute('hidden');

  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popUpContainer.classList.contains('is-open')) {
      toggleMenu();
    }
  });

  const mediaQuery = window.matchMedia('(min-width: 1440px)');
  mediaQuery.addEventListener('change', e => {
    if (e.matches) {
      popUpContainer.classList.remove('is-open');
      openMenuBtn.setAttribute('aria-expanded', 'false');
    }
  });
})();