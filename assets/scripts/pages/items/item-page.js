'use strict'

import items from './items-list.js';

let itemPage = `
  <div class="item-page">
    <div class="row">

      <div class="col">
        <img class="item-image-front" src="" />
      </div>

      <div class="col">
        <p>
          <span class="item-name">
          </span> 
          <span class="item-category">
          </span>
        </p>
        <p class="item-info-one"></p>
        <p class="item-info-two"></p>
        <p class="item-info-three"></p>
        <p>$<span class="item-price"></span></p>
        <p>
          QTY 
        </p>
        <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
          <input type="hidden" name="cmd" value="_s-xclick">
          <input class="item-id" type="hidden" name="hosted_button_id" value="">
          <input type="text" name="quantity" value="1">
          <input type="submit" value="add to cart" alt="Add To Cart">
          <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        </form>
      </div>

    </div>
  </div>
`;

let itemIndex = null;

let htmlToFill = [
  ['item-name', 'itemName'],
  ['item-category', 'itemCategory'],
  ['item-info-one', 'itemInfoOne'],
  ['item-info-two', 'itemInfoTwo'],
  ['item-info-three', 'itemInfoThree'],
  ['item-price', 'itemPrice']
]

let srcsToSet = [
  ['item-image-front', 'itemImageFront']
]

let valuesToSet = [
  ['item-id', 'itemId']
]

// Find the index of the current route within the array of items at items-list.js
const findIndex = function (array, key, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i][key] === value) {
      return itemIndex = i;
    }
  }
  // Return -1 when no value is found, following the construct of Array.prototype.indexOf()
  return -1;
};

// Use the arrays above to identify elements to change for each item
const identifyElements = function (element) {
  // Get the class's name from the 1st index of each sub-array
  let className = element[0];
  // Get the property's name from the 2nd index of each sub-array
  let keyName = element[1];  
  // Find the element by searching for the 1st (and only) instance of its class name
  let elementToChange = document.getElementsByClassName(className)[0];
  // Return the target element and the key name
  // The key name is not only the 2nd index of each sub-array
  // It also corresponds to a property within the array of items at items-list.js
  return [elementToChange, keyName]
}

const itemLoad = function (currentRoute) {
  findIndex(items.itemsList, 'itemRoute', currentRoute);
  let currentItem = items.itemsList[itemIndex]
  // Use the two values returned as an array from identifyElements
  if (itemIndex !== null && itemIndex !== -1) {
    // Use '.innerHTML' to fill each element
    htmlToFill.forEach(function (element) {
      identifyElements(element)[0].innerHTML = currentItem[identifyElements(element)[1]];
    });
    // Use '.src' to set each image's source
    srcsToSet.forEach(function (element) {
      identifyElements(element)[0].src = currentItem[identifyElements(element)[1]];
    });
    // Use '.value' to set each input's value
    valuesToSet.forEach(function (element) {
      identifyElements(element)[0].value = currentItem[identifyElements(element)[1]];
    });
  }
}

export default {
  itemPage,
  itemLoad
};