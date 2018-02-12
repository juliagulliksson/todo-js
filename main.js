const div = document.getElementById('todoCompleted');
const form = document.getElementById('todoForm');
const uncompletedList = document.getElementById('uncompletedList');
const input = document.getElementById('todoInput');
const formWrapper = document.getElementById('formWrapper');

//Add the list item
form.addEventListener('submit', function(event){
    event.preventDefault();
   
    const inputValue = input.value;
    const errorText = document.createElement('p');
    errorText.classList.add('error');
    errorText.id = "errorText";
    let text = document.createTextNode("Too much to do, too little space");
    errorText.appendChild(text);
  
    if (inputValue.length > 40) {
        formWrapper.appendChild(errorText);
        form.reset();
        return false;
    } else {
        
        const li = document.createElement("li");
        const todoText = document.createTextNode(inputValue);
        li.appendChild(todoText);
        uncompletedList.appendChild(li);

        //Create the two clickable icons
        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fas', 'fa-minus-circle', 'hidden');
        deleteIcon.title = "Remove item";
        li.appendChild(deleteIcon);
        const checkIcon = document.createElement('i');
        checkIcon.classList.add('fas', 'fa-check-circle', 'hidden');
        checkIcon.title = "Mark as done";
        li.appendChild(checkIcon);
    }

    form.reset();
})

const uncompletedItems = document.getElementsByTagName('li');

console.log(uncompletedItems);

//Make a way to toggle the fa items class "hidden" with mouseover event

// Moving a list item to the Completed list
for(let listItem of uncompletedItems){
    
	listItem.addEventListener('click', function(){
        console.log("hej");

        //remove the list item
        //this.parentElement.removeChild(this);
        uncompletedList.removeChild(this);
        //done.appendChild(this);
       
	})
}

const heading = document.getElementById('heading');

heading.addEventListener('click', function(){
    console.log(this);
})




const completedList = document.querySelectorAll('#todoCompleted li');

//If the list items exists in the completed div, make the heading visible
if(completedList.length >= 1){
    const completedHeading = document.getElementById('completedHeading');
    completedHeading.classList.remove('hidden');
}