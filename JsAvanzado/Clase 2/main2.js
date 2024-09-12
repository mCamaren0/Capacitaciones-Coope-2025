$('#p1').css('color', 'red');
$('#p1').css('font-size', '20px');


$('#main p').css('color', 'green');
$('#main p').css('font-size', '20px');


$('#main2 p').css('font-size', '20px');

$(document).ready(function(){
    $("#main2 p:nth-child(odd)").addClass("odd");  //even -> par, odd -> impar

    $("#main2 p:last-child").addClass("last");
    $("#main2 p:last-child").css('font-size', '28px');

    $("#main3 p:contains('vacas y polllitos')").css('color', 'purple');
    $("#main3 p:contains('vacas y polllitos')").css('font-size', '28px');

});

$("a").click(function(event){
    console.log($(this).text()); // Imprime el texto del enlace en la consola
    event.preventDefault();
});

// Evento para mostrar un alert cuando se hace clic en los enlaces dentro del nav
$("nav a").click(function(event){
    alert($(this).text());
    // Prevent default action to avoid navigation
    event.preventDefault();
});

$("nav ul li a").click(function() {
    $('p').css('color', '');
    var anchorId = $(this).attr("id");
    var id = "#para" + anchorId;
    $(id).css("color", "red");
})

