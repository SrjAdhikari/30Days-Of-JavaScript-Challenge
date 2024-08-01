//* **************************************************************
//* Day 14 : Classes
//* **************************************************************


//* **************************************************************
//* Activity 1: Class Definition
//* **************************************************************

//* Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.

// Defines a Person object with properties for name and age, and a method to greet others.
class Person {
    // Constructor to initialize the properties
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    // Method to return a greeting message
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Create an instance of the Person class
const person = new Person("Suraj", 26);
console.log(person.greet());


//* Task 2: Add a method to the Person class that updates the age property and logs the updated age.

// Defines a Person object with properties for name and age, and a method to greet others.
class Person1 {
    // Constructor to initialize the properties
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    
    // Method to return a greeting message
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    // Method to update the age and log the updated age
    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age : ${this.age}`);
    }
}

// Create an instance of the Person class
const person1 = new Person1("Suraj", 25);
console.log(person1.greet());
person1.updateAge(26);


//* **************************************************************
//* Activity 2: Class Inheritance
//* **************************************************************

//* Task 3: Define a class Student that extends the Person class. Add a property studentID and a method to return the student ID. Create an instance of the Student class and log the student ID.

// Defines a Person2 object with properties for name and age, and a method to greet others.
class Person2 {
    // Constructor to initialize the properties
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to return a greeting message
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Define the Student class that extends Person
class Student extends Person2 {
    // Constructor to initialize properties of both Person and Student
    constructor(name, age, studentID) {
        super(name, age);               // Call the constructor of the parent class
        this.studentID = studentID;     // Initialize the studentID property
    }

    // Method to return the student ID
    getStudentID() {
        return `Student ID : ${this.studentID}`;
    }
}

// Create an instance of the Student class
const student = new Student("Suraj", 25, "S12345");
console.log(student.getStudentID());