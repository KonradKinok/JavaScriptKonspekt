'use strict';

// section3 Wyszukiwanie elementów
const listWithId = document.querySelector('#menu');
listWithId.style.textTransform = 'uppercase';
listWithId.style.fontSize = '24px';
console.log(listWithId);

const listWithClass = document.querySelector('.menu');
console.log(listWithClass);

const menuItemsByTagName = document.querySelectorAll('li');
console.log(menuItemsByTagName);

const menuItemsByClass = document.querySelectorAll('.menu-item');
console.log(menuItemsByClass);

const firstMenuItem = document.querySelector('.menu-item');
firstMenuItem.style.color = 'tomato';
console.log(firstMenuItem);

// section4 Właściwości i atrybuty
const image = document.querySelector('.image');
console.log(image.src); // https://picsum.photos/id/9/320/240
console.log(image.alt); // A laptop

image.src = 'https://picsum.photos/id/13/640/480';
image.alt = 'River bank';

// section4 Właściwość textContent
const textEl = document.querySelector('.article-text');
console.log(textEl.textContent); // text inside p.article-text

const titleEl = document.querySelector('.article-title');
titleEl.textContent = 'Welcome to Bahamas!';
