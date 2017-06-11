
$(document).ready(function () {
  loopSlides();
});
var i = 0;
function loopSlides() {
  if (i < 3) {
    $('div#screen').delay(1000).fadeIn(1000).delay(7000).fadeOut(1000);
    $('#text-container>div').eq(i).delay(2000).animate({marginTop: "+=5%",opacity: 1}, 1000).delay(6000).animate({marginTop: "-=5%",opacity: 0},1000, function() {loopSlides()});
    i++;
  }
  else {
    i = 0;
    loopSlides();
  }
}
