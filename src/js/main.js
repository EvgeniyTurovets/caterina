$(function(){
   
    

    $('.main__slider').slick({
        infinite: true,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
        dots: true,
        swipe: false,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                swipe: true,
              }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    swipe: true
                }
            },
            {
                breakpoint: 768,
                autoplay: false,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipe: true
                }
            }
        ]
    });
    $('[data-fancybox="gallery"]').fancybox({
        // Options will go here
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
    $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".header__menu"); // тут указываем ID элемента
        if(div.hasClass('active')){
            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                $('.menu-close').click()
            }
        }
		
	});
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('.menu-close').click()
        $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
      });

      $(window).on('resize', function(){
        $('.fancybox-video').fancybox({
            type: "iframe",
            helpers : {
                media : {}
            }
        });
      });
})