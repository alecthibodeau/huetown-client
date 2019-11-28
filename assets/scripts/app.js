'use strict'

import config from './config.js';
import items from './pages/item-page.js';
import body from './pages/body-page.js';

let isNavDrawerOpen = false;
let windowSize = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

document.addEventListener('DOMContentLoaded', function () {
    
  ///* NAV MENU DRAWER FUNCTIONALITY *///

  // c) Hide an open nav drawer permanently if a user resizes the window up to 650px
  function drawerHideOnEnlarge() {
    if (windowSize > 650 && isNavDrawerOpen) {
      drawerCheck();
    }
  };

  // b) Hide an open nav drawer if a user clicks outside it
  function drawerHideOnMainClick() {
    if (windowSize < 651 && isNavDrawerOpen) {
      drawerCheck();
    }
  };

  // a) Check the nav drawer's boolean, then open/close the drawer
  function drawerCheck() {
    let nav = document.getElementById('nav');
    !isNavDrawerOpen ? nav.classList.add('open-drawer') : nav.classList.remove('open-drawer');
    isNavDrawerOpen = !isNavDrawerOpen;
  };

  ///* 2) EVENT HANDLERS *///

  const addEventHandlers = () => {
    // Enable hamburger button
    document.getElementById('burgerButton').addEventListener('click', drawerCheck);
    // Hide nav drawer when the user enlarges the window
    window.addEventListener('resize', drawerHideOnEnlarge);
    // Hide nav drawer when the user clicks outside the nav
    document.querySelector('.main-element').addEventListener('click', drawerHideOnMainClick);
  };

  ///* 1) PAGE CONTENT *///

  // Get current page-value, load HTML content, add event handlers
  const setHtml = () => {

    // Get page-value
    let bodyDiv = document.getElementById('body');
    let pageValue = bodyDiv.getAttribute('page-value');
    let page = config.pagesInfo[pageValue];

    // Load body content before loading mainDiv
    bodyDiv.innerHTML = body.bodyPage;

    // Load mainDiv
    let mainDiv = document.getElementById('main');
    mainDiv.innerHTML = page.mainContent;

    // Item page: If an item page then load item content
    if (page.itemName) {
      items.itemLoad(pageValue);
    };

    // Collection page: If a collection page then add category class to image links (for collection.scss breakpoints)
    const collectionPages = [
      'lunarCalendars',
      'prints',
      'postcards'
    ]
    if (collectionPages.includes(pageValue)) {
      const pageCategory = bodyDiv.getAttribute('page-category');
      document.querySelectorAll('.collection-link').forEach(function (a) {
        a.classList.add(pageCategory);
      });
    }

    addEventHandlers();
  };

  // Run setHtml on page load
  setHtml();
});
