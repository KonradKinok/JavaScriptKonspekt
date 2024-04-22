'use strict';
import * as mainMethods from './functions.mjs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';

const optionsNotify = {
  timeout: 4000,
};

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => console.log(posts))
  .catch(error => console.log(error));
