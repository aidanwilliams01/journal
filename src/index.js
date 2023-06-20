import Entry from './journal.js';

function onPageLoad() {
  const form = document.querySelector("form");
  function formSubmission(event) {
    event.preventDefault();
    const title = document.querySelector('input#title');
    const body = document.querySelector('input#body');
    const entry = new Entry(title, body);
  }
  form.addEventListener("submit", formSubmission);
}

window.addEventListener("load", onPageLoad);