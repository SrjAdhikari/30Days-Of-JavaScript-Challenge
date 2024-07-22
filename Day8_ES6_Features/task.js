//* **************************************************************
//* Day 8 : ES6+ Features
//* **************************************************************


//* **************************************************************
//* Activity 1: Template Literals
//* **************************************************************

//* Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
const firstName = "Suraj";
const age = 25;
const message = `My name is ${firstName} and I am ${age} years old.`;
console.log(message);


//* Task 2: Create a multi-line string using template literals and log it to the console.
const multiLineString = `My name is Suraj,
currently I am learning JS
from Chai aur code.`;
console.log(multiLineString);


//* **************************************************************
//* Activity 2: Destructuring
//* **************************************************************

//* Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const numArray = [10, 20, 30, 40, 50];
const [first, second] = numArray;
console.log(`First Num : ${first}, Second Num : ${second}`);    // Output -> First Num : 10, Second Num : 20        


//* Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const book = {
    title : "Atomic Habits",
    author : "James Clear",
    year : 2018
};
const {title, author} = book;
console.log(`${title} by ${author}`);                          // Output -> Atomic Habits by James Clear


//* **************************************************************
//* Activity 3: Spread and Rest Operators
//* **************************************************************

//* Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const arrayNum = [10, 20, 30];
const newArray = [...arrayNum, 40, 50];
console.log(newArray);                                      // Output -> [ 10, 20, 30, 40, 50 ]


const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
const array3 = [...array1, ...array2];
console.log(array3);                                        // Output -> [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]


//* Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function addNumbers(...num) {
    return num.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};
const sum = addNumbers(10, 20, 45, 50, 60);
console.log(`Sum is : ${sum}`);                             // Output -> Sum is : 185


//* **************************************************************
//* Activity 4: Default Parameters
//* **************************************************************

//* Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
const multiplyTwoNum = (num1, num2 = 1) => num1 * num2;

const product = multiplyTwoNum(5, 7);
console.log(`Product of nums with second parameter : ${product}`);        // Output -> Product of nums with second parameter : 35 

const product2 = multiplyTwoNum(9);
console.log(`Product of nums without second parameter : ${product2}`)     // Output -> Product of nums without second parameter : 9


//* **************************************************************
//* Activity 5: Enhanced Object Literals
//* **************************************************************

//* Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
// Define some basic object individual properties
const first_name = "Suraj";
const last_name = "Adhikari";
const country = "Nepal";
const myAge = 25;

// Use enhanced object literals to create an object with methods and properties
const myDetail = {
    // Shorthand property names (same as first_name: first_name, last_name: last_name, etc.)
    first_name,
    last_name,
    country,
    myAge,

    // Method to print the full name
    fullName() {
        console.log(`My name is ${this.first_name} ${this.last_name}`);
    },

    // Method to print a greeting message with the first name and age
    greeting() {
        console.log(`Hello, my name is ${this.first_name} and I am ${this.myAge} years old.`)
    },

    // Method to update the age property and print the updated age
    updateAge(age) {
        this.myAge = age;
        console.log(`My updated age is : ${age}`);
    }
};

console.log(myDetail);
myDetail.fullName();
myDetail.greeting();
myDetail.updateAge(26);


//* Task 9: Create an object with computed property names based on variables and log the object to the console.
// Define variables for property names
const firstProperty = "firstName";
const secondProperty = "lastName";
const thirdProperty = "age";

// Create an object with computed property names
const person = {
    [firstProperty] : "Suraj",
    [secondProperty] : "Adhikari",
    [thirdProperty] : 26
};

console.log(person);    // Output -> { firstName: 'Suraj', lastName: 'Adhikari', age: 26 }


//* **************************************************************
//* Feature Request:
//* **************************************************************

//* Feature 1: Write a script that demonstrates the use of template literals to create and log strings with embedded variables and multi-line strings.
const myName = "Suraj";
const course = "JavaScript";
const platform = "Chaiaurcode";
const instructor = "Hitesh Sir";

const myGreeting = `Hello! Everyone, I am ${myName}
currently I am learning ${course} from ${platform}
with amazing instrucor ${instructor}.`

