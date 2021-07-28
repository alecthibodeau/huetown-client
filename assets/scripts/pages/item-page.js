'use strict'

import config from '../config.js';
import store from '../store.js';
import utils from '../utils.js';

/* Primary item content */
let itemPage = `
  <div class="item-page">
    <div class="content-container container-1">
      <div class="content-block feature-image-block">
        <a class="feature-image-link" href="">
          <img class="feature-image" id="featureImage" src="" />
        </a>
      </div>
      <div class="content-block item-info-block">
        ${store.itemInfoText}
        <div class="payment-info">
          <div class="item-price-container">$<span class="item-price"></span></div>
          <div class="form-container">
            <div class="quantity-label">
              <span>
                Qty.
              </span>
            </div>
            ${store.itemForm}
          </div>
        </div>
      </div>
    </div>
    <div class="content-container container-2"></div>
    <div class="content-container container-3"></div>
  </div>
`;

const loadLunarCalendarMore = (item) => {
  /* Add a 'lunar-calendar' or 'shown' class on relevant item page selectors (mainly for item.scss breakpoints) */
  augmentExistingClasses(store.getItemInfo(item, 'lunar-tags-needing-additional-classes'));
  /* Load additional content for a lunar calendar item page */
  loadInfoForClassInstances(store.getItemInfo(item, 'lunar-page-additional-info'));
  utils.loadLunarPhaseInfo();
};

const augmentExistingClasses = (tags) => {
  for (const tag of tags) {
    document.querySelector(`.${tag.className}`).classList.add(tag.contentToLoad);
  }
};

const showAndLoadContainer = (containerClass) => {
  const container = document.querySelector(`.${containerClass}`)
  container.classList.add('shown');
  container.innerHTML = store.containerTwoContent;
};

const loadInfoForClassInstances = (elements) => {
  for (const element of elements) {
    /* Fill each item's element with item-specific info -- if it exists */
    if (element.contentToLoad) {
      const nodes = document.querySelectorAll(`.${element.className}`);
      /* conditions for single versus multiple DOM instances */
      if (nodes.length === 1) {
        store.setContent(nodes[0], element.contentToLoad);
        /*
          Add an item-specific category class (for item.scss) -- if it exists
          Currently only applies to feature-image
        */
        void (element.categoryName && nodes[0].classList.add(element.categoryName));
      } else if (nodes.length > 1) {
        for (let i = 0; i < nodes.length; i++) {
          store.setContent(nodes[i], element.contentToLoad);
        }
      }
    }
  }
};

const itemLoad = function (currentPage) {
  const item = config.itemsInfo[currentPage];
  void (item.itemMoreInfo && showAndLoadContainer('container-2'));
  loadInfoForClassInstances(store.getItemInfo(item, currentPage));

  /* Add classes to elements */
  augmentExistingClasses([{ className: 'item-page', contentToLoad: item.itemTitle ? `item-title-${item.itemTitle}` : 'item-title'}]);

  void (currentPage.startsWith('lunarCalendar') && loadLunarCalendarMore(item));
  // if  (currentPage.startsWith('lunarCalendarTwentytwoPreorder')) {
  //   document.getElementById('itemPreorder').classList.add('visible');
  // };

  /* Add class to center content on any postcard or print page (in item.scss) */
  if (currentPage.startsWith('postcard') || currentPage.startsWith('print')) {
    augmentExistingClasses(store.getItemInfo(item, `add-class-for-centering-item-${item.itemCategory}`));
  };
};

export default {
  itemPage,
  itemLoad
};
