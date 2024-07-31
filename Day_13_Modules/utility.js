//* **************************************************************
//* Day 13 : Modules
//* **************************************************************


//* Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.
export function add(num1, num2) {
    return num1 + num2;
}


//* Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
export const person = {
    firstName : "Suraj",
    lastName : "Adhikari",
    age : 25,

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}


//* Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
export function addition (num1, num2) {
    return num1 + num2;
}

export function subtraction (num1, num2) {
    if(num1 > num2)
        return num1 - num2;
    else
        return num2 - num1;
}

export function multiplication (num1, num2) {
    return num1 * num2;
}

export function division (num1, num2) {
    if(num2 !== 0)
        return num1 / num2;
    else
        throw new Error("Can't divide by zero!");
}


//* Task 4: Create a module that exports a single function using default export. Import and use this function in another script.
export default function modulus(num1, num2) {
    return num1 % num2;
}


//* Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
export const PI = 3.14159;
export const GRAVITY = 9.81;

export function calculateArea(radius) {
    return PI * radius * radius;
}

export function calculateVolume(radius, height) {
    return PI * radius * radius * height;
}

export function calculateCircumference(radius) {
    return 2 * PI * radius;
}