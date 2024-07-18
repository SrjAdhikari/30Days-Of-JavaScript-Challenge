//* **************************************************************
//* Day 6 : Arrays
//* **************************************************************


//* **************************************************************
//* Activity 1: Array Creation and Access
//* **************************************************************

//* Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
const numArray = [1, 2, 3, 4, 5];
console.log(numArray);      // Output -> [ 1, 2, 3, 4, 5 ]


//* Task 2: Access the first and last elements of the array and log them to the console.
// Acessing first element of array
const firstElement = numArray[0];
console.log(`First element : ${firstElement}`)          // Output -> First element : 1

// Acessing last element of array
const lastElement = numArray[numArray.length - 1];
console.log(`Last element : ${lastElement}`)            // Output -> Last element : 5 


//* **************************************************************
//* Activity 2: Array Methods (Basic)
//* **************************************************************

//* Task 3: Use the push method to add a new number to the end of the array and log the updated array.
const fruits = ['Apple', 'Banana', 'Mango', 'Grapes'];
console.log(`Array before updation :`);
console.log(fruits);            // Output -> [ 'Apple', 'Banana', 'Mango', 'Grapes' ]

fruits.push('Pineapple');       // Add a new element to the end of the array
console.log(`Array after updation :`);
console.log(fruits)             // Output -> [ 'Apple', 'Banana', 'Mango', 'Grapes', 'Pineapple' ]


//* Task 4: Use the pop method to remove the last element from the array and log the updated array.
const animals = ['Lion', 'Tiger', 'Dog', 'Cat', 'Cow'];
console.log(`Array before updation :`);
console.log(animals);           // Output -> [ 'Lion', 'Tiger', 'Dog', 'Cat', 'Cow' ]

animals.pop();                  // Remove last element from array
console.log(`Array after updation :`);
console.log(animals)            // Output -> [ 'Lion', 'Tiger', 'Dog', 'Cat' ]


//* Task 5: Use the shift method to remove the first element from the array and log the updated array.
const numbers = [10, 20, 30, 40, 50];
console.log(`Array before updation :`);
console.log(numbers);           // Output -> [ 10, 20, 30, 40, 50 ]

numbers.shift();                // Remove first element from array
console.log(`Array after updation :`);
console.log(numbers)            // Output -> [ 20, 30, 40, 50 ]


//* Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
const array = [20, 30, 40, 50];
console.log(`Array before updation :`);
console.log(array);             // Output -> [ 20, 30, 40, 50 ]

array.unshift(10);              // Add a new element to the beginning of the array
console.log(`Array after updation :`);
console.log(array)              // Output -> [ 10, 20, 30, 40, 50 ]


//* **************************************************************
//* Activity 3: Array Methods (Intermediate)
//* **************************************************************

//* Task 7: Use the map method to create a new array where each element is doubled and log the new array.
const numberArray = [5, 10, 15, 20, 25];
const doubledNum = numberArray.map((num) => num * 2);
console.log(doubledNum);        // Output -> [ 10, 20, 30, 40, 50 ]


//* Task 8: Use the filter method to create a new array with only even numbers and log the new array.
const mixArray = [2, 5, 9, 10, 14, 15, 20];
const evenArray = mixArray.filter((num) => num % 2 === 0);
console.log(evenArray)          // Output -> [ 2, 10, 14, 20 ]


//* Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
const arr = [1, 2, 3, 4, 5];
const arraySum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(`Sum : ${arraySum}`);       // Output -> Sum : 15


//* **************************************************************
//* Activity 4: Array Array Iteration
//* **************************************************************

//* Task 10: Use a for loop to iterate over the array and log each element to the console.
const numArr = [10, 15, 20, 25, 30];
for(let i = 0; i < numArr.length; i++) {
    console.log(numArr[i]);
}


//* Task 11: Use the forEach method to iterate over the array and log each element to the console.
const arrNum = [15, 30, 45, 60, 75];
// Using Normal Function:
arrNum.forEach(function (item) {
    console.log(item);
})
console.log(`\n`)

// Using Arrow Function:
arrNum.forEach((item) => {
    console.log(item)
});
console.log(`\n`)

// Using Arrow Function:
arrNum.forEach((item) => console.log(item));


//* **************************************************************
//* Activity 5: Multi-dimensional Arrays
//* **************************************************************

//* Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
const matrix = [ 
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9] 
];
console.log(matrix);        // Output -> [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

// Access each element of 2D Array
for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}


//* Task 13: Access and log a specific element from the two-dimensional array.
const element = matrix[1][2];
console.log(`Specific Element : ${element}`);               // Output -> Specific Element : 6

const specificElement = matrix[2][1];
console.log(`Specific Element : ${specificElement}`)        // Output -> Specific Element : 8


//* **************************************************************
//* Achievement:
//* **************************************************************

//* By the end of these activities, you will:
//* • Create and manipulate arrays using various methods.
//* • Transform and aggregate array data using map, filter, and reduce.
//* • Iterate over arrays using loops and iteration methods.
//* • Understand and work with multi-dimensional arrays.