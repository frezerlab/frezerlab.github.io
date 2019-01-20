
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

}

setInterval( function(){
  $('.scroll-viewport').nanoScroller({
   alwaysVisible: true
  });
}, 10);

