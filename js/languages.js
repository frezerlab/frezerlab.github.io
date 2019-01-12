
/*
var params = window
  .location
  .search
  .replace('?','')
  .split('&')
  .reduce(
    function(p,e){
      var a = e.split('=');
      p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
      return p;
    },
    {}
  );

if(params['lang'] == null){
  alert('dd');
}
*/

var pageWidth = document.documentElement.clientWidth; //Ширина страницы (документа)
var height=(document.body.scrollHeight > document.body.offsetHeight)?document.body.scrollHeight:document.body.offsetHeight;

alert($.browser.opera? window.innerHeight : $(window).height);
