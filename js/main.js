/*****************
 Change version
 *****************/
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
$('#date-footer').html('© '+ moment().format('Y') +' Copyright Text');


$(document).ready(function() {
  version = ls.getItem('version') !== null? ls.getItem('version') : version;
  if(version === "M") mobileVer();
  if(version === "D") desktopVer();



});
