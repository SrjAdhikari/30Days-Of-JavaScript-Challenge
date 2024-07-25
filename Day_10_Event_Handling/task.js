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


//* Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
const dropdown = document.querySelector("#dropDown");           // Select the dropdown element with the id 'dropDown'
const p = document.querySelector("#displayValue");              // Select the paragraph element with the id 'displayValue'

//* Method 1:
dropdown.addEventListener("change", () => {                     // Add a 'change' event listener to the dropdown element
    p.innerText = `Selected Item : ${dropdown.value}`;          // Update the paragraph text with the selected value from the dropdown
});

//* Method 2:
dropdown.addEventListener("change", (evt) => {                  // Add another 'change' event listener to the dropdown element
    p.innerText = `Selected Item : ${evt.target.value}`;        // Update the paragraph text with the selected value from the event target
});


//* **************************************************************
//* Activity 5: Event Delegation
//* **************************************************************

//* Event delegation is a technique in JavaScript where we attach a single event listener to a parent element instead of multiple event listeners to individual child elements. The parent element can then handle events that bubble up from child elements. 

//* Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
const list = document.querySelector("#myList");                 // Select the list element by its ID

list.addEventListener("click", (evt) => {                       // Add a click event listener to the list using event delegation
    if(evt.target.tagName  === "LI") {                          // Check if the clicked element is a list item (li)
        console.log(`Clicked item : ${evt.target.innerText}`);  // Log the text content of the clicked list item
    }
});


//* Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
const listItem = document.querySelector("#listItem");           // Select the list element by its ID
const addButton = document.querySelector("#addItemButton");     // Select the button to add new items
console.log(listItem.children.length)                           // Log the number of child elements in the list before add new item -> Give the count of child element

addButton.addEventListener("click", (evt) => {                  // Add a click event listener to the button to dynamically add new items
    const newItem = document.createElement("li");               // Create a new list item element
    newItem.innerText = `Item ${listItem.children.length + 1}`; // Set the text content for the new list item
    listItem.appendChild(newItem);                              // Append the new list item to the list
    console.log(listItem.children.length)                       // Log the number of child elements in the list after add new item
});


//* **************************************************************
//* Achievement:
//* **************************************************************

//* By the end of these activities, you will:
//* • Add and handle basic events like click, double-click, mouseover, mouseout, keydown, and keyup.
//* • Understand and handle form events.
//* • Implement event delegation to manage events on dynamically added elements.
//* • Make web pages interactive by responding to various user actions.