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
// console.log(
//   `Obiekt: ${foundColor} Nazwa koloru: ${foundColor.label} Hash koloru: ${foundColor.color}`
// );

// 01. Funkcja do zmiennej
function makePizza() {
  return 'Your pizza is being prepared, please wait.';
}

const result = makePizza();
const pointer = makePizza;

//02. Funkcja zwrotna (callback)
function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza02(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

// Chande code below this line
function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}

// console.log(makeMessage('Royal Grand', makePizza02));

//03. Funkcja callback zadeklarowana bezpośrednio przy wywołaniu funkcji
function makePizza03(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

// makePizza03('Royal Grand', function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });

// makePizza03('Ultracheese', function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}.`);
// });

//04. Funkcja callback dowolna ilość callbacków
const pizzaPalace = {
  pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
  order(pizzaName, onSuccess, onError) {
    const nameOfPizza = this.pizzas.some(tableItem => tableItem === pizzaName);

    if (nameOfPizza) {
      return onSuccess(pizzaName);
    } else {
      return onError(
        `There is no pizza with a name ${pizzaName} in the assortment.`
      );
    }
  },
};

// Callback for onSuccess
function makePizza04(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza04, onOrderError));
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

//05. Pętla forEach
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function (number) {
    totalPrice += number;
  });

  return totalPrice;
}
// console.log(calculateTotalPrice([12, 85, 37, 4]));

//06. Pętla forEach - filtrowanie danych
function filterArray(numbers, value) {
  const filteredNumbers = [];

  numbers.forEach(function (number) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  return filteredNumbers;
}
// console.log(filterArray([1, 2, 3, 4, 5], 3));

//07. Pętla forEach - filtrowanie danych
function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  firstArray.forEach(function (number) {
    if (secondArray.includes(number)) {
      commonElements.push(number);
    }
  });
  return commonElements;
}
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

//08. Funkcja strzałkowa
const calculateTotalPrice08 = (quantity, pricePerItem) => {
  return quantity * pricePerItem;
};

//09. Funkcja strzałkowa - niejawny zwrot
const calculateTotalPrice09 = (quantity, pricePerItem) =>
  quantity * pricePerItem;

//10. Funkcja strzałkowa - metoda foreach
const calculateTotalPrice10 = orderedItems => {
  let totalPrice = 0;

  orderedItems.forEach(item => {
    totalPrice += item;
  });

  return totalPrice;
};
// console.log(calculateTotalPrice10([412, 371, 94, 63, 176]));

//11. Funkcja strzałkowa - Filtrowanie tablicy liczb
const filterArray11 = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach(number => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  return filteredNumbers;
};
// console.log(filterArray11([12, 24, 8, 41, 76], 38));

//12. Funkcja strzałkowa - Wspólne elementy
const getCommonElements12 = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach(element => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  return commonElements;
};
// console.log(getCommonElements12([10, 20, 30, 40], [4, 30, 17, 10, 40]));

//13. Funkcja z efektami ubocznymi
function changeEven(numbers, value) {
  // Change code below this line
  const commonElements = [];

  numbers.forEach(element => {
    if (element % 2 === 0) {
      commonElements.push(element + value);
    } else {
      commonElements.push(element);
    }
  });
  return commonElements;
}
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); //[12, 18, 3, 7, 14, 16]

//14. Metoda map().
const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];

const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);

//15. Metoda map().
const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
];
// Change code below this line

const titles = books.map(book => book.title);
// console.log(titles);

//16. Metoda flatMap().
const books16 = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    genres: ['adventure', 'history'],
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    genres: ['fiction'],
  },
  {
    title: 'Redder Than Blood',
    author: 'Tanith Lee',
    genres: ['horror', 'mysticism'],
  },
];

const genres = books16.flatMap(book => book.genres);
// console.log(genres);

//17. 18. Metoda map() 22. 23. 24.Metoda filter() 25. Metoda flatMap() filter() 26. 27. Metoda filter() 29. Metoda find() 31. Metoda every() 33. Metoda some() 36. 37. Metoda reduce(callback, initialValue) - obiekt 42.43.44 Metoda sort()obiekt 46. Metoda .filter.map.sort()
const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

//17. Metoda map().
const getUserNames = users => {
  const usersName = users.map(user => user.name);
  return usersName;
};

// console.log(getUserNames(users));

//18. Metoda map().
const getUserEmails = users => {
  const usersEmails = users.map(user => user.email);
  return usersEmails;
};

