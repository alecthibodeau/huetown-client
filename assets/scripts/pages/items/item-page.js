'use strict'

import pages from '../../pages.js';

let itemPage = `
  <div class="item-page">
    <div class="content-container">

      <div class="content-block">
        <img class="item-image-front" src="" />
      </div>

      <div class="content-block item-info-block">
        <div>
          <span class="item-name"></span> 
          <span class="item-category"></span>
        </div>
        <div class="item-info-one"></div>
        <div class="item-info-two"></div>
        <div class="item-info-three"></div>
        <div class="item-price-container">$<span class="item-price"></span></div>
        <div class="qty-label">
          <span>
            QTY
          </span> 
        </div>
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

const itemLoad = function (currentPage) {
  let page = pages.pagesDictionary[currentPage]
  let htmlToFill = [
    ['.item-name', page.itemName],
    ['.item-category', page.itemCategory],
    ['.item-info-one', page.itemInfoOne],
    ['.item-info-two', page.itemInfoTwo],
    ['.item-info-three', page.itemInfoThree],
    ['.item-price', page.itemPrice]
  ]
  if (currentPage) {
    // Use '.innerHTML' to fill each item element by class name
    htmlToFill.forEach(function (element) {
      document.querySelector(element[0]).innerHTML = element[1];
    });
    // Use '.src' to set each image's source
    document.querySelector('.item-image-front').src = page.itemImageFront;
    // Use '.value' to set each input's value
    document.querySelector('.item-id').value = page.itemId;
  }
}

export default {
  itemPage,
  itemLoad
};
