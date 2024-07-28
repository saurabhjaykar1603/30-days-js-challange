// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
// Define the person object
const person = {
  name: "Saurabh jaykar",
  age: 30,
  greet: function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  },
  haveBirthday: function () {
    this.age++;
    console.log(`Happy Birthday! I am now ${this.age} years old.`);
  },
};

// Export the person object
module.exports = person;
