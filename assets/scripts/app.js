'use strict'

import routes from './routes.js';

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
    let mainDiv = document.getElementById('main')
    if (routes.routesDictionary[window.location.pathname]) {
    mainDiv.innerHTML = routes.routesDictionary[window.location.pathname];
    } else {
    mainDiv.innerHTML = routes.routesDictionary['/'];
    }
    addEventHandlers();
  };

  // Run setHtml on page load
  setHtml();

  // Run addEventHandlers on page load
  // addEventHandlers();

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

  // Possibly run addUrlToHistory on page load

  // Run onClickLink for anchor elements in index.html
  // This event handler runs by default on page load
  // While event handlers for elements not in index.html need to be added after each HTML change
  classNameEventHandler('nav-element', 'click', onClickLink);

});
  
console.log('app.js runs');