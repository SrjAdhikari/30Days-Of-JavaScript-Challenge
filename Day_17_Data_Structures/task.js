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
class TreeNode {
    constructor(value) {
        this.value = value;         // The data stored in the node
        this.next = null;           // A reference to the next node in the list (default is null)
    }
}

// Create nodes using the modified class
const node4 = new TreeNode(1);      // Node with value 1, next is null by default
const node5 = new TreeNode(2);      // Node with value 2, next is null by default
node5.next = node4;                 // Manually set the next property to point to node1

const node6 = new TreeNode(3);      // Node with value 3, next is null by default
node6.next = node5;                 // Manually set the next property to point to node2

console.log(node6);                 // Output: Node { value: 3, next: Node { value: 2, next: Node { value: 1, next: null } } }


//* Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.

//? Steps :
//* 1. Define the Node class (The Node class is already defined in Task 1, so we use that class instead of creating it again).
//* 2. Define the LinkedList class with methods:
    //* addNode(value): Adds a new node with the given value to the end of the list.
    //* removeNode(): Removes the node from the end of the list.
    //* displayNode(): Displays all nodes in the list.

// Define the LinkedList class
class LinkedList {
    constructor() {
        this.head = null;   // Initialize the head of the list to null (empty list)
    }

    // Add a node with the given value to the end of the list
    addNode(value) {
        // Create a new node with the provided value
        const newNode = new Node(value);

        if (!this.head) {
            // If the list is empty, set the new node as the head of the list
            this.head = newNode;
        } 
        else {
            // Traverse to the end of the list
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            // Append the new node to the end of the list
            current.next = newNode;
        }
    }

    // Remove the last node from the list
    removeNode() {
        if (!this.head) {
            // If the list is empty, do nothing
            return;
        }

        if (!this.head.next) {
            // If there's only one node in the list, set head to null (empty list)
            this.head = null;
        } 
        else {
            // Traverse to the second-to-last node
            let current = this.head;
            while (current.next.next) {
                current = current.next;
            }
            // Remove the last node by setting the next property of the second-to-last node to null
            current.next = null;
        }
    }

    // Display all nodes in the list
    displayNode() {
        const nodes = [];               // Array to hold the values of the nodes
        let current = this.head;        // Start from the head of the list
        while (current) {
            nodes.push(current.value);  // Add the value of the current node to the array
            current = current.next;     // Move to the next node
        }
        // Print the values of the nodes joined by " -> " to represent the list structure
        console.log(nodes.join(' -> '));
    }
}

// Example usage:
const list = new LinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);
console.log('List after adding nodes:');
list.displayNode();     // Output: 1 -> 2 -> 3

list.removeNode();
console.log('List after removing the last node:');
list.displayNode();     // Output: 1 -> 2

list.removeNode();
list.removeNode();
console.log('List after removing all nodes:');
list.displayNode();     // Output: (empty list)