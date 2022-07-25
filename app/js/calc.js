$( "[data-polzunok]" ).each(function(i, el){
    var min = Number( $(el).attr('data-polzunok-min') );
    var max = Number( $(el).attr('data-polzunok-max') );
    var step = Number( $(el).attr('data-polzunok-step') );
    $(el).slider({
        range: "min",
        min: min,
        max: max, 
        step: step,
        value: 0,
        slide: function( event, ui ) { 
            var el_slide = $(ui.handle).closest('[data-polzunok]');
            var id = $(el_slide).attr('data-polzunok');
            var price = $(el_slide).attr('data-polzunok-price');
            var count = ui.value;
            var corrections = $(el_slide).find('[data-polzunok-correction]');
            var price_correction = priceCorrection(corrections, count, price);
            var summ = count * price_correction;
            
            addSlideData(id, count, summ);
            addAllSumm();
        }
    });

});

function addAllSumm() {
    var allsumm = 0;
    $( "[data-polzunok]" ).each(function(i, el){
        var summ = $(el).attr('data-summ');
        allsumm += Number(summ);
    });
    $('[data-calc-all-summ]').text(allsumm.toLocaleString('ru'));
}

// ============ Добавляем значения ползунка ========//
function addSlideData(id, count, summ){
    $('[data-polzunok-count="'+id+'"]').text(count);
    $('[data-polzunok-summ="'+id+'"]').text(summ.toLocaleString('ru'));
    $('[data-polzunok="'+id+'"]').attr('data-summ', summ);
    $('[data-polzunok="'+id+'"]').attr('data-count', count);
}
// ============ END Добавляем значения ползунка ========//

//============ Корректировка цены ================//
function priceCorrection(corrections, count, price){
    var price_new;
    if( corrections.length != 0 ) {
        corrections.each(function(i, el){
            var correction_from = $(el).attr('data-polzunok-correction-from');
            var correction_to = $(el).attr('data-polzunok-correction-to');
            var correction_price = $(el).attr('data-polzunok-correction-price');
    
            if( count >= correction_from && count <= correction_to ) {
                price_new = correction_price;
                return false;
            }else {
                price_new = price;
            }
    
        });
    }else {
        price_new = price;
    }
    
    return price_new;
}
//============ Корректировка цены ================//
