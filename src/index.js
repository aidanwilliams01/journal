import Entry from './journal.js';

function onPageLoad() {
  const form = document.querySelector("form");
  function formSubmission(event) {
    event.preventDefault();
    const title = document.querySelector('input#title').value;
    const body = document.querySelector('input#body').value;
    const entry = new Entry(title, body);
    const h3Element = document.createElement("h3");
    const pElement = document.createElement("p");
    const bodyElement = document.querySelector("body");
    const wordCount = entry.wordCount();
    const vowelCount = entry.vowelCount();
    const consonantCount = entry.consonantCount();
    const teaser = entry.getTeaser();
    h3Element.append(title);
    pElement.append(`Word count: ${wordCount}`);
    pElement.append(document.createElement('br'));
    pElement.append(`Vowel count: ${vowelCount}`);
    pElement.append(document.createElement('br'));
    pElement.append(`Consonant count: ${consonantCount}`);
    pElement.append(document.createElement('br'));
    pElement.append(`Teaser: ${teaser}`);
    bodyElement.append(h3Element);
    bodyElement.append(pElement);
  }
  form.addEventListener("submit", formSubmission);
}

window.addEventListener("load", onPageLoad);