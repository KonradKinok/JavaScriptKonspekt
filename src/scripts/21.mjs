'use strict';
//Import
import * as mainMethods from './functions.mjs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';
const optionsNotify = {
  timeout: 4000,
};

//section1 article2
const btn_s1a2 = document.querySelector('button#btn-s1a2');
const postsList_s1a2 = document.querySelector('ul#user-list-s1a2');

btn_s1a2.addEventListener('click', ev => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
      renderPosts_s1a2(posts);
    })
    .catch(error => Notify.failure(`${error}`, optionsNotify));
});

function renderPosts_s1a2(posts) {
  postsList_s1a2.innerHTML = null;
  const markup = posts
    .map(({ id, title, body, userId }, index) => {
      return `<li >
          <h2 class="post-title">${index + 1}. ${title.slice(0, 30)}</h2>
          <p><b>Post id</b>: ${id}</p>
          <p><b>Author id</b>: ${userId}</p>
          <p>${body}</p>
        </li>`;
    })
    .join('');
  postsList_s1a2.innerHTML = markup;
}

//section1 article3
//section1 articule3
mainMethods.htmlTagViewExample(
  'div#example-theory-s1a3',
  'div#example-practice-s1a3'
);

const form_s1a3 = document.querySelector('form#form-s1a3');
const postsList_s1a3 = document.querySelector('ul#user-list-s1a3');

function getOptionsToUrl(author, body) {
  const postToAdd = {
    author,
    body,
  };

  const options = {
    method: 'POST',
    body: JSON.stringify(postToAdd),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };
  return options;
}

form_s1a3.addEventListener('submit', event => {
  event.preventDefault();
  const {
    elements: { input_author_s1a3, input_body_s1a3 },
  } = event.currentTarget;
  console.log(input_author_s1a3.value, input_body_s1a3.value);
  const options = getOptionsToUrl(
    input_author_s1a3.value,
    input_body_s1a3.value
  );
  fetch('https://jsonplaceholder.typicode.com/posts', options)
    .then(response => response.json())
    .then(post => {
      console.log(post);
      renderPosts_s1a3(post);
    })
    .catch(error => Notify.failure(`${error}`, optionsNotify));
});

function renderPosts_s1a3(postAdd) {
  const { author, body, id } = postAdd;
  const markup = `<li >
          <p><b>Method POST:</b></p>
          <p><b>Post author</b>: ${author}</p>
          <p><b>Post body</b>: ${body}</p>
          <p><b>Author id</b>: ${id}</p>
        </li>`;
  postsList_s1a3.innerHTML = markup;
}
