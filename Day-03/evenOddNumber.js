// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

function CheckNumber(num) {
  let result = num % 2 == 0 ? "even" : "odd";
  console.log(result);
}
CheckNumber(10); // Output Even
CheckNumber(11); //Output odd
