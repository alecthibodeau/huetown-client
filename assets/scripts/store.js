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

export default {
  setContent
};
  