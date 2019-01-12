

$(document).ready(function(){

  //Initialization Navbar
  $('.sidenav').sidenav();

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





});

