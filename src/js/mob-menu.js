(() => {
  const mobileMenu = document.querySelector('.mob-menu');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const hideHeaderBtn = document.querySelector('.header-btn');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    openMenuBtn.classList.toggle('is-hidden');
    hideHeaderBtn.classList.toggle('is-hidden');
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  // window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  //   if (!e.matches) return;
  //   mobileMenu.classList.remove('is-open');
  //   openMenuBtn.setAttribute('aria-expanded', false);
  // });
})();