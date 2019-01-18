
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

function q (){
alert('1234');
}

if(window.location.hash == "#1234") {
  q();
}
