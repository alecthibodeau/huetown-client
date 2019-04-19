'use strict'

$(document).ready(function () {
    console.log('document ready')
    $('.cart-image').hover(function () {
        $(this).attr('src','public/images/nav_view_cart_fill.svg')
    }, function () {
        $(this).attr('src','public/images/nav_view_cart_lines.svg')
    })
})
  
console.log('app.js runs')