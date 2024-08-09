//* Task 9: Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage. Retrieve and log the values from both storage mechanisms.

// Function to save a value to both localStorage and sessionStorage, and then retrieve and log the values
const saveAndRetrieve = (key, value) => {
    // Save the value to localStorage under the specified key
    localStorage.setItem(key, value);
    
    // Save the value to sessionStorage under the specified key
    sessionStorage.setItem(key, value);

    // Retrieve the value from localStorage using the specified key
    const localStorageValue = localStorage.getItem(key);
    
    // Retrieve the value from sessionStorage using the specified key
    const sessionStorageValue = sessionStorage.getItem(key);

    // Log the value retrieved from localStorage to the console
    console.log(`Value from localStorage: ${localStorageValue}`);
    
    // Log the value retrieved from sessionStorage to the console
    console.log(`Value from sessionStorage: ${sessionStorageValue}`);
}

// Call the function with a sample key and value
saveAndRetrieve("key", "30 Days JavaScript Challenge");