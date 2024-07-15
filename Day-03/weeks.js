// Activity 3: Switch Case

// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
function getDayOfWeek(dayNumber) {
    switch (dayNumber) {
      case 1:
        console.log("Monday");
        break;
      case 2:
        console.log("Tuesday");
        break;
      case 3:
        console.log("Wednesday");
        break;
      case 4:
        console.log("Thursday");
        break;
      case 5:
        console.log("Friday");
        break;
      case 6:
        console.log("Saturday");
        break;
      case 7:
        console.log("Sunday");
        break;
      default:
        console.log("Invalid day number");
    }
  }
  
  getDayOfWeek(1); // Output: Monday
  getDayOfWeek(5); // Output: Friday
  getDayOfWeek(7); // Output: Sunday
  getDayOfWeek(9); // Output: Invalid day number
  getDayOfWeek(0); // Output: Invalid day number
  
