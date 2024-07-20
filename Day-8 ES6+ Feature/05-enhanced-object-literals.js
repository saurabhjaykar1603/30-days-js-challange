// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const property1 = "value1";
const property2 = "value2";

const obj = {
  // Shorthand property names
  property1,
  property2,

  // Method definition shorthand
  method1() {
    console.log("This is method1");
  },

  method2() {
    console.log("This is method2");
  },

  // Computed property name
  ["computed" + "Property"]: "computedValue",
};

console.log(obj);

// Calling methods
obj.method1();
obj.method2();

// Task 9: Create an object with computed property names based on variables and log the object to the console.
// Define variables
const propertyName1 = "name";
const propertyName2 = "age";
const propertyName3 = "country";

// Create an object with computed property names
const person = {
  [propertyName1]: "Saurabh Jaykar",
  [propertyName2]: 30,
  [propertyName3]: "India",
};

// Log the object to the console
console.log(person);
