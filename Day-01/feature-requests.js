// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

// String
let name = "Saurabh Jaykar";
console.log(`Value: ${name}, Type: ${typeof name}`);

// Number
let age = 22;
console.log(`Value: ${age}, Type: ${typeof age}`);

// Boolean
let isAdmin = false;
console.log(`Value: ${isAdmin}, Type: ${typeof isAdmin}`);

// Object
let student = {
  name: name,
  age: age,
  isAdmin: isAdmin,
};
console.log(`Value: ${JSON.stringify(student)}, Type: ${typeof student}`);

// Array
let hobbies = ["reading", "traveling", "coding"];
console.log(`Value: ${hobbies}, Type: ${typeof hobbies}`);

// Undefined
let undefinedVar;
console.log(`Value: ${undefinedVar}, Type: ${typeof undefinedVar}`); // note type of undefined is undefined

// Null
let nullVar = null;
console.log(`Value: ${nullVar}, Type: ${typeof nullVar}`); // note type of null is object

// Symbol
let symbolVar = Symbol("symbol");
console.log(`Value: ${symbolVar.toString()}, Type: ${typeof symbolVar}`);

// BigInt
let bigIntVar = BigInt(123456789012345678901234567890);
console.log(`Value: ${bigIntVar}, Type: ${typeof bigIntVar}`);

///////////////////////////////////////////////////////////////////////////////////////////////

// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

// Using let
let variableLet = "Initial Value";
console.log(`let before reassignment: ${variableLet}`);

variableLet = "Reassigned Value";
console.log(`let after reassignment: ${variableLet}`);

// Using const
const variableConst = "Initial Value";
console.log(`const before reassignment: ${variableConst}`);

try {
  variableConst = "Reassigned Value";
} catch (error) {
  console.log(`Error when reassigning const: ${error.message}`);
}

// here we learn Output shows that `let` can be reassigned but `const` cannot
