$(document).ready(function(){
    $nav = $(".nav");
    $toggleCollapse = $(".toggle-collapse ");

    /*   click event on toggle menu    */
    $toggleCollapse.click(function(){
        $nav.toggleClass("collapse");
    });

    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: false,
        dots: false,
        nav: true,
        navText: [$(".owl-navigation .owl-nav-prev"), $(".owl-navigation .owl-nav-next")]
    });

    //scroll top
    $(".move-up span").click(function(){
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });




});



 
