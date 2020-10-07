$(function () {

    let pie = $('.piechart');
    pie.each(function () {
        parts = $(this).find('.part');
        let cumul = 0;
        let list = [];
        parts.each(function () {
            let value = $(this).attr('data-percent');
            let color = $(this).attr('data-color');
            list.push(color + ' 0 ' + (parseInt(value) + cumul) + "%");
            cumul += parseInt(value);
        });
        $(this).css({
            "background-image": `conic-gradient(${list.join()})`
        })
    });

    $('.donut').each(function(){
        $(this).css('background-image', 'radial-gradient(white 40%, transparent 41%),' + $(this).css('background-image'));
    });

});