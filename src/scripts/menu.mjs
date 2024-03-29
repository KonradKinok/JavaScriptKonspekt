'use strict';
const list = document.querySelector('ul#main-menu');
const title = document.querySelector('title');

const menuItem = [
  {
    name: 'Menu',
    link: '../index.html',
  },
  {
    name: '01. Zmienne i typy',
    link: '../html/01-zajeciaWprowadzajace.html',
  },
  {
    name: '02. Rozgałęzienia i cykle',
    link: '../html/02-rozgalezieniaCykle.html',
  },
  {
    name: '03. Tablice',
    link: '../html/03-tablice.html',
  },
  {
    name: '04. Funkcje',
    link: '../html/04-funkcje.html',
  },
  {
    name: '05. Obiekty',
    link: '../html/05-obiekty.html',
  },
  {
    name: '06. Operacje spread/rest',
    link: '../html/06-operacjeSpreadRest.html',
  },
  {
    name: '07. Callback i funkcje strzałkowe',
    link: '../html/07-callbackFunkcjeStrzalkowe.html',
  },
  {
    name: '08. Metody tablic',
    link: '../html/08-metodyTablic.html',
  },
  {
    name: '09. Słowo kluczowe this',
    link: '../html/09-slowoKluczoweThis.html',
  },
  {
    name: '10. Prototypy i klasy',
    link: '../html/10-prototypyKlasy.html',
  },
  {
    name: '11. DOM',
    link: '../html/11-dom.html',
  },
  {
    name: '12. Zdarzenia',
    link: '../html/12-zdarzenia.html',
  },
  {
    name: '13. Delegacja zdarzeń',
    link: '../html/13-delegacjaZdarzen.html',
  },
  {
    name: '14. Throttle Debounce Lazyload',
    link: '../html/14-throttleDebounceLazyload.html',
  },
];

menuItem.forEach(element => {
  const listItem = document.createElement('li');
  const linkItem = document.createElement('a');

  linkItem.href = element.link;
  linkItem.textContent = element.name;
  linkItem.classList.add('link');
  if (title.textContent === element.name.slice(4)) {
    linkItem.classList.add('current-page');
  }

  listItem.appendChild(linkItem);
  list.appendChild(listItem);

  //   list.append(listItem);
});
