'use strict';

// section1 article7
console.log(
  '%c section1 article7 ',
  'color: rgb(0, 0, 0); background-color: rgb(255, 255, 0)',
  'Pseudotablica arguments'
);

function multiply() {
  let total = 1;
  console.group('arguments Details');
  for (const argument of arguments) {
    total *= argument;
    console.log('argument of arguments', argument);
  }
  console.groupEnd();
  return total;
}

console.log(multiply, multiply(1, 2, 3)); //  6
console.log('multiply(1, 2, 3, 4)', multiply(1, 2, 3, 4)); //  24
console.log('multiply(1, 2, 3, 4, 5)', multiply(1, 2, 3, 4, 5)); //  120
console.log('-----------------------------------------------');
// section1 article8
console.log(
  '%c section1 article8 ',
  'color: rgb(0, 0, 0); background-color: rgb(255, 255, 0)',
  'Konwersja pseudotablicy Array.from()'
);
function fn() {
  let total = 1;
  console.log('Array.from()');
  const args = Array.from(arguments);
  console.table(args);
  return args;
}

console.log(fn, fn(1, 2, 3)); //  6
console.log('fn(1, 2, 3, 4)', fn(1, 2, 3, 4));
console.log('fn(1, 2, 3, 4, 5)', fn('jeden', 'dwa', 'trzy', 'cztery'));
console.log('-----------------------------------------------');
console.log(
  '%c section1 article8 ',
  'color: rgb(0, 0, 0); background-color: rgb(255, 255, 0)',
  'Konwersja pseudotablicy ... (spread)'
);
function fn1() {
  let total = 1;
  console.log('... (spread)');
  const args = [...arguments];
  console.table(args);
  return args;
}

console.log(fn1, fn1(1, 2, 3)); //  6
console.log('fn(1, 2, 3, 4)', fn1(1, 2, 3, 4));
console.log('fn(1, 2, 3, 4, 5)', fn1('jeden', 'dwa', 'trzy', 'cztery'));
console.log('-----------------------------------------------');
