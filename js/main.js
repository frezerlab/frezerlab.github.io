
//Блокирование масштаба
window.addEventListener("mousewheel", function(e) {
  if (e.ctrlKey) {
    e.preventDefault();
    return false;
  }
});

//Tabs
$(document).ready(function(){
  $('.tabs').tabs();
});

//Tooltips
$(document).ready(function(){
  $('.tooltipped').tooltip();
});

//Modals
$(document).ready(function(){
  $('.modal').modal();
});

//Material Box
$(document).ready(function(){
  $('.materialboxed').materialbox();
});

//Убераем overflow у body
$(".materialboxed").click(function() {
  setTimeout(function () {
    $("body").css({'overflow' : 'hidden'});
  }, 1);

  setTimeout(function () {
    $("body").css({'overflow' : 'hidden'});
  }, 250);
});







$(".kek").click(function() {

});


