(() => {
  const refs = {
    openFranchiseBtn: document.querySelector('[data-franchise-open]'),
    closeFranchiseBtn: document.querySelector('.franchise-close-btn'),
    franchiseModal: document.querySelector('.franchise-backdrop'),
    body: document.querySelector('body'),
  };

  refs.openFranchiseBtn.addEventListener('click', toggleFranchise);
  refs.closeFranchiseBtn.addEventListener('click', toggleFranchise);

  function toggleFranchise() {
    refs.franchiseModal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
