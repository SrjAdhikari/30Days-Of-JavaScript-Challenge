//* **************************************************************
//* Day 11 : Promises and Async/Await 
//* **************************************************************


//* **************************************************************
//* Activity 1: Understanding Promises
//* **************************************************************

//* Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const myPromise = new Promise((resolve) => {                    // Create a new Promise
    setTimeout (() => {                                         // Simulate an asynchronous operation using setTimeout
        resolve('Hello, Promise resolve after 2 seconds!');     // Resolve the promise with a message after 2 seconds
    }, 2000);
});

// Handle the promise resolution with .then()
myPromise.then((message) => console.log(message));              // Log the resolved message to the console

// Output -> Hello, this is a promise resolve after 2 seconds!


//* Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
const promise = new Promise((_, reject) => {                    // Create a new Promise
    setTimeout(() => {                                          // Simulate an asynchronous operation using setTimeout
        reject("Error : Something Went Wrong!");                // Reject the promise with an error message after 2 seconds
    }, 2000);
});
promise                                                         // Handle the promise resolution and rejection
    .then(() => { 
        // This will not be executed since the promise is rejected
        // .then() is meant for handling resolved values, not rejections
    })
    // Handle the promise rejection. This block will be executed because the promise is rejected
    .catch((error) => console.log(error));                      // Log the error message to the console

// Output -> Error : Something Went Wrong!


//* **************************************************************
//* Activity 2: Chaining Promises
//* **************************************************************

//* Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
// Function to simulate fetching data with a delay from a server
const fetchData = (data, delay) => {
    return new Promise((resolve) => {               // Return a new Promise object
        setTimeout(() => {                          // Use setTimeout to simulate a delay
            resolve(`Fetch data : ${data}`);        // Resolve the promise with a message that includes the data
        }, delay);                                  // Delay in milliseconds before resolving the promise
    });
};

// Chain promises to simulate fetching data in sequence
fetchData(1, 2000)                                  // Start by calling fetchData with data '1' and a delay of 2000 milliseconds (2 seconds)
    .then((data1) => {                              // Handle the promise resolution
        console.log(data1);                         // Log the message that is resolved from the first fetchData call     
        return fetchData(2, 1000);                  // Return a new promise from fetchData with data '2' and a delay of 1000 milliseconds (1 second)
    })                                              // This ensures the next .then() in the chain waits for this promise to resolve
    
    .then((data2) => {                              // Handle the promise resolution from the second fetchData call
        console.log(data2);                         // Log the message that is resolved from the second fetchData call
        return fetchData(3, 1500);                  // Return a new promise from fetchData with data '3' and a delay of 1500 milliseconds (1.5 seconds)
    })                                              // This ensures the next .then() in the chain waits for this promise to resolve
    
    .then((data3) => {                              // Handle the promise resolution from the third fetchData call
        console.log(data3);                         // Log the message that is resolved from the third fetchData call
    })

    .catch((error) => {                             // Catch any errors that occur in the promise chain
        console.log(`Error : ${error}`);            // Log an error message if any of the promises in the chain are rejected
    });


//* **************************************************************
//* Activity 3: Using Async/Await
//* **************************************************************

//* Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
//* Method 1:

// Create a new Promise that will resolve after 2 seconds
const newPromise = new Promise((resolve) => {
    setTimeout(() => {                              // Simulate asynchronous operation with setTimeout
        resolve(`Promise resolved!`);               // Resolve the promise with a message after 2 seconds
    }, 2000);
});

// Async function to handle the promise and log the result
const fetchAndLogData = async () => {
    try {
        const response = await newPromise;          // Wait for the newPromise to resolve and store the result in 'response'
        console.log(response);                      // Log the resolved value of the promise to the console
    }
    catch(error) {                                  // Handle any errors that occur during the promise resolution
        console.log(error);                         // Log any error that might occur
    }
};

// Call the async function to execute the promise handling and logging
fetchAndLogData();


//* Method 2:

const asyncFunction = async () => {                 // Define an asynchronous function
    const promise = new Promise((resolve) => {      // Create a new Promise
        setTimeout(() => {                          // Simulate an asynchronous operation using setTimeout
            resolve(`Promise Resolved!`);           // Resolve the promise with a message after 2 seconds
        }, 2000);
    });

    const response = await promise;                 // Use await to pause execution until the promise resolves
    console.log(response);                          // Output after 2 seconds: Promise Resolved!
};

// Call the asynchronous function to execute the code
asyncFunction();


//* Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
// Define an asynchronous function that handles a rejected promise
const asyncFunctionWithError = async () => {
    const promise = new Promise((_, reject) => {            // Create a new Promise that rejects after a 1-second delay
        setTimeout(() => {                                  // Simulate an asynchronous operation using setTimeout
            reject("Error: Something went wrong!!!");       // Reject the promise with an error message after 1 second
        }, 1000);
    });

    try {
        const response = await promise;                     // Await the promise, which is expected to be rejected
        console.log(response)                               // This will not be executed because the promise is rejected
    }
    catch (error) {                                         // Handle and log the error if the promise is rejected
        console.error(error);                               // Output after 1 second: Error: Something went wrong!!!
    }
};

// Call the asynchronous function to execute the code
asyncFunctionWithError();


//* **************************************************************
//* Activity 4: Fetching Data from an API
//* **************************************************************

//* Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
// URL of the public API endpoint to fetch data from
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// Use the fetch API to request data from the specified URL
fetch(apiUrl)
    // Convert the response object to JSON. The fetch API returns a Response object, and we need to parse it as JSON to get the data
    .then((response) => response.json())   
    // This block will execute after the promise returned by response.json() resolves. Log the parsed data to the console
    .then((data) => console.log(data))
    // Handle any errors that occur during the fetch operation or JSON parsing
    // The catch block will execute if there is a problem with the fetch request or the .json() method
    .catch((error) => console.error("Error : ", error));


//* Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
const fetchAndLogDta = async () => {
    // URL of the public API endpoint to fetch data from
    const apiUrl = "https://fakestoreapi.com/products";

    try {
        const response = await fetch(apiUrl);       // Use fetch to request data from the API
        const data  = response.json();              // Parse the response body as JSON
        console.log(data);                          // Log the parsed data to the console
    } 
    catch (error) {                                 // Handle and log any errors that occur during the fetch or JSON parsing
        console.error(error);
    }
};

// Call the async function to execute the code
fetchAndLogData();


//* **************************************************************
//* Activity 5: Concurrent Promises
//* **************************************************************

//* Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
const promiseOne = new Promise((resolve) => {               // Define the first promise
    setTimeout(() => {                                      // Simulate an asynchronous operation with a 1-second delay
        resolve("Data from promise 1")                      // Resolve the promise with the string "Data from promise 1"
    }, 1000);
});

const promiseTwo = new Promise((resolve) => {               // Define the second promise
    setTimeout(() => {                                      // Simulate an asynchronous operation with a 2-second delay
        resolve("Data from promise 2");                     // Resolve the promise with the string "Data from promise 2"
    }, 2000);
});

const promiseThree = new Promise((resolve) => {             // Define the third promise
    setTimeout(() => {                                      // Simulate an asynchronous operation with a 1.5-second delay
        resolve("Data from promise 3");                     // Resolve the promise with the string "Data from promise 3"
    }, 1500);
});

// Use Promise.all to wait for all the promises to resolve
Promise.all([promiseOne, promiseTwo, promiseThree])
    // This block executes once all promises in the array are resolved
    // `results` is an array containing the resolved values of all promises
    .then((results) => console.log(results))
    .catch((error) => console.error(error));                // Handle any errors that occur during the resolution of any promise


//* Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
const promise1 = new Promise((resolve) => {                 // Define the first promise
    setTimeout(() => {                                      // Simulate an asynchronous operation with a 2-second delay
        resolve("Data from promise 1")                      // Resolve the promise with the string "Data from promise 1"
    }, 2000);
});

const promise2 = new Promise((resolve) => {                 // Define the second promise
    setTimeout(() => {                                      // Simulate an asynchronous operation with a 1-second delay
        resolve("Data from promise 2");                     // Resolve the promise with the string "Data from promise 2"
    }, 1000);
});

const promise3 = new Promise((resolve) => {                 // Define the third promise
    setTimeout(() => {                                      // Simulate an asynchronous operation with a 1.5-second delay
        resolve("Data from promise 3");                     // Resolve the promise with the string "Data from promise 3"
    }, 1500);
});

// Use Promise.race to get the value of the first promise that resolves
Promise.race([promise1, promise2, promise3])
    // This block executes when the first promise resolves, `result` is the value of the first promise that resolves
    .then((result) => console.log(`First resolved promise value : ${result}`))
    // Handle any errors that occur if any of the promises reject
    .catch((error) => console.error(`Error : ${error}`));


//* **************************************************************
//* Achievement:
//* **************************************************************

//* By the end of these activities, you will:
//* • Understand and create promises, including handling resolved and rejected states.
//* • Chain multiple promises to perform sequential asynchronous operations.
//* • Use async/await to handle asynchronous code more readably.
//* • Fetch data from public APIs using both promises and async/await.
//* • Manage multiple concurrent promises using Promise.all and Promise.race.