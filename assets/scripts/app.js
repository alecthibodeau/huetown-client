'use strict'

import pages from './pages.js';
import items from './pages/items/item-page.js';
import body from './pages/body-page.js';

let isNavDrawerOpen = false;

// When the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    
  console.log('document ready');

  /* NAV MENU DRAWER FUNCTIONALITY */

  // 2) Hide an open nav drawer permanently if user resizes window up to 650px
  function drawerHide() {
    let windowSize = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (windowSize > 650 && isNavDrawerOpen) {
      drawerCheck();
    };
  }

  // 1) Check the nav drawer's boolean and then open/close
  function drawerCheck() {
    let nav = document.getElementById('nav');
    !isNavDrawerOpen ? nav.classList.add('open-drawer') : nav.classList.remove('open-drawer');
    isNavDrawerOpen = !isNavDrawerOpen;
  }

  /* EVENT HANDLERS */

  // Add event handlers for elements not in index.html
  const addEventHandlers = () => {
    // Hide nav drawer when the user enlarges the window
    window.addEventListener('resize', drawerHide);
    // Enable hamburger button
    document.getElementById('burgerButton').addEventListener('click', drawerCheck);
  };

  /* PAGE CONTENT LOAD */

  // Set HTML based on current page value, then add event handlers
  const setHtml = () => {

    // Get page value
    let bodyDiv = document.getElementById('body')
    let pageValue = bodyDiv.getAttribute('page-value');
    let page = pages.pagesDictionary[pageValue]

    // Load body content, which must happen before getting main div
    bodyDiv.innerHTML = body.bodyPage;

    // Load main content
    let mainDiv = document.getElementById('main');
    mainDiv.innerHTML = page.mainContent;

    // Load item content if the page has an item name
    if (page.itemName) {
      items.itemLoad(pageValue);
    }

    addEventHandlers();
  };

  // Run setHtml on page load
  setHtml();
});
  
console.log('app.js runs');
