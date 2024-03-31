'use strict';
/**
 *
 * @param {string} tagDivAndIdExampleTheory
 * @param {string} tagDivAndIdExamplePractice
 */
export function htmlTagViewExample(
  tagDivAndIdExampleTheory,
  tagDivAndIdExamplePractice,
  className = 'example-theory-pre'
) {
  const example_theory = document.querySelector(tagDivAndIdExampleTheory);
  const example_practice = document.querySelector(tagDivAndIdExamplePractice);

  const phrase = document.createElement('pre');
  phrase.classList.add(className);
  phrase.textContent = 'HTML:' + example_practice.innerHTML;
  example_theory.prepend(phrase);
}
