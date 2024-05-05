'use strict';

const user = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  name,
  tag,
  stats: { followers, views: userViews, likes: userLikes },
} = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// Funkcja wywołania zwrotnego
function greet(name) {
  console.log(`Pozdrawiam ${name}.`);
}

// Funkcja wyższego rzędu
function registerGuest(name, callback) {
  console.log(`Rejestracja gościa ${name}.`);
  callback(name);
}
// Przekaż funkcję inline greet jako wywołanie zwrotne
// registerGuest('Mango', function greet(name) {
//   console.log(`Pozdrawiam ${name}.`);
// });

// Przekaż funkcję inline notify jako wywołanie zwrotne
// registerGuest('Poly', function notify(name) {
//   console.log(
//     `Szanowny(a) ${name}, Pana/Pani pokój będzie gotowy za 30 minut.`
//   );
// });

// registerGuest('Mango', greet);

function processCall(recipient) {
  // Symuluj dostępność abonenta za pomocą liczby losowej
  const isRecipientAvailable = Math.random() > 0.5;
  console.log(isRecipientAvailable);
  if (!isRecipientAvailable) {
    console.log(`Abonent ${recipient} jest niedostępny, zostaw wiadomość.`);
    // Logika aktywacji automatycznej sekretarki
  } else {
    console.log(`Łączenie z ${recipient}, proszę czekać...`);
    // Logika odbierania połączenia
  }
}

// processCall('Mango');

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
// section2 article2
console.log(
  '%c section2 article2 ',
  'color: rgb(0, 0, 0); background-color: rgb(255, 255, 0)',
  'Destrukturyzacja obiektów'
);

const { firstName, secondName, recentExpenses } = persons[persons.length - 1];
console.group('object details');
console.log('firstName', firstName);
console.log('secondName', secondName);
console.table(recentExpenses);
console.groupEnd();
console.log('-----------------------------------------------');

// section2 article6
console.log(
  '%c section2 article6 ',
  'color: rgb(0, 0, 0); background-color: rgb(255, 255, 0)',
  'Głęboka destrukturyzacja obiektów'
);

const {
  firstName: firstName_s2a6,
  secondName: secondName_s2a6,
  recentExpenses: recentExpenses_s2a6,
  stats: {
    followers: followers_s2a6,
    views: userViews_s2a6,
    likes: userLikes_s2a6 = 0,
  },
} = persons[persons.length - 1];
console.group('object details');
console.log('firstName_s2a6', firstName_s2a6);
console.log('secondName_s2a6', secondName_s2a6);
console.log('followers_s2a6', followers_s2a6);
console.log('userViews_s2a6', userViews_s2a6);
console.log('userLikes_s2a6', userLikes_s2a6);
console.groupEnd();
console.log('-----------------------------------------------');

// section3 article1
console.log(
  '%c section3 article1 ',
  'color: rgb(0, 0, 0); background-color: rgb(255, 255, 0)',
  'Wzorzec "Obiekt parametru"'
);

function getSomeDataPerson(person) {
  const {
    firstName,
    secondName,
    recentExpenses,
    stats: { followers, views, likes },
  } = person;
  console.group('function: object details');
  console.log('firstName', firstName);
  console.log('secondName', secondName);
  console.log('followers', followers);
  console.log('userViews', views);
  console.log('userLikes', likes);
  console.groupEnd();
}
getSomeDataPerson(persons[persons.length - 1]);
console.log('-----------------------------------------------');
