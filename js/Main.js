$(document).ready(function(){
    $nav = $(".nav");
    $toggleCollapse = $(".toggle-collapse ");

    /*   click event on toggle menu    */
    $toggleCollapse.click(function(){
        $nav.toggleClass("collapse");
    });

    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeOut: 3000,
        dots: false,
        nav: true
    });
});



 
