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
