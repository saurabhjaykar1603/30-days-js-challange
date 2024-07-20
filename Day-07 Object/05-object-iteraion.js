// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
let book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  pages: 257,
  language: "English",
  ISBN: "978-0-14-243739-6",
};
for (let key in book) {
  console.log(key, book[key]);
}

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log(Object.keys(book));
console.log(Object.values(book));
