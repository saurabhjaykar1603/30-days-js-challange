// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let heros = ["hulk", "spiderman", "superman", "thor"];
let newHeros = heros.map((hero) => hero.toUpperCase());
console.log(newHeros);
// Output: ["HULK", "SPIDERMAN", "SUPERMAN", "THOR"]

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);
// Output: [2, 4, 6]

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
let numbers1 = [1, 2, 3, 4, 5, 6];
let sum = numbers1.reduce((acc, number) => acc + number, 0);
console.log(sum);
// Output: 21
