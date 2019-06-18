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

  // Change content of main element based on current route
  mainDiv.innerHTML = routes[window.location.pathname];
});
  
console.log('app.js runs');