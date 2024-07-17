//* **************************************************************
//* Day 3 : Control Structures
//* **************************************************************


//* Activity 1: If-Else Statements

//* Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let num = 5;
if(num > 0) {
    console.log(`Number is positive`);
}
else if(num < 0) {
    console.log(`Number is negative`);
}
else {
    console.log(`Number is zero`);
}
// Output -> Number is positive


//* Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let age = 20;
if(age >= 18) {
    console.log(`Eligible for vote`);
}
else {
    console.log(`Not eligible for vote`);
}
// Output -> Eligible for vote


//* Activity 2: Neseted If-Else Statements

//* Task 3: Write a program to find the largest of three numbers using nested if-else statements.
let num1 = 10;
let num2 = 15;
let num3 = 20;

if(num1 > num2) {
    if(num1 > num3)
        console.log(`Num1 is greater!`);
    else
        console.log(`Num3 is greater!`);
}
else {
    if(num2 > num3)
        console.log(`Num2 is greater!`);
    else
        console.log(`Num3 is greater!`);
}
// Output -> Num3 is greater!


//* Activity 3: Switch Case

//* Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let day = 5;
switch(day) {
    case 1:
        console.log(`Today is Sunday`);
        break;
    case 2:
        console.log(`Today is Monday`);
        break;
    case 3:
        console.log(`Today is Tuesday`);
        break;
    case 4:
        console.log(`Today is Wednesday`);
        break;
    case 5:
        console.log(`Today is Thursday`);
        break;
    case 6:
        console.log(`Today is Friday`);
        break;
    case 7:
        console.log(`Today is Saturday`);
        break;
    default :
        console.log(`Invalid day!`);
}
// Output -> Today is Thursday


//* Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F) based on a score and log the grade to the console.
let score = 75;
switch(true) {
    case (score >= 90):
        console.log(`You got 'A' grade`);
        break;
    case (score >= 80):
        console.log(`You got 'B' grade`);
        break;
    case (score >= 70):
        console.log(`You got 'C' grade`);
        break;
    case (score >= 55):
        console.log(`You got 'D' grade`);
        break;
    case (score <= 40):
        console.log(`You got 'F' grade`);
        break;
    default :
        console.log('Your grade is under process....');
}
// Output -> You got 'C' grade


//* Activity 4: Conditonal (Ternary) Operator

//* Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let number = 15;
const result = (number % 2 === 0) ? `${number} is even number.` : `${number} is odd number.`;
console.log(result);        // Output -> 15 is odd number.


//* Activity 5: Combining Conditions

//* Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
const year = 2024;
if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
    console.log(`Year ${year} is a leap year`);
else
console.log(`Year ${year} is not a leap year`);
// Output -> Year 2024 is a leap year


//* Feature Request:

//* Write a script that checks if a year is a leap year using multiple conditions and logs the result.
let year1 = 2025;
if(year1 % 4 === 0)
    console.log(`Year ${year1} is a leap year`);
else if(year1 % 100 === 0)
    console.log(`Year ${year1} is not a leap year`);
else if(year1 % 400 === 0)
    console.log(`Year ${year1} is leap year`);
else
    console.log(`Year ${year1} is not a leap year`);
// Output -> Year 2025 is not a leap year


//* Achievement:

//* By the end of these activities, you will:
//* • Implement and understand basic if-else control flow.
//* • Use nested if-else statements to handle multiple conditions.
//* • Utilize switch cases for control flow based on specific values.
//* • Apply the ternary operator for concise condition checking.
//* • Combine multiple conditions to solve more complex problems.