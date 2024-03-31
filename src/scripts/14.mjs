'use strict';
import * as mainMethods from './functions.mjs';

//section1 articule 1
mainMethods.htmlTagViewExample(
  'div#example-theory-s1a1',
  'div#example-practice-s1a1'
);

const output = document.querySelector('.output-s1a1');
let scrollEventCounter = 0;

document.addEventListener('scroll', event => {
  scrollEventCounter += 1;
  output.textContent = scrollEventCounter;
});

const result = _.add(2, 3);
console.log(result); // 5

//section1 articule3
mainMethods.htmlTagViewExample(
  'div#example-theory-s1a3',
  'div#example-practice-s1a3'
);

const vanillaOutput = document.querySelector('.output-s1a3.vanilla-s1a3');
const throttledOutput = document.querySelector('.output-s1a3.throttled-s1a3');
const eventCounter = {
  vanilla: 0,
  throttled: 0,
};

document.addEventListener('scroll', () => {
  eventCounter.vanilla += 1;
  vanillaOutput.textContent = eventCounter.vanilla;
});

document.addEventListener(
  'scroll',
  _.throttle(() => {
    eventCounter.throttled += 1;
    throttledOutput.textContent = eventCounter.throttled;
  }, 300)
);

//section1 article4
mainMethods.htmlTagViewExample(
  'div#example-theory-s1a4',
  'div#example-practice-s1a4'
);

const vanillaOutput_s1a4 = document.querySelector('.output-s1a4.vanilla-s1a4');
const throttledOutput_s1a4 = document.querySelector(
  '.output-s1a4.throttled-s1a4'
);
const debouncedOutput_s1a4 = document.querySelector(
  '.output-s1a4.debounced-s1a4'
);
const eventCounter_s1a4 = {
  vanilla: 0,
  throttled: 0,
  debounced: 0,
};

document.addEventListener('scroll', () => {
  eventCounter_s1a4.vanilla += 1;
  vanillaOutput_s1a4.textContent = eventCounter.vanilla;
});

document.addEventListener(
  'scroll',
  _.throttle(() => {
    eventCounter_s1a4.throttled += 1;
    throttledOutput_s1a4.textContent = eventCounter_s1a4.throttled;
  }, 300)
);

document.addEventListener(
  'scroll',
  _.debounce(() => {
    eventCounter_s1a4.debounced += 1;
    debouncedOutput_s1a4.textContent = eventCounter_s1a4.debounced;
  }, 300)
);

//section1 article5
mainMethods.htmlTagViewExample(
  'div#example-theory-s1a5',
  'div#example-practice-s1a5'
);

const vanillaOutput_s1a5 = document.querySelector('.output-s1a5.vanilla-s1a5');
const throttledOutput_s1a5 = document.querySelector(
  '.output-s1a5.throttled-s1a5'
);
const trailingOutput_s1a5 = document.querySelector(
  '.output-s1a5.trailing-s1a5'
);
const leadingOutput_s1a5 = document.querySelector('.output-s1a5.leading-s1a5');
const eventCounter_s1a5 = {
  vanilla: 0,
  throttled: 0,
  trailing: 0,
  leading: 0,
};

// Trailing debounce
document.addEventListener(
  'scroll',
  _.debounce(() => {
    eventCounter_s1a5.trailing += 1;
    trailingOutput_s1a5.textContent = eventCounter_s1a5.trailing;
  }, 300)
);

// Leading debounce
document.addEventListener(
  'scroll',
  _.debounce(
    () => {
      eventCounter_s1a5.leading += 1;
      leadingOutput_s1a5.textContent = eventCounter_s1a5.leading;
    },
    300,
    { trailing: false, leading: true }
  )
);

document.addEventListener('scroll', () => {
  eventCounter_s1a5.vanilla += 1;
  vanillaOutput_s1a5.textContent = eventCounter_s1a5.vanilla;
});

document.addEventListener(
  'scroll',
  _.throttle(() => {
    eventCounter_s1a5.throttled += 1;
    throttledOutput_s1a5.textContent = eventCounter_s1a5.throttled;
  }, 300)
);
