'use strict'

import config from './config.js';
import store from './store.js';

/* event handlers for page load */

let isNavDrawerOpen = false;

const addOrRemoveDrawerClasses = (nav, burgerButton, footer, action) => {
  nav.classList[action]('nav-drawer-is-open');
  burgerButton.classList[action]('closing-x');
  footer.classList[action]('hide-icons');
  document.querySelectorAll('.bar').forEach(function (bar) {
    bar.classList[action]('closing-x');
  });
};

const drawerToggle = () => {
  const nav = document.getElementById('nav');
  const burgerButton = document.getElementById('burgerButton');
  const footer = document.getElementById('footer');
  let action;
  !isNavDrawerOpen ? action = 'add' : action = 'remove';
  addOrRemoveDrawerClasses(nav, burgerButton, footer, action);
  isNavDrawerOpen = !isNavDrawerOpen;
};

const closeNavDrawerOnWindowEnlarge = () => {
  void ((window.innerWidth > 650 && isNavDrawerOpen) && drawerToggle());
};

const closeNavDrawerOnOutsideClick = () => {
  void ((window.innerWidth < 651 && isNavDrawerOpen) && drawerToggle());
};

const addEventHandlers = () => {
  document.getElementById('burgerButton').addEventListener('click', drawerToggle);
  window.addEventListener('resize', closeNavDrawerOnWindowEnlarge);
  document.querySelector('.main-element').addEventListener('click', closeNavDrawerOnOutsideClick);
};

/* lunar calendar helpers for loading phase info */

const createAndLoadElement = (step, element, classPrefix, elementType, parent) => {
  const elementName = element;
  element = document.createElement(elementType);
  element.setAttribute('class', `${classPrefix}-${step}`);
  document.querySelector(`.${parent}`).appendChild(element);
  if (elementName === 'phaseImage') {
    element.setAttribute('src', `${config.itemsDirectory}phase_${step.replace('-', '_')}.png`);
  } else if (elementName === 'phaseTextDiv') {
    element.innerHTML = `${step.replace('-', '<br>')}<br>Moon`;
  }
};

const loadLunarPhaseInfo = () => {
  for (const phase of store.lunarPhases) {
    for (const phaseInfo of store.lunarPhaseInfo) {
      createAndLoadElement(
        phase,
        phaseInfo.phaseElement,
        phaseInfo.classPrefix,
        phaseInfo.elementType,
        phaseInfo.parent === 'lunar-phases' ? phaseInfo.parent : `${phaseInfo.parent}-${phase}`
      )
    }
  }
};

export default {
  addEventHandlers,
  loadLunarPhaseInfo
};
