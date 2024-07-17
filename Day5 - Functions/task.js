//* **************************************************************
//* Day 5 : Functions
//* **************************************************************


//* Difference between function declaration and function expression

    //* Function Declaration : 
    ```
    function functionName(parameters) { 
        // function body 
    }
    ```

    //* Function Expression : 
    ```
    const/let/var functionName = function(parameters) { 
        // function body 
    }
    ```

//* Difference between normal function and arrow function

    //* Normal Function : 
    ```
    function functionName(parameters) { 
        // Function body 
    }
    ```
    
    //* Arrow Function : 
    ```
    const/let/var functionName = (parameters) => { 
        // function body 
    }
    ```


//* **************************************************************
//* Activity 1: Function Declaration
//* **************************************************************

//* Task 1: Write a function to check if a number is even or odd and log the result to the console.
function checkEvenOdd(num) {
    if(num % 2 === 0)
        console.log(`${num} is a even number`);
    else
        console.log(`${num} is a odd number`);
}
// Function call
checkEvenOdd(5);    // Output -> 5 is a odd number
checkEvenOdd(10);   // Output -> 10 is a even number


//* Task 2: Write a function to calculate the square of a number and return the result.
function findSquare(num) {
    return num * num;
}

// Printing the square of a number
let result = findSquare(5);
console.log(`Square of 5 is : ${result}`);      // Output -> Square of 5 is : 25


//* **************************************************************
//* Activity 2: Function Expression
//* **************************************************************

//* Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const findmax = function (num1, num2) {
    if(num1 > num2) {
        console.log(`${num1} is greater than ${num2}`);
    }
    else {
        console.log(`${num2} is greater than ${num1}`);
    }
}

// Function call
findmax(5, 7);      // Output -> 7 is greater than 5
findmax(15, 7);     // Output -> 15 is greater than 7


//* Task 4: Write a function expression to concatenate two strings and return the result.
const concatination = function(firstName, lastName) {
    return firstName + ' ' + lastName;
}

// Function call
const fullName = concatination('Suraj', 'Adhikari');
console.log(`Full name is : ${fullName}`);      // Output -> Full name is : Suraj Adhikari


//* **************************************************************
//* Activity 3: Arrow Functions
//* **************************************************************

//* Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
//* Method 1:
const addition = (num1, num2) => {
    return num1 + num2;
}
// Function call
const sum = addition(5, 10);
console.log(`Sum is : ${sum}`);                 // Output -> Sum is : 15

// Function call
console.log(addition(10, 20));                  // Output -> 30


//* Method 2:
const addTwoNumbers = (num1, num2) => num1 + num2;      // Implicit Return

//Function call
console.log(addTwoNumbers(50, 55));             // Output -> 105


//* Method 3:
const addTwoNums = (num1, num2) => ( num1 + num2 );

// Function Call
console.log(addTwoNumbers(150, 110));           // Output -> 260


//* Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const isContain = (word, char) => {
    if(word.includes(char))
        return true;
    else
        return false;
}
const answer = isContain('Suraj', 'a');
console.log(answer);                                // Output -> true


//* **************************************************************
//* Activity 4: Function Parameters and Default Values
//* **************************************************************

//* Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
const product = (num1, num2 = 15) => {              // Arrow Function
    return num1 * num2;
}
console.log(`Product is : ${product(10)}`);         // Output -> Product is : 150
console.log(`Product is : ${product(10, 12)}`);     // Output -> Product is : 120


//* Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
const greeting = (name, age = 20) => {
    return `Hello! ${name}, Now you're ${age} years old.`;
}
console.log(greeting('Suraj'));                     // Output -> Hello! Suraj, Now you're 20 years old. 


//* **************************************************************
//* Activity 5: Higher Order Functions
//* **************************************************************

//* Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.


//* Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.


//* **************************************************************
//* Achievement:
//* **************************************************************

//* By the end of these activities, you will:
//* • Understand and define functions using function declarations, expressions, and arrow functions.
//* • Use function parameters and default values effectively.
//* • Create and utilize higher-order functions.
//* • Apply functions to solve common problems and perform calculations.
//* • Enhance code reusability and organization using functions.