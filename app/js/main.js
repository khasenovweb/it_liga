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
    
});
