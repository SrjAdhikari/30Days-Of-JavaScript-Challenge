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


//* **************************************************************
//* Activity 3: String Manipulation with Recursion
//* **************************************************************

//* Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.

//* 1.
// Function to reverse a string recursively
const reverseString = (str) => {
    // Base case: If the string is empty or a single character, return it as is
    if (str.length <= 1) {
        return str;
    }

    // Recursive case: Reverse the substring starting from the second character and append the first character to the end
    return reverseString(str.substring(1)) + str.charAt(0);
}

console.log(`Reverse string : ${reverseString("JavaScript")}`);
console.log(`Reverse string : ${reverseString("Challenge")}`);
console.log(`Reverse string : ${reverseString("ChaiAurCode")}`);
console.log(`Reverse string : ${reverseString("S")}`);
console.log(`Reverse string : ${reverseString("")}`);

//* **************************************************************

//* 2.
// Recursive function to reverse a string
const stringReverse = (str, start, end) => {
    // Base case: If the start index is greater than or equal to the end index, return the string
    if (start >= end) {
        return str;
    }

    // Convert the string to an array of characters for easy manipulation
    let arr = str.split('');

    // Swap characters at the start and end indices
    let character = arr[start];
    arr[start] = arr[end];
    arr[end] = character;

    // Convert the array back to a string and make a recursive call to reverse the remaining part of the string
    return stringReverse(arr.join(''), start + 1, end - 1);
}

// Initialize the string to be reversed and set the start and end indices
const str = "suraj";
const start = 0;
const end = str.length - 1;

// Call the function and print the reversed string
console.log(`Reversed string: ${stringReverse(str, start, end)}`);


//* Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.

// Function to check if a string is a palindrome using recursion
const isPalindrome = (str, start, end) => {
    // Base case: If start index is greater than or equal to end index,
    // it means all characters have been checked and the string is a palindrome
    if (start >= end) {
        return true;
    }

    // Check if characters at the start and end indices are different
    // If they are different, the string is not a palindrome
    if (str[start] !== str[end]) {
        return false;
    }

    // Recursively check the remaining substring by moving start index forward
    // and end index backward
    return isPalindrome(str, start + 1, end - 1);
}

const word = "MOM";
const starting = 0;
const ending = word.length - 1;
const palindrome = isPalindrome(word, starting, ending);

console.log(`${palindrome ? 'String is palindrome' : 'String is not palindrome'}`);


//* **************************************************************
//* Activity 4: Recursive Search
//* **************************************************************

//* Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.

// Function to perform binary search on a sorted array
const binarySearch = (arr, start, end, target) => {
    // Base case: if the start index exceeds the end index, target is not found
    if (start > end) {
        return -1;
    }

    // Calculate the middle index. Use Math.floor to ensure it’s an integer.
    let mid = Math.floor(start + (end - start) / 2);

    // Check if the middle element is the target
    if (arr[mid] === target) {
        return mid; // Target found at index mid
    }
    // If the middle element is less than the target, search the right half
    else if (arr[mid] < target) {
        return binarySearch(arr, mid + 1, end, target);
    }
    // If the middle element is greater than the target, search the left half
    else {
        return binarySearch(arr, start, mid - 1, target);
    }
};

const arr = [10, 20, 30, 40, 50];
const startIndex = 0;
const endIndex = arr.length - 1;
const target = 4;
const foundIndex = binarySearch(arr, startIndex, endIndex, target);

console.log(foundIndex !== -1 ? `Target found in index ${foundIndex}` : 'Target not found');


//* Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.

// Recursive function to count the occurrences of a target value in an array
const countOccurence = (arr, index, target) => {
    // Base case: If index is less than 0, we've checked all elements, return 0
    if (index < 0) {
        return 0;
    }

    // If the current element matches the target, count it and recurse for the remaining elements
    if (arr[index] === target) {
        return 1 + countOccurence(arr, index - 1, target);
    }
    // If the current element does not match the target, just recurse for the remaining elements
    else {
        return countOccurence(arr, index - 1, target);
    }
}

const numArray = [10, 20, 10, 40, 10, 30, 10, 50];
const arrIndex = numArray.length - 1;
const targetNum = 10;
console.log(`Total occurence of ${targetNum} is :`, countOccurence(numArray, arrIndex, targetNum));


//* **************************************************************
//* Activity 5: Tree Traversal (Optional)
//* **************************************************************

//* Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.

// Define the Node class for a binary tree node
class Node {
    constructor(data, left = null, right = null) {
        this.data = data;       // Data stored in the node
        this.left = left;       // Left child node
        this.right = right;     // Right child node
    }
}

// Recursive function to perform in-order traversal of a binary tree
const inOrder = (root) => {
    // Base case: If the root node is null, return
    if (!root) {
        return null;
    }

    // Recursively traverse the left subtree
    inOrder(root.left);

    // Visit the current node (log its data)
    console.log(root.data);

    // Recursively traverse the right subtree
    inOrder(root.right);
}

const root = new Node(4);                               // Create the root node with value 4
root.left = new Node(2, new Node(1), new Node(3));      // Left child with value 2, having children 1 and 3
root.right = new Node(6, new Node(5), new Node(7));     // Right child with value 6, having children 5 and 7
console.log('In-Order Traversal :', inOrder(root));     // Perform in-order traversal of the tree and log the result