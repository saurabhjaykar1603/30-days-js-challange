// Variables and Data Types

// * Activity 1: Variable Declaration

// Task 1: Declare a variable using var, assign it a number, and log the value to the console.

var num = 5;
console.log(num); //#output 5

// Task 2: Declare a variable using let, assign it a string, and log the value to the console

let str = "Hello Guide and Grow";
console.log(str); //#output Hello Guide and Grow

// * Activity 2: Constant Declaration

// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.

const bool = true;
console.log(bool); //#output true

// * Activity 3: Data Types

// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.

var marks = 60;
console.log(typeof marks); //#output number

let orgName = "Guide and Grow";
console.log(typeof orgName); //#output string

let isAdmin = true;
console.log(typeof isAdmin); //#output boolean

const student = {
  name: "Saurabh Jaykar",
  age: 25,
  email: "jaykarsaurabh@gmail.com",
  isEmailVerified: false,
};
console.log(typeof student); //#output object
console.log(typeof student.name); //#output string
console.log(typeof student.age); //#output number
console.log(typeof student.email); //#output string
console.log(typeof student.isEmailVerified); //#output boolean

let courses = ["devOps", "Mern Stack", "Python with Django", "JS DSA"];
console.log(typeof courses); //#output object

// Many students commonly answer that the type of an array in JavaScript is "array," but this is incorrect. In JavaScript, arrays are a special type of object. You can verify this by using the typeof operator, which will return "object" for arrays.

// * Activity 4: Reassigning Variables

// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.

let num1 = 10;
console.log(num1); //#output 10
num1 = 20;
console.log(num1); //#output 20
// so here we learned
//  We can reassign a variable using let

// * Activity 5: Understanding const

// Task 6: Try reassigning a variable declared with const and observe the error.
const num2 = 10;
num2 = 20;
console.log(num2); //#output TypeError: Assignment to constant variable
// so here we learned
//  We can't reassign a variable using const

