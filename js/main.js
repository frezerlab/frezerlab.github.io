/*****************
 Page transition
 *****************/
jQuery(document).ready(function(event){
  var isAnimating = false,
    newLocation = '';
  firstLoad = false;

  $('.scale-transition').removeClass('scale-out');
  onLoadPage();

  //trigger smooth transition from the actual page to the new one
  $('.main').on('click', '[data-type="page-transition"]', function(event){
    event.preventDefault();

    if(String($(this).attr('href')).indexOf('#') !== 0) {
      //detect which page has been selected
      var newPage = $(this).attr('href');

      $('.scale-transition').addClass('scale-out');


      //if the page is not already being animated - trigger animation
      if (!isAnimating) changePage(newPage, true);
      firstLoad = true;
    }

  });

  //detect the 'popstate' event - e.g. user clicking the back button
  $(window).on('popstate', function() {
    if( firstLoad ) {
      /*
      Safari emits a popstate event on page load - check if firstLoad is true before animating
      if it's false - the page has just been loaded
      */
      var newPageArray = location.pathname.split('/'),
        //this is the url of the page to be loaded
        newPage = newPageArray[newPageArray.length - 1];

      if( !isAnimating  &&  newLocation != newPage ) changePage(newPage, false);
    }
    firstLoad = true;
  });

  function changePage(url, bool) {
    isAnimating = true;
    // trigger page animation
    $('body').addClass('page-is-changing');
    $('.by-frezertop-micro-logo').html('<h6>Site Design by FrezerTop</h6>');
    $( ".by-frezertop-micro-logo > h6" ).fadeOut(1, function () {
      $('.by-frezertop-micro-logo > h6').fadeIn();
    });

    $('.sidenav-overlay, .drag-target').remove();
    $('.cd-loading-bar').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
      loadNewContent(url, bool);
      newLocation = url;
      $('.cd-loading-bar').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');

    });
    //if browser doesn't support CSS transitions
    if( !transitionsSupported() ) {
      loadNewContent(url, bool);
      newLocation = url;
    }
  }

  function loadNewContent(url, bool) {
    url = ('' === url) ? 'index.html' : url;
    var newSection = 'cd-'+url.replace('.html', '');
    var section = $('<div class="cd-main-content '+newSection+'"></div>');

    section.load(url+' .cd-main-content > *', function(event){
      // load new content and replace <main> content with the new one
      $('.main').html(section);
      //if browser doesn't support CSS transitions - dont wait for the end of transitions
      var delay = ( transitionsSupported() ) ? 1200 : 0;
      setTimeout(function(){
        //wait for the end of the transition on the loading bar before revealing the new content
        ( section.hasClass('cd-about') ) ? $('body').addClass('cd-about') : $('body').removeClass('cd-about');
        $('body').removeClass('page-is-changing');
        $('.cd-loading-bar').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
          isAnimating = false;
          $( ".by-frezertop-micro-logo > h6" ).fadeOut(function () {
            $(this).remove();
          });
          $('.cd-loading-bar').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
          $('.scale-transition').removeClass('scale-out');
          Initialization();
          InitializationColor();
          ReplaceColor(color);
          date_footer();
          let version = ls.getItem('version') !== null? ls.getItem('version') : version;
          if(version === "M") mobileVer();
          if(version === "D") desktopVer();
          onLoadPage();
        });

        if( !transitionsSupported() ) {
          isAnimating = false;
        }
      }, delay);

      if(url!=window.location && bool){
        //add the new page to the window.history
        //if the new page was triggered by a 'popstate' event, don't add it
        window.history.pushState({path: url},'',url);
      }
    });

  }

  function transitionsSupported() {
    return $('html').hasClass('csstransitions');
  }
});
/*****************
 Change version
 *****************/
version = "";
$(window).bind('hashchange', function() {
  lh = window.location.hash;
  if(lh === "#mobile") {
    mobileVer();
  }
  if(lh === "#desktop") {
    desktopVer();
  }
});
function mobileVer (){
  $('*[data-version="desktop"]').css('cssText', 'display: none !important');
  $('*[data-version="mobile"]').css('cssText', 'display: block !important');
  ls.setItem('version', "M");
  Initialization();
}
function desktopVer (){
  $('*[data-version="mobile"]').css('cssText', 'display: none !important');
  $('*[data-version="desktop"]').css('cssText', 'display: block !important');
  ls.setItem('version', "D");
  Initialization();
}

/*****************
 Change date footer
 *****************/
function date_footer(){
  $('#date-footer').html('© '+ moment().format('Y') +' Frezer lab.');
}

/*****************
 Open-in-new-link
 *****************/
$('.adv-link').mouseenter(function () {
  $(this).find('i').removeClass('scale-out');
}).mouseleave(function () {
  $(this).find('i').addClass('scale-out');
});
$('.adv-link label').click(function () {
  location.href = $(this).parent().attr('data-href');
});
$('.adv-link i').click(function () {
  window.open($(this).parent().attr('data-href'), '_blank');
});

/*************************
  Close sidenav
 ************************/
$('#slide-menu-right a').click(function () {
  $('.sidenav').sidenav('close');
});

/*************************
  Button clear input
 ************************/
setInterval( function(){
  $('.backspace-input-btn').siblings('input').val() !== ''? $('.backspace-input-btn').fadeIn(300) : $('.backspace-input-btn').fadeOut(300);
}, 10);

$('.backspace-input-btn').click(function () {
  if($('.backspace-input-btn').css('color') !== 'rgba(0, 0, 0, 0)'){
    $(this).siblings('input').val('').focus();
  }
});


	$(document).ready(function() {
    date_footer();
    let version = ls.getItem('version') !== null? ls.getItem('version') : version;
		if(version === "M") mobileVer();
		if(version === "D") desktopVer();

    $('i').addClass('scale-out');


	});






