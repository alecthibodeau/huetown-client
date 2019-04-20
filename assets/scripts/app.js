'use strict'

$(document).ready(function () {
    console.log('document ready')

    $('.cart-icon').hover(function () {
        $(this).attr('src','public/images/nav_view_cart_fill.svg')
    }, function () {
        $(this).attr('src','public/images/nav_view_cart_lines.svg')
    })

    $('.footer-icon').hover(function () {
        $('.icon-bg-' + this.getAttribute('data-icon')).css('visibility','visible')
    }, function () {
        $('.icon-bg-' + this.getAttribute('data-icon')).css('visibility','hidden')
    })
})
  
console.log('app.js runs')