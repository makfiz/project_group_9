(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openMobModalBtn: document.querySelector('[data-mobmodal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openMobModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-transparent');
    refs.body.classList.toggle('no-scroll');
  }
})();
