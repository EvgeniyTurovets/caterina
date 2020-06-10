$(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $('.srolltoTop').fadeIn()
        } else {
            $('.srolltoTop').fadeOut()
        }
    });
    $('.srolltoTop').click(function(){
        $('html,body').animate({scrollTop: 0}, 500);
    })
})