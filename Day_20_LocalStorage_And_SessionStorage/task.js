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