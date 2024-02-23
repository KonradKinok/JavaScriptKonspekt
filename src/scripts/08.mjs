'use strict';

// const planets = ['Ziemia', 'Mars', 'Wenus', 'Jowisz'];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ['ZIEMIA', 'MARS', 'WENUS', 'JOWISZ']

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ['ziemia', 'mars', 'wenus', 'jowisz']

// // Oryginalna tablica się nie zmieniła
// console.log(planets); // ['Ziemia', 'Mars', 'Wenus', 'Jowisz']

// Filtrowanie unikalnych elementów
const students = [
  { name: 'Mango', courses: ['matematyka', 'fizyka'] },
  { name: 'Poly', courses: ['informatyka', 'matematyka'] },
  { name: 'Kiwi', courses: ['fizyka', 'biologia'] },
];

const allCourses = students.flatMap(student => student.courses);
// ['matematyka', 'fizyka', 'informatyka', 'matematyka', 'fizyka', 'biologia'];

const uniqueCourses = allCourses.filter(
  (course, index, array) => array.indexOf(course) === index
);

// console.log(uniqueCourses);

// Metoda find()
const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const foundColor = colorPickerOptions.find(option => option.label === 'blue'); // { label: 'blue', color: '#2196F3' }
console.log(
  `Obiekt: ${foundColor} Nazwa koloru: ${foundColor.label} Hash koloru: ${foundColor.color}`
);
