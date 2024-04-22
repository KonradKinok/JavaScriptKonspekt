'use strict';
import * as mainMethods from './functions.mjs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';

const optionsNotify = {
  timeout: 4000,
};

//section1 articule2
mainMethods.htmlTagViewExample(
  'div#example-theory-s1a2',
  'div#example-practice-s1a2'
);

const fetchPostsBtn_s1a2 = document.querySelector('button#btn-s1a2');
const postList_s1a2 = document.querySelector('ul#user-list-s1a2');
let inputValue = 0;
fetchPostsBtn_s1a2.addEventListener('click', async () => {
  const input_s1a2 = document.querySelector('input#input-s1a2');
  inputValue = input_s1a2.value;
  try {
    fetchPostsBtn_s1a2.setAttribute('disabled', 'disabled');
    const posts = await fetchPosts_s1a2();
    renderPosts_s1a2(posts);
  } catch (error) {
    Notify.failure(`${error}`, optionsNotify);
  } finally {
    fetchPostsBtn_s1a2.removeAttribute('disabled');
    console.log(`inputValue ${inputValue}`);
  }
});

async function fetchPosts_s1a2() {
  const searchParams_s1a2 = new URLSearchParams({
    _limit: inputValue,
  });
  const url_s1a2 = `https://jsonplaceholder.typicode.com/posts?${searchParams_s1a2}`;
  // Change the number of items in the group here
  const response = await axios.get(url_s1a2);
  console.log(`adres ${url_s1a2}`);
  return response.data;
}

function renderPosts_s1a2(posts) {
  postList_s1a2.innerHTML = null;
  const markup = posts
    .map(({ id, title, body, userId }, index) => {
      return `<li>
          <h2 class="post-title">${index + 1}. ${title.slice(0, 30)}</h2>
          <p><b>Post id</b>: ${id}</p>
          <p><b>Author id</b>: ${userId}</p>
          <p>${body}</p>
        </li>`;
    })
    .join('');
  postList_s1a2.innerHTML = markup;
}

//section1 articule3
mainMethods.htmlTagViewExample(
  'div#example-theory-s1a3',
  'div#example-practice-s1a3'
);

const fetchPostsBtn_s1a3 = document.querySelector('button#btn-s1a3');
const postList_s1a3 = document.querySelector('ul#user-list-s1a3');
let inputValue_s1a3 = 0;
let inputPageValue_s1a3 = 0;
fetchPostsBtn_s1a3.addEventListener('click', async () => {
  const input_s1a3 = document.querySelector('input#input-s1a3');
  const inputPage_s1a3 = document.querySelector('input#input-page-s1a3');
  inputValue_s1a3 = input_s1a3.value;
  inputPageValue_s1a3 = inputPage_s1a3.value;
  try {
    fetchPostsBtn_s1a3.setAttribute('disabled', 'disabled');
    const posts = await fetchPosts_s1a3();
    renderPosts_s1a3(posts);
  } catch (error) {
    Notify.failure(`${error}`, optionsNotify);
  } finally {
    fetchPostsBtn_s1a3.removeAttribute('disabled');
    console.log(`limit Value ${inputValue_s1a3}`);
    console.log(`page Value ${inputPageValue_s1a3}`);
  }
});

async function fetchPosts_s1a3() {
  const searchParams_s1a3 = new URLSearchParams({
    _limit: inputValue_s1a3,
    _page: inputPageValue_s1a3,
  });
  const url_s1a3 = `https://jsonplaceholder.typicode.com/posts?${searchParams_s1a3}`;
  // Change the number of items in the group here
  const response = await axios.get(url_s1a3);
  console.log(`adres ${url_s1a3}`);
  return response.data;
}

function renderPosts_s1a3(posts) {
  postList_s1a3.innerHTML = null;
  const markup = posts
    .map(({ id, title, body, userId }, index) => {
      return `<li>
          <h2 class="post-title">${index + 1}. ${title.slice(0, 30)}</h2>
          <p><b>Post id</b>: ${id}</p>
          <p><b>Author id</b>: ${userId}</p>
          <p>${body}</p>
        </li>`;
    })
    .join('');
  postList_s1a3.innerHTML = markup;
}

//section1 articule4
mainMethods.htmlTagViewExample(
  'div#example-theory-s1a4',
  'div#example-practice-s1a4'
);

const fetchPostsBtn_s1a4 = document.querySelector('button#btn-s1a4');
const postList_s1a4 = document.querySelector('ul#user-list-s1a4');

// Controls the group number
let page_s1a4 = 1;
// Controls the number of items in the group
let perPage_s1a4 = 10;

fetchPostsBtn_s1a4.addEventListener('click', async () => {
  try {
    const posts = await fetchPosts_s1a4();
    renderPosts_s1a4(posts);
    // Increase the group number
    page_s1a4 += 1;

    // Replace button text after first request
    if (page_s1a4 > 1) {
      fetchPostsBtn_s1a4.textContent = 'Fetch more posts';
    }
  } catch (error) {
    Notify.failure(`${error}`, optionsNotify);
  }
});

async function fetchPosts_s1a4() {
  const params = new URLSearchParams({
    _limit: perPage_s1a4,
    _page: page_s1a4,
  });

  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?${params}`
  );
  return response.data;
}

function renderPosts_s1a4(posts) {
  const markup = posts
    .map(({ id, title, body, userId }, index) => {
      return `<li>
          <h2 class="post-title">${index}. ${title.slice(0, 30)}</h2>
          <p><b>Post id</b>: ${id}</p>
          <p><b>Author id</b>: ${userId}</p>
          <p class="post-body">${body}</p>
        </li>`;
    })
    .join('');
  postList_s1a4.insertAdjacentHTML('beforeend', markup);
}
