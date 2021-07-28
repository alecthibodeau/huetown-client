'use strict'

/* config is primarily a catalog of info for each item */

/* nav pages */
import home from './pages/home.js';
import lunarCalendars from './pages/lunar-calendars.js';
import prints from './pages/prints.js';
import postcards from './pages/postcards.js';
import about from './pages/about.js';
import veganly from './pages/veganly.js';

/* item page */
import item from './pages/item-page.js';

/* routes */
const imageDirectory = 'public/images/';
// const drawingsDirectory = `${imageDirectory}home/drawings/`;
const itemsDirectory = `${imageDirectory}items/`;

/* constants */
const limitedEdition = `Hand numbered and signed by the artist in a limited edition of <span class="limited-edition"></span> prints`;
const lunarCalendarLocationProvidence = 'The calendar is designed, drawn and printed in Providence, Rhode Island, which is identified as a representative location within the artwork.';
const lunarCalendarLocationNewYork = 'New York City is identified as a representative location within the artwork.';
const moreInfo = `<a class="text-link" href="#itemDetails">(more info)</a>`;
const shipsFlat = 'Ships flat';
const orderNow = `<a class="text-link" href="#featureImage">ORDER</a>`;

const itemInfoUniversals = {
  drawingInfoOriginalDrawing: `original drawing`,
  drawingInfoPenAndInk: 'pen and ink on Bristol board',
  drawingInfoThreeAndQuarterInches: '3.25 x 3.25 inches',
  drawingInfoSignedOnBack: 'signed on the back',
  drawingPrice: 55,
  lunarCalendarItemName: `
    <span class="lunar-calendar-title"></span><br>
    <span class="lunar-calendar-year normal"></span> <span class="normal">lunar calendar</span>
  `,
  lunarCalendarItemSubname: 'by Alec Thibodeau',
  lunarCalendarPrice: 40,
  lunarCalendarInfoOne: '19 x 11.75 inches',
  lunarCalendarInfoTwo: 'Letterpress print, printed by DWRI Letterpress',
  lunarCalendarInfoThree: `${limitedEdition} ${moreInfo}`,
  lunarCalendarInfoFour: 'Ships rolled and triple-packaged: archival wrap, eco-friendly protective tube and outer shipping container',
  lunarCalendarBlocks: `
    <div class=info-block>
      <span class="lunar-calendar-title ital"></span> is a letterpress-printed lunar calendar designed and drawn by Alec Thibodeau (me!),
      chronicling all phases of the moon for <span class="lunar-calendar-year"></span>.
      From a limited edition of <span class="limited-edition"></span> prints <span class="lunar-calendar-title ital"></span> continues Alec's ongoing lunar calendar series,
      which features ornate illustrations framing an annual cycle of moon shapes.
      As with each of Alec's previous lunar calendars this piece measures 19" x 11.75" (a golden rectangle) and is expertly printed by Dan Wood
      and his team at <a class="text-link" href="https://www.dwriletterpress.net" target="_blank">DWRI&nbsp;Letterpress</a>.
    </div>
    <div class=info-block>
      The <span class="lunar-calendar-year"></span> lunar calendar comprises new drawings and year-specific lunar phase information.
      Each calendar is printed on <span class="lunar-calendar-paper-info"></span>, blind-debossed with Alec's name and the print shop's name &mdash; and hand numbered and signed by Alec. Each calendar ships in archival wrap with an accompanying information sheet inside an eco-friendly fiberboard protective tube (reusable, recycled, recyclable) with crimped ends.
    </div>
    <div class=info-block>
      The calendar's lunar phase chart is calibrated for any location in the Eastern Time Zone and is accurate to within a day for anywhere in the Northern Hemisphere. The chart also matches lunar cycles in the Southern Hemisphere: but with inverted shapes. <span class="lunar-calendar-location"></span>
    </div>
    <div class=info-block>
      Custom moon illustrations portray all principal lunar phases (New Moon, First Quarter Moon, Full Moon and Third Quarter Moon) plus all intermediate crescent and gibbous phases. For months with less than 31 days, drawings of clouds occupy the extra spaces.
      ${orderNow}
    </div>

    <div class="lunar-phases" id="lunarPhases">
      <!-- phases here -->
    </div>

    <div class="protective-tube" id="tube">
      <div class="tube-text">eco-friendly protective tube:</div>
      <img src="${itemsDirectory}protective_tube.png" />
    </div>
  `,
  postcardInfoOne: '6 x 4 inches',
  postcardInfoTwo: 'Mellow, satin finish',
  postcardInfoThree: 'Full-color front / single-color back',
  postcardPrice: 1
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
  'lunarCalendarTwentyOne': {
    mainContent: item.itemPage,
    itemCategory: 'lunar-calendar',
    itemLunarCalendarTitle: 'Casting Levels',
    itemLunarCalendarYear: '2021',
    itemLimitedEdition: 500,
    itemLunarCalendarPaperInfo: 'Arjowiggins Creative Papers (distributed by Mohawk) acid-free 300gsm Keaykolour Kiwi 111# cover paper',
    itemName: itemInfoUniversals.lunarCalendarItemName,
    itemSubname: itemInfoUniversals.lunarCalendarItemSubname,
    itemImageFront: `${itemsDirectory}thibodeau_lunar_calendar_2021_photo_main_1000px.jpg`,
    itemInfoOne: itemInfoUniversals.lunarCalendarInfoOne,
    itemInfoTwo: itemInfoUniversals.lunarCalendarInfoTwo,
    itemInfoThree: itemInfoUniversals.lunarCalendarInfoThree,
    itemInfoFour: itemInfoUniversals.lunarCalendarInfoFour,
    itemPrice: itemInfoUniversals.lunarCalendarPrice,
    itemLunarCalendarLocation: lunarCalendarLocationProvidence,
    itemId: 'XA698W9J6TGEL',
    itemMorePhotoPairOne: `
      <img class="large-detail-image" src="public/images/items/thibodeau_lunar_calendar_2021_photo_01_1000px.jpg" />
      <img class="large-detail-image" src="public/images/items/thibodeau_lunar_calendar_2021_photo_02_1000px.jpg" />
    `,
    itemMorePhotoPairTwo: `
      <img class="large-detail-image" src="public/images/items/thibodeau_lunar_calendar_2021_photo_03_1000px.jpg" />
      <img class="large-detail-image" src="public/images/items/thibodeau_lunar_calendar_2021_photo_04_1000px.jpg" />
    `,
    itemMorePhotoPairThree: `
      <img class="large-detail-image" src="public/images/items/thibodeau_lunar_calendar_2021_photo_05_1000px.jpg" />
      <img id="itemDetails" class="large-detail-image" src="public/images/items/thibodeau_lunar_calendar_2021_photo_09_1000px.jpg" />
    `,
    itemMoreInfo: `
    ${itemInfoUniversals.lunarCalendarBlocks}
    <p class="additional-info">
      Follow <a class="text-link" href="https://www.instagram.com/huetown/" target="_blank">@huetown</a> on Instagram to see this print's magical letterpress production in action.
      And join the <a class="text-link" href="about.html">email list</a> to learn when new print editions are available.
      (Each 2021 lunar calendar preordered by December 4, 2020 included a new <span class="ital"><a class="text-link" href="print-orca-lumina.html">Orca Lumina</a></span> mini-print: drawn, screen printed and initialed by me.)
    </p>
    `
  },
  'lunarCalendarTwenty': {
    mainContent: item.itemPage,
    itemCategory: 'lunar-calendar',
    itemLunarCalendarTitle: 'The Instruments Agree',
    itemLunarCalendarYear: '2020',
    itemLimitedEdition: 500,
    itemLunarCalendarPaperInfo: 'Mohawk Fine Papers\' acid-free 300gsm Keaykolour Caribbean Blue 111# cover paper',
    itemName: itemInfoUniversals.lunarCalendarItemName,
    itemSubname: itemInfoUniversals.lunarCalendarItemSubname,
    itemImageFront: `${itemsDirectory}thibodeau_lunar_calendar_2020_photo_main_1000px.jpg`,
    itemInfoOne: itemInfoUniversals.lunarCalendarInfoOne,
    itemInfoTwo: itemInfoUniversals.lunarCalendarInfoTwo,
    itemInfoThree: itemInfoUniversals.lunarCalendarInfoThree,
    itemInfoFour: itemInfoUniversals.lunarCalendarInfoFour,
    itemPrice: itemInfoUniversals.lunarCalendarPrice,
    itemLunarCalendarLocation: lunarCalendarLocationProvidence,
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
    itemLimitedEdition: 500,
    itemLunarCalendarPaperInfo: 'French Paper Company\'s acid-free 269gsm Pop-Tone Tangy Orange 100# cover paper',
    itemName: itemInfoUniversals.lunarCalendarItemName,
    itemSubname: itemInfoUniversals.lunarCalendarItemSubname,
    itemImageFront: `${itemsDirectory}thibodeau_lunar_calendar_2019_main.jpg`,
    itemInfoOne: itemInfoUniversals.lunarCalendarInfoOne,
    itemInfoTwo: itemInfoUniversals.lunarCalendarInfoTwo,
    itemInfoThree: itemInfoUniversals.lunarCalendarInfoThree,
    itemInfoFour: itemInfoUniversals.lunarCalendarInfoFour,
    itemPrice: itemInfoUniversals.lunarCalendarPrice,
    itemLunarCalendarLocation: lunarCalendarLocationProvidence,
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
    itemLunarCalendarYear: '2018',
    itemLimitedEdition: 1000,
    itemLunarCalendarPaperInfo: 'French Paper Company\'s acid-free 269gsm Pop-Tone Grape Jelly 100# cover paper',
    itemName: itemInfoUniversals.lunarCalendarItemName,
    itemSubname: itemInfoUniversals.lunarCalendarItemSubname,
    itemImageFront: `${itemsDirectory}thibodeau_lunar_calendar_2018_main.jpg`,
    itemInfoOne: itemInfoUniversals.lunarCalendarInfoOne,
    itemInfoTwo: itemInfoUniversals.lunarCalendarInfoTwo,
    itemInfoThree: itemInfoUniversals.lunarCalendarInfoThree,
    itemInfoFour: itemInfoUniversals.lunarCalendarInfoFour,
    itemPrice: itemInfoUniversals.lunarCalendarPrice,
    itemLunarCalendarLocation: lunarCalendarLocationNewYork,
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
    itemLunarCalendarYear: '2017',
    itemLimitedEdition: 1000,
    itemLunarCalendarPaperInfo: 'French Paper Company\'s acid-free 269gsm Pop-Tone Razzle Berry 100# cover paper',
    itemName: itemInfoUniversals.lunarCalendarItemName,
    itemSubname: itemInfoUniversals.lunarCalendarItemSubname,
    itemImageFront: `${itemsDirectory}thibodeau_lunar_calendar_2017_main.jpg`,
    itemInfoOne: itemInfoUniversals.lunarCalendarInfoOne,
    itemInfoTwo: itemInfoUniversals.lunarCalendarInfoTwo,
    itemInfoThree: itemInfoUniversals.lunarCalendarInfoThree,
    itemInfoFour: itemInfoUniversals.lunarCalendarInfoFour,
    itemPrice: itemInfoUniversals.lunarCalendarPrice,
    itemLunarCalendarLocation: lunarCalendarLocationProvidence,
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
    itemInfoThree: itemInfoUniversals.postcardInfoThree,
    itemInfoFour: `Caption on the back: "<span class="ital">Assets</span> (detail) by Alec Thibodeau, 2012, screen print on paper, 24 x 18 inches"`,
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
    itemInfoThree: itemInfoUniversals.postcardInfoThree,
    itemInfoFour: `Caption on the back: "The cachalot, or sperm whale, swims in the open ocean and has the largest brain of any animal."`,
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
    itemInfoThree: itemInfoUniversals.postcardInfoThree,
    itemInfoFour: `Caption on the back: "Flannery O'Connor (1925–1964) wrote <span class="ital">Wise Blood</span> and was an accomplished cartoonist."`,
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
    itemInfoThree: itemInfoUniversals.postcardInfoThree,
    itemInfoFour: `Caption on the back: "The great white shark inhabits most of the world's oceans and wants to be your friend."`,
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
    itemInfoThree: itemInfoUniversals.postcardInfoThree,
    itemInfoFour: `Caption on the back: "Herman Melville (1819–1891) wrote 'Bartleby, the Scrivener' and was a respected customs inspector."`,
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
    itemInfoThree: itemInfoUniversals.postcardInfoThree,
    itemInfoFour: `Caption on the back: "The hippopotamus has a name which means 'horse of the river' in Ancient Greek."`,
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
    itemInfoThree: itemInfoUniversals.postcardInfoThree,
    itemInfoFour: `Caption on the back: "The North Atlantic humpback whale swims in waters off Rhode Island and can grow to 50 feet in length."`,
    itemPrice: itemInfoUniversals.postcardPrice,
    itemId: 'WZXP99EBYSU5A'
  },
  'printFunktionslust': {
    mainContent: item.itemPage,
    itemCategory: 'print',
    itemName: 'Funktionslust for All of Us',
    itemSubname: 'by Alec Thibodeau',
    itemLimitedEdition: 50,
    itemImageFront: 'public/images/items/print_funktionslust_01.jpg',
    itemInfoOne: '5.75 x 5.75 inches',
    itemInfoTwo: 'Screen print, printed by the artist',
    itemInfoThree: limitedEdition,
    itemInfoFour: shipsFlat,
    itemPrice: 15,
    itemId: 'VARZ4F5RHAP9Y'
  },
  'printOrcaLumina': {
    mainContent: item.itemPage,
    itemCategory: 'print',
    itemName: 'Orca Lumina',
    itemSubname: 'by Alec Thibodeau',
    itemImageFront: 'public/images/items/print_orca_lumina.jpg',
    itemInfoOne: '2.5 x 2.5 inches',
    itemInfoTwo: 'Screen print, printed by the artist',
    itemInfoThree: 'Initialed by the artist',
    itemInfoFour: shipsFlat,
    itemPrice: 7,
    itemId: '8BY2MK6Y89ZTA'
  },
  'printStentorian': {
    mainContent: item.itemPage,
    itemCategory: 'print',
    itemName: 'Stentorian',
    itemSubname: 'by Alec Thibodeau',
    itemLimitedEdition: 250,
    itemImageFront: 'public/images/items/print_stentorian_01.jpg',
    itemInfoOne: '5.5 x 5.5 inches',
    itemInfoTwo: 'Letterpress print, printed by DWRI Letterpress',
    itemInfoThree: `${limitedEdition} ${moreInfo}`,
    itemInfoFour: shipsFlat,
    itemPrice: 15,
    itemId: 'AUN3U4NQ52J2W',
    itemMorePhotoPairOne: `
      <img src="public/images/items/print_stentorian_02.jpg" />
      <img src="public/images/items/print_stentorian_03.jpg" />
    `,
    itemMorePhotoPairTwo: `
      <img src="public/images/items/print_stentorian_04.jpg" />
      <img id="itemDetails" src="public/images/items/print_stentorian_05.jpg" />
    `,
    itemMoreInfo: `
      <div>
        <span class="ital">Abundance</span> is a limited-edition letterpress print.
        It measures 5.5" x 5.5" overall, with an image dimension of 3.5" x 3.5" in two colors of ink.
        The edition is exquisitely printed by Dan Wood and his team at
        <a class="text-link" href="https://www.dwriletterpress.net" target="_blank">DWRI&nbsp;Letterpress</a>
        on Legion Paper's acid-free 350gsm Colorplan Mist 130# cover stock.
        Each print is hand numbered and signed in pencil by Alec. ${orderNow}
      </div>
    `
  },
  'printAbundance': {
    mainContent: item.itemPage,
    itemTitle: 'abundance',
    itemCategory: 'print',
    itemName: 'Abundance',
    itemSubname: 'by Alec Thibodeau',
    itemLimitedEdition: 250,
    itemImageFront: 'public/images/items/print_abundance_01.jpg',
    itemInfoOne: '5.5 x 5.5 inches',
    itemInfoTwo: 'Letterpress print, printed by DWRI Letterpress',
    itemInfoThree: `${limitedEdition} ${moreInfo}`,
    itemInfoFour: shipsFlat,
    itemPrice: 25,
    itemId: 'B6SBUBH8JRKV6',
    itemMorePhotoPairOne: `
      <img src="public/images/items/print_abundance_02.jpg" />
      <img src="public/images/items/print_abundance_03.jpg" />
    `,
    itemMorePhotoPairTwo: `
      <img src="public/images/items/print_abundance_04.jpg" />
      <img id="itemDetails" src="public/images/items/print_abundance_05.jpg" />
    `,
    itemMoreInfo: `
      <div>
        <span class="ital">Abundance</span> is a limited-edition letterpress print.
        It measures 5.5" x 5.5" overall, with an image dimension of 4" x 4" in three colors of ink and a layer of stamped blue foil.
        The edition is exquisitely printed by Dan Wood and his team at
        <a class="text-link" href="https://www.dwriletterpress.net" target="_blank">DWRI&nbsp;Letterpress</a>
        on Legion Paper's acid-free 350gsm Colorplan Mist 130# cover stock.
        Each print is hand numbered and signed in pencil by Alec. ${orderNow}
      </div>
    `
  }
};

export default {
  itemsDirectory,
  itemsInfo
};
