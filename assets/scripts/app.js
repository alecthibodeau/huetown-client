'use strict'

$(document).ready(function () {
    console.log('document ready')

    $('.cart-image').hover(function () {
        $(this).attr('src','public/images/nav_view_cart_fill.svg')
    }, function () {
        $(this).attr('src','public/images/nav_view_cart_lines.svg')
    })

    $('.instagram').hover(function () {
        $('.icon-bg-instagram').css('visibility','visible')
    }, function () {
        $('.icon-bg-instagram').css('visibility','hidden')
    })

    $('.twitter').hover(function () {
        $('.icon-bg-twitter').css('visibility','visible')
    }, function () {
        $('.icon-bg-twitter').css('visibility','hidden')
    })

    $('.email').hover(function () {
        $('.icon-bg-email').css('visibility','visible')
    }, function () {
        $('.icon-bg-email').css('visibility','hidden')
    })
})
  
console.log('app.js runs')