
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


for (i = 9; i > 0; i--) {
  $(".row").append('             <div class="col s3 m2 l2 xl2">\n' +
    '                <div class="card transparent halfway-fab waves-effect waves-light">\n' +
    '                  <div class="card-image"><img src="https://placehold.it/512x512"></img></div>\n' +
    '                </div>\n' +
    '                <div class="card-content"><label class="center truncate notranslate">Test app ' + i + '</label></div>\n' +
    '              </div>');
}


