jQuery(window).scroll(function () {
  var $sections = $('section');
  $sections.each(function (i, el) {
    var top = $(el).offset().top - 100;
    var bottom = top + $(el).height();
    var scroll = $(window).scrollTop();
    var id = $(el).attr('id');
    if (scroll > top && scroll < bottom) {
      $('a.active').removeClass('active');
      $('a[href="#' + id + '"]').addClass('active');
    }
  });
});
$(document).ready(function () {
  $('.nav').on('click', 'a', function (event) {
    // исключаем стандартную реакцию браузера
    event.preventDefault();

    // получем идентификатор блока из атрибута href
    var id = $(this).attr('href'),
      // находим высоту, на которой расположен блок
      top = $(id).offset().top;

    // анимируем переход к блоку, время: 800 мс
    $('body,html').animate({ scrollTop: top }, 800);
  });
});
