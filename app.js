//Selectors - selecting all the class elements to perform actions on them

const todoInput = document.querySelector(".todo-input");  //Press Shift + Alt + Down Arrow to duplicate the current line to below line
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//Functions

function addTodo(event){
 event.preventDefault(); //To stop the browser getting refreshed when button is clicked - Prevent form from submitting

 //Create a TODO DIV where the all lists will be stored

 const todoDiv = document.createElement("div");
 todoDiv.classList.add("todo"); //adding TODO DIV to the class list, this class name then be used to style our css

 // Creating a LI that will be appended to the DIV after the user submits

 const newTodo = document.createElement('li');
 newTodo.innerText = todoInput.value;  // getting the user value that he typed
 newTodo.classList.add("todo-item"); //adding TODO LI to the class list
 todoDiv.appendChild(newTodo); // Adding/appending the submitted list to our TODO DIV created above
 
 // Check Mark Button

 const completedButton = document.createElement('button');
 completedButton.innerHTML = '<i class="fas fa-check"></i>';
 completedButton.classList.add("complete-btn");
 todoDiv.appendChild(completedButton);

 // Delete/Trash Button

 const trashButton = document.createElement('button');
 trashButton.innerHTML = '<i class="fas fa-trash"></i>';
 trashButton.classList.add("trash-btn");
 todoDiv.appendChild(trashButton);
 
 // Now we will append our created TODO LIST with different buttons to the TODO DIV
 todoList.appendChild(todoDiv);

 // Clear TODO input value field after its been appended to the list
 todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;   //The target event property returns the element that triggered the event
    //DELETE  TODO
    if(item.classList[0] === 'trash-btn')
    {
        const todo = item.parentElement;  //The parentElement property returns the parent element of the specified element
        todo.classList.add('fall');
        todo.addEventListener("transitionend", () => {  //The transitionend event is fired when a CSS transition has completed. In the case where a transition is removed before completion
            todo.remove();
        });
        
    }

    //CHECK MARK
    if(item.classList[0] === 'complete-btn')
    {
        const todo = item.parentElement;  //The parentElement property returns the parent element of the specified element
        todo.classList.toggle("completed");  // Added a toggle class to the clasList
    }
    
}

function filterTodo(e){
    const todos = todoList.childNodes; //grabbing all the todos
    //console.log(todos);
    todos.forEach(function(todo)
    {
        switch (e.target.value) //e.terget is the "option" in html and the value is all/completed/uncompleted
        {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed"))
                {
                    todo.style.display = "flex";
                }
                else
                {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed'))
                {
                    todo.style.display = 'flex';
                }
                else{
                    todo.style.display = 'none';
                }
                break;
                
        }
    });
}