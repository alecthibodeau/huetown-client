'use strict'

import config from './config.js';
import items from './pages/item-page.js';
import body from './pages/body.js';
import home from './pages/home.js';

let isNavDrawerOpen = false;

const collectionPages = [
  'lunarCalendars',
  'prints',
  'postcards'
];

const addOrRemoveDrawerClasses = (nav, burgerButton, action) => {
  nav.classList[action]('open-drawer');
  burgerButton.classList[action]('closing-x');
  document.querySelectorAll('.bar').forEach(function (bar) {
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

const closeOpenNavDrawerOnWindowEnlarge = () => {
  void((window.innerWidth > 650 && isNavDrawerOpen) && drawerToggle());
};

const closeOpenNavDrawerOnOutsideClick = () => {
  void((window.innerWidth < 651 && isNavDrawerOpen) && drawerToggle());
};

const addEventHandlers = () => {
  document.getElementById('burgerButton').addEventListener('click', drawerToggle);
  window.addEventListener('resize', closeOpenNavDrawerOnWindowEnlarge);
  document.querySelector('.main-element').addEventListener('click', closeOpenNavDrawerOnOutsideClick);
};

const addClassForPageStyling = (bodyDiv, elementToAugment) => {
  const pageCategory = bodyDiv.getAttribute('page-category');
  document.querySelectorAll(`.${elementToAugment}`).forEach(function (anchor) {
    anchor.classList.add(pageCategory);
  });
};

const loadMainContent = (bodyDiv, pageValue, page) => {
  document.getElementById('main').innerHTML = page.mainContent;
  if (pageValue === 'home') {
    home.itemCreate();
  } else if (page.itemName) {
    items.itemLoad(pageValue);
  };

  /*
    If the list of collection pages includes the current page 
    then add a category class to its image links 
    (for collection.scss breakpoints)
  */
  if (collectionPages.includes(pageValue)) {
    addClassForPageStyling(bodyDiv, 'collection-link');
  }
};

const loadBodyContent = () => {
  const bodyDiv = document.getElementById('body');
  const pageValue = bodyDiv.getAttribute('page-value');
  const page = config.itemsInfo[pageValue];
  
  bodyDiv.innerHTML = body.bodyContent;
  
  /* 
    Load page content if it exists in config, 
    otherwise the HTML is <main> in body.js
  */
  void(page && loadMainContent(bodyDiv, pageValue, page));
};

document.addEventListener('DOMContentLoaded', function () {
  loadBodyContent();
  addEventHandlers();
});
