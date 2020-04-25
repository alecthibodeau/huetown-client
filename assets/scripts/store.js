'use strict'

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
      customElement.innerHTML = content;
      break;
    case 'A':
      customElement.href = content;
  }
};

let itemInfoText = `
  <div class="item-info-text" id="orderItem">
    <div>
      <span class="item-name"></span>
      <span class="item-subname"></span>
    </div>
    <div class="item-info-1"></div>
    <div class="item-info-2"></div>
    <div class="item-info-3"></div>
    <div class="item-info-4"></div>
  </div>
`;

let itemForm = `
  <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
    <input type="hidden" name="cmd" value="_s-xclick">
    <input class="item-id" type="hidden" name="hosted_button_id" value="">
    <input type="text" name="quantity" value="1">
    <input type="submit" value="add to cart" alt="Add To Cart">
    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
  </form>
`;

const getItemInfo = (pageValue, item) => {

  const itemFeatureImage = { 
    className: 'feature-image',
    configName: item.itemImageFront
  };
  
  const itemName = { 
    className: 'item-name',
    configName: item.itemName
  };
  
  const itemSubname = {
    className: 'item-subname',
    configName: item.itemSubname
  };
  
  const itemInfoOne = { 
    className: 'item-info-1',
    configName: item.itemInfoOne
  };
  
  const itemInfoTwo = { 
    className: 'item-info-2',
    configName: item.itemInfoTwo
  };
  
  const itemInfoThree = { 
    className: 'item-info-3',
    configName: item.itemInfoThree
  };
  
  const itemInfoFour = { 
    className: 'item-info-4',
    configName: item.itemInfoFour
  };
  
  const itemPrice = { 
    className: 'item-price',
    configName: item.itemPrice
  };
  
  const itemId = { 
    className: 'item-id',
    configName: item.itemId
  };

  const itemMorePhotoPairOne = { 
    className: 'item-more-photo-pair-1',
    configName: item.itemMorePhotoPairOne
  };

  const itemMorePhotoPairTwo = { 
    className: 'item-more-photo-pair-2',
    configName: item.itemMorePhotoPairTwo
  };

  const itemMorePhotoPairThree = { 
    className: 'item-more-photo-pair-3',
    configName: item.itemMorePhotoPairThree
  };

  const itemMorePhotoPairFour = { 
    className: 'item-more-photo-pair-4',
    configName: item.itemMorePhotoPairFour
  };

  const itemMoreInfo = { 
    className: 'item-more-info',
    configName: item.itemMoreInfo
  };

  const itemLunarCalendarTitle = { 
    className: 'lunar-calendar-title',
    configName: item.itemLunarCalendarTitle
  };

  const itemLunarCalendarYear = { 
    className: 'lunar-calendar-year',
    configName: item.itemLunarCalendarYear
  };

  const itemLunarCalendarPaperInfo = { 
    className: 'lunar-calendar-paper-info',
    configName: item.itemLunarCalendarPaperInfo
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
    itemLunarCalendarYear,
    itemLunarCalendarPaperInfo
  ];

  if (pageValue === 'home') {
    return basicItemInfo;
  } else {
    return basicItemInfo.concat(extraItemInfo);
  }
};

export default {
  setContent,
  itemInfoText,
  itemForm,
  getItemInfo
};
  