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


//* Task 2: Write a regular expression to match all digits in a string. Log the matches.

// Define the text to search within
const textString = "There are 24 apples, 7 oranges, and 123 bananas.";

// Define the regular expression to match digits.
// \d matches any digit and the 'g' flag finds all occurrences.
//? \d+ is the regular expression pattern where:
//? \d matches any digit (0-9).
//? + indicates that one or more digits can be matched in a sequence.
const regexExp = /\d+/g;

// Use the match() method to find all sequences of digits
const matchDigits = textString.match(regexExp);

// Log the array of matches to the console
console.log(matchDigits);   // Output -> [ '24', '7', '123' ]


//* **************************************************************
//* Activity 2: Character Classes and Quantifiers
//* **************************************************************

//* Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.

// Define the text to search within
const expression = "This is a 30 Days JavaScript Challenge."

// Define the regular expression to match words starting with a capital letter
//? \b is a word boundary anchor, ensuring that the match starts at the beginning of a word.
//? [A-Z] matches any capital letter (A to Z).
//? \w* matches zero or more word characters (letters, digits, and underscores), completing the rest of the word.
//? g is the global flag to find all matches in the string.
const regExp = /\b[A-Z]\w*/g;

// Use the match() method to find all words starting with a capital letter
const matchWord = expression.match(regExp);

// Log the array of matches to the console
console.log(matchWord);     // Output -> [ 'This', 'Days', 'JavaScript', 'Challenge' ]