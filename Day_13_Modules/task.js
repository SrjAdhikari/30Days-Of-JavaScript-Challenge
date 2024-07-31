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


//* **************************************************************
//* Activity 2: Named and Default Exports
//* **************************************************************

//* Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.

// Import specific functions from the 'utility.js' module
import { addition, subtraction, multiplication, division } from "./utility.js";

const number1 = 20;
const number2 = 0;

console.log(`Addition of ${number1} and ${number2} is : ${addition(number1, number2)}`);
console.log(`Difference of ${number1} and ${number2} is : ${subtraction(number1, number2)}`);
console.log(`Product of ${number1} and ${number2} is : ${multiplication(number1, number2)}`);

// Use a try-catch block to handle any potential errors in division
try {
    console.log(`Division of ${number1} and ${number2} is : ${division(number1, number2)}`);
} catch (error) {
    console.log(error.message);
}


//* Task 4: Create a module that exports a single function using default export. Import and use this function in another script.

// Import the default exported function from the 'greet.js' module
import modulus from "./utility.js";

const value1 = 15;
const value2 = 7;

console.log(`Remainder of ${value1} divided by ${value2} is : ${modulus(value1, value2)}`);