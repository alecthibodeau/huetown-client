'use strict'

let aboutPage = `
  <div class="about-page">
    <div class="about-top">
      <img class="self-portrait" src="public/images/thibodeau_self-portrait_square.jpg" />
      <div>
        <span class="bold">Huetown</span> is the web shop for artist Alec Thibodeau (me!).
        I make lunar calendars, prints, postcards and more. An artist's bio
        and images of my past work can be found at my portfolio site:
        <a class="text-link" href="https://alecthibodeau.com/about.html" target="_blank">alecthibodeau.com</a>.
        All items here are printed in the USA.
      </div>
      <img class="huetown-h-logo" src="public/images/huetown_h_logo.jpg" />
    </div>
    <div>
      <p>
        <span class="section-title ">Contact</span>:
        Huetown's contact email is <a class="text-link" href="mailto:info@huetown.com" target="_blank">info@huetown.com</a>.
      </p>
      <p>
        <span class="section-title ">Ordering</span>:
        Buy with confidence! I securely process all credit card payments made at Huetown
        through <a class="text-link" href="https://www.paypal.com" target="_blank">PayPal</a>.
      </p>
      <p>
        <span class="section-title ">Shipping</span>:
        Regardless of item quantity all orders ship for a flat rate in sturdy packaging via USPS Priority Mail from Providence, Rhode Island, USA.
        Flat rates are $7 for domestic shipments within the USA, $23 for delivery to Canada or Mexico or $29 for delivery to any other country.
        Packages generally ship within a couple business days of an order being placed, with domestic deliveries usually arriving a few days after that.
        Once shipping is underway you'll receive a confirmation email directly from PayPal, which includes tracking information.
        Please allow approximately one week for domestic delivery and 2-3 weeks for international delivery.
      </p>
      <p>
        <span class="section-title ">Follow</span>:
        Check out Huetown on <a class="text-link" href="https://www.instagram.com/huetown" target="_blank">Instagram</a> or <a class="text-link" href="https://www.twitter.com/huetown" target="_blank">Twitter</a>. Or sign up below for Huetown's email list, with monthly-ish notices.
        Your information won't be shared with miscreants.
      </p>
      <p>
        <span class="section-title ">Places</span>:
        Huetown items are
        available at these spots&hellip;
        <div class="about-state">new hampshire</div>
        <ul>
          <li><a class="text-link" href="https://www.thisstopiswilloughby.com" target="_blank">This Stop Is Willoughby</a> <span class="bold">(lunar calendars here)</span></li>
        </ul>
        <div class="about-state">rhode island</div>
        <ul>
          <li><a class="text-link" href="https://shop.craftlandshop.com" target="_blank">Craftland</a> <span class="bold">(lunar calendars here)</span></li>
          <li><a class="text-link" href="https://simplepleasuresprovidence.com/" target="_blank">Simple Pleasures</span></a> <span class="bold">(lunar calendars here)</span></li>
          <li><a class="text-link" href="https://www.booksq.com" target="_blank">Books on the Square</a></li>
          <li><a class="text-link" href="https://www.frogandtoadstore.com" target="_blank">Frog & Toad</a></li>
          <li><a class="text-link" href="http://like-no-udder.com" target="_blank">Like No Udder</a></li>
          <li><a class="text-link" href="http://www.papernautilusbooks.com" target="_blank">Paper Nautilus Books</a></li>
        </ul>
      </p>
    </div>

    <!-- Begin Mailchimp Signup Form -->
    <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
    <style type="text/css">
      #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
      /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
        We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
    </style>
    <div id="mc_embed_signup">
      <form action="https://huetown.us13.list-manage.com/subscribe/post?u=426ea489a0a13b09e64db6e65&amp;id=53183ce6a3" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
          <h2>Subscribe to Huetown's email list</h2>
          <div class="indicates-required">
            <span class="asterisk">*</span> indicates required
          </div>
          <div class="mc-field-group">
            <label for="mce-EMAIL">
              Email Address  <span class="asterisk">*</span>
            </label>
            <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
          </div>
          <div class="mc-field-group">
            <label for="mce-FNAME">First Name </label>
            <input type="text" value="" name="FNAME" class="" id="mce-FNAME">
          </div>
          <div class="mc-field-group">
            <label for="mce-LNAME">Last Name </label>
            <input type="text" value="" name="LNAME" class="" id="mce-LNAME">
          </div>
          <div class="mc-field-group input-group">
            <strong>Email Format </strong>
            <ul>
              <li>
                <input type="radio" value="html" name="EMAILTYPE" id="mce-EMAILTYPE-0">
                <label for="mce-EMAILTYPE-0">
                  html
                </label>
              </li>
              <li>
                <input type="radio" value="text" name="EMAILTYPE" id="mce-EMAILTYPE-1">
                <label for="mce-EMAILTYPE-1">
                  text
                </label>
              </li>
            </ul>
          </div>
          <div id="mce-responses" class="clear">
            <div class="response" id="mce-error-response" style="display:none"></div>
            <div class="response" id="mce-success-response" style="display:none"></div>
          </div>
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;" aria-hidden="true">
            <input type="text" name="b_426ea489a0a13b09e64db6e65_53183ce6a3" tabindex="-1" value="">
          </div>
          <div class="clear">
            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button subscribe-button">
          </div>
        </div>
      </form>
    </div>
    <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
    <script type='text/javascript'>
      (function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';}(jQuery));var $mcj = jQuery.noConflict(true);
    </script>
    <!--End mc_embed_signup-->

  </div>
`;

export default {
  aboutPage
}
