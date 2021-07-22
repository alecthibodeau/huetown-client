'use strict'

let bodyContent = `
<header>
  <div class="nav-top">
    <a data-title="Huetown Home" class="nav-element" href="/">
      <img class="huetown-logo-gray" id="huetownHeaderLogo" src="public/images/huetown_script_logo_fifty_percent_gray.svg" alt="Huetown Script Logo">
      <img class="huetown-logo-white" src="public/images/huetown_script_logo_white.svg" alt="Huetown Script Logo">
    </a>
    <button id="burgerButton" class="burger-button">
      <div class="burger-bars-container">
       <div class="bar bar-one"></div>
       <div class="bar bar-two"></div>
       <div class="bar bar-three"></div>
      </div>
    </button>
  </div>
  <nav id="nav">

    <a data-title="Downloads" class="nav-element nav-element-downloads" href="downloads.html">downloads</a>
    <a data-title="Printed" class="nav-element nav-element-printed" href="printed.html">printed</a>
    <a data-title="About" class="nav-element nav-element-about" href="about.html">about</a>
    <a data-title="Checkout" class="nav-element nav-element-checkout" href="checkout.html">checkout</a>

    <div class="nav-menu-icons">
      <section>
      <a class="icon" data-title="Instagram" href="https://www.instagram.com/huetown" target="_blank">
        <img src="public/images/icons/icon_instagram_white.svg" alt="Huetown at Instagram">
      </a>
      </section>
      <section>
        <a class="icon" data-title="Twitter" href="https://www.twitter.com/huetown" target="_blank">
          <img src="public/images/icons/icon_twitter_white.svg" alt="Huetown at Twitter">
        </a>
      </section>
      <section>
        <a class="icon" data-title="Email" href="mailto:info@huetown.com" target="_blank">
          <img src="public/images/icons/icon_email_white.svg" alt="Email Huetown">
        </a>
      </section>
    </div>
  </nav>
</header>
<main id="main" class="main-element">Welcome to Huetown.</main>
<footer id="footer">
  <section>
    <a data-title="Instagram" href="https://www.instagram.com/huetown" target="_blank">
      <img src="public/images/icons/icon_instagram_fifty_percent_gray.svg" alt="Huetown at Instagram">
      <div></div>
    </a>
  </section>
  <section>
    <a data-title="Twitter" href="https://www.twitter.com/huetown" target="_blank">
      <img src="public/images/icons/icon_twitter_fifty_percent_gray.svg" alt="Huetown at Twitter">
      <div></div>
    </a>
  </section>
  <section>
    <a data-title="Email" href="mailto:info@huetown.com" target="_blank">
      <img src="public/images/icons/icon_email_fifty_percent_gray.svg" alt="Email Huetown">
      <div></div>
    </a>
  </section>
</footer>
`;

export default {
  bodyContent
};