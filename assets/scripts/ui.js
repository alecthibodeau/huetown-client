'use strict'

const addUiHandlers = () => {

  // Hover over the shopping cart image to change it 
  $('.cart-icon').hover(function () {
    $(this).attr('src','public/images/nav_view_cart_fill.svg')
    }, function () {
    $(this).attr('src','public/images/nav_view_cart_lines.svg')
  });
};

export default {
  addUiHandlers
};