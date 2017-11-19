// navbar scroll
$(document).ready(function(){
  $(window).on("scroll",function(){
    var wn = $(window).scrollTop();
    if(wn > 215){
      $(".navbar").css("background","rgba(0,0,0,0.9)");
    }
    else{
      $(".navbar").css("background","rgba(0,0,0,0)");
    }
  });
});

// tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

// loadbar
$(document).ready(function(){

var div_box="<div id='load-screen'><div id='loading'></div></div>";
$("body").prepend(div_box);

$('#load-screen').delay(700).fadeOut(600,function(){
  $(this).remove();
});

});
