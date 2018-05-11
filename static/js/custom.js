(function($) {
    $(document).ready(function() {
        $('#toprod .owl-carousel').owlCarousel({
            loop: 1,
            margin: 0,
            items: 1,
            autoplay: true,
            autoplayHoverPause: true,
            responsiveClass: true,
            responsive: {
                0: { items: 1 },
                481: { items: 2 },
                769: { items: 4 },
                1121: { items: 6 },
                1441: { items: 8 },
                1601: { items: 10 }
            }
        }).addClass("owl-carousel-init");
        $(window).load(function() {
            $('#toprod .owl-carousel').trigger('refresh.owl.carousel');
        });
    }); //doc ready end--------------------------------    
}(jQuery));