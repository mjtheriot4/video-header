
$(document).ready(function () {
  loopSlides();
});
var i = 0;
function loopSlides() {
  if (i == 0) {
    $('div#screen').delay(1000).fadeIn(1000).delay(7000).fadeOut(1000);
    $('#slider1').delay(2000).animate({marginTop: "+=5%",opacity: 1}, 1000).delay(6000).animate({marginTop: "-=5%",opacity: 0},1000, function() {loopSlides()});

    i++;
  }
  else if (i == 1) {
    $('div#screen').delay(1000).fadeIn(1000).delay(7000).fadeOut(1000);
    $('#slider2').delay(2000).animate({marginTop: "+=5%",opacity: 1}, 1000).delay(6000).animate({marginTop: "-=5%",opacity: 0},1000, function() {loopSlides()});

    i++;
  }
  else if (i == 2) {
    $('div#screen').delay(1000).fadeIn(1000).delay(7000).fadeOut(1000);
    $('#slider3').delay(2000).animate({marginTop: "+=5%",opacity: 1}, 1000).delay(6000).animate({marginTop: "-=5%",opacity: 0},1000, function() {loopSlides()});

    i++;
  }
  else {
    i = 0;
    loopSlides();
  }
}
// $('#screen').on('click', function() { $("#video").[0].pasue()});
// $('#screen').on('click', function() {
//   document.getElementById('video').pasue();
// });
