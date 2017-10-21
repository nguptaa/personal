$(document).ready(function(){$(window).on("scroll",function(){var wn=$(window).scrollTop();if(wn>215){$(".navbar").css("background","rgba(0,0,0,0.9)");}else{$(".navbar").css("background","rgba(0,0,0,0)");}});});
window.onload = function() { document.body.className = ''; }
			window.ontouchmove = function() { return false; }
			window.onorientationchange = function() { document.body.scrollTop = 0; }
