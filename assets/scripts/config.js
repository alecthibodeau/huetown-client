'use strict'

/* config is primarily a catalog of info for each item */

/* nav pages */
import home from './pages/home.js';
import lunarCalendars from './pages/lunar-calendars.js';
import prints from './pages/prints.js';
import postcards from './pages/postcards.js';
import about from './pages/about.js';

/* item page */
import item from './pages/item-page.js';

/* routes */
const imagesDirectory = 'public/images/';
const itemsDirectory = `${imagesDirectory}items/`;

/* constants */
const byAlecThibodeau = 'by Alec Thibodeau';
const categoryLunarCalendar = 'lunar-calendar';
const categoryPostcard = 'postcard';
const categoryPrint = 'print';
const creditLetterpressPrint = 'Letterpress print';
const creditScreenPrint = 'Screen print, printed by the artist';
const dimensionsFiveAndAHalfInches = '5.5 x 5.5 inches';
const lunarCalendarLocationProvidence = 'The calendar is designed and printed in Providence, Rhode Island, which is identified as a representative location within the artwork.';
const lunarCalendarLocationNewYork = 'New York City is identified as a representative location within the artwork.';
const moreInfo = `<a class="text-link" href="#itemDetails">(more info)</a>`;
const orderNow = `<a class="text-link" href="#featureImage">Order now.</a>`;
const printEdition = 'Numbered and signed';
const shipsFlat = 'Ships flat';

