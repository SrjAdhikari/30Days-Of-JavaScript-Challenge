//* Task 3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted. Retrieve and display the saved data on page load.

// Get the form element by its id
const form = document.querySelector("#userForm");

// Add an event listener to handle form submission
form.addEventListener("submit", (evt) => {
    evt.preventDefault(); // Prevent the default form submission behavior

    // Get the values from the input fields
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;

    // Save the input values to localStorage as a JSON string
    localStorage.setItem("userData", JSON.stringify({ name, email }));

    // Display the saved data
    displayData();
});


// Function to display the saved data
function displayData() {
    // Retrieve the JSON string from localStorage
    const retrievedJsonString = localStorage.getItem("userData");

    // Parse the JSON string back into an object
    const retrievedData = JSON.parse(retrievedJsonString);

    // Check if data exists
    if (retrievedData) {
        // Update the content of the result elements
        const savedName = document.querySelector("#resultName");
        savedName.textContent = `Name: ${retrievedData.name}`; // Use `retrievedData.name`
        
        const savedEmail = document.querySelector("#resultEmail");
        savedEmail.textContent = `Email: ${retrievedData.email}`; // Use `retrievedData.email`
    }
}

// Call displayData() on page load to show any previously saved data
displayData();