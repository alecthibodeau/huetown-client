import about from './pages/about.js';

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
  
  export default {
    routes
  }