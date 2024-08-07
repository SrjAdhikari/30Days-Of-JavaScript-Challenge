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


//* **************************************************************
//* Activity 2: Stack
//* **************************************************************

//* Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).

// Define the Stack class
class Stack {
    // Constructor to initialize the stack
    constructor() {
        this.items = [];                            // Initialize an empty array to store stack elements
    }

    // Add an element to the top of the stack
    push(element) {
        // Add the element to the end of the array, which represents the top of the stack
        this.items.push(element);
    }
    
    // Remove and return the top element of the stack
    pop() {
        if (this.items.length === 0) {
            console.log('Stack is empty!');         // Print a message if the stack is empty
            return null;                            // Return null when trying to pop from an empty stack
        }
        return this.items.pop();                    // Remove and return the last element of the array, which is the top of the stack
    }

    // Return the top element of the stack without removing it
    peek() {
        if (this.items.length === 0) {
            console.log('Stack is empty!');         // Print a message if the stack is empty
            return null;                            // Return null when trying to peek from an empty stack
        }
        return this.items[this.items.length - 1];   // Return the last element of the array, which is the top of the stack
    }
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log('Top element:', stack.peek());          // Output -> Top element: 30
console.log('Popped element:', stack.pop());        // Output -> Popped element: 30


//* Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.
// (The Stack class is already defined in Task 3, so we use that class instead of creating it again).

// Function to reverse a string using the Stack class
const reverseString = (str) => {
    // Create a new instance of the Stack class
    const stack = new Stack();

    // Loop through each character of the input string
    for (const char of str) {
        // Push each character onto the stack
        stack.push(char);
    }

    // Initialize an empty string to build the reversed string
    let reversedOrder = "";

    // While there are characters in the stack
    while (stack.items.length > 0) {
        // Remove and retrieve the top character from the stack
        const topChar = stack.pop();
        
        // Append the retrieved character to the reversedOrder string
        reversedOrder += topChar;
    }

    // Return the reversed string
    return reversedOrder;
}

// Example usage
const originalString = 'JavaScript Challenge';
const reversedString = reverseString(originalString);
console.log('Reversed String : ', reversedString);


//* **************************************************************
//* Activity 3: Queue
//* **************************************************************

//* Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).

// Define the Queue class
class Queue {
    // Constructor to initialize the queue
    constructor () {
        // Initialize an empty array to store queue elements
        this.items = [];
    }

    // Add an element to the end of the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Remove and return the element from the front of the queue
    dequeue() {
        // Check if the queue is empty
        if (this.items.length === 0) {
            // Return undefined or throw an error if preferred
            console.log('Queue is empty.');
        }
        // Remove and return the first element
        return this.items.shift(); 
    }

    // View the element at the front of the queue without removing it
    front() {
        // Check if the queue is empty
        if (this.items.length === 0) {
            // Return undefined or throw an error if preferred
            console.log('Queue is empty.');
        }
        // Return the first element
        return this.items[0];
    }
}

// Example usage
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.front());     // Output: 1
console.log(queue.dequeue());   // Output: 1
console.log(queue.front());     // Output: 2


//* Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.
// (The Queue class is already defined in Task 3, so we use that class instead of creating it again).

// Define the PrinterQueue class extending from Queue
class PrinterQueue extends Queue {
    printJob() {
        // Continue processing jobs while there are elements in the queue
        while(this.items.length > 0) {
            // Remove and retrieve the job from the front of the queue
            const job = this.dequeue();
            // Simulate printing the job by logging it to the console
            console.log(`Printing : ${job}`);
        }
        // Once all jobs have been processed, log a completion message
        console.log('All print jobs have been processed.');
    }
}

// Example usage
const printerQueue = new PrinterQueue();                // Create a new PrinterQueue instance
printerQueue.enqueue('Print job 1:- Document1.pdf');    // Add print jobs to the queue
printerQueue.enqueue('Print job 2:- Document2.docx');
printerQueue.enqueue('Print job 3:- Document3.xls');

printerQueue.printJob();                                // Process and print all jobs in the queue