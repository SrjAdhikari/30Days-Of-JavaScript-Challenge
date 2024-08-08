//* **************************************************************
//* Day 20 : LocalStorage and SessionStorage
//* **************************************************************


//* **************************************************************
//* Activity 1: Understanding LocalStorage ✅
//* **************************************************************

//* Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.

// Define the string value to be saved
const valueToSave = "JavaScript Challenge -> LocalStorage";

// Save the string value to localStorage
localStorage.setItem("key", valueToSave);

// Retrieve the string value from localStorage
const retrievedValue = localStorage.getItem("key");

// Log the retrieved value
console.log(`Retrieved value : ${retrievedValue}`);


//* Task 2: Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

// Define the object to be saved
const objectToSave = {
    name: "Suraj Adhikari",         // Name of the person
    age: 26,                        // Age of the person
    email: "suraj@examle.com",      // Email address of the person
    isActive: true                  // Indicates if the person is active
};

// Convert the object to a JSON string and save it to localStorage
localStorage.setItem("objectKey", JSON.stringify(objectToSave));

// Retrieve the JSON string from localStorage
const retrievedJsonString = localStorage.getItem("objectKey");

// Parse the JSON string back into an object
const retrievedObject = JSON.parse(retrievedJsonString);

// Log the retrieved object to the console
console.log(`Retrieved object : ${retrievedObject}`);