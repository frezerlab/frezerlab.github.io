var nav = $('nav'),
  posTop = nav.offset().top;

$(document).on('scroll', function(){
  nav[$(this).scrollTop() >= posTop ? 'addClass' : 'removeClass']('fixed');
  $('.fixed .spreads').height(600-$(this).scrollTop());
});

//Блокирование масштаба
window.addEventListener("mousewheel", function(e) {
  if (e.ctrlKey) {
    e.preventDefault();
    return false;
  }
});
