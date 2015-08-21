$(document).ready(function() {

	$( "#downloadButton" ).click(function() {
 		alert( "Thank you for visiting. Let's stay connected!" );

 	$("#downloadButton").hover(function() {
        $(this).css("box-shadow", "4px 5px 0px #000");
    }, function() {
        $(this).css("box-shadow", "0px 0px 0px #000");
    });

     $("#downloadButton").hover(function() {
        $(this).css("color", "gray ");
    }, function() {
        $(this).css("color", "black");
    });


});

});