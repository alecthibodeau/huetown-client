'use strict'

// nav pages
import home from './pages/home.js';
import lunarCalendars from './pages/lunar-calendars.js';
import prints from './pages/prints.js';
import postcards from './pages/postcards.js';
import about from './pages/about.js';
import veganly from './pages/veganly.js';

// item page
import item from './pages/item-page.js';

const itemInfoUniversals = {
  drawingInfoOriginalDrawing: 'original drawing',
  drawingInfoPenAndInk: 'pen and ink on Bristol board',
  drawingInfoThreeAndQuarterInches: '3.25 x 3.25 inches',
  drawingInfoSignedOnBack: 'signed on the back',
  drawingPrice: 55,
  lunarCalendarItemName: `
    <span class="lunar-calendar-title"></span><br>
    <span class="lunar-calendar-year normal"></span><span class="normal">lunar calendar<br>
    by Alec Thibodeau</span>
  `,
  lunarCalendarPrice: 40,
  lunarCalendarInfoOne: '19 x 11.75 inches<br>Letterpress print<br>Printed by DWRI Letterpress',
  lunarCalendarInfoTwo: '',
  lunarCalendarInfoThree: 'Hand numbered and signed by the artist in a limited edition of prints',
  lunarCalendarInfoFour: 'Ships rolled and triple-packaged: archival wrapping, <a class="text-link" href="#phaseInfo">eco-friendly protective tube</a> and outer shipping container',
  lunarCalendarBlocks: `
    <div>
      <div class="info-block">
        <span class="lunar-calendar-title ital"></span> is a letterpress-printed lunar calendar designed and drawn by Alec Thibodeau (me!), 
        chronicling all phases of the moon for <span class="lunar-calendar-year"></span>. 
        From a limited edition of 500 prints <span class="lunar-calendar-title ital"></span> continues my ongoing lunar calendar series, 
        which features ornate border drawings in a landscape format. 
        As with each of my previous lunar calendars, this one measures 19" x 11.75" (a golden rectangle) and is expertly printed by Dan Wood 
        and his team at <a class="text-link" href="http://www.dwriletterpress.net" target="_blank">DWRI&nbsp;Letterpress</a>.
      </div>
      <div class="info-block">
        The <span class="lunar-calendar-year"></span> lunar calendar comprises new drawings and year-specific lunar phase information. 
        Each calendar is printed on <span class="lunar-calendar-paper-info"></span>, blind-debossed with my name and the print shop's name &mdash; and hand numbered and signed by me. Each calendar ships with an accompanying information sheet, archival wrapping and an eco-friendly fiberboard protective tube: reusable, recycled and recyclable, with crimped ends and no plastic caps.
      </div>
      <div class="info-block">
        The calendar's lunar phase information is calibrated for any place in the Eastern Time Zone and is accurate to within a day for any place in the Northern Hemisphere. The calendar is designed, drawn and printed in Providence, Rhode Island, which is identified as a representative location within the artwork.
      </div>
      <div class="info-block">
        Custom moon illustrations portray all principal lunar phases (New Moon, First Quarter Moon, Full Moon and Third Quarter Moon) plus all intermediate crescent and gibbous phases. For months with less than 31 days, drawings of clouds occupy the extra spaces. 
        <a class="text-link" href="#featureImage">ORDER&nbsp;NOW</a>
      </div>
      <div class="lunar-phases">
        <div class="phase-info">
          <img src="public/images/items/phase_new.png" />
          <div class="phase-text">New<br>Moon</div>
        </div>
        <div class="phase-info">
          <img src="public/images/items/phase_first_quarter.png" />
          <div class="phase-text">First<br>Quarter<br>Moon</div>
        </div>
        <div class="phase-info">
          <img src="public/images/items/phase_full.png" />
          <div class="phase-text">Full<br>Moon</div>
        </div>
        <div class="phase-info" id="phaseInfo">
          <img src="public/images/items/phase_third_quarter.png" />
          <div class="phase-text">Third<br>Quarter<br>Moon</div>
        </div>     
      </div>
      <div class="protective-tube" id="tube">
        <div class="tube-text">eco-friendly protective tube:</div>
        <img src="public/images/items/protective_tube.png" />
      </div>
    </div>
  `,
  postcardInfoOne: '6 x 4 inches; mellow, satin finish<br>Full-color front / single-color back',
  postcardInfoTwo: '',
  postcardPrice: 1,
  printPrice: 15
}

