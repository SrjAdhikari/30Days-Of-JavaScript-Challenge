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


//* **************************************************************
//* Activity 2: Recursion with Arrays
//* **************************************************************

//* Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases

// Function to calculate the sum of elements in an array recursively
const arraySum = (arr, index) => {
    // Base case: If the index is negative, return 0 (no elements left to sum)
    if (index < 0) {
        return 0;
    }

    // Recursive case: Sum the current element with the sum of the rest of the array
    return arr[index] + arraySum(arr, index - 1);
}

const array = [1, 2, 3, 4, 5];          // Array of numbers to sum
const index = array.length - 1;         // Start index for the sum calculation (last element of the array)
const sum = arraySum(array, index);     // Calculate the sum of all elements in the array
console.log(`Sum of all elements in array is : ${sum}`);


//* Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

// Function to find the maximum element in an array recursively
const findMaximum = (arr, index) => {
    // Base case: If index is 0, return the first element
    if (index === 0) {
        return arr[index];
    }

    // Recursive case: Compare the current element with the maximum of the rest of the array
    return Math.max(arr[index], findMaximum(arr, index - 1));
}

const elements = [10, 50, 55, 60, 75, 30];              // Array of elements to find the maximum in
const lastIndex = elements.length - 1;                  // Compute the index of the last element
const maxNumber = findMaximum(elements, lastIndex);     // Find the maximum element in the array
console.log(`Maximum element in an array is : ${maxNumber}`);