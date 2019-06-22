'use strict'

const addUiHandlers = () => {

  // Hover over the shopping cart image to change it 
  $('.cart-icon').hover(function () {
    $(this).attr('src','public/images/nav_view_cart_fill.svg')
    }, function () {
    $(this).attr('src','public/images/nav_view_cart_lines.svg')
  });

  // Hover over any footer icon to make the colored element behind it visible
  $('.footer-icon').hover(function () {
    $('.icon-bg-' + this.getAttribute('title').toLowerCase()).css('visibility','visible')
    }, function () {
    $('.icon-bg-' + this.getAttribute('title').toLowerCase()).css('visibility','hidden')
  });

};

export default {
  addUiHandlers
};