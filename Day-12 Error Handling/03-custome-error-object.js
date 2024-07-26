// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

function performTask() {
  try {
    console.log("Starting the task...");

    // Simulate an error by throwing an instance of the custom error
    throw new CustomError("This is a custom error!");

    console.log("Task completed successfully."); // This line will not be executed
  } catch (error) {
    if (error instanceof CustomError) {
      console.log("Caught a custom error: ", error.message);
    } else {
      console.log("Caught an unexpected error: ", error.message);
    }
  } finally {
    console.log("Finished task execution.");
  }
}

performTask();  

// • Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateInput(input) {
    if (!input || input.trim() === '') {
      throw new ValidationError("Input cannot be empty.");
    }
    // Additional validation rules can be added here
    return true;
  }

  try {
    const userInput = ""; // Example input
    validateInput(userInput);
    console.log("Input is valid!");
  } catch (error) {
    if (error instanceof ValidationError) {
      console.error(`Validation Error: ${error.message}`);
    } else {
      console.error(`Unknown Error: ${error.message}`);
    }
  }

