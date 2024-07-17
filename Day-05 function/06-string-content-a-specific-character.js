// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const checkChar = (str, char) => {
  return str.includes(char);
};
console.log(checkChar("Hello", "l")); // true
console.log(checkChar("Hello", "a")); // false
console.log(checkChar("Hello", "h")); // true
console.log(checkChar("Hello", "e")); // true
