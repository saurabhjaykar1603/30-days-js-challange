// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

function isLeapYear(year) {
  let isLeap = false;
  if (year % 4 === 0) {
    if(year %100 !==0 || (year % 100===0 && year% 400===0)){
        isLeap = true;
    }
  }
  return isLeap;
  
}
console.log(isLeapYear(2020)); // true
console.log(isLeapYear(2021)); // false
console.log(isLeapYear(2022)); // false
console.log(isLeapYear(2023)); // false
console.log(isLeapYear(2024)); // true

