$(document).ready(function(){
//anonymous function
   $("div").click(function(){
      $(this).css("color","green");    
   
   });
   $("div").mousedown(function(){
      $(this).css("background-color","red");    
   
   });

   $("div").mouseup(function(){
      $(this).css("background-color","transparent");    
   
   });

 $("div").mouseenter(function(){
      $(this).css("color","black");    
   
   });

   $("div").mouseleave(function(){
      $(this).css("color","grey");
          
   
   });

 $("#stop").click(function(){   
      $("*").unbind("mouseleave");    
   
   });




});
