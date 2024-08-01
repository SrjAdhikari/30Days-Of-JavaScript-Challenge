//* **************************************************************
//* Day 14 : Classes
//* **************************************************************


//* **************************************************************
//* Activity 1: Class Definition
//* **************************************************************

//* Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.

// Defines a Person object with properties for name and age, and a method to greet others.
class Person {
    // Constructor to initialize the properties
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    // Method to return a greeting message
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Create an instance of the Person class
const person = new Person("Suraj", 26);
console.log(person.greet());


//* Task 2: Add a method to the Person class that updates the age property and logs the updated age.

// Defines a Person object with properties for name and age, and a method to greet others.
class Person1 {
    // Constructor to initialize the properties
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    
    // Method to return a greeting message
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    // Method to update the age and log the updated age
    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age : ${this.age}`);
    }
}

// Create an instance of the Person class
const person1 = new Person1("Suraj", 25);
console.log(person1.greet());
person1.updateAge(26);


//* **************************************************************
//* Activity 2: Class Inheritance
//* **************************************************************

//* Task 3: Define a class Student that extends the Person class. Add a property studentID and a method to return the student ID. Create an instance of the Student class and log the student ID.

// Defines a Person2 object with properties for name and age, and a method to greet others.
class Person2 {
    // Constructor to initialize the properties
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to return a greeting message
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Define the Student class that extends Person
class Student extends Person2 {
    // Constructor to initialize properties of both Person and Student
    constructor(name, age, studentID) {
        super(name, age);               // Call the constructor of the parent class
        this.studentID = studentID;     // Initialize the studentID property
    }

    // Method to return the student ID
    getStudentID() {
        return `Student ID : ${this.studentID}`;
    }
}

// Create an instance of the Student class
const student = new Student("Suraj", 25, "S12345");
console.log(student.getStudentID());


//* Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.

// Define the Student class that extends Person
class Student1 extends Person {
    // Constructor to initialize properties of both Person and Student
    constructor(name, age, studentID) {
        super(name, age);               // Call the constructor of the parent class
        this.studentID = studentID;     // Initialize the studentID property
    }

    // Method to return the student ID
    getStudentID() {
        return `Student ID : ${this.studentID}`;
    }

    // Override the greet method to include student ID
    greet() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentID}.`;
    }
}

// Create an instance of the Student class
const student1 = new Student1("Srj", 26, "S13579");
console.log(student1.greet());


//* **************************************************************
//* Activity 3: Static Methods and Properties
//* **************************************************************

//* Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

// Defines a Person object with properties for name and age, and a method to greet others.
class Person3 {
    // Constructor to initialize the properties
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    // Method to return a greeting message
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    // Static method to return a generic greeting message
    static genericGreeting() {
        return `Hello! This is a message from static method.`;
    }
}

// Call the static method without creating an instance of the class
console.log(Person3.genericGreeting());


//* Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

// Define the Student class that extends Person
class Student2 extends Person {
    // Static property to keep track of the number of students created
    static studentCount = 0;

    // Constructor to initialize properties of both Person and Student
    constructor(name, age, studentID) {
        super(name, age);               // Call the constructor of the parent class
        this.studentID = studentID;     // Initialize the studentID property
        Student2.studentCount++;        // Increment the student count
    }

    // Static method to get the student count
    static getStudentCount() {
        return Student2.studentCount;
    }
}

// Create instances of the Student class
const student2 = new Student2("Suraj", 26, "S12345");
const student3 = new Student2("Srj", 26, "S12349");
const student4 = new Student2("SRJ", 26, "S12045");

// Log the total number of students after all instances are created
// Call the static method without creating an instance of the class
console.log(`Total number of students : ${Student2.getStudentCount()}`);


//* **************************************************************
//* Activity 4: Getters and Setters
//* **************************************************************

//* Task 7: Add a getter method to the Person class to return the full name (assume a firstName and LastName property). Create an instance and log the full name using the getter.

// Defines a Person object with properties for firstName and lastName, and  method greet and fullName.
class Person4 {
    // Constructor to initialize the properties
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Getter method to return the full name
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // Method to return a greeting message
    greet() {
        return `Hello, my name is ${this.fullName}.`;
    }
}

// Create instances of the Person class
const person5 = new Person4("Suraj", "Adhikari");

// Log the full name using the getter
console.log(person5.fullName);

// Log the greeting message
console.log(person5.greet())