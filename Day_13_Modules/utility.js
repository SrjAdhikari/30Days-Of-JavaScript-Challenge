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