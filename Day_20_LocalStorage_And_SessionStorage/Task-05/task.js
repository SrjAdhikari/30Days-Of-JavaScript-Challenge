//* Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.

// Define the string value to be saved
const valueTosave = "JavaScript Challenge -> SessionStorage";

// Save the string value to SessionStorage
sessionStorage.setItem("key", valueTosave);

// Retrieve the string value from SessionStorage
const retrievedValue = sessionStorage.getItem("key");

// Log the retrieved value
console.log(`Retrieved value : ${retrievedValue}`);