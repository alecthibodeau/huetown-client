'use strict'

import config from '../config.js';

let itemPage = `
  <div class="item-page">

    <div class="content-container container-one">

      <div class="content-block feature-image-block">
        <a class="feature-image-link" href="#orderItem">
          <img class="item-image-front" src="" />
        </a>
      </div>

      <div class="content-block item-info-block">
        
        <div class="item-info-text" id="orderItem">
          <div>
            <span class="item-name"></span>
            <span class="item-subname"></span>
          </div>
          <div class="item-info-one"></div>
          <div class="item-info-two"></div>
          <div class="item-info-three"></div>
          <div class="item-info-four"></div>
        </div>

        <div class="payment-info">
          <div class="item-price-container">$<span class="item-price"></span></div>
          <div class="form-container">
            <div class="qty-label">
              <span>
                QTY
              </span> 
            </div>
            <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
              <input type="hidden" name="cmd" value="_s-xclick">
              <input class="item-id" type="hidden" name="hosted_button_id" value="">
              <input type="text" name="quantity" value="1">
              <input type="submit" value="add to cart" alt="Add To Cart">
              <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
            </form>
          </div>
        </div>
        
      </div>
    </div>

    <div class="content-container container-two">
      <div class="photo-pair item-more-photo-pair-one"></div>
      <div class="photo-pair item-more-photo-pair-two"></div>
      <div class="photo-pair item-more-photo-pair-three"></div>
      <div class="photo-pair item-more-photo-pair-four"></div>
      <div class="item-more-info" id="itemDetails"></div>
    </div>

    <div class="content-container container-three">

      <div class="current">
        <div class="title">
          available alec thibodeau lunar&nbsp;calendars
        </div>
        <div class="lunar-calendar-links">
          <div>
            <div>
              <a class="current-calendar" href="/">
                <img src="public/images/items/thibodeau_lunar_calendar_2020_main.png" />
              </a>
            </div>
            <div class="text">2020 Lunar Calendar</div>
          </div>
          <div>
            <div>
              <a class="current-calendar" href="lunar_calendar_2019.html">
                <img src="public/images/items/thibodeau_lunar_calendar_2019_main.jpg" />
              </a>
            </div>
            <div class="text">2019 Lunar Calendar</div>
          </div>
          <div>
            <div>
              <a class="current-calendar" href="lunar_calendar_2018.html">
                <img src="public/images/items/thibodeau_lunar_calendar_2018_main.jpg" />
              </a>
            </div>
            <div class="text">2018 Lunar Calendar</div>
          </div>
          <div>
            <div>
              <a class="current-calendar" href="lunar_calendar_2017.html">
                <img src="public/images/items/thibodeau_lunar_calendar_2017_main.jpg" />
              </a>
            </div>
          <div class="text">2017 Lunar Calendar</div>
        </div>
      </div>
      
      <div class="previous">
        <div class="title">
          previous alec thibodeau lunar&nbsp;calendars
        </div>
        <div class="lunar-calendar-links">
          <div>
            <div>
              <a href="http://alecthibodeau.com/print_lunar_calendar_pineal_grigio.html" target="_blank">
                <img src="public/images/items/thibodeau_lunar_calendar_2011.jpg" />
              </a>
            </div>
            <div class="text">2011 Lunar Calendar</div>
          </div>
          <div>
            <div>
              <a href="http://alecthibodeau.com/print_lunar_calendar_probably_the_earths_core.html" target="_blank">
                <img src="public/images/items/thibodeau_lunar_calendar_2010.jpg" />
              </a>
            </div>
            <div class="text">2010 Lunar Calendar</div>
          </div>
          <div>
            <div>
              <a href="http://alecthibodeau.com/print_lunar_calendar_goes_to_show_you.html" target="_blank">
                <img src="public/images/items/thibodeau_lunar_calendar_2009.jpg" />
              </a>
            </div>
            <div class="text">2009 Lunar Calendar</div>
          </div>
          <div>
            <div>
              <a href="http://alecthibodeau.com/print_lunar_calendar_good_librations.html" target="_blank">
                <img src="public/images/items/thibodeau_lunar_calendar_2008.jpg" />
              </a>
            </div>
            <div class="text">2008 Lunar Calendar</div>
          </div>
        </div>
      </div>


    </div>
  </div>
`;

const itemLoad = function (currentPage) {
  let page = config.pagesInfo[currentPage]
  let htmlToFill = [
    ['.item-name', page.itemName],
    ['.item-subname', page.itemSubname],
    ['.item-info-one', page.itemInfoOne],
    ['.item-info-two', page.itemInfoTwo],
    ['.item-info-three', page.itemInfoThree],
    ['.item-info-four', page.itemInfoFour],
    ['.item-price', page.itemPrice],
    ['.item-more-photo-pair-one', page.itemMorePhotoPairOne],
    ['.item-more-photo-pair-two', page.itemMorePhotoPairTwo],
    ['.item-more-photo-pair-three', page.itemMorePhotoPairThree],
    ['.item-more-photo-pair-four', page.itemMorePhotoPairFour],
    ['.item-more-info', page.itemMoreInfo] // Paragraphs with text
  ]
  if (currentPage) {
    // Use '.innerHTML' to fill each item's DOM element by class name with the item's info -- if that info exists
    htmlToFill.forEach(function (element) {
      if (element[1]) {
        // Show container for more info if the info is there
        if (element[1] === page.itemMoreInfo) {
          document.querySelector('.container-two').classList.add('shown');
        }
        document.querySelector(element[0]).innerHTML = element[1];
      }
    });
    // Use '.src' and '.classList' to set the main image's source and add an item-specific class
    document.querySelector('.item-image-front').src = page.itemImageFront;
    document.querySelector('.item-image-front').classList.add(page.itemCategory)
    // Use '.value' to set the form input's cart value
    document.querySelector('.item-id').value = page.itemId;
  }
}

export default {
  itemPage,
  itemLoad
};
