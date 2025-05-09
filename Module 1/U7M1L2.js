$(document).ready(function(){

$("#testbutton").click(function(){
   $("div").css("background-color","yellow");
   $("strong").css("background-color","blue");
    $("div, #testbutton").css("color","orange");

});



$("strong").click(function(){
   $(this).css("color","white");
});

});
