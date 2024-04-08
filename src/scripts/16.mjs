'use strict';
import * as mainMethods from './functions.mjs';
//section1 articule 8
mainMethods.htmlTagViewExample(
  'div#example-theory-s1a8',
  'div#example-practice-s1a8'
);

const form = document.querySelector('.feedback-form-s1a8');
const localStorageKey = 'goit-example-message';

form.elements.message_s1a8.value = localStorage.getItem(localStorageKey) ?? '';

form.addEventListener('input', evt => {
  localStorage.setItem(localStorageKey, evt.target.value);
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  localStorage.removeItem(localStorageKey);
  form.reset();
});

const mainForm = document.querySelector('form#firstLastName');
const exampleResults = document.querySelector('div.example-results-s1a9');
console.log(exampleResults);
mainForm.addEventListener('click', event => {
  event.preventDefault();
  const localStorageKey = 'settingFirstLastName';
  const allInputs = Array.from(mainForm.querySelectorAll('input'));
  //Add
  if (event.target.dataset.name === 'add') {
    const user = {};

    allInputs.forEach(element => {
      console.log(element.name);
      console.log(element.value);
      const propName = element.name;
      user[propName] = element.value;
      console.log(user);
    });
    mainMethods.save(localStorageKey, user);
    // localStorage.setItem('settings', JSON.stringify(user));
  }
  //Remove
  if (event.target.dataset.name === 'remove') {
    localStorage.removeItem(localStorageKey);
  }
  if (event.target.dataset.name === 'show') {
    const savedSettings = localStorage.getItem(localStorageKey) ?? null;
    const parsedSettings = JSON.parse(savedSettings);
    console.log(parsedSettings);

    const phrase = document.createElement('pre');
    phrase.textContent = `localStorageName: ${localStorageKey}\n`;
    phrase.textContent += `localStorageValue: ${savedSettings}\n`;
    for (const key in parsedSettings) {
      console.log(key);
      console.log(parsedSettings[key]);
      phrase.textContent += `Key: ${key} Value: ${parsedSettings[key]}\n`;
    }
    exampleResults.prepend(phrase);
  }
});
