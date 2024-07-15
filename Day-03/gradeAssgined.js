// • Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

let grade;
function giveGrade(score) {
  switch (true) {
    case score >= 90:
      grade = "A";
      break;
    case score >= 80:
      grade = "B";
      break;
    case score >= 70:
      grade = "C";
      break;
    case score >= 60:
      grade = "D";
      break;
    case score < 60:
      grade = "F";
      break;
    default:
      grade = "Invalid Score";
      break;
  }
  console.log(grade);
}
giveGrade(90) //Output A
giveGrade(80) //Output B
giveGrade(70) //Output C
giveGrade(60) //Output D
giveGrade(50) //Output F
giveGrade('s') //Output Invalid Score


