//deklaracja obiektu
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  //deklaracja obiektu w obiekcie
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

//pobranie właściwości obiektu - obiekt.klucz
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;

//pobranie zagnieżdżonej właściwości obiektu - obiekt.klucz
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[numberOfTags - 1];

//pobranie właściwości obiektu - obiekt["nazwa"]
const aptRating = apartment['rating'];
const aptDescr = apartment['descr'];
const aptPrice = apartment['price'];
const aptTags = apartment['tags'];

//zmiana wartości właściwości obiektu
apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = 'Henry Sibola';
apartment.tags.push('trusted');

//7. dodanie właściwości i wraz z wartościami do obiektu
apartment.area = 60;
apartment.rooms = 3;
apartment.location = {};
apartment.location.country = 'Jamaica';
apartment.location.city = 'Kingston';

//8. tworzenie właściwości obiektu ze wcześniej zadeklarowanych zmiennych
// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   name,
//   price,
//   image,
//   tags,
// };

//9. dodanie właściwości o nieznanej nazwie
const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
  [emailInputName]: 'henry.carter@aptmail.com',
  [passwordInputName]: 'jqueryismyjam',
};

//10. iteracja po obiekcie - dodanie keys i values do tablic
const apartment1 = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
for (const key in apartment1) {
  keys.push(key);
  values.push(apartment1[key]);
}

//11. iteracja po obiekcie - sprawdzanie własnej właściwości
const keys11 = [];
const values11 = [];
const advert = {
  service: 'apt',
};
const apartment11 = Object.create(advert);
apartment11.descr = 'Spacious apartment in the city center';
apartment11.rating = 4;
apartment11.price = 2153;

for (const key in apartment11) {
  if (apartment11.hasOwnProperty(key)) {
    keys11.push(key);
    values11.push(apartment11[key]);
  }
}

//12. funkcja zwracająca tylko własne właściwości
function countProps(object) {
  let propCount = 0;

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount++;
    }
  }
  return propCount;
}

const count = countProps({ name: 'Mango', age: 2 });
// console.log(count);

//13. Metoda Object.keys(obj)
const apartment13 = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};
const values13 = [];
const keys13 = Object.keys(apartment13);

for (const key of keys13) {
  values13.push(apartment13[key]);
}
// console.log(values13);

//14. funkcja zwracająca tylko własne właściwości - Metoda Object.keys(obj)
function countProps14(object) {
  let propCount = 0;
  const keys14 = Object.keys(object);
  propCount = keys14.length;
  return propCount;
}
const count14 = countProps14({ name: 'Mango', age: 2 });
// console.log(count14);

//15. funkcja zwracająca tylko własne właściwości - Metoda Object.values(obj)
const apartment15 = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};
const keys15 = Object.keys(apartment15);
const values15 = Object.values(apartment15);
// console.log(keys15, values15);

//16. Funkcja powinna obliczyć łączną kwotę wynagrodzeń pracowników i zwrócić ją
function countTotalSalary(salaries) {
  let totalSalary = 0;
  const keys16 = Object.keys(salaries);
  const values16 = Object.values(salaries);
  for (const key of keys16) {
    totalSalary += salaries[key];
  }
  return totalSalary;
}
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// 17. Przeiteruj po tablicy obiektów colors używając pętli for...of
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
for (const key of colors) {
  hexColors.push(key.hex);
  rgbColors.push(key.rgb);
}
// console.log(hexColors, rgbColors);

//18. Poszukiwanie obiektu według wartości właściwości
const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  for (const key of products) {
    if (key.name === productName) {
      return key.price;
    }
  }
  return null;
}
// console.log(getProductPrice('Droid'));
// console.log(getProductPrice('Engine'));

//19. kolekcja wartości właściwości
const products19 = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  const returnTab = [];

  for (const product of products19) {
    const rowsProperties = Object.keys(product);

    for (const property of rowsProperties) {
      if (property === propName) {
        returnTab.push(product[property]);
      }
    }
  }
  return returnTab;
}
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('category'));

//20.całkowity koszt towaru
const products20 = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  let cost = 0;

  for (const product of products20) {
    const rowsProperties = Object.keys(product);

    for (const property of rowsProperties) {
      if (product[property] === productName) {
        cost = product.price * product.quantity;
      }
    }
  }
  return cost;
}
// console.log(calculateTotalPrice('Blaster'));
// console.log(calculateTotalPrice('Radar'));

//21. Destrukturyzacja
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// const { yesterday, today, tomorrow } = highTemperatures;
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);

//22. Destrukturyzacja - dodatkowy parametr
const highTemperatures22 = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures22;
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);

//23. Destrukturyzacja - zmiana nazwy zmiennej
const highTemperatures23 = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures23;
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(meanTemperature);

//24. Destrukturyzacja - wiele obiektów
const colors24 = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors24 = [];
const rgbColors24 = [];

for (const color of colors) {
  const { hex, rgb } = color;
  hexColors24.push(hex);
  rgbColors24.push(rgb);
}
// console.log(hexColors24, rgbColors24);

