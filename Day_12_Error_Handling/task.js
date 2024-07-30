//* **************************************************************
//* Day 11 : Error Handling
//* **************************************************************


//* **************************************************************
//* Activity 1: Basic Error Handling with Try-Catch
//* **************************************************************

//* Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

//* Method 1:
// Function that intentionally throws an error
function throwError() {
    throw new Error(`This is a custom error message`);
}

// Function to handle the error
function handleError() {
    try {
        // Attempt to execute the code that may throw an error
        throwError();
    } catch (error) {
        console.log(`Error : ${error.message}`);
    }
}

// Call the function to see the error handling in action
handleError();

//* **************************************************************

//* Method 2:
// Function that throws an error
function errorThrow () {
    throw new Error (`This is a error message`);
}

try {               // Attempt to execute the code that may throw an error
    errorThrow();   // Calling the function that throws an error
} catch (error) {   // This block is executed if an error is thrown in the try block
    console.log(`Error : ${error.message}`);
}


//* Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

//* Methhod 1:
function divideTwoNum (numerator, denominator) {
    if(denominator === 0)
        throw new Error (`Denominator can not be zero`);
    else
        return numerator / denominator;
}
try {
    console.log('Answer is :', divideTwoNum(10, 0));        // Output -> Error : Denominator can not be zero
    // console.log('Answer is :', divideTwoNum(10, 5));     // Output -> Answer is : 2
} catch (error) {
    console.log(`Error : ${error.message}`);
}

//* **************************************************************

//* method 2:
function divideNum (numerator, denominator) {               // Function to divide two numbers
    if(denominator === 0)                                   // Check if the denominator is zero
        throw new Error(`Denominator can not be zero`);     // Throw an error if the denominator is zero
    else
        return numerator / denominator;                     // Return the result of the division if the denominator is not zero
}

function performDivision (numerator, denominator) {         // Function to handle division and potential errors
    try {
        const result = divideNum(numerator, denominator);   // Attempt to divide the numbers
        console.log(`Result is : ${result}`);
    } catch (error) {                                       // Catch block is executed if an error is thrown in the try block
        console.log(`Error : ${error.message}`);
    }
}

// Function call
performDivision(10, 2);     // Output -> Result is : 5
performDivision(10, 0);     // Output -> Error : Denominator can not be zero


//* **************************************************************
//* Activity 2: Finally Block
//* **************************************************************

//* Task 3: Write a script that includes a try-catch block and a finally block, Log messages in the try, catch, and finally blocks to observe the execution flow.
function demoTryCatchFinally() {                            // Function to demonstrate try-catch-finally
    try {                                                   // This block contains code that may throw an error
        console.log(`Inside the try block`);
        throw new Error (`This is a test error`);           // Intentionally throwing an error for demonstration
        // console.log('This message will not be logged');  // This code will not be executed because an error is thrown above
    }
    catch (error) {                                         // This block is executed if an error is thrown in the try block
        console.log(`Inside the catch block`);
        console.log(`Error : ${error.message}`);
    }
    finally {                                               // This block is executed after the try and catch blocks, regardless of whether an error was thrown
        console.log(`Inside the finally block. Default condition always execute.`)
    }
}

// Call the function to observe the execution flow
demoTryCatchFinally();


//* **************************************************************
//* Activity 3: Custom Error Objects
//* **************************************************************

//* Task 4: Create a custom error class that extends the built-in Error class, Throw an instance of this custom error in a function and handle it using a try-catch block.

// Define a custom error class that extends the built-in Error class
class customError extends Error {
    constructor(message) {
        super(message);                     // Call the parent class constructor with the error message
        this.name = `CustomError`;         // Set the name property to identify the type of error
    }
}

// Function that throws an instance of the custom error
function throwCustomError() {
    // Throw a new CustomError with a specific message
    throw new customError(`This is a custom error message`);
}

// Use try-catch block to handle the custom error
try {
    // Attempt to execute the code that may throw the custom error
    throwCustomError();
} catch (error) {
    // Log the name and message of the caught error
    console.log(`${error.name} : ${error.message}`);
}


//* Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

// Define a custom error class for validation errors
class validationError extends Error {
    constructor(message) {
        super(message);
        this.name = `ValidationError`;
    }
}

function validateUserInput(input) {
    if(!input) 
        throw new validationError(`Input can not be empty.`);
    else
        return `Valid Input`;
}

function handleInput (input) {
    try {
        validateUserInput(input);
        console.log(`Input is valid`);
    } catch (error) {
        console.log(`${error.name} : ${error.message}`);
    }
}

handleInput("");            // Output -> ValidationError : Input can not be empty.
handleInput("Suraj");       // Output -> Input is valid


//* **************************************************************
//* Activity 4: Error Handling in Promises
//* **************************************************************

//* Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.

// Create a new Promise that randomly resolves or rejects
const randomPromise = new Promise((resolve, reject) => {
    const resolveTime = Math.random();       // Generate a random number between 0 and 1

    // Decide whether to resolve or reject based on the random number
    if(resolveTime >= 0.5)
        resolve(`Promise resolved successfully!`);
    else
        reject(`Promise rejected due to an error.`);
});

// Handle the result of the promise
randomPromise
    .then((result) => console.log(result))
    .catch((error) => console.log(`Error : ${error}`));


//* Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

// Create a new Promise that randomly resolves or rejects
const promise = new Promise((resolve, reject) => {
    const resolveTime = Math.random();       // Generate a random number between 0 and 1

    // Decide whether to resolve or reject based on the random number
    if(resolveTime >= 0.5)
        resolve(`Promise resolved successfully!`);
    else
        reject(`Promise rejected due to an error.`);
});

// Async function to handle the promise and errors
async function handlePromise() {
    try {
        const response = await promise;     // Await the response of the promise
        console.log(response);              // Log the response if the promise is resolved
    } catch (error) {
        console.log(`Error : ${error}`);
    }
}

// Call the async function to see the result or error
handlePromise();


//* **************************************************************
//* Activity 5:  Graceful Error Handling in Fetch
//* **************************************************************

//* Task 8: Use the fetch API to request data from an invalid URL and handle the error using catch() Log an appropriate error message to the console.

// Fetch data from a valid URL and handle the response and errors
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        // Check if the response status is not OK
        if (!response.ok) {
            // Throw an error with the status code if the response is not OK
            throw new Error(`HTTP error! Status: ${response.status}`);
        } else {
            // Parse the response as JSON and return it
            return response.json(); // Call the .json() method to parse the response
        }
    })
    .then((data) => {
        // Log the fetched data successfully
        console.log('Data fetched successfully:', data);
    })
    .catch((error) => {
        // Log any errors that occur during the fetch or response handling
        console.log(`Error: ${error.message}`);
    });


//* Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

// Define an async function to fetch and log all users.
async function getAllUsers() {
    try {
        // Use fetch to make a network request to the specified URL.
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        // Parse the response JSON and wait for the parsing to complete.
        const data = await response.json();

        // Log the parsed data (array of users) to the console.
        console.log(data);
    } 
    catch (error) {
        // Log any errors that occur during the fetch or parsing process.
        console.log("Error : ", error);
    }
}

// Call the async function to fetch and log the users.
getAllUsers();


//* **************************************************************
//* Achievement:
//* **************************************************************

//* By the end of these activities, you will:
//* • Understand and implement basic error handling using try-catch blocks.
//* • Use finally blocks to execute code regardless of the try-catch outcome.
//* • Create and use custom error classes.
//* • Handle errors in promises using .catch() and within async functions using try-catch.
//* • Implement graceful error handling when making network requests with the fetch API.