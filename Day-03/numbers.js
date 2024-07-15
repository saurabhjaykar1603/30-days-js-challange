// Activity 1: If-Else Statements

// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

let number = 10;

if (number > 0) {
  console.log("The number is positive");
} else if (number < 0) {
  console.log("The number is negative");
} else {
  console.log("The number is zero");
}

// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
let num1 = 10;
let num2 = 20;
let num3 = 30;
let largest;
if (num1 > num2) {
  if (num1 > num3) {
    largest = num1;
  } else {
    largest = num3;
  }
} else if (num2 > num3) {
  largest = num2;
} else {
  largest = num3;
}
console.log(largest);
