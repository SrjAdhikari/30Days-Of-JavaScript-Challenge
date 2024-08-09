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


//* **************************************************************
//* Activity 2: Reverse Integer
//* **************************************************************

//* Task 2: Solve the "Reverse Integer problem on LeetCode.
    //? Write a function that takes an integer and returns it with its digits reversed.
    //? Handle edge cases like negative numbers and numbers ending in zero.
    //? Log the reversed integers for a few test cases.

    // Function that takes an integer as input and returns its digits reversed.
    const reverseInteger = (number) => {
        // Check if the number is negative
        const isNegative = number < 0;
        
        // Convert the number to its absolute value to handle the reversal without the negative sign
        number = Math.abs(number);
        
        // Initialize an empty string to build the reversed number
        let reversedStr = "";
        
        // Special case: if the number is 0, directly return 0
        if (number === 0) {
            return 0;
        }
        
        // Loop to extract digits and build the reversed string
        while (number !== 0) {
            // Get the last digit of the number
            let lastDigit = number % 10;
            
            // Append the last digit to the reversed string
            reversedStr += lastDigit;
            
            // Remove the last digit from the number
            number = Math.floor(number / 10);
        }
        
        // Convert the reversed string to a number
        let reversedNum = parseInt(reversedStr);
        
        // Apply the negative sign if the original number was negative
        if (isNegative) {
            reversedNum = -reversedNum;
        }
        
        // Return the reversed number
        return reversedNum;
    }

    console.log(`Reversed Integer : ${reverseInteger(1234)}`);      // Output -> Reversed Integer : 4321
    console.log(`Reversed Integer : ${reverseInteger(-135)}`);      // Output -> Reversed Integer : -531         
    console.log(`Reversed Integer : ${reverseInteger(0)}`);         // Output -> Reversed Integer : 0


//* **************************************************************
//* Activity 3: Palindrome Number
//* **************************************************************

//* Task 3: Solve the "Palindrome Number" problem on LeetCode.
    //? Write a function that takes an integer and returns true if it i t is a palindrome, and false otherwise.
    //? Log the result for a few test cases, including edge cases like negative numbers.


    // Function that checks if a given integer is a palindrome.
    const isPalindrome = (num) => {
        // Check if the number is negative
        // Negative numbers cannot be palindromes due to the negative sign
        if (num < 0) {
            return false;
        }

        // Convert the number to its string representation
        // This allows easy comparison of individual digits
        const numStr = num.toString();

        // Initialize pointers for the start and end of the string
        let start = 0;
        let end = numStr.length - 1;

        // Compare characters from the start and end of the string
        // Move towards the center of the string from both ends
        while (start < end) {
            // If characters at the start and end positions do not match
            // The number is not a palindrome
            if (numStr[start] !== numStr[end]) {
                return false; // Exit the function early
            }
            // Move the start pointer one position to the right
            // Move the end pointer one position to the left
            start++;
            end--;
        }

        // If all character comparisons matched, the number is a palindrome
        return true;
    };

    console.log(`Is palindrome : ${isPalindrome(121)}`);        // Output -> Is palindrome : true   
    console.log(`Is palindrome : ${isPalindrome(-121)}`);       // Output -> Is palindrome : false
    console.log(`Is palindrome : ${isPalindrome(1212)}`);       // Output -> Is palindrome : false


//* **************************************************************
//* Activity 4: Merge Two Sorted Lists
//* **************************************************************

//* Task 4: Solve the "Merge Two Sorted Lists problem on LeetCode.
    //? Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
    //? Create a few test cases with linked lists and log the merged list.
    class ListNode {
        // Creates a new ListNode.
        // value - The value to store in the node.
        // next - The next node in the linked list (default is null).
        constructor(value, next = null) {
            this.value = value;     // The value of the current node
            this.next = next;       // The pointer to the next node in the linked list
        }
    }

    // Function to converts an array to a linked list.
    // array - An array of numbers to be converted.
    const createList = (array) => {
        let dummy = new ListNode();     // Dummy node to simplify list creation
        let current = dummy;            // Pointer to build the new list

        // Iterate over each element in the array
        for (let value of array) {
            // Create a new node with the current value and append it to the list
            current.next = new ListNode(value);
            // Move the pointer to the newly created node
            current = current.next;
        }

        // Return the head of the new list, which is the node after the dummy node
        return dummy.next;
    }

    // Function to merges two sorted linked lists into one sorted linked list.
    // l1 - The head node of the first sorted linked list.
    // l2 - The head node of the second sorted linked list.
    const mergeTwoLists = (l1, l2) => {
        let dummy = new ListNode();     // Dummy node to simplify merging
        let current = dummy;            // Pointer to build the merged list

        // Iterate while both lists have nodes
        while (l1 !== null && l2 !== null) {
            // Compare the current nodes of both lists
            if (l1.value < l2.value) {
                current.next = l1;      // Attach the node from l1 to the merged list
                l1 = l1.next;           // Move to the next node in l1
            } else {
                current.next = l2;      // Attach the node from l2 to the merged list
                l2 = l2.next;           // Move to the next node in l2
            }
            current = current.next;     // Move the pointer to the newly added node
        }

        // If there are remaining nodes in l1, append them to the merged list
        if (l1 !== null) {
            current.next = l1;
        }

        // If there are remaining nodes in l2, append them to the merged list
        if (l2 !== null) {
            current.next = l2;
        }

        // Return the head of the merged list, which is the node after the dummy node
        return dummy.next;
    };

    // Functiion to prints the linked list.
    // head - The head node of the linked list.
    const printList = (head) => {
        let current = head;     // Pointer to traverse the list
        let result = [];        // Array to collect the values of the nodes

        // Traverse the linked list and collect values
        while (current !== null) {
            result.push(current.value);     // Add the value of the current node to the array
            current = current.next;         // Move to the next node
        }

        // Print the values in a readable format
        console.log(result.join(' -> '));
    }

    let l1 = createList([1, 3, 5]);
    let l2 = createList([2, 4, 6]);
    let mergedList = mergeTwoLists(l1, l2);
    console.log("Merged List 1:");
    printList(mergedList);                      // Output: 1 -> 2 -> 3 -> 4 -> 5 -> 6

    l1 = createList([1, 2, 3]);
    l2 = createList([0]);
    mergedList = mergeTwoLists(l1, l2);
    console.log("Merged List 2:");
    printList(mergedList);                      // Output: 0 -> 1 -> 2 -> 3

    l1 = createList([]);
    l2 = createList([1, 2, 3]);
    mergedList = mergeTwoLists(l1, l2);
    console.log("Merged List 3:");
    printList(mergedList);                      // Output: 1 -> 2 -> 3