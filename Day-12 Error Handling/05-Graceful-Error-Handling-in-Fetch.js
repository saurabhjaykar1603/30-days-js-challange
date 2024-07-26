// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.

const invalidUrl = "https://invalid-url.com/data";

// Use fetch to request data from the invalid URL
fetch(invalidUrl)
  .then((response) => {
    // Check if the response is OK (status in the range 200-299)
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    // Handle the data from the response
    console.log("Data received:", data);
  })
  .catch((error) => {
    // Handle any errors that occurred during the fetch
    console.error("Fetch error:", error.message);
  });

// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
async function fetchInvalidUrl() {
  try {
    const response = await fetch(invalidUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    console.log("Data received:", data);
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
}
fetchInvalidUrl();
