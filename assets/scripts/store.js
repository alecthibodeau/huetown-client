'use strict'

/* store is snippets of js code and html for importing elsewhere */

const setContent = (customElement, content) => {
  switch (customElement.nodeName) {
    case 'IMG':
      customElement.src = content;
      break;
    case 'INPUT':
      customElement.value = content;
      break;
    case 'DIV':
    case 'SPAN':
    case 'LI':
      customElement.innerHTML = content;
      break;
    case 'A':
      customElement.href = content;
  }
};

let itemInfoText = `
  <div class="item-info-text" id="orderItem">
    <div>
      <div class="item-name"></div>
      <div class="item-subname"></div>
    </div>
    <ul class="item-info-container">
      <li class="item-info-1"></li>
      <li class="item-info-2"></li>
      <li class="item-info-3"></li>
      <li class="item-info-4"></li>
    </ul>
  </div>
`;

let itemForm = `
  <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
    <input type="hidden" name="cmd" value="_s-xclick">
    <input class="item-id" type="hidden" name="hosted_button_id" value="">
    <input type="text" name="quantity" value="1">
    <input type="submit" value="Add to cart" alt="Add to cart">
    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
  </form>
`;

/* Additional item content */
let containerTwoContent = `
  <div class="photo-pair item-more-photo-pair-1"></div>
  <div class="photo-pair item-more-photo-pair-2"></div>
  <div class="photo-pair item-more-photo-pair-3"></div>
  <div class="photo-pair item-more-photo-pair-4"></div>
  <div class="item-more-info"></div>
`;

/* Additional lunar-calendar content */
let containerThreeContent = `
  <div class="available">
    <div class="title">
      available alec thibodeau lunar&nbsp;calendars
    </div>
    <div class="lunar-calendar-links-available">

      <div>
        <div>
          <a class="available-calendar" href="lunar-calendar-2021.html">
            <img src="public/images/items/thibodeau_lunar_calendar_2021_photo_main_1000px.jpg" />
          </a>
        </div>
        <div class="text">2021 lunar calendar</div>
      </div>

      <div>
        <div>
          <a class="available-calendar" href="lunar-calendar-2020.html">
            <img src="public/images/items/thibodeau_lunar_calendar_2020_main.png" />
          </a>
        </div>
        <div class="text">2020 lunar calendar</div>
      </div>

      <div>
        <div>
          <a class="available-calendar" href="lunar-calendar-2019.html">
            <img src="public/images/items/thibodeau_lunar_calendar_2019_main.jpg" />
          </a>
        </div>
        <div class="text">2019 lunar calendar</div>
      </div>

      <div>
        <div>
          <a class="available-calendar" href="lunar-calendar-2018.html">
            <img src="public/images/items/thibodeau_lunar_calendar_2018_main.jpg" />
          </a>
        </div>
        <div class="text">2018 lunar calendar</div>
      </div>

      <div>
        <div>
          <a class="available-calendar" href="lunar-calendar-2017.html">
            <img src="public/images/items/thibodeau_lunar_calendar_2017_main.jpg" />
          </a>
        </div>
      <div class="text">2017 lunar calendar</div>
    </div>

  </div>

  <div class="previous">
    <div class="title">
      previous alec thibodeau lunar&nbsp;calendars
    </div>
    <div class="lunar-calendar-links-previous">

      <div>
        <div>
          <a href="http://alecthibodeau.com/print_lunar-calendar-pineal_grigio.html" target="_blank">
            <img src="public/images/items/thibodeau_lunar_calendar_2011.jpg" />
          </a>
        </div>
        <div class="text">2011 lunar calendar</div>
      </div>

      <div>
        <div>
          <a href="http://alecthibodeau.com/print_lunar-calendar-probably_the_earths_core.html" target="_blank">
            <img src="public/images/items/thibodeau_lunar_calendar_2010.jpg" />
          </a>
        </div>
        <div class="text">2010 lunar calendar</div>
      </div>

      <div>
        <div>
          <a href="http://alecthibodeau.com/print_lunar-calendar-goes_to_show_you.html" target="_blank">
            <img src="public/images/items/thibodeau_lunar_calendar_2009.jpg" />
          </a>
        </div>
        <div class="text">2009 lunar calendar</div>
      </div>

      <div>
        <div>
          <a href="http://alecthibodeau.com/print_lunar-calendar-good_librations.html" target="_blank">
            <img src="public/images/items/thibodeau_lunar_calendar_2008.jpg" />
          </a>
        </div>
        <div class="text">2008 lunar calendar</div>
      </div>

    </div>
  </div>
`;

const lunarPhases = [
  'new',
  'first-quarter',
  'full',
  'third-quarter'
];

const lunarPhaseInfo = [
  {
    phaseElement: 'phaseInfoDiv',
    classPrefix: 'phase-info',
    elementType: 'div',
    parent: 'lunar-phases'
  },
  {
    phaseElement: 'phaseImage',
    classPrefix: 'lunar-phase-img',
    elementType: 'img',
    parent: 'phase-info'
  },
  {
    phaseElement: 'phaseTextDiv',
    classPrefix: 'phase-text',
    elementType: 'div',
    parent: 'phase-info'
  }
];

