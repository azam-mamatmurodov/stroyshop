(function($) {
    $(document).ready(function() {
        $('.tabs-title .login').on('click', function() {
            $('.tabs-title .register').removeClass('active');
            $(this).addClass('active');
            $('.tabs-content .login').slideDown();
            $('.tabs-content .registration').slideUp();
        });
        $('.tabs-title .register').on('click', function() {
            $('.tabs-title .login').removeClass('active');
            $(this).addClass('active');
            $('.tabs-content .registration').slideDown();
            $('.tabs-content .login').slideUp();
        });
        $('.row .fas').on('click', function() {
            $(this).parent().parent().toggleClass('active');
        });

        $('#header .cart-block > a').on('click', function(e){
            e.preventDefault();
        });

        $('#cart-info .cart-block').mouseover(function(){
            $('#cartview').addClass('block');
        });
        var timer;
        var delay = 1000;
        $('#cart-info .cart-block').mouseout(function() {
            timer = setTimeout(function() {
                $('#cartview').removeClass('block');
            }, delay);
        });

        $(window).on('load', function() {
            if ( $(window).width() < 768 ) {
                $('#header .checkout-block button > a').on('click', function(e){
                    e.preventDefault();
                });
            }
        });

        $(window).on('load', function(){
            if ($('#cartview .item').length > 9){
                $('#cartview').addClass('scroll');
            }else{
                $('#cartview').removeClass('scroll');
            }
        });
        $('#cart-info').on('click', function(){
            $('#cartview').addClass('hover');
        });
        $("#cart-info").swipe({
            swipeRight: function() {
                $('#cartview').removeClass('hover');
            }
        });


    }); //doc ready end--------------------------------
}(jQuery));