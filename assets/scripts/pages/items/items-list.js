'use strict'

const postcardUniversals = {
  postcardInfoOne: '6 x 4 inches; mellow, satin finish',
  postcardInfoTwo: 'Full-color front / single-color back',
  postcardPrice: 1
}

const itemsList = [
  { 
    itemRoute: '/assets',
    itemName: 'Assets',
    itemCategory: 'postcard',
    itemImageFront: 'public/images/items/postcard_assets.png',
    itemInfoOne: postcardUniversals.postcardInfoOne,
    itemInfoTwo: postcardUniversals.postcardInfoTwo,
    itemInfoThree: `Caption on the back: “Assets (detail) by Alec Thibodeau, 2012, screen print on paper, 24 x 18 inches”`,
    itemPrice: postcardUniversals.postcardPrice,
    itemId: '4CL74PH4FSSQ6'
  },
  { 
    itemRoute: '/cachalot',
    itemName: 'Cachalot',
    itemCategory: 'postcard',
    itemImageFront: 'public/images/items/postcard_cachalot.png',
    itemInfoOne: postcardUniversals.postcardInfoOne,
    itemInfoTwo: postcardUniversals.postcardInfoTwo,
    itemInfoThree: `Caption on the back: “The cachalot, or sperm whale, swims in the open ocean and has the largest brain of any animal.”`,
    itemPrice: postcardUniversals.postcardPrice,
    itemId: '7H7ZNZJMAM5S4'
  },
  { 
    itemRoute: '/flannery_oconnor',
    itemName: `Flannery O'Connor`,
    itemCategory: 'postcard',
    itemImageFront: 'public/images/items/postcard_flannery_oconnor.png',
    itemInfoOne: postcardUniversals.postcardInfoOne,
    itemInfoTwo: postcardUniversals.postcardInfoTwo,
    itemInfoThree: `Caption on the back: “Flannery O’Connor (1925–1964) wrote <span class="ital">Wise Blood</span> and was an accomplished cartoonist."`,
    itemPrice: postcardUniversals.postcardPrice,
    itemId: '25LJT9358P2PS'
  },
  { 
    itemRoute: '/herman_melville',
    itemName: 'Herman Melville',
    itemCategory: 'postcard',
    itemImageFront: 'public/images/items/postcard_herman_melville.png',
    itemInfoOne: postcardUniversals.postcardInfoOne,
    itemInfoTwo: postcardUniversals.postcardInfoTwo,
    itemInfoThree: `Caption on the back: “Herman Melville (1819–1891) wrote ‘Bartleby, the Scrivener’ and was a respected customs inspector.”`,
    itemPrice: postcardUniversals.postcardPrice,
    itemId: 'JL4EHBW8MVKCC'
  },
];
  
export default {
  itemsList
};