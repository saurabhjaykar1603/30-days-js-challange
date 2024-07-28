// Task 6: Install a third-party module (e.g.. lodash) using npm. Import and use a function from this module in a script

const _ = require("lodash");

// Use the capitalize function from lodash
const text = "hello world";
const capitalizedText = _.capitalize(text);

console.log(capitalizedText); // Output: "Hello world"

// Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.
// Import the axios module
const axios = require("axios");

// Use axios to make a GET request
axios
  .get("https://official-joke-api.appspot.com/random_joke")
  .then((response) => {
    console.log("Joke:", response.data.setup);
    console.log("Punchline:", response.data.punchline);
  })
  .catch((error) => {
    console.error("Error fetching the joke:", error);
  });
