
$(document).ready(function () {
  loopSlides();
});
var i = 0;
function loopSlides() {
  if (i < 3) {
    $('div#text-container>div').eq(i).delay(2000).fadeIn(1000).delay(6000).fadeOut(1000, function() {loopSlides()});
    // $('div#text-container>div').eq(i).delay(2000).animate({top: "+=50%"},1000,"swing").delay(6000).animate({top: "-=50%"},1000,"swing", function() {loopSlides()});
    i++;
  }
  else {
    i = 0;
    loopSlides();
  }
}
var video = document.getElementById('video');
video.addEventListener('click', reloadVideo);
function reloadVideo() {
  video.load();
}
