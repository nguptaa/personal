$(document).ready(function(){
	$(window).on("scroll",function(){
  	var wn = $(window).scrollTop();
    if(wn > 208){
    	$(".navbar").css("background","rgba(0,0,0,1)");
    }
    else{
    	$(".navbar").css("background","rgba(0,0,0,0)");
    }
  });
});
