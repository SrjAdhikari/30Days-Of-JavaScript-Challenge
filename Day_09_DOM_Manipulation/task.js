//* **************************************************************
//* Day 9 : DOM Manipulation
//* **************************************************************


//* **************************************************************
//* Activity 1: Selecting and Manipulating Elements
//* **************************************************************

//* Task 1: Select an HTML element by its ID and change its text content.
const heading = document.getElementById("heading");                             // Select the element by its ID
heading.textContent = "30 Days Of JavaScript Challenge By Chai Aur Code";       // Change the text content of the element
//heading.innerText = "30 Days Of JavaScript Challenge By Chai Aur Code";


//* task 2: Select an HTML element by its class and change its background color.
//  document.getElementsByClassName returns an HTMLCollection, which is a collection of elements, not a single element. You need to iterate over the collection or access an individual element by its index

//* Method 1:
const paragraph = document.getElementsByClassName("para")[0];    // Select the first element with the class name "para"
paragraph.style.backgroundColor = 'lightgrey';                   // Set the background color of the selected element to light grey

//* Meethod 2:
const para =document.querySelector(".para");
para.style.backgroundColor = "skyblue";


//* **************************************************************
//* Activity 2: Creating and Appending Elements
//* **************************************************************

//* Task 3: Create a new div element with some text content and append it to the body.
const div = document.createElement("div");                      // Create a new <div> element
div.innerText = "Learning JavaScript with Chai Aur Code";       // Set the text content of the <div> element
document.body.appendChild(div);                                 // Append the <div> element to the body of the document


//* Task 4: Create a new li element and add it to an existing ul list.
const newList = document.createElement("li");                   // Create a new <li> element
newList.innerText = "Fifth Day";                                // Set the text content of the <li> element
const unorderList = document.querySelector("#list");            // Select the unordered list (ul) element with the ID "list"
unorderList.appendChild(newList);                               // Append the new <li> element to the unordered list


//* **************************************************************
//* Activity 3: Removing Elements
//* **************************************************************

//* Task 5: Select an HTML element and remove it from the DOM.
const deleteElement = document.querySelector(".delete");
deleteElement.remove();


//* Task 6: Remove the last child of a specific HTML element.
const fruitsList = document.querySelector("#fruitsList");       // Select the unordered list (ul) element with the ID "fruitsList"
console.log(fruitsList.lastElementChild);                       // print the last child of the unordered list
fruitsList.lastElementChild.remove();                           // Remove the last child of the unordered list


//* **************************************************************
//* Activity 4: Modifying Attributes and Classes
//* **************************************************************

//* Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
const image = document.querySelector("#programmer");            // Select the image element with the ID "programmer"
image.setAttribute("src", "new-job.jpg");                       // Change the src attribute of the image element using setAttribute
// image.src = "new-job.jpg";                                   // Change the src attribute of the selected image element


//* Task 8: Add and remove a CSS class to/from an HTML element.
//* Add element to an HTML element:
const addButton = document.querySelector("#addButton");
addButton.setAttribute("class", "addClass");                    // It will overwrite any existing classes on the element.
// addButton.classList.add("addClass");                         // It does not remove existing classes; it simply appends the new class.
// addButton.className = "addClass";                            // Similar to setAttribute, this will overwrite any existing classes on the element with the specified class.

//* Remove element from an HTML element:
const removeButton = document.querySelector("#removeBtn");
removeButton.classList.remove("removeClass");


//* **************************************************************
//* Activity 5: Event Handling
//* **************************************************************

//* Task 9: Add a click event listener to a button that changes the text content of a paragraph.
const newParagraph = document.querySelector(".newPara");
const btn = document.querySelector("#changeBtn");

// Add a click event listener to the element
btn.addEventListener("click", () => {
    // Change the text content of the selected paragraph when the button is clicked
    newParagraph.innerText = "Learning JavaScript with Chai Aur Code and participating in the 30 Days of JavaScript Challenge!";
});


//* Task 10: Add a mouseover event listener to an element that changes its border color.
// Select the element with the ID "box"
const box = document.querySelector("#box");

// Add a mouseover event listener to Change the border color of the element when mouse is over it
box.addEventListener("mouseover", () => {
    box.style.borderColor = "Red";
});

// Add a mouseout event listener to revert the border color when the mouse leaves
box.addEventListener("mouseout", () => {
    // Revert the border color back to black when the mouse is out
    box.style.borderColor = "black";
});


//* **************************************************************
//* Achievement:
//* **************************************************************

//* By the end of these activities, you will:
//* • Select and manipulate DOM elements using JavaScript.
//* • Create and append new elements to the DOM.
//* • Remove elements from the DOM.
//* • Modify attributes and classes of HTML elements.
//* • Add and handle events to make web pages interactive.