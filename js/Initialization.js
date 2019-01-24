
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
}

setInterval( function(){
  $('.scroll-viewport').nanoScroller({
   alwaysVisible: true
  });
}, 10);