const getItemInfo = (item, pageValueOrConcern) => {

  const itemFeatureImage = {
    className: 'feature-image',
    contentToLoad: item.itemImageFront,
    categoryName: item.itemCategory
  };

  const itemName = {
    className: 'item-name',
    contentToLoad: item.itemName
  };

  const itemSubname = {
    className: 'item-subname',
    contentToLoad: item.itemSubname
  };

  const itemInfoOne = {
    className: 'item-info-1',
    contentToLoad: item.itemInfoOne
  };

  const itemInfoTwo = {
    className: 'item-info-2',
    contentToLoad: item.itemInfoTwo
  };

  const itemInfoThree = {
    className: 'item-info-3',
    contentToLoad: item.itemInfoThree
  };

  const itemInfoFour = {
    className: 'item-info-4',
    contentToLoad: item.itemInfoFour
  };

  const itemPrice = {
    className: 'item-price',
    contentToLoad: item.itemPrice
  };

  const itemId = {
    className: 'item-id',
    contentToLoad: item.itemId
  };

  const itemMorePhotoPairOne = {
    className: 'item-more-photo-pair-1',
    contentToLoad: item.itemMorePhotoPairOne
  };

  const itemMorePhotoPairTwo = {
    className: 'item-more-photo-pair-2',
    contentToLoad: item.itemMorePhotoPairTwo
  };

  const itemMorePhotoPairThree = {
    className: 'item-more-photo-pair-3',
    contentToLoad: item.itemMorePhotoPairThree
  };

  const itemMorePhotoPairFour = {
    className: 'item-more-photo-pair-4',
    contentToLoad: item.itemMorePhotoPairFour
  };

  const itemMoreInfo = {
    className: 'item-more-info',
    contentToLoad: item.itemMoreInfo
  };

  const itemLimitedEdition = {
    className: 'limited-edition',
    contentToLoad: item.itemLimitedEdition
  };

  const itemLunarCalendarTitle = {
    className: 'lunar-calendar-title',
    contentToLoad: item.itemLunarCalendarTitle
  };

  const itemLunarCalendarYear = {
    className: 'lunar-calendar-year',
    contentToLoad: item.itemLunarCalendarYear
  };

  const itemLunarCalendarPaperInfo = {
    className: 'lunar-calendar-paper-info',
    contentToLoad: item.itemLunarCalendarPaperInfo
  };

  const itemLunarCalendarLocation = {
    className: 'lunar-calendar-location',
    contentToLoad: item.itemLunarCalendarLocation
  };

  const lunarContainerOne = {
    className: 'container-1',
    contentToLoad: item.itemCategory
  };

  const lunarItemInfoBlock = {
    className: 'item-info-block',
    contentToLoad: item.itemCategory
  };

  const lunarPaymentInfo = {
    className: 'payment-info',
    contentToLoad: item.itemCategory
  };

  const lunarPriceContainer = {
    className: 'item-price-container',
    contentToLoad: item.itemCategory
  };

  const lunarContainerThree = {
    className: 'container-3',
    contentToLoad: 'shown'
  }

  const lunarFeatureImage = {
    className: 'feature-image-link',
    contentToLoad: '#itemDetails'
  };

  const lunarContainerThreeContent = {
    className: 'container-3',
    contentToLoad: containerThreeContent
  };

  const containerOnePostcard = {
    className: 'container-1',
    contentToLoad: 'postcard'
  };

  const containerOnePrint = {
    className: 'container-1',
    contentToLoad: 'print'
  };

  const basicItemInfo = [
    itemFeatureImage,
    itemName,
    itemSubname,
    itemInfoOne,
    itemInfoTwo,
    itemInfoThree,
    itemInfoFour,
    itemPrice,
    itemId
  ];

  const extraItemInfo = [
    itemMorePhotoPairOne,
    itemMorePhotoPairTwo,
    itemMorePhotoPairThree,
    itemMorePhotoPairFour,
    itemMoreInfo,
    itemLunarCalendarTitle,
    itemLimitedEdition,
    itemLunarCalendarYear,
    itemLunarCalendarPaperInfo,
    itemLunarCalendarLocation
  ];

  const lunarClasses = [
    lunarContainerOne,
    lunarItemInfoBlock,
    lunarPaymentInfo,
    lunarPriceContainer,
    lunarContainerThree
  ];

  const lunarAdditionalInfo = [
    lunarFeatureImage,
    lunarContainerThreeContent
  ];

  switch (pageValueOrConcern) {
    case 'home':
      return basicItemInfo;
    case 'lunar-tags-needing-additional-classes':
      return lunarClasses;
    case 'lunar-page-additional-info':
      return lunarAdditionalInfo;
    case 'add-class-for-centering-item-postcard':
      return [containerOnePostcard];
    case 'add-class-for-centering-item-print':
      return [containerOnePrint];
    default:
      return basicItemInfo.concat(extraItemInfo);
  }
};

export default {
  setContent,
  itemInfoText,
  itemForm,
  getItemInfo,
  containerTwoContent,
  lunarPhases,
  lunarPhaseInfo
};
