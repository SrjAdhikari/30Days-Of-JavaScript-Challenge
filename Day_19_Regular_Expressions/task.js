//* **************************************************************
//* Day 19 : Regular Expressions 
//* **************************************************************


//* **************************************************************
//* Activity 1: Basic Regular Expressions
//* **************************************************************

//* Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript in a string). Log the matches.

// Define the text to search within
const text = "This is a 30 days JavaScript challenge. Learning JavaScript can be fun!";

// Define the regular expression to match the word "JavaScript"
// The 'g' flag is used to find all occurrences in the string
const regex = /JavaScript/g;

// Use the match() method to find all occurrences of the word "JavaScript"
const matches = text.match(regex);

// Log the array of matches to the console
console.log(matches);       // Output -> [ 'JavaScript', 'JavaScript' ]