// Activity 3: Comparison Operators

// Task 8: Write a program to compare two numbers using > and < and log the result to the console.
let num1 = 5;
let num2 = 10;

console.log(num1 < num2); //#output true
console.log(num1 > num2); //#output false

// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
console.log(num1 <= num2); //#output true
console.log(num1 >= num2); //#output false

// Task 10: Write a program to compare two numbers using == and === and log the result to the console.
let num3 = 12;
let num4 = "12";
console.log(num3 == num4); //#output true
console.log(num3 === num4); //#output false

// Activity 4: Logical Operators

// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
let num5 = 5;
let num6 = 10;
console.log(num5 > 0 && num6 > 0); //#output true
console.log(num5 > 0 && num6 < 0); //#output false
console.log(num5 < 0 && num6 > 0); //#output false
console.log(num5 < 0 && num6 < 0); //#output false

// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
console.log(num5 > 0 || num6 > 0); //#output true
console.log(num5 > 0 || num6 < 0); //#output true
console.log(num5 < 0 || num6 > 0); //#output true
console.log(num5 < 0 || num6 < 0); //#output false

// Task 13: Write a program that uses the! operator to negate a condition and log the result to the console.
console.log(!num5 > 0); //#output false
console.log(!num5 < 0); //#output true
console.log(!(num5 > 0 && num6 > 0)); //#output false
console.log(!(num5 > 0 || num6 > 0)); //#output false
