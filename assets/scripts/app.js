'use strict'

import routes from './routes.js';
import items from './pages/items/item-page.js';
import body from './pages/body-page.js';

// When the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  
  console.log('document ready');

  // Test function
  function gadLoggin() {
    console.log('%c GAD BUTTON CLICKED! ', 'font-size: 20px; background: #0000ff; color: #000000');
  }

  // Update document title and navigation history on anchor element click
  // Run setHTML, which sets the HTML content and also adds (or re-adds) event handlers
  const onClickLink = function (event) {
    event.preventDefault();
    updateDocumentTitle(this.getAttribute('data-title'));
    addUrlToHistory(this.getAttribute('href'));
    setHtml();
  };

  // Custom three-parameter function for adding an event handler to a class of elements
  // Doing this requires looping through the class's array and adding to each
  const classNameEventHandler = (nameOfClass, eventString, functionToRun) => {
    for (let i = 0; i < document.getElementsByClassName(nameOfClass).length; i++) {
      document.getElementsByClassName(nameOfClass)[i].addEventListener(eventString, functionToRun);
    }
  };

  // Add event handlers for elements not in index.html
  const addEventHandlers = () => {
    classNameEventHandler('gad-button', 'click', gadLoggin);
    classNameEventHandler('item-element', 'click', onClickLink);
  };

  // Set HTML based on current route, and add event handlers
  // Event handlers for elements not in index.html need to be added after each HTML change
  const setHtml = () => {
    document.getElementById('body').innerHTML = body.bodyPage;
    let mainDiv = document.getElementById('main');
    let currentRoute = window.location.pathname;
    if (routes.routesDictionary[currentRoute]) {
      mainDiv.innerHTML = routes.routesDictionary[currentRoute];
    } else {
      mainDiv.innerHTML = routes.routesDictionary['/'];
    }
    addEventHandlers();
    items.itemLoad(currentRoute);
  };

  // Run setHtml on page load
  setHtml();

  // Display correct content when user navigates back in browsing history
  window.onpopstate = () => {
    setHtml();
  };

  // Update document title
  const updateDocumentTitle = (currentPageTitle) => {
    if (currentPageTitle === 'Huetown Home') {
      document.title = 'Huetown'
    } else {
      document.title = currentPageTitle + ' | Huetown'
    }
  };

  // Add current page’s URL (URL origin + URL pathname) to user’s navigation history
  const addUrlToHistory = (currentPathName) => {
    window.history.pushState({}, currentPathName, window.location.origin + currentPathName);
  };

  // Run onClickLink for anchor elements in index.html
  // This event handler runs by default on page load
  // While event handlers for elements not in index.html need to be added after each HTML change
  classNameEventHandler('nav-element', 'click', onClickLink);

});
  
console.log('app.js runs');