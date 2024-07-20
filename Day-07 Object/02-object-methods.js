// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
let book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  getTitleAndAuthor: function () {
    return `${this.title} by ${this.author}`;
  },
};

console.log(book.getTitleAndAuthor());

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
let book1 = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  updateYear: function (year) {
    this.year = year;
  },
};

book1.updateYear(2022);
console.log(book1);
