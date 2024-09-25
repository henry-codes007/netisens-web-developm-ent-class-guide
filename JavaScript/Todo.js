// DOM SELECTORS
const inputElement = document.getElementById('input'); // Selecting the input element where users type their tasks
const addButton = document.querySelector('.add-btn'); // Selecting the button for adding tasks
const clearAllButton = document.querySelector('.clear-btn'); // Selecting the "Clear All" button
const filterTodosElement = document.querySelector('#filter-todos'); // Selecting the dropdown to filter tasks (All, Pending, Completed)
const taskBoxElement = document.querySelector('.task-box'); // Selecting the container (ul) that will display all the tasks
console.log(addButton);


// Clear the task box initially to ensure no tasks are displayed before loading
taskBoxElement.innerHTML = '';

// Variable to hold the current task text
let task;

// Load existing todos from localStorage, if available, or initialize an empty array
let todos = JSON.parse(localStorage.getItem('todos')) || [];
updateScreen(); // Display the tasks on the screen

// Variable to hold the structure of the new task as an object
let todoObject;

// Function to create a new todo task from the user's input
const createTodo = (e) => {
    task = inputElement.value.trim(); // Get the value of the task input, trimmed of whitespace

    if (task === "") {
        // Exit early if the task input is empty
        alert("Please enter a valid task!");
        return;
    }

    // Create a new task object with the task text and mark it as not completed
    todoObject = {
        task: task,
        isCompleted: false
    };

    // Check if the "Enter" key (key code 13) was pressed to add the task
    if (e.keyCode === 13) {
        addToTodosArray(); // Add the task to the todo array
    }
};

// Function to add the new task to the todos array
function addToTodosArray() {
    if (todoObject.task) { // Ensure the task is not empty
        todos.push(todoObject); // Add the new task object to the todos array
        localStorage.setItem('todos', JSON.stringify(todos)); // Save the updated todos array to localStorage
        updateScreen(); // Update the screen to display the new task
    } else {
        alert("Cannot add an empty task!");
    }
}

// Add an event listener to the "Add" button to add a new task when clicked
addButton.addEventListener('click', () => {
    if (inputElement.value.trim() === "") {
        alert("Please enter a valid task!");
    } else {
        addToTodosArray();
    }
});


// Function to add the new task to the todos array
function addToTodosArray(){
    todos.push(todoObject); // Add the new task object to the todos array
    localStorage.setItem('todos', JSON.stringify(todos)); // Save the updated todos array to localStorage
    updateScreen(); // Update the screen to display the new task
}

console.log(todos);



    // Loop through the todos array to dynamically create and display each task using template literals
    for (let index = 0; index < tasksToDisplay.length; index++) {
        
        // Add a new list item for each todo task and append it directly to the taskBoxElement's HTML
        taskBoxElement.innerHTML += `
        <li class="task">
            <div class="content">
                <!-- Checkbox for marking the task as completed, binding the checked state to the task's isCompleted property -->
                <input type="checkbox" onchange="toggleTaskCompletion(${index})" id="check-btn-${index}" ${tasksToDisplay[index].isCompleted ? 'checked' : ''}>
                
                <!-- Display the task with edit and delete buttons -->
                <div class="spans">
                    <!-- Label shows the text of the task -->
                    <label class="text" for="check-btn-${index}">${tasksToDisplay[index].task}</label>
                    
                    <!-- Container for edit and delete buttons -->
                    <span class="settings">
                        <!-- Edit button to allow the user to edit the task -->
                        <button onclick="editTodo(${index})">
                            <i class="fa fa-pencil" aria-hidden="true"></i>Edit
                        </button>

                        <!-- Delete button to allow the user to delete the task -->
                        <button onclick="deleteTodo(${index})">
                            <i class="fa fa-trash"></i>Delete
                        </button>
                    </span>
                </div>
            </div>                
        </li>`;
    }




