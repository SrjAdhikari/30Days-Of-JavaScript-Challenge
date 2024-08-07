//* **************************************************************
//* Day 17 : Algorithms 
//* **************************************************************


//* **************************************************************
//* Activity 1: Sorting Algorithms
//* **************************************************************

//* Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

// Function to perform bubble sort on an array of numbers.
const bubbleSort = (array) => {
    let n = array.length;   // Get the length of the array

    // Outer loop to perform passes through the array
    for (let i = n - 2; i >= 0; i--) {
        let swapped = false;    // Flag to check if any swapping happened during this pass

        // Inner loop to compare adjacent elements
        for (let j = 0; j <= i; j++) {
            // Compare the current element with the next element
            if (array[j] > array[j + 1]) {
                // Swap elements if the current element is greater than the next element
                const temp = array[j];        // Temporarily store the current element
                array[j] = array[j + 1];      // Replace the current element with the next element
                array[j + 1] = temp;          // Place the temporarily stored element in the next position

                // Alternative to swap element
                // [array[j], array[j + 1]] = [array[j + 1], array[j]];

                swapped = true;               // Set the flag to true indicating a swap occurred
            }
        }

        // If no elements were swapped during this pass, the array is already sorted
        if (!swapped) {
            break;      // Exit the loop early if no swaps occurred
        }
    }

    // Log the sorted array to the console
    console.log(`Sorted Array : ${array}`);
}

// Example usage
const numbers = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(numbers);


//* Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

// Function to perform selection sort on an array of numbers.
const selectionSort = (array, size) => {
    // Iterate through each element of the array
    for (let i = 0; i < size; i++) {
        let minIndex = i;   // Assume the current index is the minimum

        // Find the index of the smallest element in the remaining unsorted portion of the array
        for (let j = i + 1; j < size; j++) {
            // If the element at index j is less than the element at minIndex, update minIndex
            if (array[j] < array[minIndex]) {
                minIndex = j; // Update minIndex if a smaller element is found
            }
        }

        // Swap the found minimum element with the element at index i
        [array[minIndex], array[i]] = [array[i], array[minIndex]];
    }

    // Log the sorted array to the console
    console.log(`Sorted Array : ${array}`);
}

const array = [10, 2, 8, 6, 3, 1, 5];
const size = array.length;
selectionSort(array, size);


//* Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.

// Function to perform Quick sort on an array of numbers.
const quickSort = (array) => {
    // Base case: if the array is of length 0 or 1, it's already sorted
    if(array.length <= 1) {
        return array;
    }

    // Choose the pivot element from the middle of the array
    let pivot = array[Math.floor(array.length / 2)];
    let left = [];      // Array to hold elements less than the pivot
    let right = [];     // Array to hold elements greater than or equal to the pivot

    // Iterate through the array to divide elements into left and right arrays
    for(let i = 0; i < array.length; i++) {
        // Skip the pivot element itself
        if(i !== Math.floor(array.length / 2)) {
            // Compare each element to the pivot
            if(array[i] < pivot) {
                // Element is less than pivot, add to left
                left.push(array[i]);
            }
            else {
                // Element is greater than or equal to pivot, add to right
                right.push(array[i]);
            }
        }
    }

    // Recursively sort the left and right arrays, and combine them with the pivot
    // `quickSort(left)` sorts the elements less than the pivot
    // `quickSort(right)` sorts the elements greater than or equal to the pivot
    // `[...quickSort(left), pivot, ...quickSort(right)]` concatenates the sorted left array,
    // the pivot element, and the sorted right array into a single sorted array
    return [...quickSort(left), pivot, ...quickSort(right)];
}

const numArray = [10, 7, 8, 9, 1, 5];
quickSort(numArray);
console.log(`Sorted Array : ${array}`);


//* **************************************************************
//* Activity 2: Searching Algorithms
//* **************************************************************

//* Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.

// Function to perform a linear search on an array
const linearSearch = (array, target) => {
    // Iterate over each element in the array
    for(let i = 0; i < array.length; i++) {
        // Check if the current element is equal to the target
        if(array[i] === target) {
            // If a match is found, log the index where the target is located
            console.log(`Target found at index : ${i}`);
            return;
        }
    }
    console.log(`Target not found.`);
}

const arrayNum = [10, 20, 50, 40, 30, 55];
const target = 40;
linearSearch(arrayNum, target);


//*　Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.

// Function to perform a binary search on a sorted array
const binarySearch = (array, target) => {
    let start = 0;                  // Initialize the start index of the array
    let end = array.length - 1;     // Initialize the end index of the array

    // Loop while the start index is less than or equal to the end index
    while (start <= end) {
        // Calculate the middle index of the current subarray
        let mid = Math.floor(start + (end - start) / 2);

        // Check if the middle element is equal to the target
        if (array[mid] === target) {
            console.log(`Target found at index: ${mid}`);       // Log the index where the target is found
            return mid;                                         // Return the index of the target
        }
        // If the target is greater than the middle element, search the right half
        else if (array[mid] < target) {
            // Move the start index to the right of the middle index
            start = mid + 1;
        }
        // If the target is less than the middle element, search the left half
        else {
            // Move the end index to the left of the middle index
            end = mid - 1; 
        }
    }
    // If the loop exits without finding the target, log that the target is not found
    console.log('Target not found.');
    return -1;  // Return -1 to indicate that the target is not in the array
}

