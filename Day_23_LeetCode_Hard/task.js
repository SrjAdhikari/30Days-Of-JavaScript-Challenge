//* **************************************************************
//* Day 23 : Leetcode Hard
//* **************************************************************


//* **************************************************************
//* Activity 1: Median of Two Sorted Arrays
//* **************************************************************

//* Task 1: Solve the "Median of Two Sorted Arrays" problem on LeetCode.
    //? Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays.
    //? Log the median for a few test cases, including edge cases.

    // Function to find the median of two sorted arrays.
    function findMedian(array1, array2) {
        // Initialize an empty array to store the merged result
        const mergedArray = [];
        
        // Initialize pointers for both input arrays
        let pointer1 = 0;   // Pointer for traversing array1
        let pointer2 = 0;   // Pointer for traversing array2
    
        // Merge the two sorted arrays into mergedArray
        while (pointer1 < array1.length && pointer2 < array2.length) {
            // Compare elements at the pointers and push the smaller element into mergedArray
            if (array1[pointer1] <= array2[pointer2]) {
                mergedArray.push(array1[pointer1]);     // Add element from array1
                pointer1++;                             // Move pointer1 forward
            } else {
                mergedArray.push(array2[pointer2]);     // Add element from array2
                pointer2++;                             // Move pointer2 forward
            }
        }
    
        // Append remaining elements from array1 to mergedArray
        while (pointer1 < array1.length) {
            mergedArray.push(array1[pointer1]);         // Add remaining elements from array1
            pointer1++;                                 // Move pointer1 forward
        }
        
        // Append remaining elements from array2 to mergedArray
        while (pointer2 < array2.length) {
            mergedArray.push(array2[pointer2]);         // Add remaining elements from array2
            pointer2++;                                 // Move pointer2 forward
        }
    
        // Determine the length of the merged array
        const length = mergedArray.length;

        // Find the middle index (for zero-based index)
        const mid = Math.floor(length / 2);
    
        // Check if the total number of elements is even or odd
        if (length % 2 === 0) {
            // If the total length is even, calculate the median as the average of the two middle elements
            return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
        } else {
            // If the total length is odd, the median is the middle element
            return mergedArray[mid];
        }
    }
    
    // Test Cases
    console.log(findMedian([1, 3], [2]));           // Output -> 2      // Explanation: Merged array is [1, 2, 3], median is 2.
    console.log(findMedian([1, 2], [3, 4]));        // Output -> 2.5    // Explanation: Merged array is [1, 2, 3, 4], median is (2 + 3) / 2 = 2.5.
    console.log(findMedian([0, 0], [0, 0]));        // Output -> 0      // Explanation: Merged array is [0, 0, 0, 0], median is 0.
    console.log(findMedian([1], [2, 3, 4]));        // Output -> 2.5    // Explanation: Merged array is [1, 2, 3, 4], median is (2 + 3) / 2 = 2.5.
    console.log(findMedian([1, 2], [3]));           // Output -> 2      // Explanation: Merged array is [1, 2, 3], median is 2.
    console.log(findMedian([], [1]));               // Output -> 1      // Explanation: Merged array is [1], median is 1.
    console.log(findMedian([], []));                // Output -> NaN    // Explanation: Both arrays are empty, median is undefined.