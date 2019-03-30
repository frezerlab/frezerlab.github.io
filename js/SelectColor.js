curColor = "green";
lastColor = "red";
ls = localStorage;

HexColor = {
  "red":{
    "color": "#f44336",
    "color_text": "white"
  },
  "pink":{
    "color": "#e91e63",
    "color_text": "white"
  },
  "purple":{
    "color": "#9c27b0",
    "color_text": "white"
  },
  "deep-purple":{
    "color": "#673ab7",
    "color_text": "white"
  },
  "indigo":{
    "color": "#3f51b5",
    "color_text": "white"
  },
  "blue":{
    "color": "#2196f3",
    "color_text": "black"
  },
  "light-blue":{
    "color": "#03a9f4",
    "color_text": "black"
  },
  "cyan":{
    "color": "#00bcd4",
    "color_text": "black"
  },
  "teal":{
    "color": "#009688",
    "color_text": "white"
  },
  "green":{
    "color": "#4caf50",
    "color_text": "white"
  },
  "light-green":{
    "color": "#8bc34a",
    "color_text": "black"
  },
  "lime":{
    "color": "#cddc39",
    "color_text": "black"
  },
  "yellow":{
    "color": "#ffeb3b",
    "color_text": "black"
  },
  "amber":{
    "color": "#ffc107",
    "color_text": "black"
  },
  "orange":{
    "color": "#ff9800",
    "color_text": "black"
  },
  "deep-orange":{
    "color": "#ff5722",
    "color_text": "white"
  },
  "brown":{
    "color": "#795548",
    "color_text": "white"
  },
  "grey":{
    "color": "#9e9e9e",
    "color_text": "black"
  },
  "blue-grey":{
    "color": "#607d8b",
    "color_text": "white"
  }
};

$(document).ready(function() {
  curColor = ls.getItem('color') !== null? ls.getItem('color') : curColor;
  lastColor = ls.getItem('lastColor') !== null? ls.getItem('lastColor') : lastColor;

  ReplaceColor(color = curColor);
});

function InitializationColor(){
  $('.clr-btn').click(
    function () {
      dataclr = $(this).attr('data-color');
      if(curColor !== dataclr) {
        lastColor = curColor;
        curColor = dataclr;
        ReplaceColor(color = curColor);
      }
    });
}

$('.clr-btn').click(
  function () {
    dataclr = $(this).attr('data-color');
    if(curColor !== dataclr) {
      lastColor = curColor;
      curColor = dataclr;
      ReplaceColor(color = curColor);
    }
  });

function ReplaceColor(color){
  ls.setItem('color', curColor);
  ls.setItem('lastColor', lastColor);
  $('*[data-color="' + lastColor + '"]').addClass("waves-effect").removeClass("pulse").children('i').removeClass('scale-in');
  $(this).addClass("pulse").removeClass("waves-effect");
  $('*[data-color="' + color + '"]').addClass("pulse").removeClass("waves-effect").children('i').addClass('scale-in');
  $('*[data-color="color"]').addClass(color).removeClass(lastColor);
  $('*[data-color="waves-color"]').removeClass("waves-" + lastColor).addClass("waves-" + color);
  $('*[name="theme-color"]').attr('content', HexColor[color].color);
  $('*[data-color="txt-colorbg"]').removeClass(HexColor[lastColor].color_text+'-text').addClass(HexColor[color].color_text+'-text');
  $('*[data-color="colorbg"]').removeClass(HexColor[lastColor].color_text).addClass(HexColor[color].color_text);
}


