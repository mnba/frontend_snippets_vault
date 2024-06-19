// Created by luis de la hoz

$(function() {
    var div = $("div");
    div.animate({opacity: 1});
    div.animate({height: '+=100px', width: '+=100px', top: '+=100px'}, 500);
    div.animate({height: '-=100px', width: '-=100px', left: '+=100px'}, 500);
    div.animate({height: '+=100px', width: '+=100px', top: '-=100px'}, 500);
    div.animate({height: '-=100px', width: '-=100px', left: '-=100px'}, 500);
    div.animate({opacity: 0.5});
}); 
$(function () {
    $("div").on('click', function (){
        $(this).animate({opacity: 1});
        $(this).animate({height: '+=100px', width: '+=100px', top: '+=100px'}, 500);
        $(this).animate({height: '-=100px', width: '-=100px', left: '+=100px'}, 500);
        $(this).animate({height: '+=100px', width: '+=100px', top: '-=100px'}, 500);
        $(this).animate({height: '-=100px', width: '-=100px', left: '-=100px'}, 500);
        $(this).animate({opacity: 0.5});
    });
});