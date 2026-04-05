const refs = {
  jsContainer: document.querySelector('.js-container'),
  jsCloseBtn: document.querySelector('.js-close'),
  jsOpenBtn: document.querySelector('.js-open'),
};

refs.jsOpenBtn.addEventListener('click', onOpenModal);
refs.jsCloseBtn.addEventListener('click', onCloseModal);

function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress);
  refs.jsContainer.classList.add('is-open');
  refs.jsCloseBtn.addEventListener('click', onCloseModal);
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  refs.jsContainer.classList.remove('is-open');
  refs.jsCloseBtn.removeEventListener('click', onCloseModal);
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
  }
}