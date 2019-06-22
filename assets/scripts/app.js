'use strict'

import routes from './routes.js';
import ui from './ui.js';

$(() => {
  console.log('document ready');
  ui.addUiHandlers();

  // Set variable for main element
  let mainDiv = document.getElementById('main');

  // Test function
  function gadLoggin() {
    console.log('%c GAD BUTTON CLICKED! ', 'font-size: 20px; background: #0000ff; color: #000000');
  }

  // Change content of main element based on current route  
  const onClickLink = function (event) {
    event.preventDefault();
    updateDocumentTitle($(this).attr('title'));
    updateUrl($(this).attr('href'));
  };

  // Add event handlers
  const addEventHandlers = () => {
    $('.gad-button').click(gadLoggin);

    // alternative
    // $('.item-element').click(function () {
    //   event.preventDefault();
    //   updateDocumentTitle($(this).attr('title'));
    //   updateUrl($(this).attr('href'));
    //   }
    // );
    $('.item-element').click(onClickLink);
  }

  // Change content of main element based on current route
  // Run function to add event handlers
  const setHtml = () => {
    mainDiv.innerHTML = routes.routes[window.location.pathname];
    addEventHandlers();
  }

  // Run setHtml on page load, which loads HTML and adds event handlers
  setHtml();

  // Display correct content when user navigates back in browsing history
  window.onpopstate = () => {
    mainDiv.innerHTML = routes.routes[window.location.pathname];
    addEventHandlers();
  };

  // Update document title
  const updateDocumentTitle = (currentPageTitle) => {
    if (currentPageTitle === "Huetown Home") {
      document.title = "Huetown"
    } else {
      document.title = currentPageTitle + " | Huetown"
    }
  }

  // Add current page’s URL (URL origin + URL pathname) to user’s navigation history
  const updateUrl = (pathName) => {
    window.history.pushState({}, pathName, window.location.origin + pathName);
    // handlers only load after this line
    mainDiv.innerHTML = routes.routes[pathName];
    // alternative
    // mainDiv.innerHTML = routes.routes[window.location.pathname];
    addEventHandlers();
  };

  // Change content of main element based on current route  
  // const onClickLink = function (event) {
  //   event.preventDefault();
  //   updateDocumentTitle($(this).attr('title'));
  //   updateUrl($(this).attr('href'));
  // };

  $('.nav-element').click(onClickLink);

});
  
console.log('app.js runs');