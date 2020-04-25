'use strict'

import utils from './utils.js';
import config from './config.js';
import items from './pages/item-page.js';
import body from './pages/body.js';
import home from './pages/home.js';

const collectionPages = [
  'lunarCalendars',
  'prints',
  'postcards'
];

const addCategoryForPageStyling = (bodyDiv, elementToAugment) => {
  const pageCategory = bodyDiv.getAttribute('page-category');
  document.querySelectorAll(`.${elementToAugment}`).forEach(function (anchor) {
    anchor.classList.add(pageCategory);
  });
};

const loadMainContent = (bodyDiv, pageValue, page) => {
  document.getElementById('main').innerHTML = page.mainContent;
  if (pageValue === 'home') {
    home.itemCreate(pageValue);
  } else if (page.itemName) {
    items.itemLoad(pageValue);
  };

  /*
    If the list of collection pages includes the current page 
    then add a category class to its image links 
    (for collection.scss breakpoints)
  */
  if (collectionPages.includes(pageValue)) {
    addCategoryForPageStyling(bodyDiv, 'collection-link');
  }
};

const loadBodyContent = () => {
  const bodyDiv = document.getElementById('body');
  const pageValue = bodyDiv.getAttribute('page-value');
  const page = config.itemsInfo[pageValue];
  
  bodyDiv.innerHTML = body.bodyContent;
  
  /* 
    Load page content if it exists in config, 
    otherwise the HTML is <main> in body.js
  */
  void (page && loadMainContent(bodyDiv, pageValue, page));
};

document.addEventListener('DOMContentLoaded', function () {
  loadBodyContent();
  utils.addEventHandlers();
});
