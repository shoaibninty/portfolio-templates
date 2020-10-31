
//typed.js
$(function () {
    var typed = new Typed('.header-typed', {
        strings: 
        [
            "web interfaces.",
            "desktop applications.",
            "web applications.", 
        ],
        typeSpeed: 100, 
        backSpeed: 30,
        loop: true, 
        backDelay: 500
    });
});


//owl carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true, 
        autoplay: true,
        autoplayTimeout: 3000, 
        mouseDrag: true,
        autoplayHoverPause: true,
        animateIn: true, 
        nav: true, 
        dots: false,
        margin:10,
        navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    })
  });