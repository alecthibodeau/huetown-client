'use strict'

import items from './items-list.js';

let itemPage = `
  <div class="item-page">
    <div class="row">

      <div class="col">
        <img src="public/images/items/postcard_assets.png" />
      </div>

      <div class="col">
        <p>
          <span class="item-name"></span> 
          <span class="item-category">postcard</span>
        </p>
        <p class="item-info-one">
          6 x 4 inches; mellow, satin finish
        </p>
        <p class="item-info-two">
          Full-color front / single-color back 
        </p>
        <p class="item-info-three">
          Caption on the back: “Assets (detail) by Alec Thibodeau, 2012, screen print on paper, 24 x 18 inches”
        <p class="item-price">
          $1 
        </p>
        <p>
          QTY 
        </p>
        <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
          <input type="hidden" name="cmd" value="_s-xclick">
          <input type="hidden" name="hosted_button_id" value="4CL74PH4FSSQ6" class="item-id">
          <input type="text" name="quantity" value="1">
          <input type="submit" value="add to cart" alt="Add To Cart">
          <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        </form>
      </div>

    </div>
  </div>
`;

let itemIndex = null;

const findIndex = function (array, key, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i][key] === value) {
      return itemIndex = i;
    }
    return -1;
  }
}

const itemLoad =  function (currentRoute) {
  findIndex(items.itemsList, 'itemRoute', currentRoute);
  if (itemIndex !== null && itemIndex !== -1) {
    console.log(`Cachalot cart is ${items.itemsList[1].itemId}`)
    console.log(`Current cart is ${items.itemsList[itemIndex].itemId}`)
    document.getElementsByClassName('item-name')[0].innerHTML = items.itemsList[itemIndex].itemName
  }
}

export default {
  itemPage,
  itemLoad
};