const itemsInfo = {
  'home': {
    mainContent: home.homePage
  },
  'lunarCalendars': {
    mainContent: lunarCalendars.lunarCalendarsPage
  },
  'postcards': {
    mainContent: postcards.postcardsPage
  },
  'prints': {
    mainContent: prints.printsPage
  },
  'about': {
    mainContent: about.aboutPage
  },
  'veganly': {
    mainContent: veganly.veganlyPage
  },
  'drawingBisonBreathes': {
    itemClass: 'drawing-bison-breathes',
    itemCategory: 'drawing',
    itemName: 'Bison Breathes',
    itemSubname: '',
    itemImageFront: 'public/images/home/drawings/drawing_bison_breathes_gs_500px.png',
    itemInfoOne: itemInfoUniversals.drawingInfoOriginalDrawing,
    itemInfoTwo: itemInfoUniversals.drawingInfoPenAndInk,
    itemInfoThree: itemInfoUniversals.drawingInfoThreeAndQuarterInches,
    itemInfoFour: itemInfoUniversals.drawingInfoSignedOnBack,
    itemPrice: itemInfoUniversals.drawingPrice,
    itemId: 'P32KQAB5THSDE'
  },
  'drawingButternutBear': {
    itemClass: 'drawing-butternut-bear',
    itemCategory: 'drawing',
    itemName: 'Butternut Bear',
    itemSubname: '',
    itemImageFront: 'public/images/home/drawings/drawing_butternut_bear_gs_500px.png',
    itemInfoOne: itemInfoUniversals.drawingInfoOriginalDrawing,
    itemInfoTwo: itemInfoUniversals.drawingInfoPenAndInk,
    itemInfoThree: itemInfoUniversals.drawingInfoThreeAndQuarterInches,
    itemInfoFour: itemInfoUniversals.drawingInfoSignedOnBack,
    itemPrice: itemInfoUniversals.drawingPrice,
    itemId: 'ZPDMSTPEF8498'
  },
  'drawingHawkHeralds': {
    itemClass: 'drawing-hawk-heralds',
    itemCategory: 'drawing',
    itemName: 'Hawk Heralds',
    itemSubname: '',
    itemImageFront: 'public/images/home/drawings/drawing_hawk_heralds_gs_500px.png',
    itemInfoOne: itemInfoUniversals.drawingInfoOriginalDrawing,
    itemInfoTwo: itemInfoUniversals.drawingInfoPenAndInk,
    itemInfoThree: itemInfoUniversals.drawingInfoThreeAndQuarterInches,
    itemInfoFour: itemInfoUniversals.drawingInfoSignedOnBack,
    itemPrice: itemInfoUniversals.drawingPrice,
    itemId: 'DS7X4RVHNZXJS'
  },
  'drawingPinkMoon2020': {
    itemClass: 'drawing-pink-moon-2020',
    itemCategory: 'drawing',
    itemName: 'Pink Moon 2020',
    itemSubname: '',
    itemImageFront: 'public/images/home/drawings/drawing_pink_moon_2020_gs_500px.png',
    itemInfoOne: itemInfoUniversals.drawingInfoOriginalDrawing,
    itemInfoTwo: itemInfoUniversals.drawingInfoPenAndInk,
    itemInfoThree: itemInfoUniversals.drawingInfoThreeAndQuarterInches,
    itemInfoFour: itemInfoUniversals.drawingInfoSignedOnBack,
    itemPrice: itemInfoUniversals.drawingPrice,
    itemId: 'WXGKHV6QX86BU'
  },
  'drawingRobinReveals': {
    itemClass: 'drawing-robin-reveals',
    itemCategory: 'drawing',
    itemName: 'Robin Reveals',
    itemSubname: '',
    itemImageFront: 'public/images/home/drawings/drawing_robin_reveals_gs_500px.png',
    itemInfoOne: itemInfoUniversals.drawingInfoOriginalDrawing,
    itemInfoTwo: itemInfoUniversals.drawingInfoPenAndInk,
    itemInfoThree: itemInfoUniversals.drawingInfoThreeAndQuarterInches,
    itemInfoFour: itemInfoUniversals.drawingInfoSignedOnBack,
    itemPrice: itemInfoUniversals.drawingPrice,
    itemId: '27MQ7DNEX9DC2'
  },
  'drawingWormMoon2020': {
    itemClass: 'drawing-worm-moon-2020',
    itemCategory: 'drawing',
    itemName: 'Worm Moon 2020',
    itemSubname: '',
    itemImageFront: 'public/images/home/drawings/drawing_worm_moon_2020_gs_500px.png',
    itemInfoOne: itemInfoUniversals.drawingInfoOriginalDrawing,
    itemInfoTwo: itemInfoUniversals.drawingInfoPenAndInk,
    itemInfoThree: itemInfoUniversals.drawingInfoThreeAndQuarterInches,
    itemInfoFour: itemInfoUniversals.drawingInfoSignedOnBack,
    itemPrice: itemInfoUniversals.drawingPrice,
    itemId: 'CCQ8NV9K78FNQ'
  },
  'lunarCalendarTwenty': {
    mainContent: item.itemPage,
    itemCategory: 'lunar-calendar',
    itemLunarCalendarTitle: 'The Instruments Agree',
    itemLunarCalendarYear: '2020',
    itemLunarCalendarPaperInfo: 'Mohawk Fine Papers\' acid-free 300gsm Keaykolour Caribbean Blue 111# cover paper',
    itemName: itemInfoUniversals.lunarCalendarItemName,
    itemSubname: '',
    itemImageFront: 'public/images/items/thibodeau_lunar_calendar_2020_photo_main_1000px.jpg',
    itemInfoOne: itemInfoUniversals.lunarCalendarInfoOne,
    itemInfoTwo: itemInfoUniversals.lunarCalendarInfoTwo,
    itemInfoThree: 'Hand numbered and signed by the artist in a limited edition of 500 prints',
    itemInfoFour: itemInfoUniversals.lunarCalendarInfoFour,
    itemInfoMore: '',
    itemPrice: itemInfoUniversals.lunarCalendarPrice,
    itemId: 'TGVEUGQD58AX2',
    itemMorePhotoPairOne: `
      <img src="public/images/items/thibodeau_lunar_calendar_2020_photo_01_1000px.jpg" />
      <img src="public/images/items/thibodeau_lunar_calendar_2020_photo_02_1000px.jpg" />
    `,
    itemMorePhotoPairTwo: `
      <img src="public/images/items/thibodeau_lunar_calendar_2020_photo_03_1000px.jpg" />
      <img src="public/images/items/thibodeau_lunar_calendar_2020_photo_04_1000px.jpg" />
    `,
    itemMorePhotoPairThree: `
      <img src="public/images/items/thibodeau_lunar_calendar_2020_photo_07_1000px.jpg" />
      <img src="public/images/items/thibodeau_lunar_calendar_2020_photo_08_1000px.jpg" />
    `,
    itemMorePhotoPairFour: `
    <img src="public/images/items/thibodeau_lunar_calendar_2020_photo_05_1000px.jpg" />
    <img id="itemDetails" src="public/images/items/thibodeau_lunar_calendar_2020_photo_06_1000px.jpg" />
    `,
    itemMoreInfo: itemInfoUniversals.lunarCalendarBlocks
  },
  'lunarCalendarNineteen': {
    mainContent: item.itemPage,
    itemCategory: 'lunar-calendar',
    itemLunarCalendarTitle: 'Orchard Quest',
    itemLunarCalendarYear: '2019',
    itemLunarCalendarPaperInfo: 'French Paper Company\'s acid-free 269gsm Pop-Tone Tangy Orange 100# cover paper',
    itemName: itemInfoUniversals.lunarCalendarItemName,
    itemSubname: '',
    itemImageFront: 'public/images/items/thibodeau_lunar_calendar_2019_main.jpg',
    itemInfoOne: itemInfoUniversals.lunarCalendarInfoOne,
    itemInfoTwo: itemInfoUniversals.lunarCalendarInfoTwo,
    itemInfoThree: 'Hand numbered and signed by the artist in a limited edition of 500 prints',
    itemInfoFour: itemInfoUniversals.lunarCalendarInfoFour,
    itemPrice: itemInfoUniversals.lunarCalendarPrice,
    itemId: 'T45GH9BL83VQ4',
    itemMorePhotoPairOne: `
      <img src="public/images/items/thibodeau_lunar_calendar_2019_photo_01.jpg" />
      <img src="public/images/items/thibodeau_lunar_calendar_2019_photo_02.jpg" />
    `,
    itemMorePhotoPairTwo: `
      <img src="public/images/items/thibodeau_lunar_calendar_2019_photo_03.jpg" />
      <img src="public/images/items/thibodeau_lunar_calendar_2019_photo_04.jpg" />
    `,
    itemMorePhotoPairThree: `
      <img src="public/images/items/thibodeau_lunar_calendar_2019_photo_05.jpg" />
      <img src="public/images/items/thibodeau_lunar_calendar_2019_photo_06.jpg" />
    `,
    itemMorePhotoPairFour: `
      <img src="public/images/items/thibodeau_lunar_calendar_2019_photo_07.jpg" />
      <img id="itemDetails" src="public/images/items/thibodeau_lunar_calendar_2019_photo_08.jpg" />
    `,
    itemMoreInfo: itemInfoUniversals.lunarCalendarBlocks
  },
  'lunarCalendarEighteen': {
    mainContent: item.itemPage,
    itemCategory: 'lunar-calendar',
    itemLunarCalendarTitle: 'Shimmery Circuit',
    itemLunarCalendarYear: '2019',
    itemLunarCalendarPaperInfo: 'French Paper Company\'s acid-free 269gsm Pop-Tone Grape Jelly 100# cover paper',
    itemName: itemInfoUniversals.lunarCalendarItemName,
    itemSubname: '',
    itemImageFront: 'public/images/items/thibodeau_lunar_calendar_2018_main.jpg',
    itemInfoOne: itemInfoUniversals.lunarCalendarInfoOne,
    itemInfoTwo: itemInfoUniversals.lunarCalendarInfoTwo,
    itemInfoThree: 'Hand numbered and signed by the artist in a limited edition of 1000 prints',
    itemInfoFour: itemInfoUniversals.lunarCalendarInfoFour,
    itemPrice: itemInfoUniversals.lunarCalendarPrice,
    itemId: '4LN49ZLYQLY88',
    itemMorePhotoPairOne: `
      <img src="public/images/items/thibodeau_lunar_calendar_2018_photo_01.jpg" />
      <img src="public/images/items/thibodeau_lunar_calendar_2018_photo_02.jpg" />
    `,
    itemMorePhotoPairTwo: `
      <img src="public/images/items/thibodeau_lunar_calendar_2018_photo_03.jpg" />
      <img src="public/images/items/thibodeau_lunar_calendar_2018_photo_04.jpg" />
    `,
    itemMorePhotoPairThree: `
      <img src="public/images/items/thibodeau_lunar_calendar_2018_photo_05.jpg" />
      <img src="public/images/items/thibodeau_lunar_calendar_2018_photo_06.jpg" />
    `,
    itemMorePhotoPairFour: `
      <img src="public/images/items/thibodeau_lunar_calendar_2018_photo_07.jpg" />
      <img id="itemDetails" src="public/images/items/thibodeau_lunar_calendar_2018_photo_08.jpg" />
    `,
    itemMoreInfo: itemInfoUniversals.lunarCalendarBlocks
  },
  'lunarCalendarSeventeen': {
    mainContent: item.itemPage,
    itemCategory: 'lunar-calendar',
    itemLunarCalendarTitle: 'I Still See the X',
    itemLunarCalendarYear: '2019',
    itemLunarCalendarPaperInfo: 'French Paper Company\'s acid-free 269gsm Pop-Tone Razzle Berry 100# cover paper',
    itemName: itemInfoUniversals.lunarCalendarItemName,
    itemSubname: '',
    itemImageFront: 'public/images/items/thibodeau_lunar_calendar_2017_main.jpg',
    itemInfoOne: itemInfoUniversals.lunarCalendarInfoOne,
    itemInfoTwo: itemInfoUniversals.lunarCalendarInfoTwo,
    itemInfoThree: 'Hand numbered and signed by the artist in a limited edition of 1000 prints',
    itemInfoFour: itemInfoUniversals.lunarCalendarInfoFour,
    itemPrice: itemInfoUniversals.lunarCalendarPrice,
    itemId: 'C4RW9LGDQ8NYL',
    itemMorePhotoPairOne: `
      <img src="public/images/items/thibodeau_lunar_calendar_2017_photo_01.jpg" />
      <img src="public/images/items/thibodeau_lunar_calendar_2017_photo_02.jpg" />
    `,
    itemMorePhotoPairTwo: `
      <img src="public/images/items/thibodeau_lunar_calendar_2017_photo_03.jpg" />
      <img src="public/images/items/thibodeau_lunar_calendar_2017_photo_04.jpg" />
    `,
    itemMorePhotoPairThree: `
      <img src="public/images/items/thibodeau_lunar_calendar_2017_photo_05.jpg" />
      <img id="itemDetails" src="public/images/items/thibodeau_lunar_calendar_2017_photo_06.jpg" />
    `,
    itemMoreInfo: itemInfoUniversals.lunarCalendarBlocks
  },
  'postcardAssets': {
    mainContent: item.itemPage,
    itemCategory: 'postcard',
    itemName: 'Assets',
    itemSubname: 'postcard',
    itemImageFront: 'public/images/items/postcard_assets.png',
    itemInfoOne: itemInfoUniversals.postcardInfoOne,
    itemInfoTwo: itemInfoUniversals.postcardInfoTwo,
    itemInfoThree: `Caption on the back: "<span class="ital">Assets</span> (detail) by Alec Thibodeau, 2012, screen print on paper, 24 x 18 inches"`,
    itemPrice: itemInfoUniversals.postcardPrice,
    itemId: '4CL74PH4FSSQ6'
  },
  'postcardCachalot': {
    mainContent: item.itemPage,
    itemCategory: 'postcard',
    itemName: 'Cachalot',
    itemSubname: 'postcard',
    itemImageFront: 'public/images/items/postcard_cachalot.png',
    itemInfoOne: itemInfoUniversals.postcardInfoOne,
    itemInfoTwo: itemInfoUniversals.postcardInfoTwo,
    itemInfoThree: `Caption on the back: "The cachalot, or sperm whale, swims in the open ocean and has the largest brain of any animal."`,
    itemPrice: itemInfoUniversals.postcardPrice,
    itemId: '7H7ZNZJMAM5S4'
  },
  'postcardFlanneryOConnor': {
    mainContent: item.itemPage,
    itemCategory: 'postcard',
    itemName: `Flannery O'Connor`,
    itemSubname: 'postcard',
    itemImageFront: 'public/images/items/postcard_flannery_oconnor.png',
    itemInfoOne: itemInfoUniversals.postcardInfoOne,
    itemInfoTwo: itemInfoUniversals.postcardInfoTwo,
    itemInfoThree: `Caption on the back: "Flannery O'Connor (1925–1964) wrote <span class="ital">Wise Blood</span> and was an accomplished cartoonist."`,
    itemPrice: itemInfoUniversals.postcardPrice,
    itemId: '25LJT9358P2PS'
  },
  'postcardGreatWhiteShark': {
    mainContent: item.itemPage,
    itemCategory: 'postcard',
    itemName: 'Great White Shark',
    itemSubname: 'postcard',
    itemImageFront: 'public/images/items/postcard_great_white_shark.png',
    itemInfoOne: itemInfoUniversals.postcardInfoOne,
    itemInfoTwo: itemInfoUniversals.postcardInfoTwo,
    itemInfoThree: `Caption on the back: "The great white shark inhabits most of the world's oceans and wants to be your friend."`,
    itemPrice: itemInfoUniversals.postcardPrice,
    itemId: 'UP6L2CNKJLSL2'
  },
  'postcardHermanMelville': {
    mainContent: item.itemPage,
    itemCategory: 'postcard',
    itemName: 'Herman Melville',
    itemSubname: 'postcard',
    itemImageFront: 'public/images/items/postcard_herman_melville.png',
    itemInfoOne: itemInfoUniversals.postcardInfoOne,
    itemInfoTwo: itemInfoUniversals.postcardInfoTwo,
    itemInfoThree: `Caption on the back: "Herman Melville (1819–1891) wrote 'Bartleby, the Scrivener' and was a respected customs inspector."`,
    itemPrice: itemInfoUniversals.postcardPrice,
    itemId: 'JL4EHBW8MVKCC'
  },
  'postcardHippopotamus': {
    mainContent: item.itemPage,
    itemCategory: 'postcard',
    itemName: 'Hippopotamus',
    itemSubname: 'postcard',
    itemImageFront: 'public/images/items/postcard_hippopotamus.png',
    itemInfoOne: itemInfoUniversals.postcardInfoOne,
    itemInfoTwo: itemInfoUniversals.postcardInfoTwo,
    itemInfoThree: `Caption on the back: "The hippopotamus has a name which means 'horse of the river' in Ancient Greek."`,
    itemPrice: itemInfoUniversals.postcardPrice,
    itemId: 'T5XS8HXHARZG4'
  },
  'postcardRhodeIslandWhale': {
    mainContent: item.itemPage,
    itemCategory: 'postcard',
    itemName: 'Rhode Island Whale',
    itemSubname: 'postcard',
    itemImageFront: 'public/images/items/postcard_rhode_island_whale.png',
    itemInfoOne: itemInfoUniversals.postcardInfoOne,
    itemInfoTwo: itemInfoUniversals.postcardInfoTwo,
    itemInfoThree: `Caption on the back: "The North Atlantic humpback whale swims in waters off Rhode Island and can grow to 50 feet in length."`,
    itemPrice: itemInfoUniversals.postcardPrice,
    itemId: 'WZXP99EBYSU5A'
  },
  'printFunktionslust': {
    mainContent: item.itemPage,
    itemCategory: 'print',
    itemName: 'Funktionslust for All of Us<br><span class="normal">by Alec Thibodeau</span>',
    itemSubname: '',
    itemImageFront: 'public/images/items/print_funktionslust_01.jpg',
    itemInfoOne: '5.75 x 5.75 inches<br>Screen print',
    itemInfoTwo: 'Printed by the artist',
    itemInfoThree: 'From a limited edition of 50 prints<br>Hand numbered and signed by the artist',
    itemInfoFour: 'Unframed',
    itemPrice: itemInfoUniversals.printPrice,
    itemId: 'VARZ4F5RHAP9Y'
  },
  'printStentorian': {
    mainContent: item.itemPage,
    itemCategory: 'print',
    itemName: 'Stentorian<br><span class="normal">by Alec Thibodeau</span>',
    itemSubname: '',
    itemImageFront: 'public/images/items/print_stentorian_01.jpg',
    itemInfoOne: '5.5 x 5.5 inches<br>Letterpress print',
    itemInfoTwo: 'Printed by DWRI Letterpress',
    itemInfoThree: 'From a limited edition of 250 prints<br>Hand numbered and signed by the artist',
    itemInfoFour: 'Unframed',
    itemPrice: itemInfoUniversals.printPrice,
    itemId: 'AUN3U4NQ52J2W'
  }
};

export default {
  itemsInfo
};
