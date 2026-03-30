const refs = {
  mobileMenuContainer: document.querySelector('.js-menu-container'),
  mobileMenuCloseBtn: document.querySelector('.js-close-menu'),
  mobileMenuOpenBtn: document.querySelector('.js-open-menu'),
};

refs.mobileMenuOpenBtn.addEventListener('click', onOpenModal);
refs.mobileMenuCloseBtn.addEventListener('click', onCloseModal);

function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress);
  refs.mobileMenuContainer.classList.add('is-open');
  refs.mobileMenuCloseBtn.addEventListener('click', onCloseModal);
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  refs.mobileMenuContainer.classList.remove('is-open');
  refs.mobileMenuCloseBtn.removeEventListener('click', onCloseModal);
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
  }
}