// // Function to display tasks on the screen (can accept a filtered list of tasks)
// function updateScreen(tasksToDisplay = todos) {
//     // Clear the task box to remove any previous tasks before updating the display
//     taskBoxElement.innerHTML = ''; 
    
//     // Clear the input field after adding/updating tasks
//     inputElement.value = ''; 

//     // If no tasks are available to display, show a message indicating no tasks
//     if (tasksToDisplay.length < 1) {
//         taskBoxElement.innerHTML = '<h3>No tasks found</h3>';
//         return; // Exit the function since there are no tasks to display
//     }

//     // Loop through the tasks and create HTML elements for each task
//     for (let index = 0; index < tasksToDisplay.length; index++) {
//         const todo = tasksToDisplay[index]; // Access each individual todo task object
        
//         // Create a new list item for each task
//         const li = document.createElement('li');
//         li.classList.add('task'); // Add the 'task' class to the list item for styling

//         // Create a div to contain the task content (text, checkboxes, etc.)
//         const div = document.createElement('div');
//         div.classList.add('content'); // Add the 'content' class for styling

//         // Create a checkbox for marking the task as completed
//         const textInput = document.createElement('input');
//         textInput.setAttribute('type', 'checkbox'); // Set the input type to 'checkbox'
//         textInput.id = `check-btn-${index}`; // Set a unique ID for each checkbox based on index
//         textInput.checked = todo.isCompleted; // Set the checkbox state based on the task's completion status
//         // Add an event listener to toggle the completion state when the checkbox is clicked
//         textInput.addEventListener('change', () => toggleTaskCompletion(index));

//         // Create a div to hold the text of the task and action buttons (edit/delete)
//         const spanDiv = document.createElement('div');
//         spanDiv.classList.add('spans'); // Add the 'spans' class for styling

//         // Create a span to display the task's text
//         const textSpan = document.createElement('span');
//         textSpan.classList.add('text'); // Add the 'text' class for styling
//         textSpan.textContent = todo.task; // Set the text content to the current task's description

//         // Create a span to hold the edit and delete buttons
//         const settingsSpan = document.createElement('span');
//         settingsSpan.classList.add('settings'); // Add the 'settings' class for styling

//         // Create an edit button to allow the user to edit the task
//         const editButton = document.createElement('button');
//         editButton.innerHTML = `<i class="fa fa-pencil" aria-hidden="true"></i>Edit`; // Set the button's inner HTML to show an edit icon
//         // Add an event listener to trigger the task editing when the button is clicked
//         editButton.addEventListener('click', () => editTodo(index));

//         // Create a delete button to allow the user to delete the task
//         const deleteButton = document.createElement('button');
//         deleteButton.innerHTML = `<i class="fa fa-trash"></i>Delete`; // Set the button's inner HTML to show a delete icon
//         // Add an event listener to trigger the task deletion when the button is clicked
//         deleteButton.addEventListener('click', () => deleteTodo(index));

//         // Append the newly created elements to their respective parents in the DOM
//         taskBoxElement.appendChild(li); // Add the list item to the task box
//         li.appendChild(div); // Add the content div to the list item
//         div.appendChild(textInput); // Add the checkbox to the content div
//         div.appendChild(spanDiv); // Add the spans div to the content div
//         spanDiv.appendChild(textSpan); // Add the task text span to the spans div
//         spanDiv.appendChild(settingsSpan); // Add the settings span (for buttons) to the spans div
//         settingsSpan.appendChild(editButton); // Add the edit button to the settings span
//         settingsSpan.appendChild(deleteButton); // Add the delete button to the settings span
//     }
// }



// let myArray =[
//     {task: 'Buy Cow', isCompleted: false},
//     {task: 'Buy Crocodile', isCompleted: false},
//     {task: 'Buy Goat', isCompleted: false},
//     {task: 'Buy Chicken', isCompleted: false},
//     {task: 'Buy Cat', isCompleted: false},
// ];
// console.log(myArray[3].task);