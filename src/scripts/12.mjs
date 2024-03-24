'use strict';

// section1 article2 Metoda addEventListener()
const singleBtn = document.querySelector('#single');

const handleClick = () => {
  console.log('click event listener callback');
};

singleBtn.addEventListener('click', handleClick);

// ===============================================
const multiBtn = document.querySelector('#multiple');

const firstCallback = () => {
  console.log('First callback!');
};
const secondCallback = () => {
  console.log('Second callback!');
};
const thirdCallback = () => {
  console.log('Third callback!');
};

multiBtn.addEventListener('click', firstCallback);
multiBtn.addEventListener('click', secondCallback);
multiBtn.addEventListener('click', thirdCallback);

// section1 article3 Metoda removeEventListener()
const addListenerBtn = document.querySelector('.js-add');
const removeListenerBtn = document.querySelector('.js-remove');
const btn = document.querySelector('.target-btn');

const handleClick_section1article3 = () => {
  console.log('click event listener callback');
};

addListenerBtn.addEventListener('click', () => {
  btn.addEventListener('click', handleClick_section1article3);
  console.log('click event listener was added to btn');
});

removeListenerBtn.addEventListener('click', () => {
  btn.removeEventListener('click', handleClick_section1article3);
  console.log('click event listener was removed from btn');
});

// section2 article1 Obiekt zdarzenia
const button = document.querySelector('.section2article1-btn');

const handleClickSection2Article1 = event => {
  console.log('event: ', event);
  console.log('event type: ', event.type);
  console.log('currentTarget: ', event.currentTarget);
};

button.addEventListener('click', handleClickSection2Article1);

// section2 article2 Domyślne działania przeglądarki
const form = document.querySelector('.register-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const {
    elements: { username, password },
  } = event.currentTarget;
  console.log(username.value, password.value);
});

// section3 article2 Domyślne działania przeglądarki
const clearLogBtn = document.querySelector('.js-clear');
const logList = document.querySelector('.log-list');
let keypressCounter = 1;

console.log(clearLogBtn);

document.addEventListener('keydown', logMessage);
document.addEventListener('keyup', logMessage);
clearLogBtn.addEventListener('click', reset);

function logMessage({ type, key, code }) {
  const markup = `<div class="log-item">
    <span class="chip">${keypressCounter}</span>
    <ul>
      <li><b>Event</b>: ${type}</li>
      <li><b>Key</b>: ${key}</li>
      <li><b>Code</b>: ${code}</li>
    </ul>
  </div>`;

  logList.insertAdjacentHTML('afterbegin', markup);

  if (type === 'keyup') {
    incrementKeypressCounter();
  }
  console.log(markup);
}

function reset() {
  keypressCounter = 1;
  logList.innerHTML = '';
}

function incrementKeypressCounter() {
  keypressCounter += 1;
}

// section4 article1 Zdarzenie submit
const registerForm = document.querySelector('.form-s4a1');

registerForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.login.value;
  const password = form.elements.password.value;

  if (login === '' || password === '') {
    return console.log('Please fill in all the fields!');
  }

  console.log(`Login: ${login}, Password: ${password}`);
  form.reset();
}

// section4 article2 Zdarzenie change
const select = document.querySelector('.pizza-select-s4a2');
const textOutput = document.querySelector('.text-output-s4a2');
const valueOutput = document.querySelector('.value-output-s4a2');

select.addEventListener('change', setOutput);

function setOutput(event) {
  const selectedOptionValue = event.currentTarget.value;
  const selectedOptionIndex = event.currentTarget.selectedIndex;
  const selectedOptionText =
    event.currentTarget.options[selectedOptionIndex].text;

  textOutput.textContent = selectedOptionText;
  valueOutput.textContent = selectedOptionValue;
}

// section4 article3 Zdarzenie input
const textInput = document.querySelector('.text-input-s4a3');
const output = document.querySelector('.output-s4a3');

textInput.addEventListener('input', event => {
  output.textContent = event.currentTarget.value;
});

// section4 articlea Zdarzenie focus i blur
const textInput_s4a4 = document.querySelector('.text-input-s4a4');
const setFocusBtn = document.querySelector('[data-action="set"]');
const removeFocusBtn = document.querySelector('[data-action="remove"]');

setFocusBtn.addEventListener('click', () => {
  textInput_s4a4.focus();
});

removeFocusBtn.addEventListener('click', () => {
  textInput_s4a4.blur();
});

textInput_s4a4.addEventListener('focus', () => {
  textInput_s4a4.value = 'This input has focus';
});

textInput_s4a4.addEventListener('blur', () => {
  textInput_s4a4.value = '';
});
