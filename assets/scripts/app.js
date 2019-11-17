'use strict'

import pages from './pages.js';
import items from './pages/items/item-page.js';
import body from './pages/body-page.js';

let isNavDrawerOpen = false;

// When the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    
  console.log('document ready');
  // console.log(`page-value is ${document.getElementById('body').getAttribute('page-value')}`);
  // console.log(`Path name is ${window.location.pathname}`);

  /* NAV MENU FUNCTIONALITY */

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
    console.log(isNavDrawerOpen);
  }

  /* EVENT HANDLERS */

    // Custom three-parameter function for adding an event handler to a class of elements
  // Doing this requires looping through the class's array and adding to each
  // const classNameEventHandler = (nameOfClass, eventString, functionToRun) => {
  //   for (let i = 0; i < document.getElementsByClassName(nameOfClass).length; i++) {
  //     document.getElementsByClassName(nameOfClass)[i].addEventListener(eventString, functionToRun);
  //   }
  // };

  // Add event handlers for elements not in index.html
  const addEventHandlers = () => {
    // classNameEventHandler('gad-button', 'click', gadLoggin);
    // classNameEventHandler('item-element', 'click', onClickLink);
    // classNameEventHandler('burger-button', 'click', drawerCheck);

    // Hide nav drawer when the user enlarges the window
    window.addEventListener('resize', drawerHide);

    // Enable hamburger button
    document.getElementById('burgerButton').addEventListener('click', drawerCheck);
  };

  /* CONTENT LOAD */

  // Test function
  // function gadLoggin() {
  //   console.log('%c GAD BUTTON CLICKED! ', 'font-size: 20px; background: #0000ff; color: #000000');
  // }

  // Update document title and navigation history on anchor element click
  // Run setHTML, which sets the HTML content and also adds (or re-adds) event handlers
  // const onClickLink = function (event) {
  //   event.preventDefault();
  //   updateDocumentTitle(this.getAttribute('data-title'));
  //   addUrlToHistory(this.getAttribute('href'));
  //   setHtml();
  // };

  // Set HTML based on current route, and add event handlers
  // Event handlers for elements not in html file need to be added after each html change
  const setHtml = () => {
    // console.log(`currentRoute is ${window.location.pathname}`);

    // Get page value
    let bodyDiv = document.getElementById('body')
    let pageValue = bodyDiv.getAttribute('page-value');
    console.log(`page-value is ${pageValue}`);

    // Load body content, which must happen before getting main div
    bodyDiv.innerHTML = body.bodyPage;
    console.log(`bodyDiv is ${body}`);

    // Load main content
    let mainDiv = document.getElementById('main');
    mainDiv.innerHTML = pages.pagesDictionary[pageValue];
    console.log(`mainDiv is ${mainDiv}`);

    // Load item content
    items.itemLoad(pageValue);

    // if (routes.routesDictionary[currentRoute]) {
    //   console.log('a');
    //   mainDiv.innerHTML = routes.routesDictionary[currentRoute];
    // } else {
    //   console.log('b');
    //   mainDiv.innerHTML = routes.routesDictionary['/'];
    // }
    // items.itemLoad(currentRoute);

    // Load user event handlers
    addEventHandlers();
  };

  // Run setHtml on page load
  setHtml();

  // Display correct content when user navigates back in browsing history
  // window.onpopstate = () => {
  //   setHtml();
  // };

  // Update document title
  // const updateDocumentTitle = (currentPageTitle) => {
  //   if (currentPageTitle === 'Huetown Home') {
  //     document.title = 'Huetown'
  //   } else {
  //     document.title = currentPageTitle + ' | Huetown'
  //   }
  // };

  // Add current page’s URL (URL origin + URL pathname) to user’s navigation history
  // const addUrlToHistory = (currentPathName) => {
  //   window.history.pushState({}, currentPathName, window.location.origin + currentPathName);
  // };

  // Run onClickLink for anchor elements in index.html
  // This event handler runs by default on page load
  // While event handlers for elements not in index.html need to be added after each HTML change
  // classNameEventHandler('nav-element', 'click', onClickLink);

});
  
console.log('app.js runs');