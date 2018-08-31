
i = 1;
isPlay = false;

$(document).ready(function()
{
  $("#flask").hover(
    function() {
      isPlay = true;
    },
    function() {
     isPlay = false;
     i = 1;
      $(".flask").removeClass("frame2");
      $(".flask").removeClass("frame3");
      $(".flask").removeClass("frame4");
      $(".flask").removeClass("frame5");
      $(".flask").removeClass("frame6");
      $(".flask").addClass("frame1");
    });
});

setInterval(FlaskAnim_FrameSpeed, 100);
function FlaskAnim_FrameSpeed() {
  console.log(i);
  // реализация фунции
  if(isPlay){
    if (i >= 6) {
      i = 2;
      $(".flask").removeClass("frame2");
      $(".flask").removeClass("frame3");
      $(".flask").removeClass("frame4");
      $(".flask").removeClass("frame5");
      $(".flask").removeClass("frame6");
    } else {
      i++
    }
    $(".flask").toggleClass("frame" + i);
  }
}





