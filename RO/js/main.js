$(document).ready(function(){
 $('.header').height($(window).height());

 $(".navbar a").click(function(event_obj){
 	event_obj.preventDefault();
 	$("body,html").animate({
 		scrollTop:$($(this).attr("href")).offset().top
 	},1000)
  
 })

})