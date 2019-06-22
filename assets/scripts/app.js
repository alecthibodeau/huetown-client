'use strict'

import routes from './routes.js';
import ui from './ui.js';

$(() => {
  console.log('document ready');

  // Add handlers for header and footer
  ui.addUiHandlers();

  // Set variable for main element, which is where custom HTML loads
  let mainDiv = document.getElementById('main');

  // Test function
  function gadLoggin() {
    console.log('%c GAD BUTTON CLICKED! ', 'font-size: 20px; background: #0000ff; color: #000000');
  }

  // Update document title and navigation history on anchor element click
  const onClickLink = function (event) {
    event.preventDefault();
    updateDocumentTitle($(this).attr('title'));
    addUrlToHistory($(this).attr('href'));
  };

  // Add event handlers
  const addEventHandlers = () => {
    $('.gad-button').click(gadLoggin);
    // Run onClickLink for anchor elements not in index.html
    $('.item-element').click(onClickLink);
  };

  // Set HTML based on current route and add event handlers
  // Note: Event handlers for elements not in index.html need to be re-added after each HTML change
  const setHtml = () => {
    mainDiv.innerHTML = routes.routesDictionary[window.location.pathname];
    addEventHandlers();
  };

  // Run setHtml on page load
  setHtml();

  // Display correct content when user navigates back in browsing history
  window.onpopstate = () => {
    setHtml();
  };

  // Update document title
  const updateDocumentTitle = (currentPageTitle) => {
    if (currentPageTitle === "Huetown Home") {
      document.title = "Huetown"
    } else {
      document.title = currentPageTitle + " | Huetown"
    }
  };

  // Add current page’s URL (URL origin + URL pathname) to user’s navigation history
  const addUrlToHistory = (currentPathName) => {
    window.history.pushState({}, currentPathName, window.location.origin + currentPathName);
    setHtml();
  };

  // Run onClickLink for anchor elements in index.html
  // This runs by default on page load, while non-index.html elements need to be added through event handlers
  $('.nav-element').click(onClickLink);

});
  
console.log('app.js runs');