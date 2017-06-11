
$(document).ready(function () {
  loopSlides();
});
var i = 0;
function loopSlides() {
  if (i == 0) {
    $('div#screen').delay(1000).fadeIn(1000).delay(7000).fadeOut(1000);
    $('div#text-container>div:eq(0)>h2').delay(2000).fadeIn(1000).delay(6000).fadeOut(1000, function() {loopSlides()});
    $('div#text-container>div:eq(0)>p').delay(2500).fadeIn(1000).delay(6000).fadeOut(1000, function() {loopSlides()});
    i++;
  }
  else if (i == 1) {
    $('div#screen').delay(1000).fadeIn(1000).delay(7000).fadeOut(1000);
    $('div#text-container>div:eq(1)>h2').delay(2000).fadeIn(1000).delay(6000).fadeOut(1000, function() {loopSlides()});
    $('div#text-container>div:eq(1)>p').delay(2500).fadeIn(1000).delay(6000).fadeOut(1000, function() {loopSlides()});
    i++;
  }
  else if (i == 2) {
    $('div#screen').delay(1000).fadeIn(1000).delay(7000).fadeOut(1000);
    $('div#text-container>div:eq(2)>h2').delay(2000).fadeIn(1000).delay(6000).fadeOut(1000, function() {loopSlides()});
    $('div#text-container>div:eq(2)>p').delay(2500).fadeIn(1000).delay(6000).fadeOut(1000, function() {loopSlides()});
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
