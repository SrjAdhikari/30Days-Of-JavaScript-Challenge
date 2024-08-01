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


//* **************************************************************
//* Activity 3: Importing Entire Module
//* **************************************************************

//* Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

// Import the entire module as an object
import * as utils from "./utility.js";

console.log(`Value of PI : ${utils.PI}`);
console.log(`Value of GRAVITY : ${utils.GRAVITY}`);

const area = utils.calculateArea(5);
console.log(`Area : ${area}`);

const volume = utils.calculateVolume(3, 5);
console.log(`Volume : ${volume}`);

const circumference = utils.calculateCircumference(7);
console.log(`Circumference : ${circumference}`);


//* **************************************************************
//* Activity 4: Using Third-Party Modules
//* **************************************************************

//* Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.

// Import a specific function from lodash
import _ from "lodash";

const alphabet = ["a", "b", "c", "d", "e"];
const numbers = [1, 2, 3, 4, 5];
const size = 2;

const chunks = _.chunk(alphabet, size);         // Use Lodash's _.chunk function to Split the array into chunks of the specified size
const sum = _.sum(numbers);                     // Use Lodash's _.sum function to calculate the sum of the numbers

console.log(`Original Array : ${alphabet}`);
console.log(`Modified Array : ${JSON.stringify(chunks)}`);      // Output -> Modified Array : [["a","b"],["c","d"],["e"]]

console.log(`Sum : ${sum}`);


//* Task 7: Install a third-party module (e.g.. wins) using npm. Import and use this module to make a network request in a script.

// Import the axios module
import axios from 'axios';

//* 1:
async function fetchData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        // Extract the data from the response
        const data = response.data;
        console.log('Data :', data);
    } catch (error) {
        // Handle any errors that occur during the request
        console.error('Error :', error);
    }
}

fetchData();


//* 2:
const url = 'https://jsonplaceholder.typicode.com/posts/1';
axios.get(url)
    .then(response => {
        // Handle success
        console.log('Data : ', response.data);
    })
    .catch(error => {
        // Handle error
        console.error('Error:', error.message);
    });


//* **************************************************************
//* Achievement:
//* **************************************************************

//* By the end of these activities, you will:
//* • Create and export functions, objects, and constants using modules.
//* • Import modules using named and default imports.
//* • Use third-party modules installed via npm.
//* • Understand the basics of module bundling (optional).