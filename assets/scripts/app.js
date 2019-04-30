'use strict'

let aboutPage = 

`<div class="about-page">
  <div class="about-top">
    <img src="public/images/huetown_h_logo.jpg" />
    <p>
      Huetown is the web shop for artist Alec Thibodeau (me!). 
      I make lunar calendars, prints, postcards and more. An artist's bio 
      and images of my past work can be found at my portfolio site: 
      <a href="https://alecthibodeau.com/about.html" target="_blank">alecthibodeau.com</a>. 
      All items here are printed in the USA.
    </p>
    <img src="public/images/thibodeau_self-portrait_square.jpg" />
  </div>
  <div>
    <p>
      <span class="about-info">Contact</span>: 
      Huetown's contact email is info@huetown.com.
    </p>
    <p>
      <span class="about-info">Ordering</span>: 
      Buy with confidence! Credit card payments made at Huetown are processed 
      securely through <a href="https://www.paypal.com" target="_blank">PayPal</a>.
    </p>
    <p>
      <span class="about-info">Shipping</span>: 
      Regardless of item quantity all orders ship for a 
      flat shipping & handling charge in sturdy packaging 
      via USPS Priority Mail from Providence, Rhode Island, USA. 
      Flat rates are $8.00 for domestic shipments within the USA, 
      $23.00 for shipments to Canada and Mexico or $29.00 for 
      shipments to any other country. Packages generally ship 
      within a couple business days of an order being placed, 
      with domestic shipments usually arriving a few days after that. 
      Once shipping is underway you'll receive a confirmation email 
      directly from PayPal, with tracking information. Please allow 
      approximately one week for domestic delivery and 2-3 weeks for 
      international delivery.
    </p>
    <p>
      <span class="about-info">Subscribing</span>: 
      Sign up below for Huetown's email list, with monthly-ish notices. 
      Your information won't be shared with miscreants.
    </p>
    <p>
      <span class="about-info">Places</span> Select Huetown items are 
      available at these fine locations in the USA… 
      <span class="about-states">Colorado</span>: Ladyfingers Letterpress • 
      <span class="about-states">Georgia</span>: Flannery O’Connor Childhood Home • 
      <span class="about-states">Massachusetts</span>: Provincetown Public Library • 
      <span class="about-states">Rhode Island</span>: Ada Books, Books on the Square, 
      Craftland, Frog & Toad, Like No Udder, Paper Nautilus Books.
    </p>
  </div>
</div>`

// $(document).ready(function () {
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
      mainDiv.innerHTML = aboutPage
      console.log('Gish')
    }
  )
})
  
console.log('app.js runs')