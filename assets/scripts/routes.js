'use strict'

// nav pages
import home from './pages/home.js';
import lunarCalendars from './pages/lunar-calendars.js';
import prints from './pages/prints.js';
import postcards from './pages/postcards.js';
import about from './pages/about.js';

// item pages
import assets from './pages/items/assets.js';

// const homePage = "homePage";
// const lunarCalendarsPage = "lunarCalendarsPage";

const routesDictionary = {
    '/': home.homePage,
    '/lunar-calendars': lunarCalendars.lunarCalendarsPage,
    '/postcards': postcards.postcardsPage,
    '/prints': prints.printsPage,
    '/about': about.aboutPage,
    '/assets': assets.assetsPage
  };
  
  export default {
    routesDictionary
  };