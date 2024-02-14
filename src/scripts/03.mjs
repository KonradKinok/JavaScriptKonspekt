//Moduł2
//zadanie29
// Napisz funkcję getEvenNumbers(start, end), która zwróci tablicę wszystkich liczb parzystych od start do end (włącznie).
function getEvenNumbers(start, end)
{
    const tab = [];
    for (let i = start; i <= end; i++) {
       if (i%2===0) {
           tab.push(i);
       }
    }
    return tab;
}
const temp=getEvenNumbers(2, 5);
console.log(temp);

const book = {
                title: "The Last Kingdom",
                author: "Bernard Cornwell",
                genres: ["historical prose", "adventure"],
                isPublic: true,
                rating: 8.38,
            };

            book.rating = 9;
            book.isPublic = false;
            book.genres.push("drama");

            console.log(book.rating);// 9
            console.log(book.isPublic);// false
            console.log(book.genres);// ['historical prose', 'adventures', 'drama']