$(document).ready(function(){
//anonymous function
   $("h1").click(function(){
      $(this).css("color","green");    
   
   });
   $("h1").mousedown(function(){
      $(this).css("background-color","red");    
   
   });

   $("h1").mouseup(function(){
      $(this).css("background-color","transparent");    
   
   });

 $("h1").mouseenter(function(){
      $(this).css("color","black");    
   
   });

   $("h1").mouseleave(function(){
      $(this).css("color","grey");
          
   
   });

 $("#stop").click(function(){   
      $("*").unbind("mouseleave");    
   
   });




});
