
$(document).ready(function(){
  Initialization();
});

function Initialization(){
  //Initialization Navbar
  $('.sidenav').sidenav({
    draggable: true
  });

  //Initialization Modals
  $('.modal').modal();

  //Initialization Carousel
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });
 // $('.carousel').carousel();

  //Initialization Dropdown
  $('.dropdown-trigger').dropdown();

  //Initialization Tabs
  $('.tabs').tabs({
    swipeable : true
  });

  $('.carousel-slider').css("height", "");

  //Initialization Collapsible
  $('.collapsible').collapsible();

  //Initialization Tooltips
  $('.tooltipped').tooltip();

  //Initialization Scroll bar
  $('.scroll-viewport').nanoScroller({
    alwaysVisible: true
  });

  //Initialization 'i'
  $('i').addClass('scale-out');

  //Initialization Floating Action Button
  $('.fixed-action-btn').floatingActionButton({
    direction: 'top',
    hoverEnabled: false
  });

 // $('.modal-content > .scroll-viewport > .nano-content').css("right", -29);
}

setInterval( function(){
  $('.scroll-viewport').nanoScroller({
   alwaysVisible: true
  });
}, 10);

