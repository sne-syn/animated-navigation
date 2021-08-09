const menuBars = document.querySelector('#menu-bars');
const overlay = document.querySelector('#overlay');
const navigationItems = document.querySelectorAll('.nav')

console.log(navigationItems)

const toggleNav = () => {
  // Toggle: Menu Bars Open/Closed
  menuBars.classList.toggle('change');
  overlay.classList.toggle('overlay-active');
  if (overlay.classList.contains('overlay-active')) {
    overlay.classList.add('overlay-slide-right');
    overlay.classList.remove('overlay-slide-left');
  } else {
    overlay.classList.add('overlay-slide-left');
    overlay.classList.remove('overlay-slide-right');
  }
}

menuBars.addEventListener('click', toggleNav);
navigationItems.forEach(item => item.addEventListener('click', toggleNav));