//25. Destrukturyzacja - obiekty zagnieżdżone
const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};

const {
  today: {
    low: lowToday,
    high: highToday,
    icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: lowTomorrow,
    high: highTomorrow,
    icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
  },
} = forecast;
// console.log(lowToday);

// 26. Wzorzec «Obiekt ustawień»
function calculateMeanTemperature(forecast) {
  const {
    today: {
      low: todayLow,
      high: todayHigh,
      icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
    },
    tomorrow: {
      low: tomorrowLow,
      high: tomorrowHigh,
      icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
    },
  } = forecast;
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

// console.log(
//   calculateMeanTemperature({
//     today: { low: 28, high: 32 },
//     tomorrow: { low: 25, high: 29 },
//   })
// );

// 27. Składnia ... (spread)
const scores = [89, 64, 42, 17, 93, 51, 26];

// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// console.log(worstScore, bestScore);

// 28. Składnia ... (spread) -łączenie tablic
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [
  ...firstGroupScores,
  ...secondGroupScores,
  ...thirdGroupScores,
];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);
// console.log(allScores, worstScore, bestScore);

// 29. Składnia ... (spread) -łączenie obiektów
const defaultSettings = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};

const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings);

// 30. Składnia ... (spread) - Karty zadań
function makeTask(data) {
  const completed = false;
  const category = 'General';
  const priority = 'Normal';

  const task = {
    category: category,
    priority: priority,
    completed: completed,
  };

  const finalSettings = { ...task, ...data };
  return finalSettings;
}
// console.log(makeTask({}));
// console.log(
//   makeTask({
//     category: 'Homemade',
//     priority: 'Low',
//     text: 'Take out the trash',
//   })
// );

// 31. Operacja ... (rest)
function add(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}
// console.log(add(12, 4, 11, 48));

// 32. Operacja ... (rest) - część argumentów
function addOverNum(...args) {
  let total = 0;

  for (const arg of args) {
    if (args[0] < arg) {
      total += arg;
    }
  }

  return total;
  // Change code above this line
}
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));

// 33. Operacja ... (rest) - Tablica dopasowań
function findMatches(...args) {
  const matches = [];

  for (let i = 0; i < args[0].length; i++) {
    let firstTableNum = args[0][i];

    for (let j = 1; j < args.length; j++) {
      if (firstTableNum === args[j]) {
        matches.push(args[j]);
      }
    }
  }
  return matches;
}
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));

// 34. Metody obiektów
const bookShelf = {
  books: ['The last kingdom', 'The guardian of dreams'],
  getBooks() {
    return 'Returning all books';
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName) {
    return `Deleting book ${bookName}`;
  },
  updateBook(oldName, newName) {
    return `Updating book ${oldName} to ${newName}`;
  },
};

// 35. Metody obiektów - this
const bookShelf35 = {
  books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
  updateBook(oldName, newName) {
    const bookIndex = this.books.indexOf(oldName);
    this.books.splice(bookIndex, 1, newName);
    // console.log(this.books);
  },
};

bookShelf35.updateBook('Haze', 'Dungeon chronicles');
// console.log(bookShelf35);

// 36. Obiekt - dodanie właściwości
const atTheOldToad = {
  potions: [],
};

// 37. Obiekt - metoda odczytu
const atTheOldToad37 = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  getPotions() {
    return this.potions;
  },
};
// console.log(atTheOldToad37.potions);

// 38. Obiekt - metoda dodania elementu
const atTheOldToad38 = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  addPotion(potionName) {
    this.potions.push(potionName);
  },
};
atTheOldToad38.addPotion('Invisibility');
// console.log(atTheOldToad38.potions);

// 39. Obiekt - metoda usunięcia elementu
const atTheOldToad39 = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);
    this.potions.splice(potionIndex, 1);
  },
};
atTheOldToad39.removePotion('Dragon breath');
// console.log(atTheOldToad39.potions);

// 40. Obiekt - metoda zamiana elementu
const atTheOldToad40 = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);
    this.potions.splice(potionIndex, 1, newName);
  },
};
atTheOldToad40.updatePotionName('Dragon breath', 'Polymorth');
// console.log(atTheOldToad40.potions);

// 41. Obiekt - metoda zamiana elementu
const atTheOldToad41 = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const key of this.potions) {
      if (key.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },

  removePotion(potionName) {
    const potionIndex = this.potions.findIndex(
      potion => potion.name === potionName
    );

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },

  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.findIndex(
      potion => potion.name === oldName
    );

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions[potionIndex].name = newName;
  },
  // Change code above this line
};

// console.log(atTheOldToad41.addPotion({ name: 'Stone skin', price: 240 }));
// atTheOldToad41.addPotion({ name: 'Power potion', price: 270 });
// console.log(atTheOldToad41.removePotion('Dragon breath'));
atTheOldToad41.updatePotionName('Dragon breath', 'Polymorth');
console.log(atTheOldToad41.getPotions());
