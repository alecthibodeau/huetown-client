'use strict'

import config from '../config.js';

// Additional item content
let containerTwoContent = `
  <div class="photo-pair item-more-photo-pair-one"></div>
  <div class="photo-pair item-more-photo-pair-two"></div>
  <div class="photo-pair item-more-photo-pair-three"></div>
  <div class="photo-pair item-more-photo-pair-four"></div>
  <div class="item-more-info"></div>
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
        <a class="current-calendar" href="lunar_calendar_2020.html">
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
          <img class="feature-image" id="featureImage" src="" />
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

const showAndLoadContainer = (containerClass) => {
  const container = document.querySelector(`.${containerClass}`)
  container.classList.add('shown');
  container.innerHTML = containerTwoContent;
};

const loadInfoForClassesWithOneOrMoreInstances = (classes) => {
  classes.forEach(function (element) {
    // Fill each item's element with item-specific info -- if it exists
    if (element[1]) {
      const content = element[1];
      const nodes = document.querySelectorAll(`.${element[0]}`);
      for (let i = 0; i < nodes.length; i++) {
        const customElement = nodes[i];
        switch (customElement.nodeName) {
          case 'IMG':
            customElement.src = content;
            break;
          case 'INPUT':
            customElement.value = content;
            break;
          case 'DIV':
          case 'SPAN':
            customElement.innerHTML = content;
          case 'A':
            customElement.href = content;
        }
      }
      // Add an item-specific category class (for item.scss breakpoints) -- if it exists
      if (element[2]) {
        const additionalClass = element[2];
        nodes[0].classList.add(additionalClass);
      }
    }
  });
};

const addToClassList = (selector, className) => {
  document.querySelector(selector).classList.add(className);
}

const augmentExistingClasses = (currentPage, item) => {
    const tagsNeedingAdditionalClasses = [
      // Add a 'lunar-calendar' class on relevant item page selectors (for item.scss breakpoints)
      ['container-one', item.itemCategory],
      ['item-info-block', item.itemCategory],
      ['payment-info', item.itemCategory],
      ['item-price-container', item.itemCategory],
      ['container-three', 'shown']
    ]

    if (currentPage.startsWith('lunarCalendar')) {
      tagsNeedingAdditionalClasses.forEach(function (tag) {
        addToClassList(`.${tag[0]}`, tag[1]);
      });
      const lunarCalendarAdditional = [
        ['feature-image-link', '#itemDetails'],
        ['container-three', containerThreeContent]
      ]
      loadInfoForClassesWithOneOrMoreInstances(lunarCalendarAdditional);
    } else if (currentPage.startsWith('print')) {
      // Also: Add class to center content on any print page (in item.scss)
      document.querySelector('.container-one').classList.add('print');
    };
}

const itemLoad = function (currentPage) {
  const item = config.itemsInfo[currentPage]

  const defaultClassNamesWithInfoToLoad = [
    // container-one content
    ['feature-image', item.itemImageFront, item.itemCategory],
    ['item-name', item.itemName],
    ['item-subname', item.itemSubname],
    ['item-info-one', item.itemInfoOne],
    ['item-info-two', item.itemInfoTwo],
    ['item-info-three', item.itemInfoThree],
    ['item-info-four', item.itemInfoFour],
    ['item-price', item.itemPrice],
    ['item-id', item.itemId],
    // container-two content
    ['item-more-photo-pair-one', item.itemMorePhotoPairOne],
    ['item-more-photo-pair-two', item.itemMorePhotoPairTwo],
    ['item-more-photo-pair-three', item.itemMorePhotoPairThree],
    ['item-more-photo-pair-four', item.itemMorePhotoPairFour],
    ['item-more-info', item.itemMoreInfo],
    // lunar calendar info
    ['lunar-calendar-title', item.itemLunarCalendarTitle],
    ['lunar-calendar-year', item.itemLunarCalendarYear],
    ['lunar-calendar-paper-info', item.itemLunarCalendarPaperInfo]
  ]
  
  if (item.itemMoreInfo) {
    showAndLoadContainer('container-two');
  }
  loadInfoForClassesWithOneOrMoreInstances(defaultClassNamesWithInfoToLoad);
  augmentExistingClasses(currentPage, item);
}

export default {
  itemPage,
  itemLoad
};
