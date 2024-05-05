'use strict';

// Podejście deklaratywne
const numbers = [1, 2, 3, 4, 5];

const filteredNumbers = numbers.filter(value => value > 3);
// console.log(filteredNumbers); // [4, 5]

// section1 article2
console.log(
  '%c section1 article2 ',
  'color: rgb(0, 0, 0); background-color: rgb(255, 255, 0)',
  'Wywołania zwrotne inline'
);

function registerGuest(name, callback) {
  console.log(`Rejestracja gościa ${name}.`);
  callback(name);
}
function greet(name) {
  console.log(`Pozdrawiam ${name}.`);
}

console.group('function: object details');
console.log(registerGuest);
registerGuest('Mango', greet);
registerGuest('Poly', function notify(name) {
  console.log(
    `Szanowny(a) ${name}, Pana/Pani pokój będzie gotowy za 30 minut.`
  );
});
console.groupEnd();
console.log('-----------------------------------------------');

// section1 article3
console.log(
  '%c section1 article3 ',
  'color: rgb(0, 0, 0); background-color: rgb(255, 255, 0)',
  'Kilka wywołań zwrotnych'
);
function processCall(recipient, onAvailable, onNotAvailable) {
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }

  onAvailable(recipient);
}

function takeCall(name) {
  console.log(`Łączenie z ${name}, proszę czekać...`);
}

function activateAnsweringMachine(name) {
  console.log(`Abonent ${name} jest niedostępny, zostaw wiadomość.`);
}

function leaveHoloMessage(name) {
  console.log(`Abonent ${name} jest niedostępny, nagraj hologram.`);
}

console.group('function: object details');
console.log(processCall);
processCall('Mango', takeCall, activateAnsweringMachine);
processCall('Poly', takeCall, leaveHoloMessage);
console.groupEnd();
console.log('-----------------------------------------------');
