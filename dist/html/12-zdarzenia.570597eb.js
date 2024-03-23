"use strict";
// section1 article2 Metoda addEventListener()
const singleBtn = document.querySelector("#single");
const handleClick = ()=>{
    console.log("click event listener callback");
};
singleBtn.addEventListener("click", handleClick);
// ===============================================
const multiBtn = document.querySelector("#multiple");
const firstCallback = ()=>{
    console.log("First callback!");
};
const secondCallback = ()=>{
    console.log("Second callback!");
};
const thirdCallback = ()=>{
    console.log("Third callback!");
};
multiBtn.addEventListener("click", firstCallback);
multiBtn.addEventListener("click", secondCallback);
multiBtn.addEventListener("click", thirdCallback);
// section1 article3 Metoda removeEventListener()
const addListenerBtn = document.querySelector(".js-add");
const removeListenerBtn = document.querySelector(".js-remove");
const btn = document.querySelector(".target-btn");
const handleClick_section1article3 = ()=>{
    console.log("click event listener callback");
};
addListenerBtn.addEventListener("click", ()=>{
    btn.addEventListener("click", handleClick_section1article3);
    console.log("click event listener was added to btn");
});
removeListenerBtn.addEventListener("click", ()=>{
    btn.removeEventListener("click", handleClick_section1article3);
    console.log("click event listener was removed from btn");
});
// section2 article1 Obiekt zdarzenia
const button = document.querySelector(".section2article1-btn");
const handleClickSection2Article1 = (event)=>{
    console.log("event: ", event);
    console.log("event type: ", event.type);
    console.log("currentTarget: ", event.currentTarget);
};
button.addEventListener("click", handleClickSection2Article1);
// section2 article2 Domyślne działania przeglądarki
const form = document.querySelector(".register-form");
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const { elements: { username, password } } = event.currentTarget;
    console.log(username.value, password.value);
});
// section3 article2 Domyślne działania przeglądarki
const clearLogBtn = document.querySelector(".js-clear");
const logList = document.querySelector(".log-list");
let keypressCounter = 1;
console.log(clearLogBtn);
document.addEventListener("keydown", logMessage);
document.addEventListener("keyup", logMessage);
clearLogBtn.addEventListener("click", reset);
function logMessage({ type, key, code }) {
    const markup = `<div class="log-item">
    <span class="chip">${keypressCounter}</span>
    <ul>
      <li><b>Event</b>: ${type}</li>
      <li><b>Key</b>: ${key}</li>
      <li><b>Code</b>: ${code}</li>
    </ul>
  </div>`;
    logList.insertAdjacentHTML("afterbegin", markup);
    if (type === "keyup") incrementKeypressCounter();
    console.log(markup);
}
function reset() {
    keypressCounter = 1;
    logList.innerHTML = "";
}
function incrementKeypressCounter() {
    keypressCounter += 1;
}

//# sourceMappingURL=12-zdarzenia.570597eb.js.map
