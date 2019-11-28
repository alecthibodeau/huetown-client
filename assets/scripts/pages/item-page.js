'use strict'

import config from '../config.js';

// Additional item content
let containerTwoContent = `
  <div class="photo-pair item-more-photo-pair-one"></div>
  <div class="photo-pair item-more-photo-pair-two"></div>
  <div class="photo-pair item-more-photo-pair-three"></div>
  <div class="photo-pair item-more-photo-pair-four"></div>
  <div class="item-more-info" id="itemDetails"></div>
`;

// Additional lunar-calendar content
let containerThreeContent = `
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
`;

// Primary item content 
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

    <div class="content-container container-two"></div>
    <div class="content-container container-three"></div>

  </div>
`;

const itemLoad = function (currentPage) {
  let page = config.pagesInfo[currentPage]
  let htmlToFill = [
    // container-one content starts here
    ['.item-name', page.itemName],
    ['.item-subname', page.itemSubname],
    ['.item-info-one', page.itemInfoOne],
    ['.item-info-two', page.itemInfoTwo],
    ['.item-info-three', page.itemInfoThree],
    ['.item-info-four', page.itemInfoFour],
    ['.item-price', page.itemPrice],
    // container-two content starts here
    ['.item-more-photo-pair-one', page.itemMorePhotoPairOne],
    ['.item-more-photo-pair-two', page.itemMorePhotoPairTwo],
    ['.item-more-photo-pair-three', page.itemMorePhotoPairThree],
    ['.item-more-photo-pair-four', page.itemMorePhotoPairFour],
    ['.item-more-info', page.itemMoreInfo]
  ]

  // If the item has content for container-two then show container-two and load it
  if (page.itemMoreInfo) {
    document.querySelector('.container-two').classList.add('shown');
    document.querySelector('.container-two').innerHTML = containerTwoContent;
  }

  // Fill each item's element with item-specific info if the info exists
  htmlToFill.forEach(function (element) {
    if (element[1]) {
      document.querySelector(element[0]).innerHTML = element[1];
    }
  });

  // Set the main image's source, then add an item-specific category class
  document.querySelector('.item-image-front').src = page.itemImageFront;
  document.querySelector('.item-image-front').classList.add(page.itemCategory)
  // Set the form input's cart value
  document.querySelector('.item-id').value = page.itemId;

  // Also: add a 'lunar-calendar' class on relevant item page selectors (for item.scss breakpoints)
  let itemTags = [
    '.container-one',
    '.item-info-block',
    '.payment-info',
    '.item-price-container'
  ]
  if (currentPage.startsWith('lunarCalendar')) {
    itemTags.forEach(function (tag) {
      document.querySelector(tag).classList.add('lunar-calendar');
    });
    // Add href link for referencing item details
    document.querySelector('.feature-image-link').href = '#itemDetails';
    // Show container-three, then load it
    document.querySelector('.container-three').classList.add('shown');
    document.querySelector('.container-three').innerHTML = containerThreeContent;
  };

  // Also: Add class to center content on any print page (in item.scss)
  if (currentPage.startsWith('print')) {
    document.querySelector('.container-one').classList.add('print');
  };
}

export default {
  itemPage,
  itemLoad
};
