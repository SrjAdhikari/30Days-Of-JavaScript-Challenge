//* **************************************************************
//* Day 7 : Objects
//* **************************************************************


//* **************************************************************
//* Activity 1: Object Creation and Access
//* **************************************************************

//* Task 1: Create an object representing a book with properties like title, author and year, and log the object to the console.
const book = {
    title : "Atomic Habits",
    author : "James Clear",
    year : 2018
};


//* Task 2: Access and log the title and author properties of the book object.
const title = book["title"];
const author = book["author"];

console.log(`${title} by ${author}`);       // Output -> Atomic Habits by James Clear


//* **************************************************************
//* Activity 2: Object Methods
//* **************************************************************

//* Task 3: Add a method to the book object that returns a string with the book’s title and author, and log the result of calling this method.
book.getTitleAndAuthor = function() {
    return `${this.title} by ${this.author}`;
};
console.log(book.getTitleAndAuthor());      // Output -> Atomic Habits by James Clear


//* Task 4: Add a method to the book object that takes a parameter (year) and updates the book’s year property, then log the updated object.
// Define a method to update the year of the book
book.updateYear = function(year) {
    this.year = year;   // Set the book's year property to the new value provided as an argument
};
book.updateYear(2020);
console.log(book);


//* **************************************************************
//* Activity 3: Nested Objects
//* **************************************************************

//* Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
const library = {
    name : "Suraj's Library",
    books : [
        {
            title : "Think and Grow Rich",
            author : "Napoleon Hill",
            year : 1937
        },

        {
            title : "The Psychology of Money",
            author : "Morgan Housel",
            year : 2020
        },

        {
            title : "How to Talk to Anyone",
            author : "Leil Lowndes",
            year : 1998
        }
    ]
};
console.log(library);


//* Task 6: Access and log the name of the library and the titles of all the books in the library.
const libraryName = library["name"];
console.log(`Library name is : ${libraryName}`);        // Output -> Library name is : Suraj's Library

// To access titles of books use forEach() loop
library["books"].forEach( (book) => {
    console.log(`Book title is : ${book.title}`);
});

// Output:
// Book title is : Think and Grow Rich
// Book title is : The Psychology of Money
// Book title is : How to Talk to Anyone


//* **************************************************************
//* Activity 4: The "this" Keyword
//* **************************************************************

//* Task 7: Add a method to the book object that uses the this keyword to return a string with the book’s title and year, and log the result of calling this method.
book.getTitleAndYear = function () {
    return `${this.title} published in ${this.year}`;
};
console.log(book.getTitleAndYear());                // Output -> Atomic Habits published in 2020


//* **************************************************************
//* Activity 5: Object Iteration
//* **************************************************************

//* Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
for (const key in book) {
    console.log(`Key : ${key}, Value : ${book[key]}`);
};

// Output:
// Key : title, Value : Atomic Habits
// Key : author, Value : James Clear
// Key : year, Value : 2020


//* Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log("Keys are : ", Object.keys(book));
console.log("Values are : ", Object.values(book));


//* **************************************************************
//* Achievement:
//* **************************************************************

//* By the end of these activities, you will:
//* • Create and manipulate objects with properties and methods.
//* • Understand and use the this keyword in object methods.
//* • Work with nested objects and arrays of objects.
//* • Iterate over an object’s properties using loops and built-in methods.