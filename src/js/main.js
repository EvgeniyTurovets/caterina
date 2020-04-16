$(function(){
   
    $('.main__slider').slick({
        infinite: true,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
        dots: true,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                autoplay: false,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $(".fancybox").fancybox({
        openEffect	: 'none',
        closeEffect	: 'none',
        helpers : {
            media : {}
        }
    });
    $('.fancybox-video').fancybox({
        type: "iframe",
        helpers : {
            media : {}
        }
    });
   
    $('.header__burger').click(function(){
        $('.header__menu').toggleClass('active') 
        $('.menu-close').toggleClass('active') 
        
    })
    $('.menu-close').click(function(){
        $('.header__menu').toggleClass('active') 
        $('.menu-close').toggleClass('active') 
        
    })
    
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
       
        $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
      });
})