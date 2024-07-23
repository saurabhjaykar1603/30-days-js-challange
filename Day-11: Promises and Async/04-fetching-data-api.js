// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchData();
