import about from './pages/about.js';
import postcards from './pages/postcards.js';

const homePage = "homePage";
const lunarCalendarsPage = "lunarCalendarsPage";
// const postcardsPage = "postcardsPage";
const printsPage = "printsPage";

const routes = {
    '/': homePage,
    '/lunar-calendars': lunarCalendarsPage,
    '/postcards': postcards.postcardsPage,
    '/prints': printsPage,
    '/about': about.aboutPage
  };
  
  export default {
    routes
  };