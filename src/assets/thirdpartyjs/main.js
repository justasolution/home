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

    // Sticky navbar 
        // Custom function which toggles between sticky class (is-sticky)
        var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
            var stickyHeight = sticky.outerHeight();
            var stickyTop = stickyWrapper.offset().top + 200;
            if (scrollElement.scrollTop() >= stickyTop) {
                stickyWrapper.height(stickyHeight);
                sticky.addClass("is-sticky");
            }
            else {
                sticky.removeClass("is-sticky");
                stickyWrapper.height('auto');
            }
        };

        // Find all data-toggle="sticky-onscroll" elements
        $('[data-toggle="sticky-onscroll"]').each(function () {
            var sticky = $(this);
            var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
            sticky.before(stickyWrapper);
            sticky.addClass('sticky');

            // Scroll & resize events
            $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
                stickyToggle(sticky, stickyWrapper, $(this));
            });

            // On page load
            stickyToggle(sticky, stickyWrapper, $(window));
        });

        

  });
  

})(window);


$(document).ready(function (e) {
  setTimeout(function () {
    $('body').addClass('loaded');
  }, 0);
});
