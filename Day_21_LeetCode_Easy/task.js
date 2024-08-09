//* **************************************************************
//* Day 20 : Leetcode Easy
//* **************************************************************


//* **************************************************************
//* Activity 1: Two Sum
//* **************************************************************

//* Task 1: Solve the "Two Sum" problem on LeetCode.
    //? Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.
    //? Log the indices for a few test cases.

    //* 1:
    // Function to find the indices of two numbers in an array that add up to a given target
    const twoSum = (array, target) => {
        // Iterate through each element in the array
        for (let i = 0; i < array.length; i++) {
            // Iterate through the elements following the current element
            for (let j = i + 1; j < array.length; j++) {
                // Check if the sum of the two elements equals the target
                if (array[i] + array[j] === target) {
                    // Return the indices of the two elements that add up to the target
                    return [i, j];
                }
            }
        }
        // Return 'Not found.' if no such pair exists
        return 'Not found.';
    }

    const array = [3, 3];
    const target = 6;
    console.log(`Indices : ${twoSum(array, target)}`);

    const array2 = [1, 2, 3, 4];
    const target2 = 5;
    console.log(`Indices : ${twoSum(array2, target2)}`);

    const array3 = [1, 3, 5, 9];
    const target3 = 9;
    console.log(`Indices : ${twoSum(array3, target3)}`);

    //* **************************************************************

    //* 2:
    // Function to find the indices of two numbers in an array that add up to a given target
    const findTwoSumIndices = (array, target) => {
        // Create a map to store the indices of numbers as we iterate through the array
        const indexMap = new Map();
        
        // Iterate through the array
        for (let i = 0; i < array.length; i++) {
            // Calculate the complement of the current number that we need to find in the map
            const complement = target - array[i];

            // Check if the complement exists in the map
            if (indexMap.has(complement)) {
                // Return the indices of the complement and the current number
                return [indexMap.get(complement), i];
            }

            // Store the current number and its index in the map
            indexMap.set(array[i], i);
        }
        
        // Return 'Not found' if no pair that sums up to the target is found
        return 'Not found';
    }

    // Test cases
    const numbers1 = [2, 7, 11, 15];
    const target4 = 9;
    console.log(`Indices :`, findTwoSumIndices(numbers1, target4));    // Output: [0, 1]

    const numbers2 = [3, 2, 4];
    const target5 = 6;
    console.log(`Indices :`, findTwoSumIndices(numbers2, target5));    // Output: [1, 2]

    const numbers3 = [1, 5, 3, 7];
    const target6 = 10;
    console.log(`Indices :`, findTwoSumIndices(numbers3, target6));    // Output: [1, 3]