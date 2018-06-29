$(function() {
    "use strict"

    // wow js
    new WOW().init();


    // scrollIt
    $.scrollIt({
        upKey: 38, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        easing: 'swing', // the easing function for animation
        scrollTime: 600, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: -58 // offste (in px) for fixed top navigation
    });

    // Typed Js
    $(function() {
        $(".write").typed({
            strings: ["Welcome to JustaSolution!", "I am a Full Stack Angular Developer", "Thanks for visit"],
            // typing speed
            typeSpeed: 30,
            // time before typing starts
            startDelay: 1200,
            // backspacing speed
            backSpeed: 10,
            // time before backspacing
            backDelay: 2000,
            // loop
            loop: true,
            // default cursor
            showCursor: false
        });
    });

    // navbar with scrolling background
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 370) {
            $('.nav_container').addClass('nav_container_2');
            $('.nav_container').removeClass('nav_container_1');
        } else {
            $('.nav_container').removeClass('nav_container_2');
            $('.nav_container').addClass('nav_container_1');
        }
    });

    // Responsive Navigation Bar
    $('.menu-tab').on('click', function() {
        $('.nav_container').toggleClass('show');
        $('.menu-tab').toggleClass('active');
    });
    $('a').on('click', function() {
        $('.nav_container').removeClass('show');
        $('.menu-tab').removeClass('active');
    });


    // Scroll to Top Button
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 600) {
            $('.scroll_top').fadeIn(600);
        } else {
            $('.scroll_top').fadeOut(600);
        }
    });

    // Counter JS
    // $('.counter').countUp({
    //     'time': 5000,
    //     'delay': 50
    // });


    // Owl Carousel
    $('.v2_carosel').owlCarousel({
        items: 1,
        loop: true,
        mouseDrag: false,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplaySpeed: 1000,
        smartSpeed: 800,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })



});


$(window).on("load", function() {

    // Preloader
    $(".preloader").fadeOut(500);


    // Auto Square Image Maker
    $(".gallery_conatainer img").each(function() {
        // action goes here!!
        var imgwidth = $(this).width();
        var imgheight = $(this).height();

        var wwidth = $("#wrapper").width();
        var wheight = $("#wrapper").height();


        if (imgwidth > imgheight) {
            $(this).addClass('image1');
        } else {
            $(this).addClass('image2');
        }
        return 0;
    });

    // isotope
    // $('.gallery').isotope({
    //     // options
    //     itemSelector: '.items'
    // });

    // var $gallery = $('.gallery').isotope({
    //     // options
    // });

    // filter items on button click
    // $('.filtering').on('click', 'span', function() {

    //     var filterValue = $(this).attr('data-filter');

    //     $gallery.isotope({
    //         filter: filterValue
    //     });

    // });

    $('.filtering').on('click', 'span', function() {

        $(this).addClass('active').siblings().removeClass('active');

    });

});