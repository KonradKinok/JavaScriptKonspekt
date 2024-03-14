"use strict";
//01. this
const pizzaPalace = {
    pizzas: [
        "Supercheese",
        "Smoked",
        "Four meats"
    ],
    checkPizza (pizzaName) {
        return this.pizzas.includes(pizzaName);
    },
    order (pizzaName) {
        const isPizzaAvailable = this.checkPizza(pizzaName);
        if (!isPizzaAvailable) return `Sorry, there is no pizza named \xab${pizzaName}\xbb`;
        return `Order accepted, preparing \xab${pizzaName}\xbb pizza`;
    }
};
// console.log(pizzaPalace.order('Four meats'));
//02. this
const customer = {
    username: "Mango",
    balance: 24000,
    discount: 0.1,
    orders: [
        "Burger",
        "Pizza",
        "Salad"
    ],
    getBalance () {
        return this.balance;
    },
    getDiscount () {
        return this.discount;
    },
    setDiscount (value) {
        this.discount = value;
    },
    getOrders () {
        return this.orders;
    },
    addOrder (cost, order) {
        this.balance -= cost - cost * this.discount;
        this.orders.push(order);
    }
};
// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
//03. this
const historyService = {
    orders: [
        {
            email: "jacob@hotmail.com",
            dish: "Burrito"
        },
        {
            email: "solomon@topmail.net",
            dish: "Burger"
        },
        {
            email: "artemis@coldmail.net",
            dish: "Pizza"
        },
        {
            email: "solomon@topmail.net",
            dish: "Apple pie"
        },
        {
            email: "jacob@hotmail.com",
            dish: "Taco"
        }
    ],
    getOrdersLog () {
        return this.orders.map((order)=>`email: ${order.email} dish: ${order.dish}`).join(" - ");
    },
    getEmails () {
        const emails = this.orders.map((order)=>order.email);
        const uniqueEmails = new Set(emails);
        return [
            ...uniqueEmails
        ];
    },
    getOrdersByEmail (email) {
        return this.orders.filter((order)=>order.email === email);
    }
};
//console.log(historyService.getOrdersLog());
//console.log(historyService.getEmails());
//console.log(historyService.getOrdersByEmail('solomon@topmail.net')); //[{ email: "solomon@topmail.net", dish: "Burger" }, { email: "solomon@topmail.net", dish: "Apple pie" }]
//04. prototype
const parent = {
    name: "Stacey",
    surname: "Moore",
    age: 54,
    heritage: "Irish"
};
const child = Object.create(parent);
child.name = "Jason";
child.age = 27;
// console.log(parent, child);
// console.log(`Czy parent jest prototypem child: ${parent.isPrototypeOf(child)}`);
//05. prototype
const ancestor = {
    name: "Paul",
    age: 83,
    surname: "Dawson",
    heritage: "Irish"
};
const parent5 = Object.create(ancestor);
parent.name = "Stacey";
parent.surname = "Moore";
parent.age = 54;
// const child = Object.create(parent5);
// child.name = 'Jason';
// child.age = 27;
//06. deklaracja klasa
class Car06 {
}
//07. deklaracja klasa
class Car {
    constructor(brand, model, price){
        // Inicjalizacja właściwości instancji
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
}
// console.log(new Car('Audi', 'Q3', 36000));
//08. deklaracja klasa Destrukturyzacja obiektu
class Car08 {
    constructor({ brand, model, price }){
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
}
// const car = new Car08({ brand: 'Audi', model: 'Q3', price: 36000 });
// console.log(car);
//09. deklaracja klasa Destrukturyzacja obiektu metody
class Car09 {
    constructor({ brand, model, price }){
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
const car09 = new Car09({
    brand: "Audi",
    model: "Q3",
    price: 36000
});
// console.log(car09);
// console.log(`Price before:${car09.getPrice()}`);
// car09.changePrice(21_000);
// console.log(`Price after:`, car09.getPrice());
//10. deklaracja klasa Destrukturyzacja obiektu metody
class Storage {
    constructor(items = []){
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
        if (indexToRemove !== -1) this.items.splice(indexToRemove, 1);
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
    constructor(initialValue = ``){
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
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="
//12. deklaracja klasa  prywatne właściwości
class Car12 {
    #brand;
    constructor({ brand, model, price }){
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
    constructor(items){
        this.#items = items;
    }
    getItems() {
        return this.#items;
    }
    addItem(newItem) {
        this.#items.push(newItem);
    }
    removeItem(itemToRemove) {
        this.#items = this.#items.filter((item)=>item !== itemToRemove);
    }
}
// const storage = new Storage13(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
//14. klasa  prywatne właściwości
class StringBuilder14 {
    #value;
    constructor(initialValue){
        this.#value = initialValue;
    }
    getValue() {
        return this.#value;
    }
    padEnd(str) {
        this.#value += str;
    }
    padStart(str) {
        this.#value = str + this.#value;
    }
    padBoth(str) {
        this.padStart(str);
        this.padEnd(str);
    }
}
// const builder14 = new StringBuilder14('.');
// console.log(builder14.getValue()); // "."
// builder14.padStart('^');
// console.log(builder14.getValue()); // "^."
// builder14.padEnd('^');
// console.log(builder14.getValue()); // "^.^"
// builder14.padBoth('=');
// console.log(builder14.getValue()); // "=^.^="
//15. klasa  Gettery i settery
class Car15 {
    #brand;
    #model;
    #price;
    constructor({ brand, model, price }){
        this.#brand = brand;
        this.#model = model;
        this.#price = price;
    }
    get brand() {
        return this.#brand;
    }
    set brand(newBrand) {
        this.#brand = newBrand;
    }
    get model() {
        return this.#model;
    }
    set model(newModel) {
        this.#model = newModel;
    }
    get price() {
        return this.#price;
    }
    set price(newPrice) {
        this.#price = newPrice;
    }
}
//16. klasa  Static
class Car16 {
    #price;
    static MAX_PRICE = 50000;
    constructor({ price }){
        this.#price = price;
    }
    get price() {
        return this.#price;
    }
    set price(newPrice) {
        if (newPrice <= Car16.MAX_PRICE) this.#price = newPrice;
    }
}
// const audi = new Car16({ price: 35000 });
// console.log(audi.price); // 35000
// audi.price = 49000;
// console.log(audi.price); // 49000
// audi.price = 51000;
// console.log(audi.price); // 49000
// console.log(Car16.MAX_PRICE); // 50000
//17. klasa  Static
class Car17 {
    static #MAX_PRICE = 50000;
    static checkPrice(price) {
        if (price <= Car17.#MAX_PRICE) return "Success! Price is within acceptable limits";
        return "Error! Price exceeds the maximum";
    }
    constructor({ price }){
        this.price = price;
    }
}
const audi = new Car17({
    price: 36000
});
const bmw = new Car17({
    price: 64000
});
// console.log(Car17.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car17.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
//18. klasa  extends
class User18 {
    constructor(email){
        this.email = email;
    }
    get email() {
        return this.email;
    }
    set email(newEmail) {
        this.email = newEmail;
    }
}
class Admin extends User18 {
    static AccessLevel = {
        BASIC: "basic",
        SUPERUSER: "superuser"
    };
}
// console.log(Admin.AccessLevel.BASIC);
//19. klasa  extends
class User {
    email;
    constructor(email){
        this.email = email;
    }
    get email() {
        return this.email;
    }
    set email(newEmail) {
        this.email = newEmail;
    }
}
class Admin extends User {
    // Change code below this line
    static AccessLevel = {
        BASIC: "basic",
        SUPERUSER: "superuser"
    };
}
const mango = new Admin({
    email: "mango@mail.com",
    accessLevel: Admin.AccessLevel.SUPERUSER
});
console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

//# sourceMappingURL=index.7ee6c419.js.map
