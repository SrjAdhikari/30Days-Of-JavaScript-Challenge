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