"use strict";
const list = document.querySelector("ul#main-menu");
const title = document.querySelector("title");
const menuItem = [
    {
        name: "Menu",
        link: "../index.html"
    },
    {
        name: "01. Zmienne i typy",
        link: "../html/01-zajeciaWprowadzajace.html"
    },
    {
        name: "02. Rozga\u0142\u0119zienia i cykle",
        link: "../html/02-rozgalezieniaCykle.html"
    },
    {
        name: "03. Tablice",
        link: "../html/03-tablice.html"
    },
    {
        name: "04. Funkcje",
        link: "../html/04-funkcje.html"
    },
    {
        name: "05. Obiekty",
        link: "../html/05-obiekty.html"
    },
    {
        name: "06. Operacje spread/rest",
        link: "../html/06-operacjeSpreadRest.html"
    },
    {
        name: "07. Callback i funkcje strza\u0142kowe",
        link: "../html/07-callbackFunkcjeStrzalkowe.html"
    },
    {
        name: "08. Metody tablic",
        link: "../html/08-metodyTablic.html"
    },
    {
        name: "09. S\u0142owo kluczowe this",
        link: "../html/09-slowoKluczoweThis.html"
    },
    {
        name: "10. Prototypy i klasy",
        link: "../html/10-prototypyKlasy.html"
    },
    {
        name: "11. DOM",
        link: "../html/11-dom.html"
    },
    {
        name: "12. Zdarzenia",
        link: "../html/12-zdarzenia.html"
    },
    {
        name: "13. Delegacja zdarze\u0144",
        link: "../html/13-delegacjaZdarzen.html"
    },
    {
        name: "14. Throttle Debounce Lazyload",
        link: "../html/14-throttleDebounceLazyload.html"
    },
    {
        name: "15. Modu\u0142owo\u015B\u0107 kodu",
        link: "../html/15-modulowoscKodu.html"
    },
    {
        name: "16. Web storage",
        link: "../html/16-webStorage.html"
    },
    {
        name: "17. Minutniki i czas",
        link: "../html/17-minutnikiCzas.html"
    },
    {
        name: "18. Promise",
        link: "../html/18-promise.html"
    },
    {
        name: "19. Zapytania HTTP",
        link: "../html/19-zapytaniaHttp.html"
    },
    {
        name: "20. Paginacja",
        link: "../html/20-paginacja.html"
    },
    {
        name: "21. CRUD",
        link: "../html/21-crud.html"
    },
    {
        name: "22. Sk\u0142adnia async/await",
        link: "../html/22-skladniaAsyncAwait.html"
    }
];
menuItem.forEach((element)=>{
    const listItem = document.createElement("li");
    const linkItem = document.createElement("a");
    linkItem.href = element.link;
    linkItem.textContent = element.name;
    linkItem.classList.add("link");
    if (title.textContent === element.name.slice(4)) {
        linkItem.classList.add("current-page");
        const footerTitle = document.querySelector("div#footer-title");
        footerTitle.textContent = element.name;
    }
    listItem.appendChild(linkItem);
    list.appendChild(listItem);
});

//# sourceMappingURL=13-delegacjaZdarzen.1cba540e.js.map