const itemInfoUniversals = {
  drawingInfoOriginalDrawing: `original drawing`,
  drawingInfoPenAndInk: 'pen and ink on Bristol board',
  drawingInfoThreeAndQuarterInches: '3.25 x 3.25 inches',
  drawingInfoSignedOnBack: 'signed on the back',
  drawingPrice: 55,
  lunarCalendarItemName: `
    <span class="lunar-calendar-title"></span><br>
    <span id="itemPreorder" class="item-preorder">preorder</span> <span class="lunar-calendar-year normal"></span> <span class="normal">lunar calendar</span>
  `,
  lunarCalendarItemSubname: byAlecThibodeau,
  lunarCalendarPrice: 45,
  lunarCalendarInfoOne: '19 x 11.75 inches',
  lunarCalendarInfoTwo: creditLetterpressPrint,
  lunarCalendarInfoThree: `${printEdition} ${moreInfo}`,
  lunarCalendarInfoFour: '<span class="bold">Ships flat</span>: unrolled in a clear sleeve inside a flat, sturdy box',
  lunarCalendarBlocks: `
    <div class=info-block>
      <span class="lunar-calendar-title ital"></span> is a letterpress-printed lunar calendar designed and drawn by Alec Thibodeau (me!),
      chronicling all phases of the moon for <span class="lunar-calendar-year"></span>.
      From an edition of <span class="print-edition"></span> prints <span class="lunar-calendar-title ital"></span> continues Alec's ongoing lunar calendar series,
      which features ornate illustrations framing an annual cycle of moon shapes.
      As with each of Alec's previous lunar calendars this piece measures 19" x 11.75" (a golden rectangle) and is expertly printed by Dan Wood
      and his team at <a class="text-link" href="https://www.dwriletterpress.net" target="_blank">DWRI&nbsp;Letterpress</a>.
    </div>
    <div class=info-block>
      The <span class="lunar-calendar-year"></span> lunar calendar comprises new drawings and year-specific lunar phase information.
      Each calendar is printed on <span class="lunar-calendar-paper-info"></span>, blind-debossed with Alec's name and the print shop's name &mdash; and hand numbered and signed by Alec. Each calendar ships unrolled with an accompanying information sheet in a clear sleeve sheet inside a flat, sturdy box.
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
    mainContent: `
    <div class="veganly-page">
      Veganly is a new line of items at Huetown. More details soon!
    </div>
  `
  },
  'lunarCalendarTwentyThreePreorder': {
    mainContent: item.itemPage,
    itemCategory: categoryLunarCalendar,
    itemLunarCalendarTitle: 'Thoughts Operator',
    itemLunarCalendarYear: '2023',
    itemPrintEdition: 500,
    itemLunarCalendarPaperInfo: 'Gmund Papers acid-free 300gsm Cyan 111# cover paper',
    itemName: itemInfoUniversals.lunarCalendarItemName,
    itemSubname: itemInfoUniversals.lunarCalendarItemSubname,
    itemImageFront: `${itemsDirectory}/_preorders/thibodeau_lunar_calendar_2023_preorder_image_700px.jpg`,
    itemInfoOne: itemInfoUniversals.lunarCalendarInfoOne,
    itemInfoTwo: itemInfoUniversals.lunarCalendarInfoTwo,
    itemInfoThree: itemInfoUniversals.lunarCalendarInfoThree,
    itemInfoFour: itemInfoUniversals.lunarCalendarInfoFour,
    itemPrice: itemInfoUniversals.lunarCalendarPrice,
    itemLunarCalendarLocation: lunarCalendarLocationProvidence,
    itemId: 'T7N3SSMG5E3ZY',
    itemMoreInfo: `
    <div id="itemDetails">
      <p>
        <span class="bold">Preorder 2023 Lunar Calendar:</span>
        Okay, my lunar calendar for 2023 is currently in production at the print shop &mdash; with Dan making the letterpress magic happen for another edition.
        Preorders placed now will ship by early December 2022.
        Huetown's domestic shipping charge in the USA is a flat $8 rate to any address, regardless of item quantity, via USPS Priority.
      </p>
      <p>
        <span class="bold">Important:</span> The above lunar calendar image is a digital-color simulation of what the final piece's inks and paper will look like. There may be some slight variations between the colors here and in the print.
      </p>
      <p>
        Follow <a class="text-link" href="https://www.instagram.com/huetown/" target="_blank">@huetown</a> on Instagram to see this print's letterpress production in action.
        And join the <a class="text-link" href="about.html">email list</a> to learn when other works are available.
      </p>
      <p>
        Each lunar calendar preordered by November 25th, 2022 included a <span class="ital">Space Pony</span> letterpress print:
      </p>
    </div>
    <div class="additional-info">
      <div id="spacePony" class="item-accompanying">
        <img src="${itemsDirectory}/_preorders/space_pony_300px.jpg" />
        <div>
          <span class="ital">Space Pony</span> <span>print</span>
        </div>
      </div>
    </div>
    <div>
      <p>
        <span class="bold">Event:</span> Catch Huetown at the <a class="text-link" href="https://www.rivegfest.com">2023 Rhode Island VegFest</a> on February 4th and 5th in Providence, Rhode Island.
      </p>
    </div>
    <div>
      Here's more info on the ultimate piece&hellip;
    </div>
    ${itemInfoUniversals.lunarCalendarBlocks}
  `
  },
  'lunarCalendarTwentyThree': {
    mainContent: item.itemPage,
    itemCategory: categoryLunarCalendar,
    itemLunarCalendarTitle: 'Thoughts Operator',
    itemLunarCalendarYear: '2023',
    itemPrintEdition: 500,
    itemLunarCalendarPaperInfo: 'Gmund Papers acid-free 300gsm Cyan 111# cover paper',
    itemName: itemInfoUniversals.lunarCalendarItemName,
    itemSubname: itemInfoUniversals.lunarCalendarItemSubname,
    itemImageFront: `${itemsDirectory}thibodeau_lunar_calendar_2023_photo_main_1000px.jpg`,
    itemInfoOne: itemInfoUniversals.lunarCalendarInfoOne,
    itemInfoTwo: itemInfoUniversals.lunarCalendarInfoTwo,
    itemInfoThree: itemInfoUniversals.lunarCalendarInfoThree,
    itemInfoFour: itemInfoUniversals.lunarCalendarInfoFour,
    itemPrice: itemInfoUniversals.lunarCalendarPrice,
    itemLunarCalendarLocation: lunarCalendarLocationProvidence,
    itemId: '5QXP4DDGN7P2J',
    itemPress: `
        <span class="ital">
          Ornate renderings of natural life frame the elegant letterpress print, which expertly melds artful illustration with timely information.
        </span>
        <span>&mdash;
          <a class="text-link" href="https://www.thisiscolossal.com/2022/12/calendars-2023">
            <img src="${imagesDirectory}/colossal-logo-small.jpg" alt="Colossal logo" />
          </a>
        </span>
    `,
    itemMorePhotoPairOne: `
      <img class="large-detail-image" src="${itemsDirectory}thibodeau_lunar_calendar_2023_photo_01_700px.jpg" alt="Lunar Calendar 2022 detail #1" />
      <img class="large-detail-image" src="${itemsDirectory}thibodeau_lunar_calendar_2023_photo_03_700px.jpg" alt="Lunar Calendar 2022 detail #3" />
    `,
    itemMorePhotoPairTwo: `
      <img class="large-detail-image" src="${itemsDirectory}thibodeau_lunar_calendar_2023_photo_05_700px.jpg" alt="Lunar Calendar 2023 detail #5" />
      <img class="large-detail-image" src="${itemsDirectory}thibodeau_lunar_calendar_2023_photo_07_700px.jpg" alt="Lunar Calendar 2023 detail #7" />
    `,
    itemMorePhotoPairThree: `
      <img class="large-detail-image" src="${itemsDirectory}thibodeau_lunar_calendar_2023_photo_04_700px.jpg" alt="Lunar Calendar 2023 detail #4" />
      <img class="large-detail-image" src="${itemsDirectory}thibodeau_lunar_calendar_2023_photo_06_700px.jpg" alt="Lunar Calendar 2023 detail #6" />
    `,
    itemMorePhotoPairFour: `
      <img class="large-detail-image" src="${itemsDirectory}thibodeau_lunar_calendar_2023_photo_02_700px.jpg" alt="Lunar Calendar 2022 detail #2" />
      <img id="itemDetails" class="large-detail-image" src="${itemsDirectory}thibodeau_lunar_calendar_2023_photo_08_700px.jpg" alt="Lunar Calendar 2022 detail #8" />
    `,
    itemMoreInfo: `
    ${itemInfoUniversals.lunarCalendarBlocks}
    <div>
      <p>
        Follow <a class="text-link" href="https://www.instagram.com/huetown/" target="_blank">@huetown</a> on Instagram to see this print's letterpress production in action.
        And join the <a class="text-link" href="about.html">email list</a> to learn when other works are available.
      </p>
      <p>
        <span class="bold">Event:</span> Catch Huetown at the <a class="text-link" href="https://www.rivegfest.com">2023 Rhode Island VegFest</a> on February 4th and 5th in Providence, Rhode Island.
      </p>
      <p>
        Each lunar calendar preordered by November 25th, 2022 included a <span class="ital">Space Pony</span> letterpress print:
      </p>
    </div>
    <div class="additional-info">
      <div id="spacePony" class="item-accompanying">
        <img src="${itemsDirectory}/_preorders/space_pony_300px.jpg" />
      </div>
    </div>
  `
  },
  'lunarCalendarTwentyTwo': {
    mainContent: item.itemPage,
    itemCategory: categoryLunarCalendar,
    itemLunarCalendarTitle: 'Entrancer\'s Medallion',
    itemLunarCalendarYear: '2022',
    itemPrintEdition: 500,
    itemLunarCalendarPaperInfo: 'Arjowiggins Creative Papers (distributed by Mohawk) acid-free 300gsm Keaykolour Coral 111# cover paper',
    itemName: itemInfoUniversals.lunarCalendarItemName,
    itemSubname: itemInfoUniversals.lunarCalendarItemSubname,
    itemImageFront: `${itemsDirectory}thibodeau_lunar_calendar_2022_photo_main_1000px.jpg`,
    itemInfoOne: itemInfoUniversals.lunarCalendarInfoOne,
    itemInfoTwo: itemInfoUniversals.lunarCalendarInfoTwo,
    itemInfoThree: itemInfoUniversals.lunarCalendarInfoThree,
    itemInfoFour: itemInfoUniversals.lunarCalendarInfoFour,
    itemPrice: itemInfoUniversals.lunarCalendarPrice,
    itemLunarCalendarLocation: lunarCalendarLocationProvidence,
    itemId: '5VWNHRMJQCE7A',
    itemMorePhotoPairOne: `
      <img class="large-detail-image" src="${itemsDirectory}thibodeau_lunar_calendar_2022_photo_01_700px.jpg" alt="Lunar Calendar 2022 detail #1" />
      <img class="large-detail-image" src="${itemsDirectory}thibodeau_lunar_calendar_2022_photo_02_700px.jpg" alt="Lunar Calendar 2022 detail #2" />
    `,
    itemMorePhotoPairTwo: `
      <img class="large-detail-image" src="${itemsDirectory}thibodeau_lunar_calendar_2022_photo_03_700px.jpg" alt="Lunar Calendar 2022 detail #3" />
      <img class="large-detail-image" src="${itemsDirectory}thibodeau_lunar_calendar_2022_photo_04_700px.jpg" alt="Lunar Calendar 2022 detail #4" />
    `,
    itemMorePhotoPairThree: `
      <img class="large-detail-image" src="${itemsDirectory}thibodeau_lunar_calendar_2022_photo_05_700px.jpg" alt="Lunar Calendar 2022 detail #5" />
      <img class="large-detail-image" src="${itemsDirectory}thibodeau_lunar_calendar_2022_photo_06_700px.jpg" alt="Lunar Calendar 2022 detail #6" />
    `,
    itemMorePhotoPairFour: `
      <img class="large-detail-image" src="${itemsDirectory}thibodeau_lunar_calendar_2022_photo_07_700px.jpg" alt="Lunar Calendar 2022 detail #7" />
      <img id="itemDetails" class="large-detail-image" src="${itemsDirectory}thibodeau_lunar_calendar_2022_photo_08_700px.jpg" alt="Lunar Calendar 2022 detail #8" />
    `,
    itemMoreInfo: `
      ${itemInfoUniversals.lunarCalendarBlocks}
      <div id="localPickUp" class="additional-info">
        <div>
          Each 2022 lunar calendar preordered by November 26, 2021 included a
            <span class="ital">
              <a class="text-link" href="print-proton-swan.html">Proton Swan</a>
            </span>
          print:
        </div>
        <div class="item-accompanying">
          <a href="print-proton-swan.html">
            <img src="${itemsDirectory}/_preorders/proton_swan_300px.jpg" />
          </a>
        </div>
      </div>
    `
  },
  'lunarCalendarTwentyOne': {
    mainContent: item.itemPage,
    itemCategory: categoryLunarCalendar,
    itemLunarCalendarTitle: 'Casting Levels',
    itemLunarCalendarYear: '2021',
    itemPrintEdition: 500,
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
      <img class="large-detail-image" src="${itemsDirectory}thibodeau_lunar_calendar_2021_photo_01_1000px.jpg" alt="Lunar Calendar 2021 detail #1" />
      <img class="large-detail-image" src="${itemsDirectory}thibodeau_lunar_calendar_2021_photo_02_1000px.jpg" alt="Lunar Calendar 2021 detail #2" />
    `,
    itemMorePhotoPairTwo: `
      <img class="large-detail-image" src="${itemsDirectory}thibodeau_lunar_calendar_2021_photo_03_1000px.jpg" alt="Lunar Calendar 2021 detail #3" />
      <img class="large-detail-image" src="${itemsDirectory}thibodeau_lunar_calendar_2021_photo_04_1000px.jpg" alt="Lunar Calendar 2021 detail #4" />
    `,
    itemMorePhotoPairThree: `
      <img class="large-detail-image" src="${itemsDirectory}thibodeau_lunar_calendar_2021_photo_05_1000px.jpg" alt="Lunar Calendar 2021 detail #5" />
      <img id="itemDetails" class="large-detail-image" src="${itemsDirectory}thibodeau_lunar_calendar_2021_photo_09_1000px.jpg" alt="Lunar Calendar 2021 detail #6" />
    `,
    itemMoreInfo: `
      ${itemInfoUniversals.lunarCalendarBlocks}
      <div class="additional-info">
        <div>
          Each 2021 lunar calendar preordered in 2020 before the official launch included an
            <span class="ital">
              <a class="text-link" href="print-orca-lumina.html">Orca Lumina</a>
            </span>
          print:
        </div>
        <div class="item-accompanying">
          <a href="print-orca-lumina.html">
            <img src="${itemsDirectory}/_preorders/orca_lumina_300px.jpg" alt=Orca Lumina print" />
          </a>
        </div>
      </div>
    `
  },
  'lunarCalendarTwenty': {
    mainContent: item.itemPage,
    itemCategory: categoryLunarCalendar,
    itemLunarCalendarTitle: 'The Instruments Agree',
    itemLunarCalendarYear: '2020',
    itemPrintEdition: 500,
    itemLunarCalendarPaperInfo: 'Mohawk Fine Papers acid-free 300gsm Keaykolour Caribbean Blue 111# cover paper',
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
      <img src="${itemsDirectory}thibodeau_lunar_calendar_2020_photo_01_1000px.jpg" alt="Lunar Calendar 2020 detail #1" />
      <img src="${itemsDirectory}thibodeau_lunar_calendar_2020_photo_02_1000px.jpg" alt="Lunar Calendar 2020 detail #2" />
    `,
    itemMorePhotoPairTwo: `
      <img src="${itemsDirectory}thibodeau_lunar_calendar_2020_photo_03_1000px.jpg" alt="Lunar Calendar 2020 detail #3" />
      <img src="${itemsDirectory}thibodeau_lunar_calendar_2020_photo_04_1000px.jpg" alt="Lunar Calendar 2020 detail #4" />
    `,
    itemMorePhotoPairThree: `
      <img src="${itemsDirectory}thibodeau_lunar_calendar_2020_photo_07_1000px.jpg" alt="Lunar Calendar 2020 detail #5" />
      <img src="${itemsDirectory}thibodeau_lunar_calendar_2020_photo_08_1000px.jpg" alt="Lunar Calendar 2020 detail #6" />
    `,
    itemMorePhotoPairFour: `
      <img src="${itemsDirectory}thibodeau_lunar_calendar_2020_photo_05_1000px.jpg" alt="Lunar Calendar 2020 detail #7" />
      <img id="itemDetails" src="${itemsDirectory}thibodeau_lunar_calendar_2020_photo_06_1000px.jpg" alt="Lunar Calendar 2020 detail #8" />
    `,
    itemMoreInfo: itemInfoUniversals.lunarCalendarBlocks
  },
  'lunarCalendarNineteen': {
    mainContent: item.itemPage,
    itemCategory: categoryLunarCalendar,
    itemLunarCalendarTitle: 'Orchard Quest',
    itemLunarCalendarYear: '2019',
    itemPrintEdition: 500,
    itemLunarCalendarPaperInfo: 'French Paper Company acid-free 269gsm Pop-Tone Tangy Orange 100# cover paper',
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
      <img src="${itemsDirectory}thibodeau_lunar_calendar_2019_photo_01.jpg" alt="Lunar Calendar 2019 detail #1" />
      <img src="${itemsDirectory}thibodeau_lunar_calendar_2019_photo_02.jpg" alt="Lunar Calendar 2019 detail #2" />
    `,
    itemMorePhotoPairTwo: `
      <img src="${itemsDirectory}thibodeau_lunar_calendar_2019_photo_03.jpg" alt="Lunar Calendar 2019 detail #3" />
      <img src="${itemsDirectory}thibodeau_lunar_calendar_2019_photo_04.jpg" alt="Lunar Calendar 2019 detail #4" />
    `,
    itemMorePhotoPairThree: `
      <img src="${itemsDirectory}thibodeau_lunar_calendar_2019_photo_05.jpg" alt="Lunar Calendar 2019 detail #5" />
      <img src="${itemsDirectory}thibodeau_lunar_calendar_2019_photo_06.jpg" alt="Lunar Calendar 2019 detail #6" />
    `,
    itemMorePhotoPairFour: `
      <img src="${itemsDirectory}thibodeau_lunar_calendar_2019_photo_07.jpg" alt="Lunar Calendar 2019 detail #7" />
      <img id="itemDetails" src="${itemsDirectory}thibodeau_lunar_calendar_2019_photo_08.jpg" alt="Lunar Calendar 2019 detail #8" />
    `,
    itemMoreInfo: itemInfoUniversals.lunarCalendarBlocks
  },
  'lunarCalendarEighteen': {
    mainContent: item.itemPage,
    itemCategory: categoryLunarCalendar,
    itemLunarCalendarTitle: 'Shimmery Circuit',
    itemLunarCalendarYear: '2018',
    itemPrintEdition: 1000,
    itemLunarCalendarPaperInfo: 'French Paper Company acid-free 269gsm Pop-Tone Grape Jelly 100# cover paper',
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
      <img src="${itemsDirectory}thibodeau_lunar_calendar_2018_photo_01.jpg" alt="Lunar Calendar 2018 detail #1" />
      <img src="${itemsDirectory}thibodeau_lunar_calendar_2018_photo_02.jpg" alt="Lunar Calendar 2018 detail #2" />
    `,
    itemMorePhotoPairTwo: `
      <img src="${itemsDirectory}thibodeau_lunar_calendar_2018_photo_03.jpg" alt="Lunar Calendar 2018 detail #3" />
      <img src="${itemsDirectory}thibodeau_lunar_calendar_2018_photo_04.jpg" alt="Lunar Calendar 2018 detail #4" />
    `,
    itemMorePhotoPairThree: `
      <img src="${itemsDirectory}thibodeau_lunar_calendar_2018_photo_05.jpg" alt="Lunar Calendar 2018 detail #5" />
      <img src="${itemsDirectory}thibodeau_lunar_calendar_2018_photo_06.jpg" alt="Lunar Calendar 2018 detail #6" />
    `,
    itemMorePhotoPairFour: `
      <img src="${itemsDirectory}thibodeau_lunar_calendar_2018_photo_07.jpg" alt="Lunar Calendar 2018 detail #7" />
      <img id="itemDetails" src="${itemsDirectory}thibodeau_lunar_calendar_2018_photo_08.jpg" alt="Lunar Calendar 2018 detail #8" />
    `,
    itemMoreInfo: itemInfoUniversals.lunarCalendarBlocks
  },
  'lunarCalendarSeventeen': {
    mainContent: item.itemPage,
    itemCategory: categoryLunarCalendar,
    itemLunarCalendarTitle: 'I Still See the X',
    itemLunarCalendarYear: '2017',
    itemPrintEdition: 1000,
    itemLunarCalendarPaperInfo: 'French Paper Company acid-free 269gsm Pop-Tone Razzle Berry 100# cover paper',
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
      <img src="${itemsDirectory}thibodeau_lunar_calendar_2017_photo_01.jpg" alt="Lunar Calendar 2017 detail #1" />
      <img src="${itemsDirectory}thibodeau_lunar_calendar_2017_photo_02.jpg" alt="Lunar Calendar 2017 detail #2" />
    `,
    itemMorePhotoPairTwo: `
      <img src="${itemsDirectory}thibodeau_lunar_calendar_2017_photo_03.jpg" alt="Lunar Calendar 2017 detail #3" />
      <img src="${itemsDirectory}thibodeau_lunar_calendar_2017_photo_04.jpg" alt="Lunar Calendar 2017 detail #4" />
    `,
    itemMorePhotoPairThree: `
      <img src="${itemsDirectory}thibodeau_lunar_calendar_2017_photo_05.jpg" alt="Lunar Calendar 2017 detail #5" />
      <img id="itemDetails" src="${itemsDirectory}thibodeau_lunar_calendar_2017_photo_06.jpg" alt="Lunar Calendar 2017 detail #6" />
    `,
    itemMoreInfo: itemInfoUniversals.lunarCalendarBlocks
  },
  'postcardAssets': {
    mainContent: item.itemPage,
    itemCategory: categoryPostcard,
    itemName: 'Assets',
    itemSubname: categoryPostcard,
    itemImageFront: `${itemsDirectory}postcard_assets.png`,
    itemInfoOne: itemInfoUniversals.postcardInfoOne,
    itemInfoTwo: itemInfoUniversals.postcardInfoTwo,
    itemInfoThree: itemInfoUniversals.postcardInfoThree,
    itemInfoFour: `Caption on the back: "<span class="ital">Assets</span> (detail) by Alec Thibodeau, 2012, screen print on paper, 24 x 18 inches"`,
    itemPrice: itemInfoUniversals.postcardPrice,
    itemId: '4CL74PH4FSSQ6'
  },
  'postcardCachalot': {
    mainContent: item.itemPage,
    itemCategory: categoryPostcard,
    itemName: 'Cachalot',
    itemSubname: categoryPostcard,
    itemImageFront: `${itemsDirectory}postcard_cachalot.png`,
    itemInfoOne: itemInfoUniversals.postcardInfoOne,
    itemInfoTwo: itemInfoUniversals.postcardInfoTwo,
    itemInfoThree: itemInfoUniversals.postcardInfoThree,
    itemInfoFour: `Caption on the back: "The cachalot, or sperm whale, swims in the open ocean and has the largest brain of any animal."`,
    itemPrice: itemInfoUniversals.postcardPrice,
    itemId: '7H7ZNZJMAM5S4'
  },
  'postcardFlanneryOConnor': {
    mainContent: item.itemPage,
    itemCategory: categoryPostcard,
    itemName: `Flannery O'Connor`,
    itemSubname: categoryPostcard,
    itemImageFront: `${itemsDirectory}postcard_flannery_oconnor.png`,
    itemInfoOne: itemInfoUniversals.postcardInfoOne,
    itemInfoTwo: itemInfoUniversals.postcardInfoTwo,
    itemInfoThree: itemInfoUniversals.postcardInfoThree,
    itemInfoFour: `Caption on the back: "Flannery O'Connor (1925–1964) wrote <span class="ital">Wise Blood</span> and was an accomplished cartoonist."`,
    itemPrice: itemInfoUniversals.postcardPrice,
    itemId: '25LJT9358P2PS'
  },
  'postcardGreatWhiteShark': {
    mainContent: item.itemPage,
    itemCategory: categoryPostcard,
    itemName: 'Great White Shark',
    itemSubname: categoryPostcard,
    itemImageFront: `${itemsDirectory}postcard_great_white_shark.png`,
    itemInfoOne: itemInfoUniversals.postcardInfoOne,
    itemInfoTwo: itemInfoUniversals.postcardInfoTwo,
    itemInfoThree: itemInfoUniversals.postcardInfoThree,
    itemInfoFour: `Caption on the back: "The great white shark inhabits most of the world's oceans and wants to be your friend."`,
    itemPrice: itemInfoUniversals.postcardPrice,
    itemId: 'UP6L2CNKJLSL2'
  },
  'postcardHermanMelville': {
    mainContent: item.itemPage,
    itemCategory: categoryPostcard,
    itemName: 'Herman Melville',
    itemSubname: categoryPostcard,
    itemImageFront: `${itemsDirectory}postcard_herman_melville.png`,
    itemInfoOne: itemInfoUniversals.postcardInfoOne,
    itemInfoTwo: itemInfoUniversals.postcardInfoTwo,
    itemInfoThree: itemInfoUniversals.postcardInfoThree,
    itemInfoFour: `Caption on the back: "Herman Melville (1819–1891) wrote 'Bartleby, the Scrivener' and was a respected customs inspector."`,
    itemPrice: itemInfoUniversals.postcardPrice,
    itemId: 'JL4EHBW8MVKCC'
  },
  'postcardHippopotamus': {
    mainContent: item.itemPage,
    itemCategory: categoryPostcard,
    itemName: 'Hippopotamus',
    itemSubname: categoryPostcard,
    itemImageFront: `${itemsDirectory}postcard_hippopotamus.png`,
    itemInfoOne: itemInfoUniversals.postcardInfoOne,
    itemInfoTwo: itemInfoUniversals.postcardInfoTwo,
    itemInfoThree: itemInfoUniversals.postcardInfoThree,
    itemInfoFour: `Caption on the back: "The hippopotamus has a name which means 'horse of the river' in Ancient Greek."`,
    itemPrice: itemInfoUniversals.postcardPrice,
    itemId: 'T5XS8HXHARZG4'
  },
  'postcardRhodeIslandWhale': {
    mainContent: item.itemPage,
    itemCategory: categoryPostcard,
    itemName: 'Rhode Island Whale',
    itemSubname: categoryPostcard,
    itemImageFront: `${itemsDirectory}postcard_rhode_island_whale.png`,
    itemInfoOne: itemInfoUniversals.postcardInfoOne,
    itemInfoTwo: itemInfoUniversals.postcardInfoTwo,
    itemInfoThree: itemInfoUniversals.postcardInfoThree,
    itemInfoFour: `Caption on the back: "The North Atlantic humpback whale swims in waters off Rhode Island and can grow to 50 feet in length."`,
    itemPrice: itemInfoUniversals.postcardPrice,
    itemId: 'WZXP99EBYSU5A'
  },
  'printAbundance': {
    mainContent: item.itemPage,
    itemTitle: 'abundance',
    itemCategory: categoryPrint,
    itemName: 'Abundance',
    itemSubname: byAlecThibodeau,
    itemPrintEdition: 250,
    itemImageFront: `${itemsDirectory}print_abundance_01.jpg`,
    itemInfoOne: dimensionsFiveAndAHalfInches,
    itemInfoTwo: creditLetterpressPrint,
    itemInfoThree: `${printEdition} ${moreInfo}`,
    itemInfoFour: shipsFlat,
    itemPrice: 25,
    itemId: 'B6SBUBH8JRKV6',
    itemMorePhotoPairOne: `
      <img src="${itemsDirectory}print_abundance_02.jpg" alt="Abundance print detail #1" />
      <img src="${itemsDirectory}print_abundance_03.jpg" alt="Abundance print detail #2" />
    `,
    itemMoreInfo: `
      <div>
        <span class="ital">Abundance</span> is a letterpress print.
        It measures 5.5" x 5.5" overall, with an image dimension of 4" x 4" in three ink colors and a layer of stamped blue foil.
        The edition is exquisitely printed from Alec's original drawings by Dan Wood and his team at
        <a class="text-link" href="https://www.dwriletterpress.net" target="_blank">DWRI&nbsp;Letterpress</a>
        on Legion Paper acid-free 350gsm Colorplan Mist 130# cover stock.
        Each print is hand numbered and signed on the front in pencil by Alec. ${orderNow}
      </div>
    `
  },
  'printFunktionslust': {
    mainContent: item.itemPage,
    itemCategory: categoryPrint,
    itemName: 'Funktionslust for All of Us',
    itemSubname: byAlecThibodeau,
    itemPrintEdition: 50,
    itemImageFront: `${itemsDirectory}print_funktionslust_01.jpg`,
    itemInfoOne: '5.75 x 5.75 inches',
    itemInfoTwo: creditScreenPrint,
    itemInfoThree: printEdition,
    itemInfoFour: shipsFlat,
    itemPrice: 15,
    itemId: 'VARZ4F5RHAP9Y'
  },
  'printOrcaLumina': {
    mainContent: item.itemPage,
    itemCategory: categoryPrint,
    itemName: 'Orca Lumina',
    itemSubname: byAlecThibodeau,
    itemImageFront: `${itemsDirectory}print_orca_lumina.jpg`,
    itemInfoOne: '2.5 x 2.5 inches',
    itemInfoTwo: creditScreenPrint,
    itemInfoThree: 'Initialed by the artist',
    itemInfoFour: shipsFlat,
    itemPrice: 10,
    itemId: '8BY2MK6Y89ZTA'
  },
  'printProtonSwan': {
    mainContent: item.itemPage,
    itemCategory: categoryPrint,
    itemName: 'Proton Swan',
    itemSubname: byAlecThibodeau,
    itemImageFront: `${itemsDirectory}print_proton_swan.jpg`,
    itemInfoOne: '2.5 x 2.5 inches',
    itemInfoTwo: creditLetterpressPrint,
    itemInfoThree: 'Initialed by the artist',
    itemInfoFour: shipsFlat,
    itemPrice: 10,
    itemId: '4SFG8LHK26JZ4'
  },
  'printStentorian': {
    mainContent: item.itemPage,
    itemCategory: categoryPrint,
    itemName: 'Stentorian',
    itemSubname: byAlecThibodeau,
    itemPrintEdition: 250,
    itemImageFront: `${itemsDirectory}print_stentorian_01.jpg`,
    itemInfoOne: dimensionsFiveAndAHalfInches,
    itemInfoTwo: creditLetterpressPrint,
    itemInfoThree: `${printEdition} ${moreInfo}`,
    itemInfoFour: shipsFlat,
    itemPrice: 15,
    itemId: 'AUN3U4NQ52J2W',
    itemMorePhotoPairOne: `
      <img src="${itemsDirectory}print_stentorian_02.jpg" alt="Stentorian print detail #1" />
      <img src="${itemsDirectory}print_stentorian_03.jpg" alt="Stentorian print detail #2" />
    `,
    itemMorePhotoPairTwo: `
      <img src="${itemsDirectory}print_stentorian_04.jpg" alt="Stentorian print detail #3" />
      <img id="itemDetails" src="${itemsDirectory}print_stentorian_05.jpg" alt="Stentorian print detail #4" />
    `,
    itemMoreInfo: `
      <div>
        <span class="ital">Stentorian</span> is a letterpress print.
        It measures 5.5" x 5.5" overall, with an image dimension of 3.5" x 3.5" in two ink colors.
        The edition is exquisitely printed from Alec's original drawings by Dan Wood and his team at
        <a class="text-link" href="https://www.dwriletterpress.net" target="_blank">DWRI&nbsp;Letterpress</a>
        on Legion Paper acid-free 350gsm Colorplan Mist 130# cover stock.
        Each print is hand numbered and signed on the front in pencil by Alec. ${orderNow}
      </div>
    `
  }
};

export default {
  itemsDirectory,
  itemsInfo
};
