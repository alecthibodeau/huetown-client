'use strict'

import config from './config.js';
import items from './pages/item-page.js';
import body from './pages/body-page.js';

let isNavDrawerOpen = false;
let windowSize = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

// When the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    
  console.log('document ready');

  ///* NAV MENU DRAWER FUNCTIONALITY *///

  // 3) Hide an open nav drawer permanently if user resizes window up to 650px
  function drawerHideOnEnlarge() {
    if (windowSize > 650 && isNavDrawerOpen) {
      drawerCheck();
    }
  };

  // 2) Hide an open nav drawer if user clicks outside it
  function drawerHideOnMainClick() {
    if (windowSize < 651 && isNavDrawerOpen) {
      drawerCheck();
    }
  };

  // 1) Check the nav drawer's boolean and then open/close the drawer
  function drawerCheck() {
    let nav = document.getElementById('nav');
    !isNavDrawerOpen ? nav.classList.add('open-drawer') : nav.classList.remove('open-drawer');
    isNavDrawerOpen = !isNavDrawerOpen;
  };

  ///* EVENT HANDLERS *///

  // Add event handlers for elements not in index.html
  const addEventHandlers = () => {
    // Enable hamburger button
    document.getElementById('burgerButton').addEventListener('click', drawerCheck);
    // Hide nav drawer when the user enlarges the window
    window.addEventListener('resize', drawerHideOnEnlarge);
    // Hide nav drawer when the user clicks outside the nav
    document.querySelector('.main-element').addEventListener('click', drawerHideOnMainClick);
  };

  ///* PAGE CONTENT LOAD *///

  // Set HTML content and add classes (based on current page value), then add event handlers
  const setHtml = () => {

    // Get page value
    let bodyDiv = document.getElementById('body');
    let pageValue = bodyDiv.getAttribute('page-value');
    let page = config.pagesInfo[pageValue];

    // Load body content, which must happen before getting main div
    bodyDiv.innerHTML = body.bodyPage;

    // Load main content
    let mainDiv = document.getElementById('main');
    mainDiv.innerHTML = page.mainContent;

    // Load item content if the page has an item name
    if (page.itemName) {
      items.itemLoad(pageValue);
    };

    // Add category-specific class to image links on collections page
    document.querySelectorAll('.collection-link').forEach(function (a) {
      // temporary solution to convert this one camelCase instance to dash-case
      if (pageValue === 'lunarCalendars') {
        pageValue = 'lunar-calendars';
      }
      a.classList.add(pageValue);
    });

    // Another temporary solution to add a class name to relevant item page selectors
    // These are for the item.scss file breakpoints, which should be updated for cleaner code
    if (pageValue.startsWith('lunarCalendar')) {
      document.querySelector('.container-one').classList.add('lunar-calendar');
      document.querySelector('.item-info-block').classList.add('lunar-calendar');
      document.querySelector('.payment-info').classList.add('lunar-calendar');
      document.querySelector('.item-price-container').classList.add('lunar-calendar');
    };
    
    addEventHandlers();
  };

  // Run setHtml on page load
  setHtml();
});
  
console.log('app.js runs');
