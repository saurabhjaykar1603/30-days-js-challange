// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1 resolved"), 1000)
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 2 resolved"), 2000)
);
const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 3 resolved"), 3000)
);

const logAllPromises = async () => {
  try {
    const results = await Promise.all([promise1, promise2, promise3]);
    console.log(results);
  } catch (error) {
    console.error("Error:", error);
  }
};

logAllPromises();

// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
// Create a few example promises with different resolve times
const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('First promise resolved');
    }, 500); // Resolves after 500ms
  });
  
  const secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Second promise resolved');
    }, 100); // Resolves after 100ms
  });
  
  const thirdPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Third promise resolved');
    }, 300); // Resolves after 300ms
  });
  
  // Use Promise.race to log the value of the first promise that resolves
  Promise.race([firstPromise, secondPromise, thirdPromise])
    .then((value) => {
      console.log('First resolved value:', value);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  