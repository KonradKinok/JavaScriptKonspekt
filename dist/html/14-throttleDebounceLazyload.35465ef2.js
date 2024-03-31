"use strict";
// const example_theory_s1a1 = document.querySelector('div#example-theory-s1a1');
// const example_practice_s1a1 = document.querySelector(
//   'div#example-practice-s1a1'
// );
// const phrase = document.createElement('pre');
// phrase.classList.add('example-theory-pre');
// phrase.textContent = example_practice_s1a1.innerHTML;
// example_theory_s1a1.prepend(phrase);
function htmlTagViewExample(tagDivAndIdExampleTheory, tagDivAndIdExamplePractice) {
    const example_theory = document.querySelector(tagDivAndIdExampleTheory);
    const example_practice = document.querySelector(tagDivAndIdExamplePractice);
    const phrase = document.createElement("pre");
    phrase.classList.add("example-theory-pre");
    phrase.textContent = example_practice.innerHTML;
    example_theory.prepend(phrase);
}
htmlTagViewExample("div#example-theory-s1a1", "div#example-practice-s1a1");

//# sourceMappingURL=14-throttleDebounceLazyload.35465ef2.js.map
