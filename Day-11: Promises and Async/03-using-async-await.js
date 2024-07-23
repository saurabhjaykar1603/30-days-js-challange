// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
const delayMessage = (message) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, 1000);
  });
};
const logMessage = async (message) => {
  const result = await delayMessage(message);
  console.log(result);
};
logMessage("Hello World");

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
const delayMessage2 = (message) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(message);
      }, 1000);
    });
  };
  
  const logMessage2 = async (message) => {
    try {
      const result = await delayMessage2(message);
      console.log(result);
    } catch (error) {
      console.log('Error:', error);
    }
  };
  
  logMessage2("Hello World");
  
