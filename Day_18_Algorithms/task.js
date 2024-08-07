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