var menu = document.getElementsByClassName("nav-links-mobile");

function openMenu (){
  if(menu[0].classList.contains('show')){
    menu[0].classList.replace('show', 'hide');
  }else {
    menu[0].classList.replace('hide', 'show');
  }
}