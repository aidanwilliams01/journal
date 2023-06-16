function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function() {
  const text = this.body.replaceAll(/[^\w\s]/g, '');
  return text.trim().split(/\s+/).length;
}

Entry.prototype.letterCount = function() {
  let count = this.body.match(/[a-z]/g).length;
  count += this.body.match(/[A-Z]/g).length;
  return count;
}