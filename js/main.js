
//Блокирование масштаба
window.addEventListener("mousewheel", function(e) {
  if (e.ctrlKey) {
    e.preventDefault();
    return false;
  }
});

//Tabs
$(document).ready(function(){
  $('.tabs').tabs();
});

//Tooltips
$(document).ready(function(){
  $('.tooltipped').tooltip();
});



$(".kek").click(function() {
  //действия


  // находим необходимый селектор
  var btn = document.getElementById('hw');
  var bio = document.getElementById('g');

  // устанавливаем запрос
  var request = new XMLHttpRequest();

  // отслеживаем запрос
  request.onreadystatechange = function() {
    // проверяем вернулись запрошенные данные
    if(request.readyState === 4) {
      // добавляем рамку
      bio.style.border = '1px solid #e8e8e8';
      // проверяем успешен ли запрос
      if(request.status === 200) {
        // обнавляем элемент HTML
        bio.innerHTML = request.responseText;
      } else {
        // иначе выводим сообщение об ошибке
        bio.innerHTML = 'Произошла ошибка при запросе: ' +  request.status + ' ' + request.statusText;
      }
    }
  }

  // определяем тип запроса
  request.open('Get', 'http://code.exabyte.ws/assets/files/biog.txt');

  // регистрируем событие
  btn.addEventListener('click', function() {
    // скрываем кнопку
    this.style.display = 'none';
    // отправляем запрос
    request.send();
  });





});








