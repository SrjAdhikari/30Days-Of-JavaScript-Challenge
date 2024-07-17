//* **************************************************************
//* Day 4 : Loops
//* **************************************************************


//* Activity 1: For Loop

//* Task 1: Write a program to print numbers from 1 to 10 using a for loop.
console.log(`Printing numbers from 1 to 10`);
for(let num = 1; num <= 10; num++) {
    console.log(num);
}
console.log(`\n`);


//* Task 2: Write a program to print the multiplication table of 5 using a for loop.
console.log(`Printing multiplication table of 5`);
for(let num = 1; num <= 10; num++){
    console.log(5 * num);
}
console.log(`\n`);


//* Activity 2: While Loop

//* Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let sum = 0;
let num = 1;
while(num <= 10) {
    sum += num;
    num++;
}
console.log(`Sum of numbers from 1 to 10 is : ${sum}`);
console.log(`\n`);

// Output -> Sum of numbers from 1 to 10 is : 55


//* Task 4: Write a program to print numbers from 10 to 1 using a while loop.
console.log(`Printing numbers from 10 to 1`);
let index = 10;
while(index >= 1) {
    console.log(index);
    index--;
}
console.log(`\n`);


//* Activity 3: Do...While Loop

//* Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
console.log(`Printing numbers from 1 to 5`);
let value = 1;
do{
    console.log(value);
    value++;
} while (value <= 5);
console.log(`\n`);


//* Task 6: Write a program to calculate the factorial of a number using a do...while loop.
let factorial = 1;
let number = 5;
do {
    factorial *= number;
    number--;
} while (number);
console.log(`Factorial of 5 is : ${factorial}`);        // Output -> Factorial of 5 is : 120
console.log(`\n`);


//* Activity 4: Nested Loop

//* Task 7: Write a program to print a pattern using nested for loops:
// *
// * *
// * * *
// * * * *
// * * * * *

for(let i = 0; i <= 4; i++) {
    let row = '';
    for(let j = 0; j < i + 1; j++) {
        row += '* ';
    }
    console.log(row);
}
console.log(`\n`);


//* Activity 5: Loop control statement

//* Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for(let num = 1; num <= 10; num++){
    if(num === 5)
        continue;
    console.log(num);
}
console.log(`\n`);


//* Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for(let num = 1; num <= 10; num++) {
    if(num === 7)
        break;
    console.log(num);
}
console.log(`\n`);


//* Achievement:

//* By the end of these activities, you will:
//* • Understand and use for loops to iterate over a sequence of numbers.
//* • Utilize while loops for iteration based on a condition.
//* • Apply do...while loops to ensure the loop body is executed at least once
//* • Implement nested loops to solve more complex problems.
//* • Use loop control statements (break and continue) to control the flow of loops.