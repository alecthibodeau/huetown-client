'use strict'

let bodyPage = `
<header>
  <a data-title="Huetown Home" class="nav-element" href="/">
    <img src="public/images/huetown_script_logo_fifty_percent_gray.png" alt="Huetown Script Logo">
  </a>    
  <nav>
    <a data-title="Lunar Calendars" class="nav-element" href="/lunar-calendars">lunar calendars</a>
    <a data-title="Prints" class="nav-element" href="/prints">prints</a>
    <a data-title="Postcards" class="nav-element" href="/postcards">postcards</a>
    <a data-title="About" class="nav-element" href="/about">about</a>
    <!-- Option: Use target="_self" to open in same tab instead -->
    <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
      <input type="hidden" name="cmd" value="_s-xclick">
      <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">
      <input type="submit" value="view cart" alt="View Cart">
    </form>
  </nav>
</header>
<main id="main">Hard-coded content.</main>
<footer>
  <section>
    <a data-title="Instagram" href="https://www.instagram.com/huetown" target="_blank">
      <img src="public/images/icon_instagram_fifty_percent_gray.svg" alt="Huetown at Instagram">
      <div></div>
    </a>
  </section>
  <section>
    <a data-title="Twitter" href="https://www.twitter.com/huetown" target="_blank">
      <img src="public/images/icon_twitter_fifty_percent_gray.svg" alt="Huetown at Twitter">
      <div></div>
    </a>
  </section>
  <section>
    <a data-title="Email" href="mailto:info@huetown.com" target="_blank">
      <img src="public/images/icon_email_fifty_percent_gray.svg" alt="Email Huetown">
      <div></div>
    </a>
  </section>
</footer>
`;

export default {
  bodyPage
};