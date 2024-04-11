'use strict';
import * as mainMethods from './functions.mjs';

//section2 articule 2
mainMethods.htmlTagViewExample(
  'div#example-theory-s2a2',
  'div#example-practice-s2a2'
);

const exampleResults_s2a2 = document.querySelector('div.example-results-s2a2');
const button_s2a2 = document.querySelector('button.btn-s2a2');
let phrase_s2a2;
const onClick = () => {
  if (!exampleResults_s2a2.querySelector('pre')) {
    phrase_s2a2 = document.createElement('pre');
  }

  const timerId = setTimeout(() => {
    phrase_s2a2.textContent += `I love async JS!\n`;
    exampleResults_s2a2.prepend(phrase_s2a2);
  }, 2000);

  phrase_s2a2.textContent += `timerId: ${timerId}\t`;
  exampleResults_s2a2.prepend(phrase_s2a2);
};

button_s2a2.addEventListener('click', onClick);

//section2 articule 3
mainMethods.htmlTagViewExample(
  'div#example-theory-s2a3',
  'div#example-practice-s2a3'
);

const exampleResults_s2a3 = document.querySelector('div.example-results-s2a3');
const startBtn_s2a3 = document.querySelector('button.js-start-s2a3');
const stopBtn_s2a3 = document.querySelector('button.js-stop-s2a3');
let timerId_s2a3 = null;
let phrase_s2a3;
if (!exampleResults_s2a3.querySelector('pre')) {
  phrase_s2a3 = document.createElement('pre');
}
startBtn_s2a3.addEventListener('click', () => {
  timerId_s2a3 = setInterval(() => {
    phrase_s2a3.textContent += `I love async JS!  ${Math.random()}\n`;
    exampleResults_s2a3.prepend(phrase_s2a3);
  }, 1000);
});

stopBtn_s2a3.addEventListener('click', () => {
  clearInterval(timerId_s2a3);
  phrase_s2a3.textContent += `Interval with id ${timerId_s2a3} has stopped!\n`;
  exampleResults_s2a3.prepend(phrase_s2a3);
});

//section2 article4
const date_s2a4 = new Date();
const containerGetDate_s2a4 = document.querySelector('#container-getDate-s2a4');
containerGetDate_s2a4.children[0].innerText += date_s2a4;
containerGetDate_s2a4.children[1].textContent += date_s2a4.getDate();
containerGetDate_s2a4.children[2].textContent += date_s2a4.getDay();
containerGetDate_s2a4.children[3].textContent += date_s2a4.getMonth();
containerGetDate_s2a4.children[4].textContent += date_s2a4.getFullYear();
containerGetDate_s2a4.children[5].textContent += date_s2a4.getHours();
containerGetDate_s2a4.children[6].textContent += date_s2a4.getMinutes();
containerGetDate_s2a4.children[7].textContent += date_s2a4.getSeconds();
containerGetDate_s2a4.children[8].textContent += date_s2a4.getMilliseconds();

const containergetDateUtc_s2a4 = document.querySelector(
  '#container-getDateUtc-s2a4'
);
containergetDateUtc_s2a4.children[0].innerText += date_s2a4;
containergetDateUtc_s2a4.children[1].textContent += date_s2a4.getUTCDate();
containergetDateUtc_s2a4.children[2].textContent += date_s2a4.getUTCDay();
containergetDateUtc_s2a4.children[3].textContent += date_s2a4.getUTCMonth();
containergetDateUtc_s2a4.children[4].textContent += date_s2a4.getUTCFullYear();
containergetDateUtc_s2a4.children[5].textContent += date_s2a4.getUTCHours();
containergetDateUtc_s2a4.children[6].textContent += date_s2a4.getUTCMinutes();
containergetDateUtc_s2a4.children[7].textContent += date_s2a4.getUTCSeconds();
containergetDateUtc_s2a4.children[8].textContent +=
  date_s2a4.getUTCMilliseconds();

//section2 article5
const containerGetDateUtc_s2a5 = document.querySelector(
  '#container-setDateUtc-s2a5'
);
const date_s2a5 = new Date('March 16, 2030 14:25:00');
containerGetDateUtc_s2a5.children[0].innerText += date_s2a5;
date_s2a5.setMinutes(50);
containerGetDateUtc_s2a5.children[1].textContent += date_s2a5;
date_s2a5.setFullYear(2040, 4, 8);
containerGetDateUtc_s2a5.children[2].textContent += date_s2a5;

//section2 article6
const containerDateFormat_s2a6 = document.querySelector(
  '#container-dateFormat-s2a6'
);
const date_s2a6 = new Date();
containerDateFormat_s2a6.children[0].innerText += date_s2a6;
containerDateFormat_s2a6.children[1].textContent += date_s2a6.toString();
containerDateFormat_s2a6.children[2].textContent += date_s2a6.toTimeString();
containerDateFormat_s2a6.children[3].innerText +=
  date_s2a6.toLocaleTimeString();
containerDateFormat_s2a6.children[4].textContent += date_s2a6.toUTCString();
containerDateFormat_s2a6.children[5].textContent += date_s2a6.toDateString();
containerDateFormat_s2a6.children[6].textContent += date_s2a6.toISOString();
containerDateFormat_s2a6.children[7].textContent += date_s2a6.toLocaleString();
containerDateFormat_s2a6.children[8].textContent += date_s2a6.getTime();
