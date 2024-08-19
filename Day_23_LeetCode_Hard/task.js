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
    

//* **************************************************************
//* Activity 2: Merge k Sorted Lists
//* **************************************************************

//* Task 2: Solve the "Merge k Sorted Lists" problem on LeetCode.
    //? Write a function that takes an array of 'k' linked lists, each linked list is sorted in ascending order, and merges all the linked lists into one sorted linked list.
    //? Create a few test cases with linked lists and log the merged list.

    // Definition of ListNode class for a node in a linked list
    class ListNode {
        constructor(val = 0, next = null) {
            this.val = val;         // Value of the node
            this.next = next;       // Pointer to the next node in the linked list
        }
    }

    // Function to merge k sorted linked lists into one sorted linked list
    function mergeKSortedLists(lists) {
        if (lists.length === 0) return null;    // Return null if the input list array is empty

        // Initialize the merged list with the first list in the array
        let mergedList = lists[0];

        // Iterate through the remaining linked lists
        for (let i = 1; i < lists.length; i++) {
            // Merge the current mergedList with the next list in the array
            mergedList = mergeTwoLists(mergedList, lists[i]);
        }

        return mergedList; // Return the final merged sorted linked list
    }

    // Function to merge two sorted linked lists into one sorted linked list
    function mergeTwoLists(l1, l2) {
        // Create a dummy node to act as the starting point of the merged list
        let dummy = new ListNode();
        let current = dummy; // Pointer to build the merged list

        // Traverse both linked lists until one of them is exhausted
        while (l1 !== null && l2 !== null) {
            if (l1.val <= l2.val) {
                current.next = l1;      // Append node from l1 to the merged list
                l1 = l1.next;           // Move to the next node in l1
            } else {
                current.next = l2;      // Append node from l2 to the merged list
                l2 = l2.next;           // Move to the next node in l2
            }
            current = current.next;     // Move to the next position in the merged list
        }

        // If there are remaining nodes in l1, append them to the merged list
        if (l1 !== null) {
            current.next = l1;
        }
        // If there are remaining nodes in l2, append them to the merged list
        else {
            current.next = l2;
        }
        // Return the merged list starting from the first real node
        return dummy.next; 
    }

    // Utility function to print the linked list
    function printList(node) {
        let result = [];
        while (node !== null) {
            result.push(node.val);  // Collect node values in an array
            node = node.next;       // Move to the next node
        }
        // Print the linked list in a readable format
        console.log(result.join(' -> ')); 
    }

    // Test case 1: Single linked list
    const l1 = new ListNode(1, new ListNode(3, new ListNode(5)));
    printList(mergeKSortedLists([l1]));

    // Test case 2: Multiple linked lists with overlapping values
    const l2 = new ListNode(1, new ListNode(2, new ListNode(4)));
    const l3 = new ListNode(2, new ListNode(3, new ListNode(6)));
    printList(mergeKSortedLists([l1, l2, l3]));

    // Test case 3: Multiple linked lists with some empty lists
    const l4 = null; // Empty list
    const l5 = new ListNode(0, new ListNode(9, new ListNode(10)));
    printList(mergeKSortedLists([l4, l5]));

    // Test case 4: All lists are empty
    printList(mergeKSortedLists([]));

    // Test case 5: All lists are single-element lists
    const l6 = new ListNode(1);
    const l7 = new ListNode(3);
    const l8 = new ListNode(2);
    printList(mergeKSortedLists([l6, l7, l8]));