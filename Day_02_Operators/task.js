//* **************************************************************
//* Day 2 : Operators
//* **************************************************************


//* **************************************************************
//* Activity 1: Arithmetic Operations
//* **************************************************************

//* Task 1: Write a program to add two numbers and log the result to the console.
const firstNum = 10;
const secondNum = 20;
const result = firstNum + secondNum;
console.log(`Result is : ${result}`);               // Output -> Result is : 30


//* Task 2: Write a program to subtract two numbers and log the result to the console.
const operand1 = 50;
const operand2 = 30;
const difference = operand1 - operand2;
console.log(`Difference is : ${difference}`);       // Output -> Difference is : 20


//* Task 3: Write a program to multiply two numbers and log the result to the console.
const firstValue = 11;
const secondValue = 10;
const product = firstValue * secondValue;
console.log(`Product is : ${product}`);             // Output -> Product is : 110


//* Task 4: Write a program to divide two numbers and log the result to the console.
const divisor = 5;
const dividend = 40;
const quotient = dividend / divisor;
console.log(`Quotient is : ${quotient}`);           // Output -> Quotient is : 8


//* Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
const divisor1 = 5;
const dividend1 = 43;
const remainder = dividend1 % divisor1;
console.log(`Remainder is : ${remainder}`);         // Output -> Remainder is : 3   


//* **************************************************************
//* Activity 2: Assignment Operators
//* **************************************************************

//* Task 6: Use the += operator to add a number to a variable and log the result to the console.
let num1 = 15;
num1 += 100;                                        // num = 15 + 100
console.log(`Result is : ${num1}`);                 // Output -> Result is : 115   


//* Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
let value = 50;
value -= 45;                                        // value = 50 - 45
console.log(`Result is : ${value}`);                // Output -> Result is : 5


//* **************************************************************
//* Activity 3: Comparison Operators
//* **************************************************************

//* Task 8: Write a program to compare two numbers using > and < and log the result to the console.
const price1 = 100;
const price2 = 150;
console.log(`Result is : ${price1 > price2}`);      // Output -> Result is : false
console.log(`Result is : ${price1 < price2}`);      // Output -> Result is : true


//* Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
const cost1 = 150;
const cost2 = 200;
console.log(`Result is : ${cost1 <= cost2}`);       // Output -> Result is : true
console.log(`Result is : ${cost1 >= cost2}`);       // Output -> Result is : false

console.log(`Result is : ${cost2 >= cost1}`);       // Output -> Result is : true
console.log(`Result is : ${cost2 <= cost1}`);       // Output -> Result is : false


//* Task 10: Write a program to compare two numbers using == and === and log the result to the console.

//* '==' : The == operator compares two values for equality after converting both values to a common type (type coercion).
//* '===' :  The === operator compares both value and type without performing any type conversion.

const number = 15;
const number1 = '15';
console.log(`Result is : ${number == number1}`);    // Output -> Result is : true
console.log(`Result is : ${number === number1}`);   // Output -> Result is : false

const value1 = 50;
const value2 = 40;
console.log(`Result is : ${value1 == value2}`);     // Output -> Result is : false
console.log(`Result is : ${value1 === value2}`);    // Output -> Result is : false


//* **************************************************************
//* Activity 4: Logical Operators
//* **************************************************************

//* Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
const condition1 = true;
const condition2 = false;
console.log(`Result is : ${condition1 && condition2}`);     // Output -> Result is : false


//* Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
const flag1 = true;
const flag2 = false;
console.log(`Result is : ${flag1 || flag2}`);               // Output -> Result is : true


//* Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
const isTrue = false;
console.log(`Result is : ${!isTrue}`);                      // Output -> Result is : true

const isFalse = true;
console.log(`Result is : ${!isFalse}`);                     // Output -> Result is : false


//* **************************************************************
//* Activity 5: Ternary Operator
//* **************************************************************

//* Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
const positive = 10;
const negative = -15;
let answer = positive >= 0 ? 'Positive' : 'Negative';
console.log(`Number is : ${answer}`);                       // Output -> Number is : Positive

answer = negative < 0 ? 'Negative' : 'Positive';
console.log(`Number is : ${answer}`);                       // Output -> Number is : Negative


//* **************************************************************
//* Feature Requests:
//* **************************************************************

//* 1: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.
let var1 = 100;
let var2 = 15;

console.log(`Addition is : ${var1 + var2}`);        // Output -> Addition is : 115
console.log(`Diffrernce is : ${var1 - var2}`);      // Output -> Diffrernce is : 85
console.log(`Product is : ${var1 * var2}`);         // Output -> Product is : 1500
console.log(`Quotient is : ${var1 / var2}`);        // Output -> Quotient is : 6.666666666666667
console.log(`Remainder is : ${var1 % var2}`);       // Output -> Number is : Remainder is : 10


//* 2: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.
let score = 200;
let avgScore = 150;
let highScore = 500;

console.log(`Score is greater than highscore : ${score > highScore}`);                  // Output -> Score is greater than highscore : false
console.log(`Score is less than highscore : ${score < highScore}`);                     // Output -> Score is less than highscore : true
console.log(`Score is greater than or equal to highscore : ${score >= highScore}`);     // Output -> Score is greater than or equal to highscore : false
console.log(`Score is less than or equal to highscore : ${score <= highScore}`);        // Output -> Score is less than or equal to highscore : true
console.log(`Score is equal to highscore : ${score == highScore}`);                     // Output -> Score is equal to highscore : false
console.log(`Score is strictly equal to highscore : ${score === highScore}`);           // Output -> Score is strictly equal to highscore : false

console.log(`Logical AND (&&) : ${(score > avgScore) && (score < highScore)}`);         // Output -> Logical AND (&&) : true
console.log(`Logical OR (||) : ${(score < avgScore) || (highScore > score)}`);          // Output -> Logical OR (||) : true
console.log(`Logical NOT (!) : ${!(score < avgScore)}`);                                // Output -> Logical NOT (!) : true
console.log(`Logical NOT (!) : ${!(highScore > avgScore)}`);                            // Output -> Logical NOT (!) : false


//* 3: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.
let count = -5;
console.log(`Result : ${count >= 0 ? 'Number is positive' : 'Number is negative'}`);    // Output -> Result : Number is negative

count = 15;
console.log(`Result : ${count >= 0 ? 'Number is positive' : 'Number is negative'}`);    // Output -> Result : Number is positive


//* **************************************************************
//* Achievement:
//* **************************************************************

//* By the end of these activities, you will:
//* • Understand and use arithmetic operators to perform basic calculations.
//* • Use assignment operators to modify variable values.
//* • Compare values using comparison operators.
//* • Combine conditions using logical operators.
//* • Use the ternary operator for concise conditional expressions.