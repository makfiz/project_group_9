(() => {
  const refs = {
    openFranchiseBtn: document.querySelector('[data-franchise-open]'),
    closeFranchiseBtn: document.querySelector('.franchise-close-btn'),
    franchiseModal: document.querySelector('.franchise-backdrop'),
    openMapBtn: document.querySelector('[data-map-open]'),
    closeMapBtn: document.querySelector('.map-close-btn'),
    mapModal: document.querySelector('.map-backdrop'),
    body: document.querySelector('body'),
  };

  refs.openFranchiseBtn.addEventListener('click', toggleFranchise);
  refs.closeFranchiseBtn.addEventListener('click', toggleFranchise);

  refs.openMapBtn.addEventListener('click', toggleMap);
  refs.closeMapBtn.addEventListener('click', toggleMap);

  function toggleFranchise() {
    refs.franchiseModal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }

  function toggleMap() {
    refs.mapModal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
