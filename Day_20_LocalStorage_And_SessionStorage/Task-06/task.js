//* Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

// Define the object to be saved
const user = {
    name : "suraj",
    age : 26,
    gender : "male"
};

// Convert the object to a JSON string and save it to SessionStorage
sessionStorage.setItem("key", JSON.stringify(user));

// Retrieve the JSON string from SessionStorage
const retrievedObjectString = sessionStorage.getItem("key");

// Parse the JSON string back into an object
const retrievedData = JSON.parse(retrievedObjectString);

// Log the retrieved object to the console
console.log(`Retrieved object : ${retrievedData}`);