console.log(myGreeting);


//* Feature 2: Create a script that uses array and object destructuring to extract values and log them.
const colorCollection = ["Black", "White", "Red", "Orange", "Navy", "Blue"];
// Array De-Structure
const [color1, , color3, color4, , color6] = colorCollection;
console.log(color1);    // Output -> Black
console.log(color3);    // Output -> Red
console.log(color4);    // Output -> Orange
console.log(color6);    // Output -> Blue


const personDetail = {
    FirstName : "Suraj",
    LastName : "Adhikari",
    Country : "Nepal",
    Age : 26,
    City : "PKR",
    PostalCode : 12345
};

// Object De-Structure
const {FirstName, Country, City} = personDetail;

console.log(FirstName);     // Output -> Suraj
console.log(Country);       // Output -> Nepal
console.log(City);          // Output -> PKR


const userProfile = {
    user: {
        id: 1,
        name: "Srj",
        details: {
            age: 26,
            location: "New York"
        }
    },
    active: true
};

// Nested Object De-Structure
const {
    user: {
        id: userID, name : userName, 
        details: {
            age : Age, location : address
        },
    },
} = userProfile;

console.log(userID);        // Output -> 1
console.log(userName);      // Output -> Srj
console.log(Age);           // Output -> 26
console.log(address);       // Output -> New York


//* Feature 3: Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments.
// Spread Operator:
const fruit = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];
const color = ["Red", "Yellow", "Black", "Green"];
const new_array = [...fruit, ...color];
console.log(new_array);     // Output -> ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple', 'Red', 'Yellow', 'Black', 'Green' ]

const days = ["Sunday", "Monday", "Tuesday", "Wednesday"];
const weekDays = [...days, "Thursday", "Friday", "Saturday"];
console.log(weekDays);      // Output -> [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]

// Rest Operator:
const addition = (...nums) => nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(addition(1, 2, 3, 4, 5));   // Output = 15

const multiplication = (...nums) => nums.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log(multiplication(1, 2, 3, 4, 5));     // Output = 120

const subtraction = (...nums) => nums.reduce((accumulator, currentValue) => accumulator - currentValue, 0);
console.log(subtraction(1, 2, 3, 4, 5));     // Output = -15


//* Feature 4: Create a script that defines a function with default parameters and logs the results of calling it with different arguments.
function sayMyName(userName = 'Suraj') {            // Set default value of "userName"
    return userName;
}
console.log(sayMyName('Suraj Adhikari'));           // Output -> Suraj Adhikari - (With parameter)
console.log(sayMyName());                           // Output -> Suraj - (Without parameter)


const result = (num1, num2 = 5) => num1 * num2;     // Set default value of "num2"
console.log(result(10, 10));                        // Output -> 100 - (With parameter)
console.log(result(10));                            // Output -> 50 - (With parameter)


//* Feature 5: Write a script that uses enhanced object literals to create and log an object with methods and computed property names.
// Define variables for computed property names
const property1 = "firstNum";
const property2 = "secondNum";

// Create an object with computed property names and methods
const calculation = {
    [property1] : 10,
    [property2] : 20,

    addition() {
        return this[property1] + this[property2];
    },

    multiplication() {
        return this[property1] * this[property2];
    },

    subtraction() {
        return this[property1] - this[property2];
    },

    division() {
        return this[property2] / this[property1];
    }
};

console.log(calculation);
console.log(calculation.addition());            // Output -> 30 (10 + 20)
console.log(calculation.multiplication());      // Output -> 200 (10 *20)
console.log(calculation.subtraction());         // Output -> -10 (10 - 20)
console.log(calculation.division());            // Output -> 2 (20 / 10)


//* **************************************************************
//* Achievement:
//* **************************************************************

//* By the end of these activities, you will:
//* • Understand and use template literals for string interpolation and multi-line strings.
//* • Apply destructuring to extract values from arrays and objects.
//* • Utilize spread and rest operators for array manipulation snd function arguments.
//* • Define functions with default parameters.
//* • Create objects using enhanced object literals, including methods and computed property names.