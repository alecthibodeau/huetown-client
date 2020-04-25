'use strict'

import config from '../config.js';
import store from '../store.js';

let drawingItem = `
  <div class="drawing-image">
    <img class="feature-image" src="" />
  </div>
  <div class="drawing-info">
  
    ${store.itemInfoText}
  
    <div class="payment-info">
      <div class="item-price-container">$<span class="item-price"></span></div>
      <div class="form-container">
        <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
          <input type="hidden" name="cmd" value="_s-xclick">
          <input class="item-id" type="hidden" name="hosted_button_id" value="">
          <input type="submit" value="add to cart" alt="Add To Cart">
          <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        </form>
      </div>
    </div>
  
  </div>
`;

let homePage = `
  <div class="home-page">
    <div class="content">
      <div class="content-top">
        <a class="image-link" href="https://www.artistcommunities.org/arf" target="_blank">
          <img src="public/images/home/artist_relief_fund_400px.png" />
        </a>
        <div class="announcement">
          Through May 11th, 2020 I'm donating 50% of all sales at Huetown to the 
          <a class="text-link" href="https://www.artistcommunities.org/arf" target="_blank">Rhode Island Artist Relief Fund</a> &mdash; newly established in response to COVID-19.
          I started collecting these contributions on April 11th, 2020 with my participation in
          the Rhode Island School of Design's <a class="text-link" href="https://unbound.risd.edu" target="_blank">RISD Unbound 2020</a>. Much thanks to those who've already helped.
          <div class="sig">
            &ndash; Alec
          </div>
        </div>
      </div>

      <div class="drawings-title-container">
        <div class="drawings-title bold">
          original drawings
        </div>
      </div>

      <div class="drawings-description">
        These drawings are one-of-a-kind pieces in pen and ink on Bristol board. Usually I'd be offering them through venues such as gallerys and festivals. Since we're all at home now they're avaialble here.
      </div>

      <div class="drawings-section">
        <div id="drawingsItems" class="drawings-items">
          <!-- drawings here -->
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

const getItemInfo = (item) => {
  return [
    { 
      className: 'feature-image',
      configName: item.itemImageFront
    },
    { 
      className: 'item-name',
      configName: item.itemName},
    {
      className: 'item-subname',
      configName: item.itemSubname},
    { 
      className: 'item-info-1',
      configName: item.itemInfoOne
    },
    { 
      className: 'item-info-2',
      configName: item.itemInfoTwo
    },
    { 
      className: 'item-info-3',
      configName: item.itemInfoThree
    },
    { 
      className: 'item-info-4',
      configName: item.itemInfoFour
    },
    { 
      className: 'item-price',
      configName: item.itemPrice
    },
    { 
      className: 'item-id',
      configName: item.itemId
    }
  ];
};

const setCustomClassesAndContent = (elements, itemProperties) => {
  for (const element of elements) {
    if (element.configName) {
      const customClass = `${element.className}-${itemProperties.itemClass}`;
      document.querySelector(`.${element.className}`).setAttribute('class', customClass);
      const customElement = document.querySelector(`.${customClass}`);
      store.setContent(customElement, element.configName);
    }
  }
};

const loadCreatedItem = (itemElement) => {
  itemElement.setAttribute('class', 'drawing-item');
  itemElement.innerHTML = drawingItem;  
  document.getElementById('drawingsItems').appendChild(itemElement);
};

const itemCreate = () => {
  for (const itemName of itemsToLoad) {
    const item = config.itemsInfo[itemName];
    const itemElement = document.createElement('div');
    loadCreatedItem(itemElement);
    setCustomClassesAndContent(getItemInfo(item), item);
  }
};

export default {
  homePage,
  itemCreate
};
