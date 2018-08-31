curColor = "green";
lastColor = "";
ls = localStorage;

$(document).ready(function() {
  curColor = ls.getItem('color') !== null? ls.getItem('color') : curColor;
  ReplaceColor();
});

$('.clr-btn').click(
  function () {
    dataclr = $(this).attr('data-color');
    if(curColor !== dataclr) {
      lastColor = curColor;
      curColor = dataclr;
      $('*[data-color="' + lastColor + '"]').addClass("waves-effect").removeClass("pulse");
      $(this).addClass("pulse").removeClass("waves-effect");
      ls.setItem('color', curColor);
      ReplaceColor();
    }
  });

function ReplaceColor(){
  $('*[data-color="' + curColor + '"]').addClass("pulse").removeClass("waves-effect");
  $('*[data-color="color"]').addClass(curColor).removeClass(lastColor);
  $('*[data-color="waves-color"]').removeClass("waves-" + lastColor).addClass("waves-" + curColor);

}

