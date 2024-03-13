'use strict';

//01. this
const pizzaPalace = {
  pizzas: ['Supercheese', 'Smoked', 'Four meats'],
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
};
// console.log(pizzaPalace.order('Four meats'));

//02. this
const customer = {
  username: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['Burger', 'Pizza', 'Salad'],
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
};

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

//03. this
const historyService = {
  orders: [
    { email: 'jacob@hotmail.com', dish: 'Burrito' },
    { email: 'solomon@topmail.net', dish: 'Burger' },
    { email: 'artemis@coldmail.net', dish: 'Pizza' },
    { email: 'solomon@topmail.net', dish: 'Apple pie' },
    { email: 'jacob@hotmail.com', dish: 'Taco' },
  ],
  getOrdersLog() {
    return this.orders
      .map(order => `email: ${order.email} dish: ${order.dish}`)
      .join(' - ');
  },
  getEmails() {
    const emails = this.orders.map(order => order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return this.orders.filter(order => order.email === email);
  },
};
//console.log(historyService.getOrdersLog());
//console.log(historyService.getEmails());
//console.log(historyService.getOrdersByEmail('solomon@topmail.net')); //[{ email: "solomon@topmail.net", dish: "Burger" }, { email: "solomon@topmail.net", dish: "Apple pie" }]

//04. prototype
const parent = {
  name: 'Stacey',
  surname: 'Moore',
  age: 54,
  heritage: 'Irish',
};
const child = Object.create(parent);
child.name = 'Jason';
child.age = 27;
// console.log(parent, child);
// console.log(`Czy parent jest prototypem child: ${parent.isPrototypeOf(child)}`);

//05. prototype
const ancestor = {
  name: 'Paul',
  age: 83,
  surname: 'Dawson',
  heritage: 'Irish',
};
const parent5 = Object.create(ancestor);
parent.name = 'Stacey';
parent.surname = 'Moore';
parent.age = 54;

// const child = Object.create(parent5);
// child.name = 'Jason';
// child.age = 27;

//06. deklaracja klasa
class Car06 {}

//07. deklaracja klasa
class Car {
  constructor(brand, model, price) {
    // Inicjalizacja właściwości instancji
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}
// console.log(new Car('Audi', 'Q3', 36000));

//08. deklaracja klasa Destrukturyzacja obiektu
class Car08 {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}
// const car = new Car08({ brand: 'Audi', model: 'Q3', price: 36000 });
// console.log(car);

//09. deklaracja klasa Destrukturyzacja obiektu metody
class Car09 {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Metoda getPrice
  getPrice() {
    return this.price;
  }

  // Metoda changeEmail
  changePrice(newPrice) {
    this.price = newPrice;
  }
}

const car09 = new Car09({ brand: 'Audi', model: 'Q3', price: 36000 });
// console.log(car09);
// console.log(`Price before:${car09.getPrice()}`);
// car09.changePrice(21_000);
// console.log(`Price after:`, car09.getPrice());

//10. deklaracja klasa Destrukturyzacja obiektu metody
class Storage {
  constructor(items = []) {
    this.items = items;
  }
  // Metoda getItems
  getItems() {
    return this.items;
  }

  // Metoda addItem
  addItem(newItem) {
    this.items.push(newItem); // Dodawanie nowego elementu do tablicy
  }

  // Metoda addItem
  removeItem(itemToRemove) {
    // Znajdź indeks elementu o nazwie 'Prolonger'
    const indexToRemove = this.items.indexOf(itemToRemove);

    // Jeśli indeks istnieje (jest większy lub równy 0), usuń element
    if (indexToRemove !== -1) {
      this.items.splice(indexToRemove, 1);
    }
  }
}
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

//11. deklaracja klasa   metody
class StringBuilder {
  constructor(initialValue = ``) {
    this.value = initialValue;
  }
  getValue() {
    return this.value;
  }
  padStart(str) {
    // const tempValue = this.value.split('');
    // tempValue.unshift(str);
    // this.value = tempValue.join('');
    this.value = str + this.value;
    // return this.value;
  }
  padEnd(str) {
    // const tempValue = this.value.split('');
    // tempValue.push(str);
    // this.value = tempValue.join('');
    this.value += str;
    // return this.value;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
    // return this.value;
  }
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="

//12. deklaracja klasa  prywatne właściwości
class Car12 {
  #brand;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }
  getBrand() {
    return this.#brand;
  }
  changeBrand(newBrand) {
    this.#brand = newBrand;
    return this.#brand;
  }
}
// const car = new Car12({ brand: 'Audi', model: 'Q3', price: 36000 });
// console.log(car);
// console.log(car.getBrand());
// car.changeBrand('Honda');
// console.log(car.getBrand());

//13. deklaracja klasa  prywatne właściwości
class Storage13 {
  #items;
  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove);
  }
}

// const storage = new Storage13(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
