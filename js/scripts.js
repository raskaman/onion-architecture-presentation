/// <reference path="jquery-2.1.3.min.js" />

$(document).ready(function () {

    $('.step').each(function () {
        $('<a>', {
            text: $(this).attr('data-desc'),
            href: '#' + $(this).attr('id')
        }).appendTo('#navigation');
        $('<br>').appendTo('#navigation');
    });

    $('#menu').click(function () {
        $('#navigation').toggle('slow');
    });

});