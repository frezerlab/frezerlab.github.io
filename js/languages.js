
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
alert('ru');
}

if(window.location.hash == "/ru") {
  q();
}



function onLoadPage() {

  for (i = 9; i > 0; i--) {
    $(".row.apps").append('             <div class="col s3 m2 l2 xl2 scale-transition scale-in">\n' +
      '                <div class="card transparent halfway-fab waves-effect waves-light">\n' +
      '                  <div class="card-image"><img src="https://placehold.it/512x512"></img></div>\n' +
      '                </div>\n' +
      '                <div class="card-content"><label class="center truncate notranslate">Test app ' + i + '</label></div>\n' +
      '              </div>');
  }
}




var language = window.navigator ? (window.navigator.language ||
                  window.navigator.systemLanguage ||
                  window.navigator.userLanguage) : "ru";
language = language.substr(0, 2).toLowerCase();



function getSearchParams(k){
  var p={};
  location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(s,k,v){p[k]=v})
  return k?p[k]:p;
}

getSearchParams("key1")
