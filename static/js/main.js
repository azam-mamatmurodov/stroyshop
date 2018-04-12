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
        })
    }); //doc ready end--------------------------------
}(jQuery));