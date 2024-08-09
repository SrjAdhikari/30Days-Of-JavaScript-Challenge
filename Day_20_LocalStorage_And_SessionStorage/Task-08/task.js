//* Task 8: Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal.

//! Note: This script is dependent on Task 7 where form data (name and email) was stored in localStorage.
//? - **Task 7**: We created a form to capture user input (e.g., name and email) and stored this data in SessionStorage with the key 'userData'.
//? - **Task 8**: We retrieved and displayed the stored user data from SessionStorage, and now in this task, we are removing that data and checking the SessionStorage content before and after removal.

// Log the content of 'userData' key before removal
console.log("Before Removal:", sessionStorage.getItem("userData"));

// Remove the item with the key 'userData' from localStorage
sessionStorage.removeItem("userData");

// Log the content of 'userData' key after removal
console.log("After Removal:", sessionStorage.getItem("userData"));