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


//* **************************************************************
//* Activity 4: Module Pattern
//* **************************************************************

//* Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.

//* 1.
// Create a module for managing a collection of items using an IIFE
const itemManager = ( () => {
    // Private array to store items
    let items = [];

    return {
        // Method to add an item to the collection
        addItem: function(item) {
            // Check if the item already exists in the collection
            if (items.includes(item)) {
                console.log(`${item} is already in the collection.`);
            } else {
                // Add the item to the collection and log the addition
                items.push(item);
                console.log(`${item} added to the collection.`);
            }
        },

        // Method to remove an item from the collection
        removeItem: function(item) {
            // Find the index of the item to be removed
            const index = items.indexOf(item);
            if (index > -1) {
                // Remove the item if it exists and log the removal
                items.splice(index, 1);
                console.log(`${item} removed from the collection.`);
            } else {
                // Log a message if the item is not found
                console.log(`${item} is not in the collection.`);
            }
        },

        // Method to list all items in the collection
        listItems: function() {
            if (items.length === 0) {
                // Log a message if the collection is empty
                console.log(`No items in the collection.`);
            } else {
                // Log the items in the collection
                console.log(`Items in the collection:`);
                items.forEach(item => console.log(item));
            }
        }
    };
})();

// Example usage of the itemManager module
itemManager.addItem('Apple');           // Add 'Apple' to the collection
itemManager.addItem('Banana');          // Add 'Banana' to the collection
itemManager.listItems();                // List all items in the collection
itemManager.removeItem('Apple');        // Remove 'Apple' from the collection
itemManager.listItems();                // List all items in the collection
itemManager.removeItem('Grapes');       // Attempt to remove 'Grapes', which is not in the collection
itemManager.listItems();                // List all items in the collection
console.log(`\n`);


//* 2.
// Create a module for managing a collection of items using an IIFE
const ItemManager = (() => {
    // Private array to hold the collection of items
    const items = [];

    // Method to add an item to the collection
    const addItem = (item) => {
        // Check if the item already exists in the collection
        if (items.includes(item)) {
            console.log(`${item} already in the collection.`);
        } else {
            // Add the new item to the collection
            items.push(item);
        }
    };

    // Method to remove an item from the collection
    const removeItem = (item) => {
        // Find the index of the item in the collection
        const index = items.indexOf(item);
        if (index > -1) {
            // Remove the item from the collection
            items.splice(index, 1);
            console.log(`${item} removed from the collection.`);
        } else {
            console.log(`${item} is not in the collection.`);
        }
    };

    // Method to list all items in the collection
    const ListItems = () => {
        if (items.length === 0) {
            // Inform the user that there are no items in the collection
            console.log(`No items in the collection.`);
        } else {
            // List all items in the collection
            console.log(`Items in the collection:`);
            items.forEach((item) => console.log(item));
        }
    };

    // Return an object exposing the public methods
    return {
        addItem,
        removeItem,
        ListItems
    };
})();

// Example usage of the itemManager module
ItemManager.addItem('Apple');           // Add 'Apple' to the collection
ItemManager.addItem('Mango');           // Add 'Mango' to the collection
ItemManager.addItem('Banana');          // Add 'Banana' to the collection
ItemManager.ListItems();                // List all items in the collection
ItemManager.removeItem('Apple');        // Remove 'Apple' from the collection
ItemManager.ListItems();                // List all items in the collection
ItemManager.removeItem('Grapes');       // Attempt to remove 'Grapes', which is not in the collection
ItemManager.ListItems();                // List all items in the collection