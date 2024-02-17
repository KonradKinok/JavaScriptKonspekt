//deklaracja obiektu
const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: [
        "premium",
        "promoted",
        "top"
    ],
    //deklaracja obiektu w obiekcie
    owner: {
        name: "Henry",
        phone: "982-126-1588",
        email: "henry.carter@aptmail.com"
    }
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
const aptRating = apartment["rating"];
const aptDescr = apartment["descr"];
const aptPrice = apartment["price"];
const aptTags = apartment["tags"];
//zmiana wartości właściwości obiektu
apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = "Henry Sibola";
apartment.tags.push("trusted");
//7. dodanie właściwości i wraz z wartościami do obiektu
apartment.area = 60;
apartment.rooms = 3;
apartment.location = {};
apartment.location.country = "Jamaica";
apartment.location.city = "Kingston";
//8. tworzenie właściwości obiektu ze wcześniej zadeklarowanych zmiennych
const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = [
    "on sale",
    "trending",
    "best buy"
];
const product = {
    name,
    price,
    image,
    tags
};
//9. dodanie właściwości o nieznanej nazwie
const emailInputName = "email";
const passwordInputName = "password";
const credentials = {
    [emailInputName]: "henry.carter@aptmail.com",
    [passwordInputName]: "jqueryismyjam"
};
//10. iteracja po obiekcie - dodanie keys i values do tablic
const apartment1 = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153
};
const keys = [];
const values = [];
for(const key in apartment1){
    keys.push(key);
    values.push(apartment1[key]);
}
//11. iteracja po obiekcie - sprawdzanie własnej właściwości
const keys11 = [];
const values11 = [];
const advert = {
    service: "apt"
};
const apartment11 = Object.create(advert);
apartment11.descr = "Spacious apartment in the city center";
apartment11.rating = 4;
apartment11.price = 2153;
for(const key in apartment11)if (apartment11.hasOwnProperty(key)) {
    keys11.push(key);
    values11.push(apartment11[key]);
}
//12. funkcja zwracająca tylko własne właściwości
function countProps(object) {
    let propCount = 0;
    for(const key in object)if (object.hasOwnProperty(key)) propCount++;
    return propCount;
}
const count = countProps({
    name: "Mango",
    age: 2
});
// console.log(count);
//13.
const apartment13 = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153
};
const values13 = [];
const keys13 = Object.keys(apartment13);
// for (const key of keys13) {
//   values13.push;
//   // Wartość właściwości
//   console.log(book[key]);
// }
console.log(keys13);

//# sourceMappingURL=index.d858f7b6.js.map
