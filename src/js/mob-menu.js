(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-openMenuBtn]'),
    closeMenuBtn: document.querySelector('[data-closeMenuBtn]'),
    mobileMenu: document.querySelector('[data-mobileMenu]'),
    hideHeaderBtn: document.querySelector('[data-hideHeaderBtn]'),
    backdrop: document.querySelector('[data-backdrop]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal1);
  refs.closeMenuBtn.addEventListener('click', toggleModal1);

  function toggleModal1() {
    refs.mobileMenu.classList.toggle('is-open');
    refs.backdrop.classList.toggle('is-transparent');
    refs.openMenuBtn.classList.toggle('is-hidden');
    refs.hideHeaderBtn.classList.toggle('is-hidden');
  }

})();
