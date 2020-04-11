'use strict'

import config from './config.js';
import items from './pages/item-page.js';
import body from './pages/body.js';

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
    let burgerButton = document.getElementById('burgerButton');

    if (!isNavDrawerOpen) {
      nav.classList.add('open-drawer');
      burgerButton.classList.add('closing-x');
      document.querySelectorAll('.bar').forEach(function (bar) {
        bar.classList.add('closing-x');
      });
    } else {
      nav.classList.remove('open-drawer');
      burgerButton.classList.remove('closing-x');
      document.querySelectorAll('.bar').forEach(function (bar) {
        bar.classList.remove('closing-x');
      });
    }

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
    let bodyDiv = document.getElementById('body');
    
    // Get page-value
    let pageValue = bodyDiv.getAttribute('page-value');
    let page = config.pagesInfo[pageValue];
    
    // Load body content before loading mainDiv
    bodyDiv.innerHTML = body.bodyContent;
    
    // Load page content from JS if it exists, otherwise the HTML is <main> in body.js
    if (page) {
      let mainDiv = document.getElementById('main');

      // Load mainDiv
      mainDiv.innerHTML = page.mainContent;

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

    addEventHandlers();
  };

  // Run setHtml on page load
  setHtml();
});
