// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const max = (a, b) => {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};

//   Example
console.log(max(2, 5)); // 5
console.log(max(3, -1)); // 3
