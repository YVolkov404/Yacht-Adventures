(() => {
  const popUpContainer = document.querySelector('.js-pop-up-container');
  const openMenuBtn = document.querySelector('.js-open-pop-up');
  const closeMenuBtn = document.querySelector('.js-close-pop-up');
  const form = document.querySelector('.form');

  if (!popUpContainer || !closeMenuBtn) return;

  const toggleMenu = () => {
    const isOpen = closeMenuBtn.getAttribute('aria-expanded') === 'true';
    closeMenuBtn.setAttribute('aria-expanded', String(!isOpen));
    popUpContainer.classList.toggle('is-open');
    popUpContainer.toggleAttribute('hidden');
  };

  if (openMenuBtn) {
    openMenuBtn.addEventListener('click', toggleMenu);
  }
  closeMenuBtn.addEventListener('click', toggleMenu);

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      toggleMenu();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popUpContainer.classList.contains('is-open')) {
      toggleMenu();
    }
  });
})();