'use strict';
import * as mainMethods from './functions.mjs';
// let year = 2024;
// console.log(`Rok przed zmianą: ${year}`);
// year = 2020;
// console.log(`Rok po zmianie: ${year}`);

// const birthYear = 1999;
// console.log(`Rok przed zmianą: ${birthYear}`);
// birthYear = 2003;
// console.log(`Rok po zmianie: ${birthYear}`);

// Właściwość dla ciągu znaków "JavaScript is fun!" przechowująca jego długość
// console.log("JavaScript is fun!".length);

// number
// const theVariable = 1;
// const theOtherVariable = 1.45;

// string
// const DEFAULT_THEME = "light";

// boolean
// const IS_DEFAULT_THEME_LIGHT = true;

// null
// const currentTheme = null;

// undefined
// const nonExistent = undefined;

// const zero = 0;

// console.log(typeof zero);

// let num = 0;

// console.log(num);

// console.log(10 !== "10");

// console.log(!("5" == 6) || 11 == "10");

// console.log("PrzykłaD".startsWith("Pr"));

// function printManyLines() {
//     console.log("Line 01");
//     console.log("Line 02");
//     console.log("Line 03");
//     console.log("Line 04");
//     console.log("Line 05");
//     console.log("Line 06");
//     console.log("Line 07");
//     console.log("Line 08");
// }

// printManyLines();
// console.log("------przerwa------");
// printManyLines();

//Section20
const pageColors = [
  { name: 'body_backcolor', color: 'rgba(48, 18, 18, 0.5)' },
  { name: 'main_container_top_backcolor', color: 'rgb(59, 21, 21)' },
  { name: 'main_container_bottom_backcolor', color: 'rgb(58, 21, 21)' },
  { name: 'navigation_item_backcolor', color: 'rgb(245, 245, 220)' },
  { name: 'navigation_item_backcolor_hover', color: 'rgba(109, 14, 233, 1)' },
  { name: 'navigation_item_forecolor', color: 'rgb(77, 105, 228)' },
  { name: 'navigation_item_forecolor_hover', color: 'rgb(255, 255, 255)' },
  {
    name: 'navigation_current_page_after_backcolor',
    color: 'rgb(185, 75, 185)',
  },
  { name: 'main_link_forecolor', color: 'rgba(86, 194, 227, 1)' },
  { name: 'main_link_hover_forecolor', color: 'rgba(106, 214, 247, 1)' },
  { name: 'footer_color', color: 'rgba(48, 18, 18, 1)' },
];

const tab = [1, 2, 3, 'jeden', 'dwa', 'trzy'];

console.log('console.log', pageColors);
console.table(pageColors);
console.table(tab);

console.group('User Details');
console.log('name: John Doe');
console.log('job: Software Developer'); // Nested Group
console.group('Address');
console.log('Street: 123 Townsend Street');
console.log('City: San Francisco');
console.log('State: CA');
console.groupEnd();
console.groupEnd();

console.info('console.info');
console.warn('console.warn');
console.error('console.error example');

console.log(
  '%c Auth ',
  'color: white; background-color: #2274A5',
  'Login page rendered'
);
console.log(
  '%c GraphQL ',
  'color: white; background-color: #95B46A',
  'Get user details'
);
console.log(
  '%c Error ',
  'color: white; background-color: #D33F49',
  'Error getting user details'
);

// console.trace() wysyła ślad stosu do konsoli i wyświetla sposób, w jaki kod zakończył się w określonym momencie. Istnieją pewne metody, które chcesz wywołać tylko raz, na przykład usunięcie z bazy danych. Console.trace() można użyć, aby upewnić się, że kod zachowuje się tak, jak tego chcemy.
console.trace();

let i = 0;
console.time('While loop');
while (i < 1000000) {
  i++;
}
console.timeEnd('While loop');
console.time('For loop');
for (i = 0; i < 1000000; i++) {
  // For Loop
}
console.timeEnd('Forz loop');

console.time('Random');
getRandomElement(tab);
console.timeEnd('Random');
function getRandomElement(array) {
  // Generuj losowy indeks od 0 do array.length - 1
  const randomIndex = Math.floor(Math.random() * array.length);
  // Zwróć wybrany element
  return array[randomIndex];
}

// section21
mainMethods.htmlTagViewExample(
  'div#example-theory-s21',
  'div#example-practice-s21'
);
const button_s21 = document.querySelector('button#button-s21');
const postsList_s21 = document.querySelector('ul#user-list-s21');
button_s21.addEventListener('click', ev => {
  const isComing = confirm('Please confirm hotel reservation');
  renderHtml_s21(isComing);
});

function renderHtml_s21(isComing) {
  const markup = `<li >
          <p><b>Method confirm:</b></p>
          <p>isComing: ${isComing}</p>
        </li>`;
  postsList_s21.innerHTML = markup;
}

// section21
mainMethods.htmlTagViewExample(
  'div#example-theory-s21a',
  'div#example-practice-s21a'
);
const button_s21a = document.querySelector('button#button-s21a');
const postsList_s21a = document.querySelector('ul#user-list-s21a');
button_s21a.addEventListener('click', ev => {
  const value = prompt('Please enter a number! Przykładowy text');
  renderHtml_s21a(value);
});

function renderHtml_s21a(value) {
  const markup = `<li >
          <p><b>Method prompt:</b></p>
          <p>typeof value: ${typeof value}</p>
          <p>value: ${value}</p>
        </li>`;
  postsList_s21a.innerHTML = markup;
}
