const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menu.style.right = '0px'; // show the menu
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menu.style.right = '-500px'; // hide the menu
    menuOpen = false;
  }
});