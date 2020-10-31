$(document).ready(function(){
    $(".owl-carousel").owlCarousel( 
        {
            items: 2,
            margin: 30,
            loop: true,
            autoplay: true,
            autoplayHoverPause: true,       
        }
    );
  });

  $(
    function () {
        showHideNav();
        $(window).scroll(function () {
            showHideNav();
        });

        function showHideNav() {
            if ($(window).scrollTop() > 50) {
                $("nav").removeClass("bg-transparent");
                $("nav").addClass("bg-white");
            }
            else {
                $("nav").removeClass("bg-white");
                $("nav").addClass("bg-transparent");
            }
        }
    }
);