// Task 6: Create a promise that randomly resolves or rejects. Use catch() to handle the rejection and log an appropriate message to the console.
const randomPromises = new Promise((resolve, reject) => {
  const random = Math.random();
  if (random < 0.5) {
    resolve("Random promise resolved");
  } else {
    reject("Random promise rejected");
  }
});
randomPromises
  .then((m) => {
    console.log(m);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

//   Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
async function randomPromise() {
  try {
    const random = Math.random();
    if (random < 0.5) {
      await new Promise((resolve) => {
        resolve("Random promise resolved");
      });
    } else {
      await new Promise((_, reject) => {
        reject("Random promise rejected");
      });
    }
  } catch (error) {
    console.log("Error:", error);
  }
}
randomPromise();
