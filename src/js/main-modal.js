(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    scroll: document.querySelector('[data-scroll'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.openModalBtn.addEventListener('click', toggleScroll);
  refs.closeModalBtn.addEventListener('click', toggleScroll);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
  function toggleScroll() {
    refs.scroll.classList.toggle('no-scroll');
  }
})();
