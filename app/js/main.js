$(document).ready(function(){
    $('[data-paralax-scene]').each(function(i, el){
        var parallaxInstance = new Parallax(el);
    });


    $(window).scroll(function() {
        var offsetline = $('.keys__2__items__line-color').offset().top;
        var heightcolorline = $('.keys__2__items__line-color').height();
        var heightline = $('.keys__2__items__line-gray').height();

        var scrolltop = $(window).scrollTop();
        var windowheight = $(window).height();
        var windowcenter = $(window).height() / 2;
        var scrolltopcenter = scrolltop + windowcenter;

        var scroollline = scrolltopcenter - offsetline;

        var scroolllinepercent = (scroollline / heightline) * 100;

        console.log(' ');
        console.log('Позиция линии: '+offsetline);
        console.log('Сколько прокрутили: '+ scrolltopcenter);
        console.log('Высота линии: '+heightline);
        console.log('Высота цветной линии: '+heightcolorline);
        console.log('Высота окна: '+windowheight);
        console.log('Центр окна: '+windowcenter);
        console.log('Сколько прокрутили относительно линии: '+scroollline);
        console.log('Сколько % линии прокрутили: '+scroolllinepercent);


        $('.keys__2__items__line-color').css('height', scroolllinepercent+'%');


        $('.keys__2__item__title__line').each(function(i, el){
            var elloffset = $(el).offset().top;
            if(scrolltopcenter >= elloffset) {
                $(el).addClass('active');
            }else {
                $(el).removeClass('active');
            }
        });

    });



    $( "[data-polzunok]" ).each(function(i, el){
        $(el).slider({
            animate: "slow",
            range: "min",
            min: 0,
            max: 100, 
            step: 10,
            value: 50
        });
    });
    


    $('.comand__slider').owlCarousel({
        items: 1,
        dots: true,
        dotsContainer: '.comand__slider__dots',
        nav: true,
        loop: true,
        navText: ["<img src=\"/img/comand__slider__arrow-left.svg\">","<img src=\"/img/comand__slider__arrow-right.svg\" >"],
    })

    $('.news__slider').owlCarousel({
        items: 3,
        margin: 30,
        dots: true,
        dotsContainer: '.news__slider__dots',
    });

    $("[data-scroll]").mPageScroll2id({
        offset: 100,
        scrollSpeed: 900,
        keepHighlightUntilNext: true,
    });

    var header = new Headhesive(".header", {
	    offset: 1000,
        onInit:    function () {
            $('[data-modal-show]').click(function(){
                var id = $(this).attr('data-modal-show');
                $('[data-modal="'+id+'"]').css('display', 'flex');
                var scrollbar_width = get_scrollbar_width();
                $('body').css('padding-right', scrollbar_width+'px');
                $('body').addClass('body_hidden');
                setTimeout(function(){
                    $('[data-modal="'+id+'"]').addClass('active');
                },1);
                
            });
        },
	});

    $('[data-mask="phone"]').each(function(i, el){
        $(el).mask("+7 (999) 999-99-99");
    });

    $.validator.addMethod(
        "phone",
        function (value) {
            return value.replace(/\D+/g, "").length >= 11;
        },
        "Введите номер телефона полностью"
    );

    $("form[data-validate]").each(function (i, el) {
        $(el).validate({
        rules: {
            phone: "phone",
        },
        submitHandler: function(form) {
            var data = $(form).serialize();
            // $.ajax({
            //     url: '/mail/send-mail-modal.php',
            //     type: 'post',
            //     data: data,
            //     success: function() {
            //         show_modal_success(form); //Показываем модальное окно после успешной отправки формы
            //     }
            // });
        }
        });
    });
    
});
