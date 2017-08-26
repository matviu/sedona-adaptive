window.onload = function() {

/*----------main-nav open/close---------------*/
(function() {

  var btnToggle = document.querySelector('.main-nav__toggle');
  var mainNav = document.querySelector('.main-nav');

  mainNav.classList.remove('main-nav_nojs');

  btnToggle.onclick = function(e) {
    event.preventDefault();

    if(mainNav.classList.contains('main-nav_closed')) {
      mainNav.classList.remove('main-nav_closed');
      mainNav.classList.add('main-nav_opened');
    } else {
      mainNav.classList.remove('main-nav_opened');
      mainNav.classList.add('main-nav_closed');
    }
  }
})();

(function(){

  var btnNegPlus = document.querySelector('.neg-factors-plus');
  var btnNegMinus = document.querySelector('.neg-factors-minus');
  var btnPosPlus = document.querySelector('.pos-factors-plus');
  var btnPosMinus = document.querySelector('.pos-factors-minus');

  var fieldNeg = document.querySelector('[name="neg-factors"]');
  var fieldPos = document.querySelector('[name="pos-factors"]');

  var area = document.querySelector('.factors__addfields');
  var templateNeg = document.querySelector('#negreason').innerHTML;
  var templatePos = document.querySelector('#posreason').innerHTML;

  var countNegative = 0;
  var countPositive = 0;

    btnNegPlus.addEventListener('click', function(){
      plusNegCount(1);
      displayNegCount();
      addNegField(countNegative);
    })
    btnPosPlus.addEventListener('click', function(){
      plusPosCount(1);
      displayPosCount();
      addPosField(countPositive);
    })

    btnNegMinus.addEventListener('click', function(){
      plusNegCount(-1);
      displayNegCount();
      removeNegField(countNegative);
    })
    btnPosMinus.addEventListener('click', function(){
      plusPosCount(-1);
      displayPosCount();
      removePosField(countPositive);
    })



    function plusNegCount(n) {
      if(n == 1) {
        countNegative++
      } else if(countNegative < 1) {
        countNegative = 0
      } else if(n == -1) {
        countNegative--
      }
    }
    function plusPosCount(n) {
      if(n == 1) {
        countPositive++
      } else if(countPositive < 1) {
        countPositive = 0
      } else if(n == -1) {
        countPositive--
      }
    }

    function displayNegCount() {
      fieldNeg.value = countNegative;
    }
    function displayPosCount() {
      fieldPos.value = countPositive;
    }

    function addNegField(countNegative) {
      var html = templateNeg.replace('{{negcount}}', countNegative);
      html = html.replace('{{negcount}}', countNegative);
      html = html.replace('{{negcount}}', countNegative);

      area.innerHTML = area.innerHTML + html;
    }
    function addPosField(countPositive) {
      var html = templatePos.replace('{{poscount}}', countPositive);
      html = html.replace('{{poscount}}', countPositive);
      html = html.replace('{{poscount}}', countPositive);

      area.innerHTML = area.innerHTML + html;
    }

    function removeNegField(countNegative) {
      var querySel = '.addliNeg-' + (countNegative + 1);
      var elem = document.querySelector(querySel);

      area.removeChild(elem);
    }
    function removePosField(countPositive) {
      var querySel = '.addliPos-' + (countPositive + 1);
      var elem = document.querySelector(querySel);

      area.removeChild(elem);
    }






})();


}