// console.log(getUserEmails(users));

//19. Metoda filter().
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Change code below this line

const evenNumbers = numbers.filter(value => value % 2 === 0);
const oddNumbers = numbers.filter(value => value % 2 !== 0);

// console.log(evenNumbers, oddNumbers);

//20. Metoda flatMap() filter().
const books20 = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    genres: ['adventure', 'history'],
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    genres: ['fiction', 'mysticism'],
  },
  {
    title: 'Redder Than Blood',
    author: 'Tanith Lee',
    genres: ['horror', 'mysticism', 'adventure'],
  },
];
const allGenres = books20.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter(
  (genre, index, array) => array.indexOf(genre) === index
);
// console.log(allGenres, uniqueGenres);

//21. Metoda filter().
const books21 = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = 'Bernard Cornwell';

const topRatedBooks = books21.filter(value => value.rating >= MIN_RATING);
const booksByAuthor = books21.filter(value => value.author === AUTHOR);

// console.log(topRatedBooks, booksByAuthor);

// 22. Metoda filter()
const getUsersWithEyeColor = (users, color) => {
  const usersEyes = users.filter(user => user.eyeColor === color);
  return usersEyes;
};

// console.log(getUsersWithEyeColor(users, 'blue'));

// 23. Metoda filter()
const getUsersWithAge = (users, minAge, maxAge) => {
  const usersAge = users.filter(({ age }) => age >= minAge && age <= maxAge);
  return usersAge;
};
// console.log(getUsersWithAge(users, 30, 40)); //Moore Hensley, Sharlene Bush, Blackburn Dotson, Sheree Anthony

// 24. Metoda filter()
const getUsersWithFriend = (users, friendName) => {
  const friends = users.filter(({ friends }) => friends.includes(friendName));
  return friends;
};
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); //Elma Head i Sheree Anthony

// 25. Metoda flatMap() filter()
const getFriends = users => {
  const uniqueFriends = users
    .flatMap(users => users.friends)
    .filter((friends, index, array) => array.indexOf(friends) === index);
  return uniqueFriends;
};
// console.log(getFriends(users));

// 26. Metoda filter()
const getActiveUsers = users => {
  const activeUsers = users.filter(({ isActive }) => isActive === true);
  return activeUsers;
};
// console.log(getActiveUsers(users));

// 27. Metoda filter()
const getInactiveUsers = users => {
  const inactiveUsers = users.filter(({ isActive }) => isActive === false);
  return inactiveUsers;
};
// console.log(getInactiveUsers(users));

// 28. Metoda find()
const books28 = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
];
const BOOK_TITLE = 'The Dream of a Ridiculous Man';
const AUTHOR28 = 'Robert Sheckley';

const bookWithTitle = books28.find(({ title }) => title === BOOK_TITLE);
const bookByAuthor = books28.find(book => book.author === AUTHOR28);
// console.log(bookWithTitle, bookByAuthor);

// 29. Metoda find()
const getUserWithEmail = (users, email) => {
  const userEmail = users.find(user => user.email === email);
  return userEmail;
};
// console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));

// 30. Metoda every()
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// const eachElementInFirstIsEven = firstArray.every(value => value % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(value => value % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(value => value % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(value => value % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(value => value % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(value => value % 2 !== 0);

// console.log(
//   eachElementInFirstIsEven,
//   eachElementInFirstIsOdd,
//   eachElementInSecondIsEven,
//   eachElementInSecondIsOdd,
//   eachElementInThirdIsEven,
//   eachElementInThirdIsOdd
// );

// 31. Metoda every()
const isEveryUserActive = users => {
  const isAllUsersActive = users.every(user => user.isActive === true);
  return isAllUsersActive;
};
// console.log(isEveryUserActive(users));

// 32. Metoda some()
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];

