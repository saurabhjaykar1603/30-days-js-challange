// app.js

// Import the entire module as an object
const mathModule = require('./module.js');

// Use the properties of the imported module
console.log("PI:", mathModule.PI);
console.log("E:", mathModule.E);

console.log("Add 2 + 3:", mathModule.add(2, 3));
console.log("Subtract 5 - 2:", mathModule.subtract(5, 2));
console.log("Multiply 4 * 3:", mathModule.multiply(4, 3));
console.log("Divide 10 / 2:", mathModule.divide(10, 2));
