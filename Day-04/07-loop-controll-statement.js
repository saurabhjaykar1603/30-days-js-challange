// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for (let number = 1; number <= 10; number++) {
  if (number == 5) {
    continue;
  }
  console.log(number);
}
// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for (let number = 1; number <= 10; number++) {
  if (number == 7) {
    break;
  }
  console.log(number);
}
