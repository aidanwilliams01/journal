export default function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function() {
  const text = this.body.replaceAll(/[^\w\s]/g, '');
  return text.trim().split(/\s+/).length;
};

Entry.prototype.vowelCount = function() {
  const body = this.body.toLowerCase();
  return body.match(/[aeiou]/g).length;
};

Entry.prototype.consonantCount = function() {
  const body = this.body.toLowerCase();
  return body.match(/[bcdfghjklmnpqrstvwxyz]/g).length;
};

Entry.prototype.getTeaser = function() {
  const periodIndex = this.body.indexOf('.');
  const firstSentence = this.body.slice(0, periodIndex + 1);
  const firstSentenceArray =  firstSentence.trim().split(/\s+/);
  let teaser = '';
  for (let index = 0; index < 8; index++) {
    const element = firstSentenceArray[index];
    teaser = `${teaser} ${element}`;
    if (index === firstSentenceArray.length - 1) {
      break;
    }
  }
  return teaser.trim();
};