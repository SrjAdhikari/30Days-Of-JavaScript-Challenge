//* **************************************************************
//* Day 17 : Data Structures
//* **************************************************************


//* **************************************************************
//* Activity 1: Linked List
//* **************************************************************

//* Task 1: Implement a Node class to represent an element in a linked list with properties value and next.

//* 1:
// Define the Node class for a linked list
class Node {
    constructor(value, next = null) {
        this.value = value;          // The data stored in the node
        this.next = next;            // A reference to the next node in the list (default is null)
    }
}

// Example usage:
const node1 = new Node(1);          // Node with value 1 and no next node
const node2 = new Node(2, node1);   // Node with value 2, next node is node1
const node3 = new Node(3, node2);   // Node with value 3, next node is node2

console.log(node3);                 // Output: Node { value: 3, next: Node { value: 2, next: Node { value: 1, next: null } } }

//* **************************************************************

//* 2:
// Define the Node class for a linked list
class Node {
    constructor(value) {
        this.value = value;          // The data stored in the node
        this.next = null;            // A reference to the next node in the list (default is null)
    }
}

// Create nodes using the modified class
const node4 = new Node(1);           // Node with value 1, next is null by default
const node5 = new Node(2);           // Node with value 2, next is null by default
node5.next = node4;                  // Manually set the next property to point to node1

const node6 = new Node(3);           // Node with value 3, next is null by default
node6.next = node5;                  // Manually set the next property to point to node2

console.log(node6);                  // Output: Node { value: 3, next: Node { value: 2, next: Node { value: 1, next: null } } }