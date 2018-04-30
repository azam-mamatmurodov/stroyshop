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
        $(window).on('load', function(){
            if ($('#cartview .item').length > 9){
                $('#cartview').addClass('scroll');
            }else{
                $('#cartview').removeClass('scroll');
            }
        });
    }); //doc ready end--------------------------------
}(jQuery));