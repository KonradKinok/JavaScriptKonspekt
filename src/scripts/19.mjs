'use strict';
import * as mainMethods from './functions.mjs';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
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
