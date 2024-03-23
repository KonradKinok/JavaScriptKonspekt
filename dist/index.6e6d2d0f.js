"use strict";
// section3 Wyszukiwanie elementów
const listWithId = document.querySelector("#menu");
listWithId.style.textTransform = "uppercase";
listWithId.style.fontSize = "24px";
console.log(listWithId);
const listWithClass = document.querySelector(".menu");
console.log(listWithClass);
const menuItemsByTagName = document.querySelectorAll("li");
console.log(menuItemsByTagName);
const menuItemsByClass = document.querySelectorAll(".menu-item");
console.log(menuItemsByClass);
const firstMenuItem = document.querySelector(".menu-item");
firstMenuItem.style.color = "tomato";
console.log(firstMenuItem);
// section4 Właściwości i atrybuty
const image = document.querySelector(".image");
console.log(image.src); // https://picsum.photos/id/9/320/240
console.log(image.alt); // A laptop
image.src = "https://picsum.photos/id/13/640/480";
image.alt = "River bank";
// section4 Właściwość textContent
const textEl = document.querySelector(".article-text");
console.log(textEl.textContent); // text inside p.article-text
const titleEl = document.querySelector(".article-title");
titleEl.textContent = "Welcome to Bahamas!";
// section4 Właściwość classList
const link = document.querySelector(".section4-link");
console.log(link.classList);
const hasActiveClass = link.classList.contains("section4-is-active");
console.log(`hasActiveClass - ${hasActiveClass}`);
link.classList.add("special");
console.log(link.classList);
link.classList.remove("section4-is-active");
console.log(link.classList);
link.classList.toggle("section4-is-active");
console.log(link.classList);
link.classList.replace("special", "regular");
console.log(link.classList);
// section4 Atrybuty
const picture = document.querySelector(".section4-image");
console.log(picture.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}
console.log(picture.hasAttribute("src")); // true
console.log(picture.getAttribute("alt")); // "Rocks and waterfall"
picture.setAttribute("alt", "Amazing nature");
console.log(picture.getAttribute("alt")); // Amazing nature
// section4 AtrybutyData
const saveBtn = document.querySelector('.editor button[data-action="save"]');
const closeBtn = document.querySelector('.editor button[data-action="close"]');
console.log(saveBtn.dataset.action); //save
console.log(closeBtn.dataset.action); //close
// section5 Dodawanie
const list = document.querySelector(".section5-usernames");
// Adds an item to the end of the list
const lastItem = document.createElement("li");
lastItem.textContent = "Poly";
list.append(lastItem);
// Adds an item to the beginning of the list
const firstItem = document.createElement("li");
firstItem.textContent = "Ajax";
list.prepend(firstItem);
// Adds a title before the list
const title = document.createElement("h2");
title.textContent = "USERNAMES";
list.before(title);
// Adds a paragraph after the list
const textSection5Dodawanie = document.createElement("p");
textSection5Dodawanie.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!";
list.after(textSection5Dodawanie);
// section5 Usuwanie
const textSection5 = document.querySelector(".section5-text");
textSection5.remove();
// section6 Czytanie
const articleSection6 = document.querySelector(".section6-article");
console.log(articleSection6.innerHTML);
const titleSection6 = document.querySelector(".section6-article .section6-title");
console.log(titleSection6.innerHTML);
const text = document.querySelector(".section6-article .section6-text");
console.log(text.innerHTML);
const linkSection6 = document.querySelector(".section6-article .section6-link");
console.log(linkSection6.innerHTML);
// section6 Zmiana
const titlesection6Zmiana = document.querySelector(".section6Zmiana-article .section6Zmiana-title");
titlesection6Zmiana.innerHTML = 'New and <span class="section6Zmiana-accent">improved</span> title';
// section6 Zmiana
const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node"
];
const listsection6 = document.querySelector(".section6list");
const markup = technologies.map((technology)=>`<li class="list-item">${technology}</li>`).join("");
// Check the console, you'll see a single string with HTML tags
console.log(markup);
// Adding all the markup in one operation
listsection6.innerHTML = markup;
// section6 article4 Dodanie
const article = document.querySelector(".section6article4-article");
const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
   <a class="link" href="#">Read more...</a>`;
// Replace += with = operator. See the difference?
// Article title is lost because we overwrite element content.
article.innerHTML += htmlString;
// section7 article1 Metoda insertAdjacentHTML()
const listsection7article1 = document.querySelector(".section7article1-list");
const newTechnologieslistsection7article1 = [
    "React",
    "TypeScript",
    "Node.js"
];
const markuplistsection7article1 = newTechnologieslistsection7article1.map((technology)=>`<li class="section7article1-list-item new">${technology}</li>`).join("");
listsection7article1.insertAdjacentHTML("beforeend", markuplistsection7article1);
listsection7article1.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");

//# sourceMappingURL=index.6e6d2d0f.js.map
