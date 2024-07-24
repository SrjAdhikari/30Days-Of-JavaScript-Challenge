//* **************************************************************
//* Day 10 : Event Handling
//* **************************************************************


//* **************************************************************
//* Activity 1: Basic Event Handling
//* **************************************************************

//* Task 1: Add a click event listener to a button that changes the text content of a paragraph.
const h1 = document.querySelector("#mainHeading");              // Select the paragraph element with the ID 'paragraph'
const button = document.querySelector("#changeBtn");            // Select the button element with the ID 'changeBtn'

button.addEventListener('click', () => {                        // Add a click event listener to the button
    h1.innerText = "30 Days Of JavaScript Challenge!";          // Change the text of the paragraph to "30 Days Of JavaScript Challenge!" when the button is clicked
});


//* Task 2: Add a double-click event listener to an image that toggles its visibility.
const image = document.querySelector("#programmerImg");         // Select the image element with the ID 'programmerImg'
const visible = true;                                           // Define a variable to keep track of the image's visible

image.addEventListener('dblclick', () => {                      // Add a double-click event listener to the image
    //* Method 1:
    if(visible === true)                                        // Check the current visibility state and toggle the image's display accordingly
        image.style.display = "none";                           // Hide the image if it's currently visible
    else
        image.style.display = "block";                          // Show the image if it's currently hidden

    //* Method 2:
    if(visible)
        image.classList.add("visibility")                       // Add the 'visibility' class to hide the image
    else
        image.classList.remove("visibility")                    // Remove the 'visibility' class to show the image
});


//* **************************************************************
//* Activity 2: Mouse Events
//* **************************************************************

//* Task 3: Add a mouseover event listener to an element that changes its background color.
const spanTag = document.getElementsByTagName("span")[0];       // Select the first span element

spanTag.addEventListener("mouseover", () => {                   // Add a mouseover event listener to the span element
    spanTag.classList.add("addBackground");                     // Add the 'addBorder' class to apply the border styling
});


//* Task 4: Add a mouseout event listener to an element that resets its background color.
spanTag.addEventListener("mouseout", () => {                    // Add a mouseout event listener to the span element
    spanTag.classList.remove("addBackground");                  // Remove the 'addBackground' class to revert the border and background styling
});


//* **************************************************************
//* Activity 3: Keyboard Events
//* **************************************************************

//* Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
const firstName = document.querySelector("#firstName");         // Select the input element with the ID 'userName'

firstName.addEventListener("keydown", (evt) => {                // Add a keydown event listener to the input element
    console.log(`Key Pressed : `, evt.key);                     // Log the key that was pressed to the console
})


//* Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
const lastName = document.querySelector("#lastName");           // Select the input element with the ID 'lastName'
const paragraph = document.querySelector("#display");           // Select the paragraph element with the ID 'display'

//* Method 1:
lastName.addEventListener("keyup", () => {                      // Add a keyup event listener to the input field
    paragraph.innerText = lastName.value;                       // Update the paragraph's text with the current value of the input field
});

//* Method 2:
lastName.addEventListener("keyup", (evt) => {                   // Add a keyup event listener to the input field
    paragraph.innerText =  evt.target.value;                    // Update the paragraph's text with the value from the event target (input field)
});


//* **************************************************************
//* Activity 4: Form Events
//* **************************************************************

//* Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
const form = document.querySelector("#form");                   // Select the form element with the ID 'form'

//* Method 1:
form.addEventListener("submit", (evt) => {                      // Add a submit event listener to the form
    evt.preventDefault();                                       // Prevent the default form submission
    console.log("Form submitted!");                             // Log the form submission event

    const formData = new FormData(form);                        // Create a FormData object from the form
    for (const [key, value] of formData.entries()) {            // Iterate over the FormData entries and log each key-value pair
        console.log(`${key}: ${value}`);
    }
});

//* Method 2:
form.addEventListener("submit", (evt) => {                      // Add a submit event listener to the form
    evt.preventDefault();                                       // Prevent the default form submission
    
    console.log("Form Submitted!")                              // Log the form submission event
    const firstName = evt.target.elements.firstName.value;      // Access the value of the 'firstName' input field
    const lastName = evt.target.elements.lastName.value;        // Access the value of the 'lastName' input field
    console.log(`First Name : ${firstName}, Last Name : ${lastName}`);
});
