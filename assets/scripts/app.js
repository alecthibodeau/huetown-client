'use strict'

import about from './about.js';

const homePage = "homePage";
const lunarCalendarsPage = "lunarCalendarsPage";
const postcardsPage = "postcardsPage";
const printsPage = "printsPage";

const routes = {
  '/': homePage,
  '/lunar-calendars': lunarCalendarsPage,
  '/postcards': postcardsPage,
  '/prints': printsPage,
  '/about': about.aboutPage,
};

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
    $('.icon-bg-' + this.getAttribute('data-icon')).css('visibility','visible')
    }, function () {
    $('.icon-bg-' + this.getAttribute('data-icon')).css('visibility','hidden')
  });

  // Set variable for main element
  let mainDiv = document.getElementById('main');

  // Display correct content when user navigates back in browsing history
  window.onpopstate = () => {
    mainDiv.innerHTML = routes[window.location.pathname];
    console.log(`back route is ${window.location.pathname}`);
  };

  // Add current page’s url (url origin + url pathname) to user’s navigation history
  let onNavElementClick = (pathName) => {
    window.history.pushState({}, pathName, window.location.origin + pathName);
    mainDiv.innerHTML = routes[pathName];
    console.log(`pathName is ${pathName}`);
  };

  // Change content of main element based on current route
  $('.nav-element').click(function () {
    event.preventDefault();
    let currentPagePath = $(this).attr('href');
    let currentPageTitle = $(this).attr('title');
    console.log('%c NAV ELEMENT CLICKED! ', 'font-size: 20px; background: #00ff00; color: #000000');
    console.log(`currentPagePath is ${currentPagePath}`);
    // Update page title based on 
    if (currentPageTitle === "Home") {
      document.title = "Huetown"
      } else {
      document.title = currentPageTitle + " | Huetown"
      }
    console.log(`document.title is ${document.title}`);
    onNavElementClick(currentPagePath);
    }
  );

  // Change content of main element based on current route
  // mainDiv.innerHTML = routes[window.location.pathname];
});
  
console.log('app.js runs');