'use strict'

import about from './about.js';

$(() => {
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

  $('[title="About"]').click(function () {
      let mainDiv = document.getElementsByTagName('main')[0]
      mainDiv.innerHTML = about.aboutElements
      console.log('Gish')
    }
  )
})
  
console.log('app.js runs')