'use strict';

//Konspekt
//section1article1
const parent = document.querySelector('#section2-parent');
const child = document.querySelector('#section2-child');
const descendant = document.querySelector('#section2-descendant');

let parentCount = 0;
let childCount = 0;
let descendantCount = 0;

parent.addEventListener('click', () => {
  parentCount++;
  parent.firstChild.textContent = `PARENT kliknięcie ${parentCount}`;
});

child.addEventListener('click', () => {
  childCount++;
  child.firstChild.textContent = `CHILD kliknięcie ${childCount}`;
});

descendant.addEventListener('click', () => {
  descendantCount++;
  descendant.firstChild.textContent = `DESCENDANT kliknięcie ${descendantCount}`;
});

//section1article2
const parent_s1a2 = document.querySelector('#section2a2-parent');
const list_s1a2 = document.querySelector('#section2a2-list');
parent_s1a2.addEventListener('click', event => {
  const eventTargetlistItem = document.createElement('li');
  eventTargetlistItem.classList.add('item');
  eventTargetlistItem.textContent = `event.target: ${event.target.firstChild.textContent} 
    event.currentTarget: ${event.currentTarget.firstChild.textContent}`;
  list_s1a2.append(eventTargetlistItem);
});

//section1article3
const parent_s2a3 = document.querySelector('#section2a3-parent');
const child_s2a3 = document.querySelector('#section2a3-child');
const descendant_s2a3 = document.querySelector('#section2a3-descendant');

parent_s2a3.addEventListener('click', () => {
  alert(
    'Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!'
  );
});

child_s2a3.addEventListener('click', () => {
  alert(
    'Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!'
  );
});

descendant_s2a3.addEventListener('click', event => {
  event.stopPropagation();
  alert('Descendant click handler');
});

//section1article5
const colorPalette = document.querySelector('.color-palette-s2a5');
const output = document.querySelector('.output-s2a5');

colorPalette.addEventListener('click', selectColor);

// This is where delegation «magic» happens
function selectColor(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const selectedColor = event.target.dataset.color;
  output.textContent = `Selected color: ${selectedColor}`;
  output.style.color = selectedColor;
}

// Some helper functions to render palette items
createPaletteItems();

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < 60; i++) {
    const color = getRandomHexColor();
    const item = document.createElement('button');
    item.type = 'button';
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.classList.add('item-s2a5');
    items.push(item);
  }
  colorPalette.append(...items);
}

function getRandomHexColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}
