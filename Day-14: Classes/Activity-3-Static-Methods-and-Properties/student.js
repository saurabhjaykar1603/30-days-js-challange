// Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
class Student {
  static studentCount = 0; // Static property to keep track of the number of students

  constructor(name) {
    this.name = name;
    Student.studentCount++; // Increment the static property in the constructor
    console.log(`Total number of students: ${Student.studentCount}`);
  }
}

// Create instances of the Student class
const student1 = new Student("Saurabh");
const student2 = new Student("Yogita");
const student3 = new Student("Yogi");
