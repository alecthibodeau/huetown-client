'use strict'

// nav pages
import home from './pages/home.js';
import lunarCalendars from './pages/lunar-calendars.js';
import prints from './pages/prints.js';
import postcards from './pages/postcards.js';
import about from './pages/about.js';

// item page
import item from './pages/items/item-page.js';

const pagesDictionary = {
  'home': home.homePage,
  'lunarCalendars': lunarCalendars.lunarCalendarsPage,
  'postcards': postcards.postcardsPage,
  'prints': prints.printsPage,
  'about': about.aboutPage,
  'postcardAssets': item.itemPage,
  '/cachalot': item.itemPage,
  '/flannery_oconnor': item.itemPage,
  '/herman_melville': item.itemPage
};

export default {
  pagesDictionary
};