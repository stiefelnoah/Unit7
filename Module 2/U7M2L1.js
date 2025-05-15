$(document).ready(function(){
 $("p").hide(1000); 
   $("h1").click(function(){
     $("p").toggle(1000); 
   });

    $(".show").click(function(){
     $("h2").show(1000); 
  });

 $(".toggle").click(function(){
     $("h2").toggle(1000); 
   });
 $(".slideup").click(function(){
     $("h2").slideUp(1000); 
   });
 $(".slidedown").click(function(){
     $("h2").slideDown(1000); 
   });

 $(".slidetoggle").click(function(){
     $("h2").slideToggle(1000); 
   });

 $(".fadein").click(function(){
     $("h2").fadeIn(1000); 
   });
 $(".fadeout").click(function(){
     $("h2").fadeOut(1000); 
   });
 $(".fadetoggle").click(function(){
     $("h2").fadeToggle(1000); 
   });
 $(".fadeTo30").click(function(){
     $("h2").fadeTo(1000,0.3); 
   });
 $(".fadeTo100").click(function(){
     $("h2").fadeTo(1000,1); 
   });

 $(".fadedelay").click(function(){
     $("h2").fadeToggle(1000);
     $("h3").delay(1100).fadeToggle(1000); 
   });

 $(".fadeseries").click(function(){
     $("h2").fadeToggle(1000,function(){$("h3").slideToggle(1000);});
      
   });



});
