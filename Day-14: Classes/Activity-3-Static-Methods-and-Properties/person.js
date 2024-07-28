// Task 5: Add a static method to the Person class that retums a generic greeting message. Call this static method without creating an instance of the class and log the message.
class Person {
  static genericGreeting() {
    return "Hello! Welcome to the community.";
  }
}

// Call the static method without creating an instance of the class
const greetingMessage = Person.genericGreeting();

// Log the message
console.log(greetingMessage);
