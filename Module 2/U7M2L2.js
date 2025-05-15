$(document).ready(function(){
 
   $("h1").click(function() {
	   $("p").animate({
		   "font-size": "2em",
		   "width": "50%"
	   }, 1000);
   });
   
   $("p").click(function() {
	   $("ul").animate({
		   "font-size": "2em", 
	   }, 1000);
   });
   
   $("p").click(function() {
	   $("p").animate({
		   "font-size": "1em"
	   }, 1000);
   });
});