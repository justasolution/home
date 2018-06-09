; (function (window) {

  'use strict';

  $(document).ready(function (e) {
    function scrollToSection(event) {
      event.preventDefault();
      var $section = $($(this).attr('href'));
      $('html, body').animate({
        scrollTop: $section.offset().top
      }, 500);
    }
    $('[data-scroll]').on('click', scrollToSection); function scrollToSection(event) {
      event.preventDefault();
      var $section = $($(this).attr('href'));
      $('html, body').animate({
        scrollTop: $section.offset().top
      }, 500);
    }
    $('[data-scroll]').on('click', scrollToSection);
  });

})(window);


$(document).ready(function (e) {
  setTimeout(function () {
    $('body').addClass('loaded');
  }, 0);
});
