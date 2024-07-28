// Task 7: Add a getter method to the Person class to return the full name (assume a firstName and last Name property). Create an instance and log the full name using the getter.
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Create an instance of the Person class
const person = new Person("Saurabh", "Jaykar");

// Log the full name using the getter
console.log(person.fullName); // Output: John Doe

// Task 8: Add a setter method to the Person class to update the name properties (firstName and LastName). Update the name using the setter and log the updated full name.

class Person2 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    const [firstName, lastName] = name.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// Create an instance of the Person class
const person2 = new Person2("Saurabh", "Jaykar");

// Log the full name using the getter
console.log(person2.fullName); // Output: John Doe

// Update the name using the setter
person2.fullName = "Yogita Shete";

// Log the updated full name using the getter
console.log(person2.fullName); // Output: Jane Smith
