

  let version = "";

$(window).bind('hashchange', function() {
  lh = window.location.hash; //local hash
  if(lh === "#mobile") {
    mobileVer();
  }
  if(lh === "#desktop") {
    desktopVer();
  }
});

function mobileVer (){
  $('*[data-version="desktop"]').addClass('hide');
  $('*[data-version="mobile"]').addClass('hide-on-med-and-down').removeClass('hide').removeClass('hide-on-large-only');
  ls.setItem('version', "M");
  Initialization();
}
function desktopVer (){
  $('*[data-version="mobile"]').addClass('hide');
  $('*[data-version="desktop"]').addClass('hide-on-med-and-down').removeClass('hide');
  ls.setItem('version', "D");
  Initialization();
}

$(document).ready(function() {
  version = ls.getItem('version') !== null? ls.getItem('version') : version;

  if(version === "M") mobileVer();

  if(version === "D") desktopVer();

});
