const form = document
    .getElementById('todoForm');
const inCompletedList = document
    .getElementById('inCompletedList');
const input = document
    .getElementById('todoInput');
const formWrapper = document
    .getElementById('formWrapper');
const submitButton = document
    .getElementById('button');
const errorContainer = document
    .getElementById('errorContainer');
const completedList = document
    .getElementById('completedList'); 
const completedHeading = document
    .getElementById('completedHeading');
const clearAllButton = document
    .getElementById('clearAll');

// Add a label to the checkbox, make it possible to delete all todos, add animations
//Local storage, not same todo possible
//Add a heading to the completed list

form.addEventListener('submit', function(event){
    event.preventDefault(); 
});

submitButton.addEventListener('click', addTodo);

clearAllButton.addEventListener('click', clearAll);

function createNewTodo(inputValue){ 
    // Create the li tag and apply the input text
    const listItem = document.createElement("li");
    listItem.textContent = inputValue;

    //Create the delete Icon
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.textContent = "Delete";
    
    //Create the checkbox
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.title = 'Mark as done';

    //Add the buttons to the listItem
    listItem.appendChild(deleteButton);
    listItem.appendChild(checkBox);

    return listItem;
}

function addTodo(){
    const validate = validateForm();
    if (validate) {
        // Store the new todo in the listItem variable
        const listItem = createNewTodo(input.value);
        // Add the new todo to the incompleted list
        inCompletedList.appendChild(listItem);
        //Add the animation
        window.getComputedStyle(listItem).opacity;
        listItem.classList.add('fadeIn');
        // Connect the event listeners to new todo
        connectTodoEvents(listItem);
        // Reset the value of the input
        input.value = ""; 
    } else {
        input.value = "";
    }

    if(clearAllButton.classList.contains('hidden')){
        clearAllButton.classList.remove('hidden');

    }
}

function validateForm(){
    const inputValue = input.value;
    const errorExists = !!document.getElementById('error');
    const errorContainer = document.getElementById('errorContainer');
    if (inputValue.length > 40) {
        if(!errorExists){ // If the error message is not already shown, display error message
            const errorText = document.createElement('span');
            errorText.classList.add('error');
            errorText.id = 'error';
            errorText.textContent = "Too much to do, too little space";
            errorContainer.appendChild(errorText);
            window.getComputedStyle(errorText).opacity;
            errorText.classList.add('fadeIn');
            
            return false;
        }
    } else if (!inputValue.replace(/^\s+/g, '').length) { //Input field is empty
        if(errorExists){
            errorContainer.removeChild(errorContainer.firstChild); //Remove the error message
            return false;
        }
    } else { // Form is correct 
        if(errorExists){
            errorContainer.removeChild(errorContainer.firstChild);
        }
        return true;
    }
}

function deleteTodo(){
    const listItem = this.parentNode;
    //Add the animation to fade out
    listItem.classList.add('fadeOut');
    setTimeout(function (){
        listItem.parentElement.removeChild(listItem);
    }, 400);
}

function markAsComplete(){
    const listItem = this.parentNode;
    if (this.checked) { //if the checkbox is checked, add the listItem to the completed list
        listItem.classList.add('completed-todos');
        listItem.classList.add('fadeOut');
        setTimeout(function (){
            completedList.appendChild(listItem);
        }, 400);
        

        //When a list item has been added to the completed list, show the heading
        if(completedHeading.classList.contains('hidden')){
            completedHeading.classList.remove('hidden');

        }
    } else {
        console.log("e");
        inCompletedList.appendChild(listItem);
        /*window.getComputedStyle(listItem).opacity;
        listItem.classList.add('fadeIn');*/
        listItem.classList.remove('completed-todos');
        
    }
}

function connectTodoEvents(listItem){
    
    const checkBox = listItem.querySelector('input[type=checkbox]');
    const deleteButton = listItem.querySelector('button.delete');

    // Connect the checkbox to the markAsComplete function
    checkBox.addEventListener('change', markAsComplete);
    // Connect the delete button to the delete function
    deleteButton.addEventListener('click', deleteTodo);
}


function clearAll(){
    const listItems = document.getElementsByTagName('li');
    const clearButton = document.querySelector('button.clear-all');
   
    for(listItem of listItems){
        listItem.classList.add('fadeOut');
        completedHeading.classList.add('fadeOut');

        clearButton.classList.add('fadeOut');  
    }

    setTimeout(function(){

        for(listItem of listItems){
           listItem.parentElement.removeChild(listItem);
        }
        /*while(inCompletedList.firstChild){
            inCompletedList.removeChild(inCompletedList.firstChild);
            
        }*/
        completedHeading.classList.add('hidden');

        clearButton.classList.add('hidden');  
    }, 400);

}




function filterTodos() {
    console.log("hallo");
    const filter = input.value.toUpperCase();
    const listItems = document.querySelectorAll('li');
    console.log(listItems.textContent);
    for (var i = 0; i < listItems.length; i++) {
        const listItemText = listItems.textContent;
        if (listItemText.toUpperCase() == filter) {
            console.log("hej");
        } else {
            console.log("heeh");
        }
    }
} 
