/*
    Preoloader
*/

$(window).on('load', function () {
    $('.load-logo').fadeOut();
    $('.loading').delay(350).fadeOut();
});




/*
    WAYPOINTS FOR SKILL BAR
*/
$(function () {

    $(".skill-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.destroy();
    }, { offset: '50%' });


});


/*
    Filter tabs 
*/

$(window).on('load', function () {

    //initialize isotope
    $(".isotope-container").isotope({});


    //filter items
    $(".isotope-filters").on('click', 'button', function () {

        //get data filter
        var filterValue = $(this).attr('data-filter');

        $(".isotope-container").isotope({
            filter: filterValue
        });


        $(".isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');

    });

});


/*
    Magnifier
*/

$(function () {
    $('.portfolio__content').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});


/*
    NAVBAR
*/

$(function () {

    //ON PAGE RELOAD
    showHideDarkNavbar();

    //ON SCROLL
    $(window).scroll(function () {
        showHideDarkNavbar();
    });

    function showHideDarkNavbar() {
        if ($(window).scrollTop() > 50) {
            $('nav').addClass('dark-nav-top');
        }

        else {
            $('nav').removeClass('dark-nav-top');
        }
    }

});


/* 
    SMOOTH SCROLLING
*/

$(function () {

    $('a.smooth-scroll').click(function (event) {
        event.preventDefault();

        //get section id

        var sectionID = $(this).attr('href');

        $('html, body').animate(
            {
                scrollTop: $(sectionID).offset().top - 64
            }, 1250, "easeInOutExpo"
        );

    });

});

/*
    Mobile Menu
*/

$(function () {

    //Show mobile nav
    $('#mobile-nav-open-btn').click(function () {
        $('.mobile-nav').css("height", "100%");
    });

    //Hide mobile nav 
    $('#mobile-nav-close-btn, .mobile-nav a').click(function () {
        $('.mobile-nav').css("height", "0%");
    });

});


/*
    Animation
*/

$(function () {
    new WOW().init();
});

$(window).on('load', function () {
    $('.homepage__content--heading-main').addClass("animated fadeInLeft");
    $('.homepage__content--heading-sub').addClass("animated zoomIn");
    $('.homepage__arrow-down').addClass("animated fadeInDown infinite");
});