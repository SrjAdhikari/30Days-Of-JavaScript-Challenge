//* **************************************************************
//* Day 1 : Variables And Data Types
//* **************************************************************


//* **************************************************************
//* Activity 1: Variable Declaration
//* **************************************************************

//* Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var num = 123;
console.log(`Value of num is : ${num}`);        // Output -> Value of num is : 123


//* Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let firstName = "Suraj";
console.log(`First name is : ${firstName}`);    // Output -> First name is : Suraj


//* **************************************************************
//* Activity 2: Constant Declaration
//* **************************************************************

//* Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const flag = true;
console.log(`Boolean value of flag is : ${flag}`);      // Output -> Boolean value of flag is : true


//* **************************************************************
//* Activity 3: Data Types
//* **************************************************************

//* Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
const digit = 12345;
const str = "Learning JS";
const isAvailable = false;
const userInfo = {
    firstName : 'Suraj',
    lastName : 'Adhikari',
    age : 25
};
const array = [10, 20, 30, 40, 50];

//* Printing data type
console.log(typeof(digit));             // Output -> number
console.log(typeof(str));               // Output -> string
console.log(typeof(isAvailable));       // Output -> boolean
console.log(typeof(userInfo));          // Output -> object
console.log(typeof(array));             // Output -> object (array)


//* **************************************************************
//* Activity 4: Reassigning Variables
//* **************************************************************

//* Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let fullName = 'Suraj Adhikari';
console.log(`Initial value is : ${fullName}`);                  // Output -> Initial value is : Suraj Adhikari

fullName = 'Srj Adhikari';
console.log(`Reassign value is : ${fullName}`);                  // Output -> Reassign value is : Srj Adhikari


//* **************************************************************
//* Activity 5: Understanding const
//* **************************************************************

//* Task 6: Try reassigning a variable declared with const and observe the error.
const age = 25;
age = 20;           // Output -> TypeError: Assignment to constant variable. Can't change the value of const variable after it's been assigned. Once you declare a variable with const, its value is fixed for the entire scope where it's defined.

console.log(`Age is : ${age}`);     


//* **************************************************************
//* Feature Request:
//* **************************************************************

//* Feature 1: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
const value = 2000;
const Firstname = 'Suraj';
const boolValue = true;
const person = {
    name : 'suraj',
    hobby : 'coding'
};
const numArray = [1, 2, 5, 7, 9];

//* Printing value and data type
console.log(`Value is : ${value}, Type is : ${typeof(value)}`);             // Output -> Value is : 2000, Type is : number
console.log(`Value is : ${Firstname}, Type is : ${typeof(Firstname)}`);     // Output -> Value is : Suraj, Type is : string
console.log(`Value is : ${boolValue}, Type is : ${typeof(boolValue)}`);     // Output -> Value is : true, Type is : boolean
console.log(`Value is : ${person}, Type is : ${typeof(person)}`);           // Output -> Value is : [object Object], Type is : object
console.log(person);                                                        // Output -> { name: 'suraj', hobby: 'coding' }
console.log(`Value is : ${numArray}, Type is : ${typeof(numArray)}`);       // Output -> Value is : 1,2,5,7,9, Type is : object


//* Feature 2: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.
let price = 100;
console.log(`Initial price is : ${price}`);     // Output -> Initial price is : 100

//* Reassign the value of price
price = 250;
console.log(`Modify price is : ${price}`);      // Output -> Modify price is : 250


const cost = 150;
console.log(`Initial cost is : ${cost}`);       // Output -> Initial cost is : 150

//* Reassign the value of price
cost = 200;                                     // TypeError: Assignment to constant variable.
console.log(`Modify cost is : ${cost}`);


//* **************************************************************
//* Achievement:
//* **************************************************************

//* By the end of these activities, you will:
//* • Know how to declare variables using var, let, and const.
//* • Understand the different data types in JavaScript.
//* • Be able to use the typeof operator to identify the data type of a variable.
//* • Understand the concept of variable reassignment and the immutability of const variables.