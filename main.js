const form = document.getElementById('todoForm');
const inCompletedList = document.getElementById('inCompletedList');
const input = document.getElementById('todoInput');
const formWrapper = document.getElementById('formWrapper');
const submitButton = document.getElementById('button');
const errorContainer = document.getElementById('errorContainer');
const completedList = document.getElementById('completedList');

// Add a label to the checkbox, make it possible to delete all todos, add animations
//Local storage, not same todo possible

form.addEventListener('submit', function(event){
    event.preventDefault();
    addTodo();   
});

function createNewTodo(inputValue){ 
    // Create the li tag and apply the input text
    const listItem = document.createElement("li");
    listItem.textContent = inputValue;

    //Create the delete Icon
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.textContent = "Delete";
    listItem.appendChild(deleteButton);
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    listItem.appendChild(checkBox);

    return listItem;
}

function addTodo(){
    const validate = validateForm();
    if (validate == true) {
        // Run the function to create a new todo
        const listItem = createNewTodo(input.value);
        // Add the new todo to the uncompleted list
        inCompletedList.appendChild(listItem);
        // Connect the event listeners to new todo
        connectTodoEvents(listItem);
        // Reset the value of the input
        input.value = "";
    } else {
        input.value = "";
    }
}

function validateForm(){
    const inputValue = input.value;
    if (inputValue.length > 40) {
        const errorText = document.createElement('span');
        errorText.classList.add('error');
        errorText.textContent = "Too much to do, too little space";
        errorContainer.appendChild(errorText);
        return false;
    } else if (!inputValue.replace(/^\s+/g, '').length) { //Input field is empty
        return false;
    } else {
        return true;
    }
}

function deleteTodo(){
    const listItem = this.parentNode;
    listItem.parentElement.removeChild(listItem);
}

function markAsComplete(){

    if (this.checked) {
        console.log("hello");
        const listItem = this.parentNode;
        listItem.classList.add('completed-todos');
    
        completedList.appendChild(listItem);
    } else {
        const listItem = this.parentNode;
        listItem.classList.remove('completed-todos');
        inCompletedList.appendChild(listItem);
    }
}

function connectTodoEvents(listItem){
    
    const checkBox = listItem.querySelector('input[type=checkbox]');
    const deleteButton = listItem.querySelector('button.delete');

    // Connect the checkbox to the function depending on if it's unmarked or not
    checkBox.addEventListener('change', markAsComplete);
    // Connect the delete button to the delete function
    deleteButton.addEventListener('click', deleteTodo);
}

/*for(let i = 0; i < inCompletedList.children.length; i++) {
    console.log("hej");
    
  connectTodoEvents(inCompletedList.children[i], markAsComplete);
}

for(let i = 0; i < completedList.children.length; i++) {
    console.log("hej");
    
  connectTodoEvents(completedList.children[i], markAsInComplete);
}*/



















const heading = document.getElementById('heading');

heading.addEventListener('click', function(){
    console.log(this);
});




//const completedList = document.querySelectorAll('#todoCompleted li');




//console.log(aLinks);

/*submitButton.addEventListener('click', function(){
    const link = document.createElement('li');
    link.textContent = input.value;
    nav.appendChild(link);
    
})*/





/*for(i = 0; i < nav.children.length; i++){
	nav.children[i].addEventListener('click', function(){
		this.style.color = "red";
	})
}*/


