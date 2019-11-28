'use strict'

import config from './config.js';
import items from './pages/item-page.js';
import body from './pages/body-page.js';

let isNavDrawerOpen = false;
let windowSize = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

// When the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    
  // console.log('document ready');

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

      // Add a 'lunar-calendar' class name to relevant item page selectors
      // These are to designate lunar calendar-specific breakpoints in item.scss
      // NOTE:
        // 'lunar-calendar' singular
        // starts with -- (pageValue.startsWith('lunarCalendar')
        // Currently attempting to abstract this for all item categories here does not work
      // Meaning: Adding pageValue to other items pages breaks the responsiveness
      // This can be refactored, perhaps by initially setting these in item-page.js (and moving itemTags there)
      // -- BUT while also needing to refactor CSS
      let itemTags = [
        '.container-one',
        '.item-info-block',
        '.payment-info',
        '.item-price-container'
      ]
      if (pageValue.startsWith('lunarCalendar')) {
        itemTags.forEach(function (tag) {
          document.querySelector(tag).classList.add('lunar-calendar');
        });
        // Add href link for lunar calendar page to jump down to more info
        document.querySelector('.feature-image-link').href = '#itemDetails';
        // Add class to show previous lunar calendars
        document.querySelector('.container-three').classList.add('shown');
      };
    };

    // Add category-specific class to image links on any collections page
    // These are mostly for lunar calendar-specific breakpoints in item.scss
    // NOTE:
      // 'lunar-calendars' plural
      // equals -- (pageValue === 'lunarCalendars')
    // This should be refactored to only run on a collections page load
      // Perhaps with an 'if' statement for a list of pageValues here OR in a new js file
    document.querySelectorAll('.collection-link').forEach(function (a) {
    // NOTE: temporary solution to convert this one camelCase instance to dash-case
        // The other categories are single words
      if (pageValue === 'lunarCalendars') {
        pageValue = 'lunar-calendars';
      }
      a.classList.add(pageValue);
    });
    
    addEventHandlers();
  };

  // Run setHtml on page load
  setHtml();
});
  
// console.log('app.js runs');
