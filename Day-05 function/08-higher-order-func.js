// Task 9: Write a  higher-order function that takes a function and a number, and calls the function that many times.
function JuiceMakerMachine(fn, n) {
  for (let i = 0; i < n; i++) {
    fn(i + 1);
  }
}

// Example usage:
function mango(glassCount) {
  console.log(`Hello! This is glass number ${glassCount}`);
}

// Call the mango function 5 times
JuiceMakerMachine(mango, 5);

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function composeFunctions(func1, func2, value) {
  return func2(func1(value));
}

// Example usage:
function double(x) {
  return x * 2;
}

function square(x) {
  return x * x;
}

const result = composeFunctions(double, square, 2);
console.log(result); // Output: 100
