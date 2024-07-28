//Task 3: Define a class Student that extends the Person class. Add a property student Id and a method to return the student ID. Create an instance of the Student class and log the student ID

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `${this.name}, ${this.age} years old`;
  }
}

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age); // Call the constructor of the Person class
    this.studentId = studentId; // Add the studentId property
  }

  getStudentId() {
    return this.studentId; // Method to return the studentId
  }
}

// Create an instance of the Student class
const student = new Student("Saurabh", 20, "S12345");

// Log the student ID
console.log(student.getStudentId()); // Output: S12345

// Log all properties of the student instance
console.log(student); // Logs the whole student object with all properties

// Alternatively, log properties individually
console.log(`Name: ${student.name}`);
console.log(`Age: ${student.age}`);
console.log(`Student ID: ${student.studentId}`);

// Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.

class Student2 extends Person {
  constructor(name, age, studentId) {
    super(name, age); // Call the constructor of the Person class
    this.studentId = studentId; // Add the studentId property
  }

  getStudentId() {
    return this.studentId; // Method to return the studentId
  }

  // Override the greeting method
  greeting() {
    return `Hello, my name is ${this.name} and my student ID is ${this.studentId}.`;
  }
}

// Create an instance of the Student class
const student2 = new Student2("Saurabh", 20, "S12345");

// Log the overridden greeting message
console.log(student2.greeting()); // Output: Hello, my name is Saurabh and my student ID is S12345.
