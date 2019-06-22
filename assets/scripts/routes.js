'use strict'

import about from './pages/about.js';
import postcards from './pages/postcards.js';
import prints from './pages/prints.js';

const homePage = "homePage";
const lunarCalendarsPage = "lunarCalendarsPage";
// const postcardsPage = "postcardsPage";
// const printsPage = "printsPage";
const assetsPage = "assetsPage";

const routesDictionary = {
    '/': homePage,
    '/lunar-calendars': lunarCalendarsPage,
    '/postcards': postcards.postcardsPage,
    '/prints': prints.printsPage,
    '/about': about.aboutPage,
    '/assets': assetsPage
  };
  
  export default {
    routesDictionary
  };