const anyElementInFirstIsEven = firstArray.some(value => value % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some(value => value % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some(value => value % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some(value => value % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some(value => value % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(value => value % 2 !== 0);

// console.log(
//   anyElementInFirstIsEven,
//   anyElementInFirstIsOdd,
//   anyElementInSecondIsEven,
//   anyElementInSecondIsOdd,
//   anyElementInThirdIsEven,
//   anyElementInThirdIsOdd
// );

// 33. Metoda some()
const isOneUserActive = users => {
  const isOneUsersActive = users.some(user => user.isActive === true);
  return isOneUsersActive;
};
// console.log(isOneUserActive(users));

// 34. Metoda reduce(callback, initialValue) - tablica
const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]

const totalPlayTime = playtimes.reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(
//   `Table: ${playtimes}\nTotal play time: ${totalPlayTime}\nAverage play time: ${averagePlayTime}`
// );

// 35. Metoda reduce(callback, initialValue) - obiekt
const players35 = [
  { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
  { name: 'Poly', playtime: 469, gamesPlayed: 2 },
  { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
  { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players35.reduce(
  (previousValue, player) => {
    return previousValue + player.playtime / player.gamesPlayed;
  },
  0
);
// console.log(totalAveragePlaytimePerGame);

// 36. Metoda reduce(callback, initialValue) - obiekt
const calculateTotalBalance = users => {
  return users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
};
// console.log(calculateTotalBalance(users));

// 37. Metoda reduce(callback, initialValue) - obiekt
const getTotalFriendCount = users => {
  return users.reduce(
    (totalFriends, user) => totalFriends + user.friends.length,
    0
  );
};
// console.log(getTotalFriendCount(users));

// 38. Metoda sort()
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  'Tanith Lee',
  'Bernard Cornwell',
  'Robert Sheckley',
  'Fyodor Dostoevsky',
];
const ascendingReleaseDates = [...releaseDates].sort();
const alphabeticalAuthors = [...authors].sort();
// console.log(`${ascendingReleaseDates}\n${alphabeticalAuthors}`);

// 39. Metoda sort()
const releaseDates39 = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

const ascendingReleaseDates39 = [...releaseDates39].sort((a, b) => a - b);
const descendingReleaseDates = [...releaseDates39].sort((a, b) => b - a);
// console.log(`${ascendingReleaseDates39}\n${descendingReleaseDates}`);

// 40. Metoda sort()=> a.localeCompare(b));
const authors40 = [
  'Tanith Lee',
  'Bernard Cornwell',
  'Robert Sheckley',
  'Fyodor Dostoevsky',
  'Howard Lovecraft',
];
const authorsInAlphabetOrder = [...authors40].sort((a, b) =>
  a.localeCompare(b)
);
const authorsInReversedOrder = [...authors40].sort((a, b) =>
  b.localeCompare(a)
);
// console.log(`${authorsInAlphabetOrder}\n${authorsInReversedOrder}`);

// 41. Metoda sort() localeCompare obiekt
const books41 = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  {
    title: 'Redder Than Blood',
    author: 'Tanith Lee',
    rating: 7.94,
  },
  {
    title: 'Enemy of God',
    author: 'Bernard Cornwell',
    rating: 8.67,
  },
];

const sortedByAuthorName = [...books41].sort((firstBook, secondBook) =>
  firstBook.author.localeCompare(secondBook.author)
);

const sortedByReversedAuthorName = [...books41].sort((firstBook, secondBook) =>
  secondBook.author.localeCompare(firstBook.author)
);

const sortedByAscendingRating = [...books41].sort(
  (firstBook, secondBook) => firstBook.rating - secondBook.rating
);

const sortedByDescentingRating = [...books41].sort(
  (firstBook, secondBook) => secondBook.rating - firstBook.rating
);
// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);

// 42. Metoda sort()obiekt
const sortByAscendingBalance = users => {
  const newTabUsers = [...users].sort(
    (firstUser, secondUser) => firstUser.balance - secondUser.balance
  );
  return newTabUsers;
};
// console.log(sortByAscendingBalance(users));

// 43. Metoda sort()obiekt
const sortByDescendingFriendCount = users => {
  const newTabUsers = [...users].sort(
    (firstUser, secondUser) =>
      secondUser.friends.length - firstUser.friends.length
  );
  return newTabUsers;
};
// console.log(sortByDescendingFriendCount(users));

// 44. Metoda sort() localeCompare obiekt
const sortByName = users => {
  const sortedByUsersName = [...users].sort((firstUser, secondUser) =>
    firstUser.name.localeCompare(secondUser.name)
  );
  return sortedByUsersName;
};
// console.log(sortByName(users));

// 45. Metoda sort()
const books45 = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  {
    title: 'The Dreams in the Witch House',
    author: 'Howard Lovecraft',
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;

const names = books45
  .filter(book => book.rating > MIN_BOOK_RATING)
  .map(book => book.author)
  .sort((firstBook, secondBook) => firstBook.localeCompare(secondBook));
// console.log(names); //["Bernard Cornwell", "Howard Lovecraft", "Robert Sheckley"]

// 45. Metoda .filter.map.sort()
const getNamesSortedByFriendCount = users => {
  const names = users
    .filter(book => book.rating > MIN_BOOK_RATING)
    .map(book => book.author)
    .sort((firstBook, secondBook) => firstBook.localeCompare(secondBook));
  return names;
};
// console.log(getNamesSortedByFriendCount(users));

// 46. Metoda .filter.map.sort()
const getNamesSortedByFriendCount46 = users => {
  const names = [...users]
    .sort(
      (firstUser, secondUser) =>
        firstUser.friends.length - secondUser.friends.length
    )
    .map(user => user.name);
  return names;
};
// console.log(getNamesSortedByFriendCount46(users));

// 47. Metoda .filter.map.sort()
const getSortedFriends = users => {
  const names = users
    .flatMap(user => user.friends)
    .filter((friend, index, array) => array.indexOf(friend) === index)
    .sort((firstFriend, secondFriend) =>
      firstFriend.localeCompare(secondFriend)
    );
  return names;
};
// console.log(getSortedFriends(users));

// 48. Metoda .filter.map.sort()
const getTotalBalanceByGender = (users, gender) => {
  const totalBalance = [...users]
    .filter(user => user.gender === gender)
    .reduce((total, user) => {
      return total + user.balance;
    }, 0);
  return totalBalance;
};

console.log(
  `Mężczyźni: ${getTotalBalanceByGender(
    users,
    'male'
  )}\nKobiety: ${getTotalBalanceByGender(users, 'female')}`
);

//--------------------------------------------------------------------
const persons = [
  {
    firstName: 'Adam',
    secondName: 'Bogota',
    sex: 'man',
    streetName: 'Piękna',
    streetNumber: '8b/2',
    zipCode: '22-800',
    lacality: 'Wrocław',
    dateOfBirth: new Date('1986 - 12 - 24'),
    accountBalance: 156_000,
    activeAccount: true,
    phoneNumber: 325_346_543,
    recentExpenses: [125, 2043, 468, 7843, 6775, 53432, 432, 4, 4325, 545436],
    stats: {
      followers: 603,
      views: 487,
      likes: 138,
    },
  },
  {
    firstName: 'Anna',
    secondName: 'Nowak',
    sex: 'woman',
    streetName: 'Widok',
    streetNumber: '2',
    zipCode: '32-660',
    lacality: 'Poznań',
    dateOfBirth: new Date(1945 - 6 - 14),
    accountBalance: 2355_040,
    activeAccount: false,
    phoneNumber: 527_949_383,
    recentExpenses: [
      543, 345, 34563, 23554, 11323, 43632, 4378, 864, 7564, 45636,
    ],
    stats: {
      followers: 5603,
      views: 4827,
      likes: 1308,
    },
  },
  {
    firstName: 'Karol',
    secondName: 'Cevalo',
    sex: 'man',
    streetName: 'Eklerda',
    streetNumber: '15',
    zipCode: '40-066',
    lacality: 'Świebodzin',
    dateOfBirth: new Date(1977 - 6 - 1),
    accountBalance: 335_156_000_000,
    activeAccount: true,
    phoneNumber: 456_041_479,
    recentExpenses: [
      12452, 173053, 423054, 1100765, 92, 24000, 7843, 17004, 500, 500,
    ],
    stats: {
      followers: 9503,
      views: 27,
      likes: 1,
    },
  },
];

// section3 article2
console.log(
  '%c section3 article2 ',
  'color: rgb(0, 0, 0); background-color: rgb(255, 255, 0)',
  'Tablica obiektów Metoda map()'
);

console.group('Metoda map()');
const names_s3a2 = persons.map(person => person.firstName);
console.table(names_s3a2);
console.groupEnd();
console.log('-----------------------------------------------');

// section5 article1
console.log(
  '%c section5 article1 ',
  'color: rgb(0, 0, 0); background-color: rgb(255, 255, 0)',
  'Tablica obiektów Metoda filter()'
);

console.group('Metoda filter()');
const names_s5a1 = persons.filter(person => person.firstName.startsWith('K'));
console.table(names_s5a1);

console.groupEnd();
console.log('-----------------------------------------------');

// section5 article2
console.log(
  '%c section5 article2 ',
  'color: rgb(0, 0, 0); background-color: rgb(255, 255, 0)',
  'Tablica obiektów Metoda filter()'
);

console.group('Metoda filter()');
const names_s5a2 = persons.filter(person => person.firstName.startsWith('K'));
console.table(names_s5a2);

console.groupEnd();
console.log('-----------------------------------------------');
