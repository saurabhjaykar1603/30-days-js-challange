// Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.

class Person1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// Create an instance of the Person class
const person = new Person1("Saurabh", 30);

// Log the greeting message
console.log(person.greeting());

// Task 2: Add a method to the Person class that updates the age property and logs the updated age.
class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    return `Hello, my name is ${this.name} and I am ${this.age} years
      old.`;
  }
  updateAge(newAge) {
    this.age = newAge;
    console.log(`Updated age: ${this.age}`);
  }
}
// Create an instance of the Person class
const person2 = new Person2("Saurabh", 30);

// Update the age and log the updated age
person2.updateAge(31);
