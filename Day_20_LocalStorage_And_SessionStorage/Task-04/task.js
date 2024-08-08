//* Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal.

//! Note: This script is dependent on Task 3 where form data (name and email) was stored in localStorage.
//? - **Task 3**: We created a form to capture user input (e.g., name and email) and stored this data in localStorage with the key 'userData'.
//? - **Task 4**: We retrieved and displayed the stored user data from localStorage, and now in this task, we are removing that data and checking the localStorage content before and after removal.

// Log the content of 'userData' key before removal
console.log("Before Removal:", localStorage.getItem("userData"));

// Remove the item with the key 'userData' from localStorage
localStorage.removeItem("userData");

// Log the content of 'userData' key after removal
console.log("After Removal:", localStorage.getItem("userData"));