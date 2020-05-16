'use strict'

// import config from '../config.js';
import store from '../store.js';

// let drawingItem = `
//   <div class="drawing-image">
//     <img class="feature-image" src="" />
//   </div>
//   <div class="drawing-info">

//     ${store.itemInfoText}

//     <div class="payment-info">
//       <div class="item-price-container">$<span class="item-price"></span></div>
//       <div class="form-container">
//         <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
//           <input type="hidden" name="cmd" value="_s-xclick">
//           <input class="item-id" type="hidden" name="hosted_button_id" value="">
//           <input type="submit" value="add to cart" alt="Add To Cart">
//           <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
//         </form>
//       </div>
//     </div>

//   </div>
// `;

let homePage = `
  <div class="home-page">
    <div class="content">
      <div class="content-top">
        <a class="image-link" href="https://www.artistcommunities.org/arf" target="_blank">
          <img src="public/images/home/artist_relief_fund_400px.png" />
        </a>
        <div class="announcement">
          Through May 31st, 2020 I'm donating 50% of all sales at Huetown to the
          <a class="text-link" href="https://www.artistcommunities.org/arf" target="_blank">Rhode Island Artist Relief Fund</a> &mdash; newly established in response to COVID-19.
          I started collecting these contributions on April 11th, 2020 with my participation in
          the Rhode Island School of Design's <a class="text-link" href="https://unbound.risd.edu" target="_blank">RISD Unbound 2020</a>. Much thanks to those who've already helped.
          <div class="sig">
            &ndash; Alec
          </div>
        </div>
      </div>

      <div class="lunar-calendar-available">
        <div>
          <a href="lunar_calendar_2020.html">
            <img src="public/images/items/thibodeau_lunar_calendar_2020_photo_main_1000px.jpg" />
          </a>
        </div>
        <div class="available-text">
          <a class="text-link" href="lunar_calendar_2020.html">The 2020 Lunar Calendar is still available</a>
        </div>
      </div>

    </div>
  </div>
`;

const itemsToLoad = [
  'drawingRobinReveals',
  'drawingButternutBear',
  'drawingHawkHeralds',
  'drawingBisonBreathes',
  'drawingPinkMoon2020',
  'drawingWormMoon2020'
];

// const setCustomClassesAndContent = (elements, itemProperties) => {
//   for (const element of elements) {
//     if (element.contentToLoad) {
//       const customClass = `${element.className}-${itemProperties.itemClass}`;
//       document.querySelector(`.${element.className}`).setAttribute('class', customClass);
//       const customElement = document.querySelector(`.${customClass}`);
//       store.setContent(customElement, element.contentToLoad);
//     }
//   }
// };

// const loadCreatedItem = (itemElement) => {
//   itemElement.setAttribute('class', 'drawing-item');
//   itemElement.innerHTML = drawingItem;
//   document.getElementById('drawingsItems').appendChild(itemElement);
// };

const itemCreate = (pageValue) => {
  // for (const itemName of itemsToLoad) {
  //   const item = config.itemsInfo[itemName];
  //   const itemElement = document.createElement('div');
  //   loadCreatedItem(itemElement);
  //   setCustomClassesAndContent(store.getItemInfo(item, pageValue), item);
  // }
  return pageValue;
};

export default {
  homePage,
  itemCreate
};
