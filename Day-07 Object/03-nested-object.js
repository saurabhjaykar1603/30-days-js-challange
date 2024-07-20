// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
let library = {
  name: "Library",
  books: [
    {
      title: "Harry Potter",
      author: "J.K. Rowling",
      year: 1997,
      pages: 223,
    },
    {
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      year: 1954,
      pages: 1216,
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      year: 1937,
      pages: 310,
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      year: 1951,
      pages: 234,
    },
  ],
};
console.log(library);

// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log(library.name);
console.log(library.books.map((book) => book.title));
