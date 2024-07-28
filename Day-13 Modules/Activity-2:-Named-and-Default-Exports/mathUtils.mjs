// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
// mathUtils.js

// Function to add two numbers
export function add(a, b) {
    return a + b;
}

// Function to subtract one number from another
export function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
export function multiply(a, b) {
    return a * b;
}

// Function to divide one number by another
export function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}
