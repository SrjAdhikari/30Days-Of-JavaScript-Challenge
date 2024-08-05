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