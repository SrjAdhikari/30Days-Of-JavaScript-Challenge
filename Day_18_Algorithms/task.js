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