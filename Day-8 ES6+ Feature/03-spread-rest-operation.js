// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

let library = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    pages: 257,
    read: false,
  },
  {
    title: "The Grapes of Wrath",
    author: "John Steinbeck",
    year: 1939,
    pages: 464,
    read: false,
  },
];
let newBook = {
  title: "The Catcher in the Rye",
  author: "J.D. Salinger",
  year: 1951,
  pages: 234,
  read: false,
};
let newLibrary = [...library, newBook];
console.log(newLibrary);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
