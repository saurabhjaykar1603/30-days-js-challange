// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5, 2)); // Output: 10
console.log(multiply(5)); // Output: 5 (uses default value of b, which is 1)

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

function greet(name, age = 18) {
  return `Hello, ${name}! You are ${age} years old and you like ginger tea. It's great for your health!`;
}

console.log(greet("Hitesh", 20)); // Hello, Hitesh! You are 20 years old and you like ginger tea. It's great for your health!
