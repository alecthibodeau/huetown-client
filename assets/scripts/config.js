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
  lunarCalendarPrice: 40,
  lunarCalendarInfoOne: '19 x 11.75 inches<br>Letterpress print',
  lunarCalendarInfoTwo: 'Printed by DWRI Letterpress',
  lunarCalendarInfoThree: 'Hand numbered and signed by the artist in a limited edition of prints',
  lunarCalendarInfoFour: 'Ships rolled and triple-packaged: archival wrapper, inner protective tube and outer shipping container',
  postcardInfoOne: '6 x 4 inches; mellow, satin finish<br>Full-color front / single-color back',
  postcardInfoTwo: '',
  postcardPrice: 1,
  printPrice: 15
}

const pagesInfo = {
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
  'lunarCalendarTwenty': {
    mainContent: item.itemPage,
    itemName: 'The Instruments Agree',
    itemCategory: '2020 lunar calendar by Alec Thibodeau',
    itemImageFront: 'thibodeau_lunar_calendar_2020_main.jpg',
    itemInfoOne: itemInfoUniversals.lunarCalendarInfoOne,
    itemInfoTwo: itemInfoUniversals.lunarCalendarInfoTwo,
    itemInfoThree: 'Hand numbered and signed by the artist in a limited edition of 500 prints',
    itemInfoFour: itemInfoUniversals.lunarCalendarInfoFour,
    itemInfoMore: '',
    itemPrice: itemInfoUniversals.lunarCalendarPrice,
    itemId: 'TGVEUGQD58AX2'
  },
  'lunarCalendarNineteen': {
    mainContent: item.itemPage,
    itemName: 'Orchard Quest',
    itemCategory: '2019 lunar calendar by Alec Thibodeau',
    itemImageFront: 'thibodeau_lunar_calendar_2019_main.jpg',
    itemInfoOne: itemInfoUniversals.lunarCalendarInfoOne,
    itemInfoTwo: itemInfoUniversals.lunarCalendarInfoTwo,
    itemInfoThree: 'Hand numbered and signed by the artist in a limited edition of 500 prints',
    itemInfoFour: itemInfoUniversals.lunarCalendarInfoFour,
    itemPrice: itemInfoUniversals.lunarCalendarPrice,
    itemId: 'T45GH9BL83VQ4'
  },
  'lunarCalendarEighteen': {
    mainContent: item.itemPage,
    itemName: 'Shimmery Circuit',
    itemCategory: '2018 lunar calendar by Alec Thibodeau',
    itemImageFront: 'thibodeau_lunar_calendar_2018_main.jpg',
    itemInfoOne: itemInfoUniversals.lunarCalendarInfoOne,
    itemInfoTwo: itemInfoUniversals.lunarCalendarInfoTwo,
    itemInfoThree: 'Hand numbered and signed by the artist in a limited edition of 1000 prints',
    itemInfoFour: itemInfoUniversals.lunarCalendarInfoFour,
    itemPrice: itemInfoUniversals.lunarCalendarPrice,
    itemId: '4LN49ZLYQLY88'
  },
  'lunarCalendarSeventeen': {
    mainContent: item.itemPage,
    itemName: 'I Still See the X',
    itemCategory: '2017 lunar calendar by Alec Thibodeau',
    itemImageFront: 'thibodeau_lunar_calendar_2017_main.jpg',
    itemInfoOne: itemInfoUniversals.lunarCalendarInfoOne,
    itemInfoTwo: itemInfoUniversals.lunarCalendarInfoTwo,
    itemInfoThree: 'Hand numbered and signed by the artist in a limited edition of 1000 prints',
    itemInfoFour: itemInfoUniversals.lunarCalendarInfoFour,
    itemPrice: itemInfoUniversals.lunarCalendarPrice,
    itemId: 'C4RW9LGDQ8NYL'
  },
  'postcardAssets': {
    mainContent: item.itemPage,
    itemName: 'Assets',
    itemCategory: 'postcard',
    itemImageFront: 'public/images/items/postcard_assets.png',
    itemInfoOne: itemInfoUniversals.postcardInfoOne,
    itemInfoTwo: itemInfoUniversals.postcardInfoTwo,
    itemInfoThree: `Caption on the back: "<span class="ital">Assets</span> (detail) by Alec Thibodeau, 2012, screen print on paper, 24 x 18 inches"`,
    itemPrice: itemInfoUniversals.postcardPrice,
    itemId: '4CL74PH4FSSQ6'
  },
  'postcardCachalot': {
    mainContent: item.itemPage,
    itemName: 'Cachalot',
    itemCategory: 'postcard',
    itemImageFront: 'public/images/items/postcard_cachalot.png',
    itemInfoOne: itemInfoUniversals.postcardInfoOne,
    itemInfoTwo: itemInfoUniversals.postcardInfoTwo,
    itemInfoThree: `Caption on the back: "The cachalot, or sperm whale, swims in the open ocean and has the largest brain of any animal."`,
    itemPrice: itemInfoUniversals.postcardPrice,
    itemId: '7H7ZNZJMAM5S4'
  },
  'postcardFlanneryOConnor': {
    mainContent: item.itemPage,
    itemName: `Flannery O'Connor`,
    itemCategory: 'postcard',
    itemImageFront: 'public/images/items/postcard_flannery_oconnor.png',
    itemInfoOne: itemInfoUniversals.postcardInfoOne,
    itemInfoTwo: itemInfoUniversals.postcardInfoTwo,
    itemInfoThree: `Caption on the back: "Flannery O’Connor (1925–1964) wrote <span class="ital">Wise Blood</span> and was an accomplished cartoonist."`,
    itemPrice: itemInfoUniversals.postcardPrice,
    itemId: '25LJT9358P2PS'
  },
  'postcardGreatWhiteShark': {
    mainContent: item.itemPage,
    itemName: 'Great White Shark',
    itemCategory: 'postcard',
    itemImageFront: 'public/images/items/postcard_great_white_shark.png',
    itemInfoOne: itemInfoUniversals.postcardInfoOne,
    itemInfoTwo: itemInfoUniversals.postcardInfoTwo,
    itemInfoThree: `Caption on the back: "The great white shark inhabits most of the world's oceans and wants to be your friend."`,
    itemPrice: itemInfoUniversals.postcardPrice,
    itemId: 'UP6L2CNKJLSL2'
  },
  'postcardHermanMelville': {
    mainContent: item.itemPage,
    itemName: 'Herman Melville',
    itemCategory: 'postcard',
    itemImageFront: 'public/images/items/postcard_herman_melville.png',
    itemInfoOne: itemInfoUniversals.postcardInfoOne,
    itemInfoTwo: itemInfoUniversals.postcardInfoTwo,
    itemInfoThree: `Caption on the back: "Herman Melville (1819–1891) wrote 'Bartleby, the Scrivener' and was a respected customs inspector."`,
    itemPrice: itemInfoUniversals.postcardPrice,
    itemId: 'JL4EHBW8MVKCC'
  },
  'postcardHippopotamus': {
    mainContent: item.itemPage,
    itemName: 'Hippopotamus',
    itemCategory: 'postcard',
    itemImageFront: 'public/images/items/postcard_hippopotamus.png',
    itemInfoOne: itemInfoUniversals.postcardInfoOne,
    itemInfoTwo: itemInfoUniversals.postcardInfoTwo,
    itemInfoThree: `Caption on the back: "The hippopotamus has a name which means 'horse of the river' in Ancient Greek."`,
    itemPrice: itemInfoUniversals.postcardPrice,
    itemId: 'T5XS8HXHARZG4'
  },
  'postcardRhodeIslandWhale': {
    mainContent: item.itemPage,
    itemName: 'Rhode Island Whale',
    itemCategory: 'postcard',
    itemImageFront: 'public/images/items/postcard_rhode_island_whale.png',
    itemInfoOne: itemInfoUniversals.postcardInfoOne,
    itemInfoTwo: itemInfoUniversals.postcardInfoTwo,
    itemInfoThree: `Caption on the back: "The North Atlantic humpback whale swims in waters off Rhode Island and can grow to 50 feet in length."`,
    itemPrice: itemInfoUniversals.postcardPrice,
    itemId: 'WZXP99EBYSU5A'
  },
  'printFunktionslust': {
    mainContent: item.itemPage,
    itemName: 'Funktionslust for All of Us<br><span class="normal">by Alec Thibodeau</span>',
    itemCategory: '',
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
    itemName: 'Stentorian<br><span class="normal">by Alec Thibodeau</span>',
    itemCategory: '',
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
  pagesInfo
};