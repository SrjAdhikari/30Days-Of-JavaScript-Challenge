//* **************************************************************
//* Day 15 : Closures
//* **************************************************************


//* **************************************************************
//* Activity 1: Understanding Closures
//* **************************************************************

//* Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

// Outer function that returns an inner function
function outerFunction() {
    const outerVariable = `Hello! I am from outer function`;

    // Inner function that accesses the variable from the outer function
    function innerFunction() {
        return outerVariable;
    }

    // Return the inner function
    return innerFunction;
}

// Call the outer function to get the inner function
const myInnerFunction = outerFunction();

// Call the inner function and log the result
console.log(myInnerFunction());


//* Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

// Function to create a private counter with increment and get functionality
function createCounter () {
    let counter = 0;

    // Function to increment the counter
    function increment () {
        counter++;
    }

    // Function to get the current value of the counter
    function getValue () {
        return counter;
    }

    // Return an object with methods to access the counter
    return {
        increment : increment,
        getValue : getValue
    };
}

// Create a new counter instance
const myCounter = createCounter();

// Increment the counter
myCounter.increment();
myCounter.increment();
myCounter.increment();

// Get and log the current value of the counter
console.log('Current value of counter is : ', myCounter.getValue());


//* **************************************************************
//* Activity 2: Practical Closures
//* **************************************************************

//* Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

// Function to generate unique IDs
function uniqueIDGenerator () {
    let lastID = 0;

    // Function to generate a new unique ID
    function generateID () {
        lastID += Math.floor(Math.random() * 100) + 1;
        return lastID;
    }

    // Return the generateId function
    return generateID;
}

// Create a unique ID generator instance
const uniqueID = uniqueIDGenerator();

// Generate and log unique IDs
console.log(`Last ID : ${uniqueID()}`);
console.log(`Last ID : ${uniqueID()}`);
console.log(`Last ID : ${uniqueID()}`);


//* Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.

// Function to create a greeting function for a user
function createGreeting (name) {
    // Closure that captures the user's name
    return function () {
        // Return a greeting message using the captured name
        return `Hello! ${name}`;
    };
};

// Create a greeting function for a specific user
const greet = createGreeting("Suraj");

// Call the greeting function and log the result
console.log(greet());


//* **************************************************************
//* Activity 3: Closures in Loops
//* **************************************************************

//* Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.

// Create an array to hold the functions
const array = [];

// Loop to create functions and add them to the array
for(let i = 0; i <= 5; i++) {
    // Create a closure that captures the current value of 'i'
    array.push(function () {
        console.log(`Index : ${i}`);
    });
}

// Call each fuction in the array
array.forEach(printIndex => printIndex ());