'use strict'

let itemPostcardPage = `
  <div class="item-postcard-page">
    <div class="row">

      <div class="col">
        <a href="/">
          <img src="public/images/items/postcard_assets.png" />
        </a>
      </div>

      <div class="col">
        <p>
          Assets postcard
        </p>
        <p>
          6 x 4 inches; mellow, satin finish
        </p>
        <p>
          Full-color front / single-color back 
        </p>
        <p>
          Caption on the back: “Assets (detail) by Alec Thibodeau, 2012, screen print on paper, 24 x 18 inches”
        <p>
          $1 
        </p>
        <div>
          <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
            <input type="hidden" name="cmd" value="_s-xclick">
            <input type="hidden" name="hosted_button_id" value="4CL74PH4FSSQ6">
            <input type="submit" value="add to cart" alt="PayPal - The safer, easier way to pay online!">
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
          </form>
        </div>
      </div>

    </div>
  </div>
`;

export default {
  itemPostcardPage
};