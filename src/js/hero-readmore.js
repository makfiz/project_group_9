(() => {
  const refs = {
    openHeroReadmoreBtn: document.querySelector('[data-hero-readmore-open]'),
    closeHeroReadmoreBtn: document.querySelector('[data-hero-readmore-close]'),
    HeroReadmore: document.querySelector('[data-hero-readmore]'),
    body: document.querySelector('body'),
  };

  refs.openHeroReadmoreBtn.addEventListener('click', toggleReadMore);
  refs.closeHeroReadmoreBtn.addEventListener('click', toggleReadMore);

  function toggleReadMore() {
    refs.HeroReadmore.classList.toggle('visually-hidden');
    refs.HeroReadmore.classList.toggle('hero-readmore--open');
    refs.HeroReadmore.classList.toggle('hero-readmore--close');
  }
})();
