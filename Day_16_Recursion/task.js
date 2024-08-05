//* **************************************************************
//* Day 16 : Recursion
//* **************************************************************


//* **************************************************************
//* Activity 1: Basic Recursion
//* **************************************************************

//* Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

// Function to calculate the factorial of a non-negative integer
const factorial = (num) => {
    // Base case: if num is 0 or 1, return 1
    if(num <= 1) {
        return 1;
    }

    //Recursive call
    return num * factorial(num - 1);
}

console.log(`Factorial of 5 is : ${factorial(5)}`);
console.log(`Factorial of 10 is : ${factorial(10)}`);
console.log(`Factorial of 0 is : ${factorial(0)}`);
console.log(`Factorial of 1 is : ${factorial(1)}`);


//* Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.

// Function to calculate the nth Fibonacci number
const fibonacci = (num) => {
    // Base cases: The 0th Fibonacci number is 0 and the 1st Fibonacci number is 1
    if(num === 0 || num === 1) {
        return num;
    }

    // Recursive case: Calculate the nth Fibonacci number as the sum of (n-1)th and (n-2)th Fibonacci numbers
    return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(`1st fibonacci number is : ${fibonacci(1)}`);
console.log(`5th fibonacci number is : ${fibonacci(5)}`);
console.log(`2nd fibonacci number is : ${fibonacci(2)}`);
console.log(`8th fibonacci number is : ${fibonacci(8)}`);
console.log(`15th fibonacci number is : ${fibonacci(15)}`);