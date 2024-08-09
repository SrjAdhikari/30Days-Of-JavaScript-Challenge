//* Task 10: Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.

// Function to clear all data from both localStorage and sessionStorage, and verify that both are empty
const clearAllDataFromStorage = () => {
    // Clear all data from localStorage
    localStorage.clear();
    
    // Clear all data from sessionStorage
    sessionStorage.clear();

    // Check if localStorage is empty by verifying if its length is 0
    const isLocalStorageEmpty = localStorage.length === 0;
    // Log the result for localStorage to the console
    console.log(`localStorage is empty: ${isLocalStorageEmpty}`);
    
    // Check if sessionStorage is empty by verifying if its length is 0
    const isSessionStorageEmpty = sessionStorage.length === 0;
    // Log the result for sessionStorage to the console
    console.log(`sessionStorage is empty: ${isSessionStorageEmpty}`);
}

// Example usage: Call the function to clear and verify storage
clearAllDataFromStorage();


//* **************************************************************
//* Achievement:
//* **************************************************************

//* By the end of these activities, you will:
//* • Understand how to use localStorage and sessionStorage for persistent and session- specific data storage.
//* • Save, retrieve, and remove data from both localStorage and sessionStorage.
//* • Implement form data storage using localStorage and sessionStorage.
//* • Compare and contrast the use cases for localStorage and sessionStorage.