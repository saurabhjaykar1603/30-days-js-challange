// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
function executeTask() {
  try {
    console.log("In the try block - Task started.");

    // Simulate an error
    throw new Error("Something went wrong!");

    console.log("In the try block - Task completed."); // This line will not be executed
  } catch (error) {
    console.log("In the catch block - An error occurred: ", error.message);
  } finally {
    console.log("In the finally block - Task finished.");
  }
}

executeTask();
