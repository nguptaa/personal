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


// var totalCount = 10;
// function ChangeIt()
// {
// var num = Math.ceil( Math.random() * totalCount );
// $('first').css('background-image', 'url(../img/DynamicCover/' + num + '.jpg)');
// }

//
// var loading = function () {
//   var totalCount = 10;
//   var num = Math.floor(Math.random() * totalCount) + 1;
//   $('first').css('background-image', '#ffff');
//
// }
