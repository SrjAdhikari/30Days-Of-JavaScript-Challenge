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