const number = [10, 20, 40, 50, 70, 80];
const element = 80;
binarySearch(number, element);


//* **************************************************************
//* Activity 3: String Algorithms
//* **************************************************************

//* Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.

// Function to count the occurrences of each character in a string
const countOccurence = (str) => {
    // Create an object to store character counts
    const charCount = {};

    // Iterate through each character in the string
    for (let char of str) {
        // If the character is already in the object, increment its count
        if (charCount[char]) {
            charCount[char]++;
        } 
        else {
            // If the character is not in the object, add it with count 1
            charCount[char] = 1;
        }
    }

    // Log the character counts
    for (let char in charCount) {
        console.log(`${char}: ${charCount[char]}`);
    }
}

// Example usage
const str = "JavaScript";
countOccurence(str);


//* Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.

// Function to find the longest substring without repeating characters in a string
const longestUniqueSubstring = (str) => {
    let start = 0;              // Start index of the sliding window
    let maxLength = 0;          // Variable to keep track of the maximum length
    let charIndexMap = {};      // Map to store the most recent index of each character

    // Iterate through each character in the string
    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        // Check if the character is in the map and within the current window
        if (char in charIndexMap && charIndexMap[char] >= start) {
            // Move the start index to the right of the last occurrence of the current character
            start = charIndexMap[char] + 1;
        }

        // Update the character's latest index in the map
        charIndexMap[char] = i;

        // Calculate the length of the current window and update maxLength if needed
        maxLength = Math.max(maxLength, i - start + 1);
    }

    // Log the length of the longest substring without repeating characters
    console.log(`Length of the longest substring without repeating characters: ${maxLength}`);
}

// Example usage
const exampleString = "abcabcbb";
longestUniqueSubstring(exampleString);


//* **************************************************************
//* Activity 4: Array Algorithms
//* **************************************************************

//* Task 8: Write a function to rotate an array by k positions. Log the rotated array.

// Helper function to reverse a portion of the array
const reverse = (array, start, end) => {
    // Continue swapping elements until start index is less than end index
    while (start < end) {
        // Swap elements at start and end indices
        [array[start], array[end]] = [array[end], array[start]];
        // Move towards the center of the array
        start++;
        end--;
    }
}

// Function to rotate an array by k positions
const rotateArray = (array, k) => {
    // Get the length of the array
    let n = array.length;

    // Normalize k to handle cases where k is greater than the array length
    k %= n;

    // Reverse the entire array
    reverse(array, 0, n - 1);
    
    // Reverse the first k elements
    reverse(array, 0, k - 1);
    
    // Reverse the remaining n - k elements
    reverse(array, k, n - 1);

    // Log the rotated array
    console.log('Array after rotation: ', array);
}

// Example usage
const exampleArray = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
rotateArray(exampleArray, k);


//* Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.

// Function to merge two sorted arrays into one sorted array.
const mergeSortedArrays = (arr1, arr2) => {
    let i = 0;              // Pointer for the first array
    let j = 0;              // Pointer for the second array
    let mergedArray = [];   // Array to store the merged result

    // Traverse both arrays and merge them
    while (i < arr1.length && j < arr2.length) {
        // Compare the current elements of both arrays
        if (arr1[i] < arr2[j]) {
            // If element in arr1 is smaller, push it to mergedArray
            mergedArray.push(arr1[i]);
            i++;
        } 
        else {
            // If element in arr2 is smaller or equal, push it to mergedArray
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // If there are remaining elements in arr1, add them to mergedArray
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // If there are remaining elements in arr2, add them to mergedArray
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    // Log the merged array
    console.log('Merged Array:', mergedArray);
}

// Example usage
const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8];
mergeSortedArrays(array1, array2);


//* **************************************************************
//* Activity 5: Dynamic Programming (Optional)
//* **************************************************************

//* Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.

const fibonacci = (n) => {
    // Initialize the array with the first two Fibonacci numbers
    let fib = [0, 1];

    // Handle base cases
    if (n === 0) {
        console.log('Fibonacci number:', fib[0]);
        return;
    }
    if (n === 1) {
        console.log('Fibonacci numbers:', fib);
        return;
    }

    // Compute Fibonacci numbers from index 2 up to n
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    console.log('Fibonacci numbers :', fib);
}

const n = 5;
fibonacci(n);


//* **************************************************************
//* Achievement:
//* **************************************************************

//* By the end of these activities, you will:
//* • Implement and understand common sorting algorithms.
//* • Implement and understand common searching algorithms.
//* • Solve string manipulation problems using algorithms.
//* • Solve string manipulation problems using algorithms.
//* • Apply dynamic programming to solve complex problems (optional).