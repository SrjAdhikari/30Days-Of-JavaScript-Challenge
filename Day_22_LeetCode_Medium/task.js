//* **************************************************************
//* Day 22 : Leetcode Easy
//* **************************************************************


//* **************************************************************
//* Activity 1: Add Two Numbers
//* **************************************************************

//* Task 1: Solve the 'Add Two Numbers" problem on LeetCode.
    //? Write a function that takes two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list.
    //? Create a few test cases with linked lists and log the sum as a linked list.

    // Definition for singly-linked list node
    class ListNode {
        constructor(val = 0, next = null ) {
            this.val = val;
            this.next = next;
        }
    }

    // Function to add two numbers represented by linked lists.
    function addTwoNums(l1, l2) {
        // Dummy node to simplify the addition logic and handle edge cases like carry
        let dummyHead = new ListNode();
        let current = dummyHead;
        let carry = 0;

        // Traverse both linked lists until we reach the end of both
        while(l1 !== null || l2 !== null) {
            // Extract values from the current nodes, if available
            let x = (l1 !== null) ? l1.val : 0;
            let y = (l2 !== null) ? l2.val : 0;

            // Calculate the sum of the two digits and the carry from the previous addition
            let sum = x + y + carry;

            // Update the carry for the next addition
            carry = Math.floor(sum / 10);

            // Create a new node with the remainder of the sum (which is a single digit)
            current.next = new ListNode(sum % 10);

            // Move to the next nodes in both linked lists
            if (l1 !== null) l1 = l1.next;
            if (l2 !== null) l2 = l2.next;

             // Move the current pointer to the next node in the result linked list
            current = current.next;
        }

        // If there's any carry left after the last addition, create a new node for it
        if(carry > 0) {
            current.next = new ListNode(carry);
        }

        // The result linked list starts from dummyHead.next
        return dummyHead.next;
    }

    // Helper function to create a linked list from an array
    function createLinkedList(array) {
        let dummyHead = new ListNode();
        let current = dummyHead;
        for (const num of array) {
            current.next = new ListNode(num);
            current = current.next;
        }

        return dummyHead.next;
    }

    // Helper function to print linked list as an array
    function printLinkedList(head) {
        let current = head;
        let result = [];
        while(current !== null) {
            result.push(current.val);
            current = current.next;
        }
        console.log(result);
    }

    // Test Cases
    let l1 = createLinkedList([2, 4, 3]);           // Represents the number 342
    let l2 = createLinkedList([5, 6, 4]);           // Represents the number 465
    let sumList = addTwoNums(l1, l2);               // Should represent the number 807 (7 -> 0 -> 8)
    printLinkedList(sumList);                       // Output -> [7, 0, 8]

    l1 = createLinkedList([0]);                     // Represents the number 0
    l2 = createLinkedList([0]);                     // Represents the number 0
    sumList = addTwoNums(l1, l2);                   // Should represent the number 0 (0)
    printLinkedList(sumList);                       // Output -> [0]

    l1 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);   // Represents the number 9999999
    l2 = createLinkedList([9, 9, 9, 9]);            // Represents the number 9999
    sumList = addTwoNums(l1, l2);                   // Should represent the number 10009998 (8 -> 9 -> 9 -> 9 -> 0 -> 0 -> 0 -> 1)
    printLinkedList(sumList);                       // Output -> [8, 9, 9, 9, 0, 0, 0, 1]


//* **************************************************************
//* Activity 2: Longest Substring Without Repeating Characters
//* **************************************************************

//* Task 2: Solve the "Longest Substring Without Repeating Characters' problem on LeetCode.
    //? Write a function that takes a string and returns the length of the longest substring without repeating characters.
    //? Log the length for a few test cases, including edge cases.

    // Function to find the length of the longest substring without repeating characters.
    function lengthOfLongestSubstring (str) {
        // HashMap to store the last index of each character
        let charIndexMap = new Map();
        let maxLength = 0;  // To store the maximum length found
        let start = 0;      // Start index of the current substring

        for(let end = 0; end < str.length; end++){
            let currChar = str[end];

            // If the character is already in the map, move the start to the right of the previous index of this character
            if(charIndexMap.has(currChar)) {
                start = Math.max(charIndexMap.get(currChar) + 1, start);
            }

            // Update the maximum length found so far
            maxLength = Math.max(maxLength, end- start + 1);

            // Update the last index of the current character
            charIndexMap.set(currChar, end);
        }

        return maxLength;
    }

    // Test Cases
    console.log(lengthOfLongestSubstring("abcabcbb"));  // Output -> 3 (substring "abc")
    console.log(lengthOfLongestSubstring("bbbbb"));     // Output -> 1 (substring "b")
    console.log(lengthOfLongestSubstring("pwwkew"));    // Output -> 3 (substring "wke")
    console.log(lengthOfLongestSubstring(""));          // Output -> 0 (empty string)
    console.log(lengthOfLongestSubstring(" "));         // Output -> 1 (substring " ")
    console.log(lengthOfLongestSubstring("dvdf"));      // Output -> 3 (substring "vdf")
    console.log(lengthOfLongestSubstring("anviaj"));    // Output -> 5 (substring "nviaj")