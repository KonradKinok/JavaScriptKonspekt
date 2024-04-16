'use strict';
import * as mainMethods from './functions.mjs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const optionsNotify = {
  timeout: 4000,
};

//section3 articule 5
mainMethods.htmlTagViewExample(
  'div#example-theory-s3a5',
  'div#example-practice-s3a5'
);

const fetchUsersBtn = document.querySelector('button#btn-s3a5');
const userList = document.querySelector('ul#user-list-s3a5');

fetchUsersBtn.addEventListener('click', () => {
  fetchUsers()
    .then(users => renderUsers(users))
    .catch(error =>
      Notify.failure(`${error}`, {
        ...optionsNotify,
      })
    );
});

function fetchUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users').then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function renderUsers(users) {
  const markup = users
    .map(user => {
      return `<li>
          <p><b>Name</b>: ${user.name}</p>
          <p><b>Email</b>: ${user.email}</p>
          <p><b>Company</b>: ${user.company.name}</p>
        </li>`;
    })
    .join('');
  userList.insertAdjacentHTML('beforeend', markup);
}

//section3 articule 7
mainMethods.htmlTagViewExample(
  'div#example-theory-s3a7',
  'div#example-practice-s3a7'
);

const fetchUsersBtn_s3a7 = document.querySelector('button#btn-s3a7');
const userList_s3a7 = document.querySelector('ul#user-list-s3a7');

fetchUsersBtn_s3a7.addEventListener('click', () => {
  fetchUsers_s3a7()
    .then(users => renderUsers_s3a7(users))
    .catch(error => onError(error));
});

function onError(error) {
  Notify.failure(`${error}`, optionsNotify);
  console.log(error);
}

function fetchUsers_s3a7() {
  return fetch(
    'https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name'
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function renderUsers_s3a7(users) {
  const markup = users
    .map(user => {
      return `
          <li>
            <p><b>Name</b>: ${user.name}</p>
            <p><b>Email</b>: ${user.email}</p>
            <p><b>Company</b>: ${user.company.name}</p>
          </li>
      `;
    })
    .join('');
  userList_s3a7.insertAdjacentHTML('beforeend', markup);
}

//section3 articule8
mainMethods.htmlTagViewExample(
  'div#example-theory-s3a8',
  'div#example-practice-s3a8'
);

const fetchUsersBtn_s3a8 = document.querySelector('button#btn-s3a8');
const userList_s3a8 = document.querySelector('ul#user-list-s3a8');

fetchUsersBtn_s3a8.addEventListener('click', () => {
  fetchUsers_s3a8()
    .then(users => renderUsers_s3a8(users))
    .catch(error => onError(error));
});

function onError(error) {
  Notify.failure(`${error}`, optionsNotify);
  console.log(error);
}
const searchParams_s3a8 = new URLSearchParams({
  _limit: 5,
  _sort: 'name',
});
const url_s3a8 = `https://jsonplaceholder.typicode.com/users?${searchParams_s3a8}`;
function fetchUsers_s3a8() {
  return fetch(url_s3a8).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function renderUsers_s3a8(users) {
  const markup = users
    .map((user, index) => {
      return `
          <li>
            <p><b>${index + 1} Name</b>: ${user.name}</p>
            <p><b>Email</b>: ${user.email}</p>
            <p><b>Company</b>: ${user.company.name}</p>
          </li>
      `;
    })
    .join('');
  userList_s3a8.insertAdjacentHTML('beforeend', markup);
}
