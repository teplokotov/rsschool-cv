// Adaptive menu from https://cv-hints.netlify.app
document.addEventListener("DOMContentLoaded", () => {
  // Load script after load DOM
  const toggleBtn = document.querySelector('.toggle');
  const nav = document.querySelector('.nav');
  const navList = document.querySelector('.nav-list');
  const navItems = document.querySelectorAll('.nav-item');

  // Function for adding class .collapsed to .toggle, .nav and .nav-list
  function switchMenu() {
    toggleBtn.classList.toggle('collapsed');
    nav.classList.toggle('collapsed');
    navList.classList.toggle('collapsed');
  }
  // Add Event Listener on click with 'switchMenu()' function
  toggleBtn.addEventListener('click', switchMenu);

  // Function for closing menu with 1000ms timeout
  function closeMenu() {
    setTimeout(() => {
      toggleBtn.classList.remove('collapsed');
      nav.classList.remove('collapsed');
      navList.classList.remove('collapsed');
    }, 1000);
  }
  // Add Event Listener on click for each element of .navItems with 'closeMenu()' function
  navItems.forEach(el => el.addEventListener('click', closeMenu));
});