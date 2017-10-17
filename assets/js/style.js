$(document).ready(function(){
	$(window).on("scroll",function(){
  	var wn = $(window).scrollTop();
    if(wn > 210){
    	$(".navbar").css("background","rgba(0,0,0,0.5)");
    }
    else{
    	$(".navbar").css("background","rgba(0,0,0,0)");
    }
  });
});
