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


//* **************************************************************
//* Activity 3: Container With Most Water
//* **************************************************************

//* Task 3: Solve the "Container With Most Water" problem on LeetCode.
    //? Write a function that takes an array of non-negative integers where each integer represents the height of a line drawn at each point. Find two lines that together with the x-axis form a container, such that the container holds the most water.
    //? Log the maximum amount of water for a few test cases.

    // Function to find the maximum amount of water that can be contained between two lines.
    // height - An array of non-negative integers representing the height of lines.
    function maxArea(height) {
        let left = 0;                       // Pointer to the leftmost line
        let right = height.length - 1;      // Pointer to the rightmost line
        let maxWater = 0;                   // To store the maximum amount of water found

        // Use two pointers to traverse the array from both ends
        while(left < right) {
            // Calculate the width between the two lines
            const width = right - left;

            // Find the height of the shorter line
            const currHeight = Math.min(height[left], height[right]);

            // Calculate the current water area and update the maximum if it's greater
            const currWater = width * currHeight;

            // Update maxWater if the current container holds more water
            maxWater = Math.max(maxWater, currWater);

            // Move the pointer pointing to the shorter line inward, hoping to find a taller line
            if(height[left] < height[right]) {
                left++;
            }
            else {
                right--;
            }
        }
        return maxWater;
    }

    // Test Cases
    console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));  // Output -> 49
    console.log(maxArea([1, 1]));                       // Output -> 1
    console.log(maxArea([4, 3, 2, 1, 4]));              // Output -> 16
    console.log(maxArea([1, 2, 1]));                    // Output -> 2
    console.log(maxArea([2, 3, 10, 5, 7, 8, 9]));       // Output -> 36


//* **************************************************************
//* Activity 4: 3Sum
//* **************************************************************

//* Task 4: Solve the 3Sum problem on LeetCode.
    //? Write a function that takes an array of integers and finds all unique triplets in the array which give the sum of zero.
    //? Log the triplets for a few test cases, including edge cases.

    // Function to find all unique triplets in the array that sum up to zero.
    function threeSum(nums) {
        // Sort the array to help with finding and avoiding duplicate triplets
        nums.sort((a, b) => a - b);
        const triplets = []; // Array to store the result triplets

        // Loop through the array, treating each element as the first element of a potential triplet
        for(let i = 0; i < nums.length; i++) {
            // Skip duplicate values for the first element
            if(i > 0 && nums[i] === nums[i - 1]) continue;

            // Two-pointer approach to find the other two elements of the triplet
            let left = i + 1;
            let right = nums.length - 1;

            while(left < right) {
                const sum = nums[i] + nums[left] + nums[right];

                if(sum === 0) {
                    // Found a triplet that sums to zero, add it to the result
                    triplets.push(nums[i], nums[left], nums[right]);

                    // Skip duplicate values for the second elements
                    while(left < right && nums[left] === nums[left + 1]) left++;
                    // Skip duplicate values for the third elements
                    while(left < right && nums[right] === nums[right - 1]) right--;

                    // Move both pointers after finding a valid triplet
                    left++;
                    right--;
                }
                else if(sum < 0) {
                    // If the sum is less than zero, move the left pointer to increase the sum
                    left++;
                }
                else {
                    // If the sum is greater than zero, move the right pointer to decrease the sum
                    right--;
                }
            }
        }

        return triplets;    // Return the array of unique triplets
    }

    // Test Cases
    console.log(threeSum([-1, 0, 1, 2, -1, -4]));       // Output -> [[-1, -1, 2], [-1, 0, 1]]
    console.log(threeSum([0, 0, 0, 0]));                // Output -> [[0, 0, 0]] (only one unique triplet)
    console.log(threeSum([-2, 0, 1, 1, 2]));            // Output -> [[-2, 0, 2], [-2, 1, 1]]
    console.log(threeSum([3, -1, -1, 0, 2, -2]));       // Output -> [[-2, -1, 3], [-2, 0, 2]]
    console.log(threeSum([1, 2, -2, -1]));              // Output -> [] (no triplet sums to zero)
    console.log(threeSum([]));                          // Output -> [] (empty array)
    console.log(threeSum([0]));                         // Output -> [] (no triplet can be formed)


//* **************************************************************
//* Activity 5: Group Anagrams
//* **************************************************************

//* Task 5: Solve the "Group Anagrams" problem on LeetCode.
    //? Write a function that takes an array of strings and groups anagrams together.
    //? Log the grouped anagrams for a few test cases.

    //* 1:
    // Function to group anagrams from an array of strings.
    function groupAnagrams(strs) {
        let result = {}; // Create an empty object to store anagram groups
    
        // Iterate over each string in the input array
        for (const str of strs) {
            // Sort the characters of the string to get a canonical form
            let sortedStr = str.split("").sort().join("");
    
            // If the sorted string is already a key in the result object, add the original string to the array
            if (result[sortedStr]) {
                result[sortedStr].push(str);
            } else {
                // If the sorted string is not a key, create a new key with an array containing the original string
                result[sortedStr] = [str];
            }
        }
    
        // Convert the object values to an array of arrays and return it
        return Object.values(result);
    }
    
    // Test Cases
    console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));     // Output -> [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]
    console.log(groupAnagrams([""]))                                            // Output -> [['']]
    console.log(groupAnagrams(["a"]))                                           // Output -> [['a']]
    console.log(groupAnagrams(["rat", "car", "tar", "arc"]));                   // Output -> [['rat', 'tar'], ['car', 'arc']]
    console.log(groupAnagrams(["abc", "bca", "cab", "xyz", "zyx"]));            // Output -> [['abc', 'bca', 'cab'], ['xyz', 'zyx']]
    
    //* **************************************************************

    //* 2:
    // Function to group anagrams from an array of strings.
    function groupAnagram(strs) {
        // Create a Map to store grouped anagrams
        const anagramMap = new Map();

        // Iterate through each string in the input array
        for (const str of strs) {
            // Sort the characters of the string to get a canonical form
            const sortedStr = str.split('').sort().join('');

            // If the sorted string is not already a key in the map, add it with an empty array
            if (!anagramMap.has(sortedStr)) {
                anagramMap.set(sortedStr, []);
            }

            // Push the original string into the array corresponding to the sorted key
            anagramMap.get(sortedStr).push(str);
        }

        // Convert the map values to an array of arrays
        return Array.from(anagramMap.values());
    }
    
    // Test Cases
    console.log(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]));
    console.log(groupAnagram([""]))
    console.log(groupAnagram(["a"]))
    console.log(groupAnagram(["rat", "car", "tar", "arc"]));
    console.log(groupAnagram(["abc", "bca", "cab", "xyz", "zyx"]));