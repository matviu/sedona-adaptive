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


}
