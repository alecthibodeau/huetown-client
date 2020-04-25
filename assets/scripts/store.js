'use strict'

const setContent = (customElement, content) => {
  switch (customElement.nodeName) {
    case 'IMG':
      customElement.src = content;
      break;
    case 'INPUT':
      customElement.value = content;
      break;
    case 'DIV':
    case 'SPAN':
      customElement.innerHTML = content;
      break;
    case 'A':
      customElement.href = content;
  }
};

let itemInfoText = `
  <div class="item-info-text" id="orderItem">
    <div>
      <span class="item-name"></span>
      <span class="item-subname"></span>
    </div>
    <div class="item-info-1"></div>
    <div class="item-info-2"></div>
    <div class="item-info-3"></div>
    <div class="item-info-4"></div>
  </div>
`;

let itemForm = `
  <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
    <input type="hidden" name="cmd" value="_s-xclick">
    <input class="item-id" type="hidden" name="hosted_button_id" value="">
    <input type="text" name="quantity" value="1">
    <input type="submit" value="add to cart" alt="Add To Cart">
    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
  </form>
`;

export default {
  setContent,
  itemInfoText,
  itemForm
};
  