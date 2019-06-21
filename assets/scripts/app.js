'use strict'

import routes from './routes.js';

$(() => {
  console.log('document ready');

  // Hover over the shopping cart image to change it 
  $('.cart-icon').hover(function () {
    $(this).attr('src','public/images/nav_view_cart_fill.svg')
    }, function () {
    $(this).attr('src','public/images/nav_view_cart_lines.svg')
  });

  // Hover over any footer icon to make the colored element behind it visible
  $('.footer-icon').hover(function () {
    $('.icon-bg-' + this.getAttribute('title').toLowerCase()).css('visibility','visible')
    }, function () {
    $('.icon-bg-' + this.getAttribute('title').toLowerCase()).css('visibility','hidden')
  });

  // Set variable for main element
  let mainDiv = document.getElementById('main');

  // Display correct content when user navigates back in browsing history
  window.onpopstate = () => {
    mainDiv.innerHTML = routes.routes[window.location.pathname];
    console.log(`back route is ${window.location.pathname}`);
  };

  // Add current page’s url (url origin + url pathname) to user’s navigation history
  let onNavElementClick = (pathName) => {
    window.history.pushState({}, pathName, window.location.origin + pathName);
    mainDiv.innerHTML = routes.routes[pathName];
    console.log(`pathName is ${pathName}`);
  };

  // Change content of main element based on current route
  $('.nav-element').click(function () {
    event.preventDefault();
    let currentPagePath = $(this).attr('href');
    let currentPageTitle = $(this).attr('title');
    console.log('%c NAV ELEMENT CLICKED! ', 'font-size: 20px; background: #00ff00; color: #000000');
    console.log(`currentPagePath is ${currentPagePath}`);
    // Update document's page title based on title of clicked nav element 
    if (currentPageTitle === "Huetown Home") {
      document.title = "Huetown"
      } else {
      document.title = currentPageTitle + " | Huetown"
      }
    console.log(`document.title is ${document.title}`);
    onNavElementClick(currentPagePath);
    }
  );
});
  
console.log('app.js runs');