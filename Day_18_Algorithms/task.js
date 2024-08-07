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