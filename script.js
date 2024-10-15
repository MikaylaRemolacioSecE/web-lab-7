document.getElementById("taskForm").addEventListener("submit", function(event) {
    event.preventDefault();  //keeps task in li coz screen refreshes after submission
    addItem();
});

function addItem() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;

    if (taskText !== "") {
        const ul = document.getElementById('taskList'); 
        const newItem = document.createElement('li'); 

       
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                label.style.textDecoration = "line-through"; // crosses task out if checked
                label.style.opacity = "50%";
            } else {
                label.style.textDecoration = "none";
            }
        });

        const label = document.createElement('span');
        label.textContent = taskText;

        newItem.appendChild(checkbox);
        newItem.appendChild(label);
        ul.appendChild(newItem);

        taskInput.value = ""; //makes input box empty after adding item to list
    }
}

document.getElementById("deleteTask").addEventListener("click", deleteItem); //delete button

function deleteItem() {
    const ul = document.getElementById('taskList');
    const lastItem = ul.querySelector('li:last-child'); //selects last li item
    if (lastItem) {
        ul.removeChild(lastItem); //removes item
    }
}
