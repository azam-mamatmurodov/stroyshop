(function($) {
    $(document).ready(function() {
        $(window).on('load', function() {
            $('#toprod .owl-carousel').owlCarousel({
                loop: true,
                margin: 0,
                responsive: {
                    0: {
                        items: 1
                    },
                    481: {
                        items: 2
                    },
                    769: {
                        items: 4
                    },
                    1121: {
                        items: 6
                    },
                    1441: {
                        items: 8
                    },
                    1601: {
                        items: 10
                    }
                }
            });
            $('#toprod').find('.owl-item.active').last().addClass('last');
            $('#slider .owl-carousel').owlCarousel({
                loop: true,
                margin: 0,
                items: 1,
                autoplay: true
            });
            $('#inner-slider .owl-carousel').owlCarousel({
                loop: true,
                margin: 0,
                items: 1,
                autoplay: true
            });
            $('#partners .owl-carousel').owlCarousel({
                loop: true,
                margin: 0,
                autoplay: true,
                responsive: {
                    0: {
                        items: 3
                    },
                    481: {
                        items: 4
                    },
                    769: {
                        items: 6
                    },
                    1121: {
                        items: 7
                    },
                    1441: {
                        items: 8
                    }
                }
            });
            $('#superprice .owl-carousel').owlCarousel({
                loop: true,
                margin: 0,
                items: 1,
                autoplay: true
            });
            $('#feedbacks .owl-carousel').owlCarousel({
                loop: true,
                margin: 0,
                autoplay: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    1025: {
                        items: 2
                    }
                }
            });
            $('.gotop').click(function() {
                $('html, body').animate({ scrollTop: 0 }, 800);
                return false;
            });
            $('.minus').on('click', function() {
                var $input = $(this).parent().find('input[type="text"]');
                if ($input.val() == '') {
                    $input.val('0');
                } else if ($input.val() == '0') {
                    $input.addClass('warn');
                } else {
                    var $quantity = parseInt($input.val());
                    $quantity--;
                    $input.val($quantity);
                }
            });
            $('.plus').on('click', function() {
                var $input = $(this).parent().find('input[type="text"]');
                if ($input.val() == '') {
                    $input.val('1');
                } else {
                    $input.removeClass('warn');
                    var $quantity = parseInt($input.val());
                    $quantity++;
                    $input.val($quantity);
                }
            });

            $('.weight li').on('click', function() {
                $('.weight li').removeClass('active');
                $(this).addClass('active');
            });
            $('.color li').on('click', function() {
                $('.color li span').removeClass('active');
                $(this).find('span').addClass('active');
            });
            $('.addfeed button').on('click', function() {
                $('.feedback-form').slideDown();
            });
            if ($('body').width() <= 1024) {
                $('#menu-block').appendTo('.header-top');
                $('#header .logo').prependTo('.header-bottom');
                $('#menu-block').find('li.expanded').append('<div class="down"></div>');
                $('.expanded').find('.down').on('click', function() {
                    $(this).toggleClass('up').parent().children('ul').slideToggle();
                });
                $('.header-bottom').prepend('<div class="hamburger"></div>');
                $("#block-dc-ajax-add-cart-ajax-shopping-cart").swipe({
                    //Generic swipe handler for all directions
                    swipeRight: function() {
                        $('#container').removeClass('shift-card');
                    }
                });
                $('#header').find('.hamburger').on('click', function() {
                    $('.header-top').addClass('show');
                });
                $('.header-top').swipe({
                    //Generic swipe handler for all directions
                    swipeLeft: function() {
                        $('.header-top').removeClass('show');
                    }
                });
                $(document).mouseup(function(e) {
                    var block = $('.header-top');
                    if (!block.is(e.target) && (block.has(e.target).length === 0)) {
                        $('.header-top').removeClass('show');
                    }
                });
            } else {
                $("#img_01").elevateZoom({ gallery: 'gal1', cursor: 'pointer', galleryActiveClass: 'active', imageCrossfade: true, loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif' });
                //pass the images to Fancybox
                $("#img_01").bind("click", function(e) {
                    var ez = $('#img_01').data('elevateZoom');
                    $.fancybox(ez.getGalleryList());
                    return false;
                });
            }
        });
    }); //doc ready end--------------------------------
}(jQuery));