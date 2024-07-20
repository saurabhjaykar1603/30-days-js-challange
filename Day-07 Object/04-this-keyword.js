// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
let book = {
  title: "Harry Potter",
  year: 2000,
  author: "J.K Rowling",
  getBookInfo() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};
console.log(book.getBookInfo());