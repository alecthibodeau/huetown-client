'use strict'

let isNavDrawerOpen = false;

const addOrRemoveDrawerClasses = (nav, burgerButton, action) => {
    nav.classList[action]('open-drawer');
    burgerButton.classList[action]('closing-x');
    document.querySelectorAll('.bar').forEach((bar) => {
      bar.classList[action]('closing-x');
    });
  };
  
const drawerToggle = () => {
  const nav = document.getElementById('nav');
  const burgerButton = document.getElementById('burgerButton');
  let action;
  !isNavDrawerOpen ? action = 'add' : action = 'remove';
  addOrRemoveDrawerClasses(nav, burgerButton, action);
  isNavDrawerOpen = !isNavDrawerOpen;
};

const closeNavDrawerOnWindowEnlarge = () => {
  void ((window.innerWidth > 650 && isNavDrawerOpen) && drawerToggle());
};

const closeNavDrawerOnOutsideClick = () => {
  void ((window.innerWidth < 651 && isNavDrawerOpen) && drawerToggle());
};

const addEventHandlers = () => {
  document.getElementById('burgerButton').addEventListener('click', drawerToggle);
  window.addEventListener('resize', closeNavDrawerOnWindowEnlarge);
  document.querySelector('.main-element').addEventListener('click', closeNavDrawerOnOutsideClick);
};

export default {
  addEventHandlers
};
