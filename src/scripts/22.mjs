'use strict';
//Import
import * as mainMethods from './functions.mjs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';
const optionsNotify = {
  timeout: 4000,
};

//section1 articule3
mainMethods.htmlTagViewExample(
  'div#example-theory-s1a3',
  'div#example-practice-s1a3'
);

const form_s1a4 = document.querySelector('form#form-s1a3');
const postsList_s1a4 = document.querySelector('ul#user-list-s1a3');

form_s1a4.addEventListener('submit', event => {
  event.preventDefault();
  const {
    elements: { input_id_s1a4, input_body_s1a4 },
  } = event.currentTarget;
  console.log(input_id_s1a4.value, input_body_s1a4.value);
  const options = getOptionsToUrl_s1a4(
    input_id_s1a4.value,
    input_body_s1a4.value
  );
  fetch(
    `https://jsonplaceholder.typicode.com/posts/${input_id_s1a4.value}`,
    options
  )
    .then(response => response.json())
    .then(post => {
      console.log(post);
      renderPosts_s1a4(post);
    })
    .catch(error => Notify.failure(`${error}`, optionsNotify));
});
