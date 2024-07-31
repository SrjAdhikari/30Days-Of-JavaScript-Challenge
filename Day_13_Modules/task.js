//* **************************************************************
//* Day 13 : Modules
//* **************************************************************


//* **************************************************************
//* Activity 1: Creating and Exporting Modules
//* **************************************************************

//* Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.

// Import the 'add' function from the 'utility.js' module
import { add } from "./utility.js";

const num1 = 10;
const num2 = 15;
const result = add(num1, num2);
console.log(`The sum of ${num1} and ${num2} is: ${result}`);


//* Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

// Import the 'person' object from the 'utility.js' module
import { person } from "./utility.js";
console.log(`My name is ${person.getFullName()}.`);
console.log(`My current age is ${person.age}.`);