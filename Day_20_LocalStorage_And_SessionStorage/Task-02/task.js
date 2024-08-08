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