const menuBars = document.querySelector('#menu-bars');
const overlay = document.querySelector('#overlay');
const navigationItems = document.querySelectorAll('.nav');

const toggleNav = () => {
  // Toggle: Menu Bars Open/Closed
  menuBars.classList.toggle('change');
  overlay.classList.toggle('overlay-active');
  if (overlay.classList.contains('overlay-active')) {
    // slide in
    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
    navigationItems.forEach((item, i) => {
      item.classList.replace(`slide-out-${i+1}`, `slide-in-${i+1}`);
    })
  } else {
    // slide out
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
    navigationItems.forEach((item, i) => {
      item.classList.replace(`slide-in-${i+1}`, `slide-out-${i+1}`);
    })
  }
}

menuBars.addEventListener('click', toggleNav);
navigationItems.forEach(item => item.addEventListener('click', toggleNav));
