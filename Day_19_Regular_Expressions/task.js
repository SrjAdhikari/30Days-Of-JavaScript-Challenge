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


//* Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.

const text2 = "The flight numbers are 1234, 567, and 89012. Contact us at 42.";
const regex2 = /\d+/g;
const matches2 = text2.match(regex2);
console.log(matches2);      // Output -> [ '1234', '567', '89012', '42' ]


//* **************************************************************
//* Activity 3: Grouping and Capturing
//* **************************************************************

//* Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.

// Define the text containing the phone number
const text3 = "(123) 456-7890";

// Define the regular expression to capture area code, central office code, and line number
//? \((\d{3})\) matches and captures the area code:
    //? \( matches the literal opening parenthesis.
    //? (\d{3}) captures three digits inside the parentheses.
    //? \) matches the literal closing parenthesis.
//? \s matches the space after the closing parenthesis.
//? (\d{3}) captures the central office code, which is three digits.
//? -(\d{4}) captures the line number, which is four digits after a hyphen.
//? g is the global flag to find all matches in the string.
const regex3 = /\((\d{3})\)\s(\d{3})-(\d{4})/;

// Use the match() method to find matches and capture groups
const matches3 = text3.match(regex3);

// Check if matches are found and log the results
if (matches3) {
    console.log(`Full match: ${matches3[0]}`);              // matches3[0] is the full match
    console.log(`Area code: ${matches3[1]}`);               // matches3[1] is the area code
    console.log(`Central office code: ${matches3[2]}`);     // matches3[2] is the central office code
    console.log(`Line number: ${matches3[3]}`);             // matches3[3] is the line number
} else {
    console.log('No matches found');
}

//? Output:
// Full match: (123) 456-7890
// Area code: 123
// Central office code: 456
// Line number: 7890


//* Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.

// Define the text containing the email address
const text4 = "Contact me at user@example.com for more information.";

// Define the regular expression to capture the username and domain from an email address
//? (\w+) captures the username part
//? @ matches the literal @ symbol
//? ([\w\.]+) captures the domain, allowing for multiple subdomains and a top-level domain. 
const regex4 = /(\w+)@([\w\.]+)/;

// Use the match() method to find and capture the username and domain
const matches4 = text4.match(regex4);

// Check if matches are found and log the results
if (matches4) {
    console.log(`Full match: ${matches4[0]}`);      // matches4[0] is the full match
    console.log(`Username: ${matches4[1]}`);        // matches4[1] is the username
    console.log(`Domain: ${matches4[2]}`);          // matches4[2] is the domain
} else {
    console.log('No matches found');
}

//? Output:
// Full match: user@example.com
// Username: user
// Domain: example.com


//* **************************************************************
//* Activity 4: Assertions and Boundaries
//* **************************************************************

//* Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.

// Define the text to search within
const text5 = "It is day 19 of 30 days JavaScript Challenge.";

// Define the regular expression to match a word at the beginning of the string
//? ^ asserts the position at the start of the string, ensuring the match is at the beginning.
//? \b matches a word boundary, ensuring we match a complete word.
//? \w+ matches one or more word characters (letters, digits, or underscores).
const regex5 = /^\b\w+/;

// Use the match() method to find the match at the beginning of the string
const matches5 = text5.match(regex5);

// Check if a match is found and log the result
if (matches5) {
    console.log(`Match: ${matches5[0]}`);       // Output -> Match: It
} else {
    console.log('No match found');
}


//* Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.

// Define the text to search within
const text6 = "It is day 19 of 30 days JavaScript Challenge";

// Define the regular expression to match a word at the end of the string
//? $ asserts the position at the end of the string, ensuring the match is at the end.
//? \b matches a word boundary, ensuring the match is a complete word.
//? \w+ matches one or more word characters (letters, digits, or underscores).
const regex6 = /\b\w+$/;

// Use the match() method to find the match at the end of the string
const matches6 = text6.match(regex6);

// Check if a match is found and log the result
if (matches6) {
    console.log(`Match: ${matches6[0]}`);       // Output -> Match: Challenge
} else {
    console.log('No match found');
}


//* **************************************************************
//* Activity 5: Practical Applications
//* **************************************************************

//* Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.

// Define the password to validate
const password = "A1b@1234";

// Define the regular expression to validate the password
//? (?=.*[a-z]) ensures at least one lowercase letter
//? (?=.*[A-Z]) ensures at least one uppercase letter
//? (?=.*\d) ensures at least one digit
//? (?=.*[@$!%*?&]) ensures at least one special character from the set
//? [A-Za-z\d@$!%*?&]{8,} ensures the password consists of valid characters (letters, digits, and special characters) and is at least 8 characters long.
//? ^ and $ assert the position at the start and end of the string, ensuring the entire string is validated.
const regex7 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Use the test() method to validate the password
const isValid = regex7.test(password);

// Log whether the password is valid
if (isValid) {
    console.log('Password is valid');
} else {
    console.log('Password is invalid');
}