(() => {
  const refs = {
    openProductmodal1Btn: document.querySelector('[data-productmodal1-open]'),
    closeProductmodal1Btn: document.querySelector('[data-productmodal1-close]'),
    Productmodal1: document.querySelector('[data-productmodal1]'),

    openProductmodal2Btn: document.querySelector('[data-productmodal2-open]'),
    closeProductmodal2Btn: document.querySelector('[data-productmodal2-close]'),
    Productmodal2: document.querySelector('[data-productmodal2]'),

    openProductmodal3Btn: document.querySelector('[data-productmodal3-open]'),
    closeProductmodal3Btn: document.querySelector('[data-productmodal3-close]'),
    Productmodal3: document.querySelector('[data-productmodal3]'),
  };

  refs.openProductmodal1Btn.addEventListener('click', toggleModal1);
  refs.closeProductmodal1Btn.addEventListener('click', toggleModal1);

  refs.openProductmodal2Btn.addEventListener('click', toggleModal2);
  refs.closeProductmodal2Btn.addEventListener('click', toggleModal2);

  refs.openProductmodal3Btn.addEventListener('click', toggleModal3);
  refs.closeProductmodal3Btn.addEventListener('click', toggleModal3);

  function toggleModal1() {
    refs.Productmodal1.classList.toggle('prodoverlay-is-open');
  }

  function toggleModal2() {
    refs.Productmodal2.classList.toggle('prodoverlay-is-open');
  }

  function toggleModal3() {
    refs.Productmodal3.classList.toggle('prodoverlay-is-open');
  }
})();
