$(document).ready(function(){
//anonymous function
   $("h1, h2").click(function(){
      $(this).css("color","yellow");    
   
   });
   $("h1").mousedown(function(){
      $(this).css("background-color","yellow");    
   
   });
   
   $("h2").mousedown(function(){
      $(this).css("background-color","blue");    
   
   });

   $("h1, h2").mouseup(function(){
      $(this).css("background-color","transparent");    
   
   });

 $("h1, h2").mouseenter(function(){
      $(this).css("color","black");    
   
   });

   $("h1, h2").mouseleave(function(){
      $(this).css("color","green");
          
   
   });

 $("h3").click(function(){   
      $("h2").unbind("mouseup, mousedown");    
   
   });




});
