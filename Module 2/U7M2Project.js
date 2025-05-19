$(document).ready(function(){

$(".drop1").hide(1); 
$(".drop2").hide(1); 
$(".drop3").hide(1); 
$(".drop4").hide(1); 
 

 $(".menu1").click(function(){
     $(".drop1").toggle(1000);
     $(".drop2").hide(); 
     $(".drop3").hide(); 
     $(".drop4").hide(); 
      $("li").css("font-size","1em");
      	$(".drop1 li").animate({
           "font-size": "5em"            
			}, 2000); 
   });
   
 $(".menu2").click(function(){
     $(".drop2").toggle(1000);
     $(".drop1").hide(); 
     $(".drop3").hide(); 
     $(".drop4").hide(); 
      $("li").css("font-size","1em");
      	$(".drop2 li").animate({
           "font-size": "5em"            
			}, 2000); 
   });
 

 $(".menu3").click(function(){
     $(".drop3").toggle(1000); 
     $(".drop2").hide(); 
     $(".drop1").hide(); 
     $(".drop4").hide();
	 $("li").css("font-size","1em");
      	$(".drop3 li").animate({
           "font-size": "5em"            
			}, 2000);
   });

 $(".menu4").click(function(){
     $(".drop4").slideToggle(1000); 
     $(".drop2").hide(); 
     $(".drop3").hide(); 
     $(".drop1").hide();
     $("li").css("font-size","1em");
      	$(".drop4 li").animate({
           "font-size": "5em"            
			}, 2000);
    
   });
 
 



 $(".all").click(function(){
     $(".drop2").hide(); 
     $(".drop3").hide(); 
     $(".drop1").hide();
     $(".drop4").hide();
     $("li").css("font-size","1em");
     $(".drop1").slideToggle(1000,function(){$(".drop2").slideToggle(1000,function(){$(".drop3").slideToggle(1000,function(){$(".drop4").slideToggle(1000);});});});
      
   });




});
