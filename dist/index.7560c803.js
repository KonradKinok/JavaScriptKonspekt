//Moduł2
//zadanie29
// Napisz funkcję getEvenNumbers(start, end), która zwróci tablicę wszystkich liczb parzystych od start do end (włącznie).
// function getEvenNumbers(start, end)
// {
//     const tab = [];
//     for (let i = start; i <= end; i++) {
//        if (i%2===0) {
//            tab.push(i);
//        }
//     }
//     return tab;
// }
// const temp=getEvenNumbers(2, 5);
// console.log(temp);
// const book = {
//                 title: "The Last Kingdom",
//                 author: "Bernard Cornwell",
//                 genres: ["historical prose", "adventure"],
//                 isPublic: true,
//                 rating: 8.38,
//             };
//             book.rating = 9;
//             book.isPublic = false;
//             book.genres.push("drama");
//             console.log(book.rating);// 9
//             console.log(book.isPublic);// false
// console.log(book.genres);// ['historical prose', 'adventures', 'drama']
// const bookShelf = {
//   books: ["The Last Kingdom", "Yeti"],
//   getBooks() {
//     console.log(this);
//   },
// };
// // Kropka jest poprzedzona obiektem bookShelf,
// // więc kiedy metoda jest wywoływana,
// // this będzie przechowywało link do niego.
// bookShelf.getBooks();// {books: ['The Last Kingdom'], getBooks: f getBooks()}
const bookShelf = {
    books: [
        "The Last Kingdom"
    ],
    getBooks () {
        return this.books;
    },
    addBook (bookName) {
        this.books.push(bookName);
    },
    removeBook (bookName) {
        const bookIndex = this.books.indexOf(bookName);
        this.books.splice(bookIndex, 1);
    }
};
console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
bookShelf.addBook("The Mist");
bookShelf.addBook("Dream Guardian");
console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
bookShelf.removeBook("The Mist");
console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

//# sourceMappingURL=index.7560c803.js.map
