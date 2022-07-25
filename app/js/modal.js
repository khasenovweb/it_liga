



// Показываем всплывающее при нажатии на кнопку
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
// END Показываем всплывающее при нажатии на кнопку

// Скрываем всплывающее при нажатии на затемненный фон
$('[data-modal]').click(function(){
    var thisvar = $(this);
    if ($(event.target).closest(".modal").length) return;
    thisvar.removeClass('active');
    setTimeout(function(){
        thisvar.hide();
        thisvar.find('.modal').removeClass('success');
        thisvar.find('.modal').removeClass('error');
        $('body').css('padding-right', '0');
        $('body').removeClass('body_hidden');
    },300);
});
// END Скрываем всплывающее при нажатии на затемненный фон

// Скрываем всплывающее при нажатии на кнопку закрытия
$('[data-modal-close]').click(function(){
    var id = $(this).attr('data-modal-close');
    $('[data-modal="'+id+'"]').removeClass('active');
    $('.hero__hamburgerblock ').addClass('black');
    setTimeout(function(){
        $('[data-modal="'+id+'"]').hide();
        $('[data-modal="'+id+'"]').find('.modal').removeClass('success');
        $('[data-modal="'+id+'"]').find('.modal').removeClass('error'); $('body').css('padding-right', '0'); $('body').removeClass('body_hidden');
    },300);
});
// Скрываем всплывающее при нажатии на кнопку закрытия

// Получаем ширину скроллбара
function get_scrollbar_width(){
    let div = document.createElement('div');

    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';
    
    // мы должны вставить элемент в документ, иначе размеры будут равны 0
    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    
    div.remove();
    console.log(scrollWidth);
    
    return scrollWidth;
}
// END Получаем ширину скроллбара

// Показываем всплывающее окно после успешной отправки формы
function show_modal_success(form){
    var modal = $(form).closest('.modal__wrapper');

    modal.removeClass('active');
    setTimeout(function(){
        modal.hide();
    },300);

    $('[data-modal="success"]').css('display', 'flex');
    setTimeout(function(){
        $('[data-modal="success"]').addClass('active');
    },1);
}
// END Показываем всплывающее окно после успешной отправки формы