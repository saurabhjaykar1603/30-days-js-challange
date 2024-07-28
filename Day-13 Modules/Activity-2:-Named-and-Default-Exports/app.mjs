// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
// app.js

import { add, subtract, multiply, divide } from "./mathUtils.mjs";

const num1 = 10;
const num2 = 5;

console.log(`Add: ${num1} + ${num2} = ${add(num1, num2)}`);
console.log(`Subtract: ${num1} - ${num2} = ${subtract(num1, num2)}`);
console.log(`Multiply: ${num1} * ${num2} = ${multiply(num1, num2)}`);
console.log(`Divide: ${num1} / ${num2} = ${divide(num1, num2)}`);

// Task 4: Create a module that exports a single function using default export. Import and use this function in another script.

import greet from "./greet.js";

const name = "Saurabh";
console.log(greet(name));
