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




window.onload = function() {
  Particles.init({
    selector: '.background'
  });
};


Particles.init({
  // normal options
  selector: '.background',
  maxParticles: 450,

  // options for breakpoints
  responsive: [
    {
      breakpoint: 768,
      options: {
        maxParticles: 200,
        color: '#48F2E3',
        connectParticles: false
      }
    }, {
      breakpoint: 425,
      options: {
        maxParticles: 100,
        connectParticles: true
      }
    }, {
      breakpoint: 320,
      options: {
        maxParticles: 0 // disables particles.js
      }
    }
  ]
});
…
