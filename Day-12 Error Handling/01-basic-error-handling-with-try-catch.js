// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function throwError() {
  try {
    // Intentionally throw an error
    throw new Error("This is a test error");
  } catch (error) {
    // Log the error message to the console
    console.error(`Error: ${error.message}`);
  }
}
throwError();

// • Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
function divideNumbers(num1, num2) {
  try {
    if (num2 === 0) {
      throw new Error("Cannot divide by zero");
    }
    const result = num1 / num2;
    return result;
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}
divideNumbers(10, 0);


