'use strict'

import config from './config.js';
import items from './pages/item-page.js';
import body from './pages/body.js';
import home from './pages/home.js';

let isNavDrawerOpen = false;

const addOrRemoveClasses = (nav, burgerButton, action) => {
  nav.classList[action]('open-drawer');
  burgerButton.classList[action]('closing-x');
  document.querySelectorAll('.bar').forEach(function (bar) {
    bar.classList[action]('closing-x');
  });
};

const drawerToggle = () => {
  console.log('drawerToggle');
  const nav = document.getElementById('nav');
  const burgerButton = document.getElementById('burgerButton');
  let action;
  !isNavDrawerOpen ? action = 'add' : action = 'remove';
  addOrRemoveClasses(nav, burgerButton, action);
  isNavDrawerOpen = !isNavDrawerOpen;
};

const closeOpenNavDrawerOnWindowEnlarge = () => {
  if (window.innerWidth > 650 && isNavDrawerOpen) {
    drawerToggle();
  }
};

const closeOpenNavDrawerOnOutsideClick = () => {
  if (window.innerWidth < 651 && isNavDrawerOpen) {
    drawerToggle();
  }
};

const addEventHandlers = () => {
  document.getElementById('burgerButton').addEventListener('click', drawerToggle);
  window.addEventListener('resize', closeOpenNavDrawerOnWindowEnlarge);
  document.querySelector('.main-element').addEventListener('click', closeOpenNavDrawerOnOutsideClick);
};


const loadPageContent = () => {
  
}

const setHtml = () => {
  const bodyDiv = document.getElementById('body');
  const pageValue = document.getElementById('body').getAttribute('page-value');
  const page = config.itemsInfo[pageValue];
  
  bodyDiv.innerHTML = body.bodyContent;
  
  // Load page content from JS if it exists, otherwise the HTML is <main> in body.js
  if (page) {
    let mainDiv = document.getElementById('main');

    // Load mainDiv
    mainDiv.innerHTML = page.mainContent;

    // Home page: If home page then load additional home content
    if (pageValue === 'home') {
      home.itemCreate();
    };

    // Item page: If an item page then load item content
    if (page.itemName) {
      items.itemLoad(pageValue);
    };

    // Collection page: If a collection page then add a category class to image links (for collection.scss breakpoints)
    const collectionPages = [
      'lunarCalendars',
      'prints',
      'postcards'
    ]
    if (collectionPages.includes(pageValue)) {
      const pageCategory = bodyDiv.getAttribute('page-category');
      document.querySelectorAll('.collection-link').forEach(function (anchor) {
        anchor.classList.add(pageCategory);
      });
    }
  }
};

document.addEventListener('DOMContentLoaded', function () {
  setHtml();
  addEventHandlers();
});
