// Import the add function from mathOperations.js
const add = require('./mathOperations.js');
const person = require('./person.js');
// Use the add function
const num1 = 5;
const num2 = 10;
const result = add(num1, num2);

console.log(`The sum of ${num1} and ${num2} is ${result}`);



// Use the person's properties and methods
console.log(`Name: ${person.name}`);
console.log(`Age: ${person.age}`);
person.greet();
person.haveBirthday();
person.greet();