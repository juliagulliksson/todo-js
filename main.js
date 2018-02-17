const form = document.getElementById('todoForm');
const uncompletedList = document.getElementById('uncompletedList');
const input = document.getElementById('todoInput');
const formWrapper = document.getElementById('formWrapper');
const submitButton = document.getElementById('button');

const completedList = document.getElementById('completedList');

form.addEventListener('submit', function(event){

    event.preventDefault();

    addTodo();

   
});


function createNewTodo(inputValue){
    //const inputValue = form.querySelector('input[type="text"]').value;
    
    // Create the li tag and apply the input text
    const listItem = document.createElement("li");
    listItem.textContent = inputValue;

    //Create the two clickable icons
    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fa', 'fa-minus-circle');
    deleteIcon.title = "Remove item";
    listItem.appendChild(deleteIcon);
    const checkIcon = document.createElement('i');
    checkIcon.classList.add('fa', 'fa-check-circle');
    checkIcon.title = "Mark as done";
    listItem.appendChild(checkIcon);
   
    console.log("adding");
    return listItem;

}

function addTodo(){
    const listItem = createNewTodo(input.value);
    uncompletedList.appendChild(listItem);
    connectTodoEvents(listItem);

    //Reset the value of the input
    input.value = "";

}

for(i = 0; i < uncompletedList.children.length; i++){

    checkIcon.addEventListener('click', function(){
        

        //Remove the list item
        //this.parentElement.removeChild(this);
        const listItem = this.parentNode;
        completedList.appendChild(listItem);
        
        //todoCompletedDiv.appendChild(this);
        
        //uncompletedList.removeChild(this);
        
       
    });
}




const uncompletedItems = document.querySelectorAll('#uncompletedList li');

function deleteTodo(){
    const listItem = this.parentNode;
    listItem.parentElement.removeChild(listItem);
}

function markAsComplete(){
    const listItem = this.parentNode;
    listItem.classList.add('completed-todos');
    
    var checkIcon = listItem.querySelector('i.fa-check-circle');
    checkIcon.parentNode.removeChild(checkIcon);
    completedList.appendChild(listItem);
    connectTodoEvents(listItem);
}

function connectTodoEvents(listItem){
    
    const checkIcon = listItem.querySelector('i.fa-check-circle');
    console.log(checkIcon);
    const deleteIcon = listItem.querySelector("i.fa-minus-circle");

    checkIcon.addEventListener('click', markAsComplete);
    deleteIcon.addEventListener('click', deleteTodo);

    for(i = 0; i < uncompletedList.children.length; i++){

        uncompletedList.children[i].addEventListener('mouseover', function(){
    
            var checkIcon = this.querySelector('i.fa-check-circle');
            var deleteIcon = this.querySelector('i.fa-minus-circle');
            deleteIcon.style.opacity = '0.8';
            checkIcon.style.opacity = '0.8';
        });
    }

    for(i = 0; i < uncompletedList.children.length; i++){

        uncompletedList.children[i].addEventListener('mouseleave', function(){
            var checkIcon = this.querySelector('i.fa-check-circle');
            var deleteIcon = this.querySelector('i.fa-minus-circle');
            deleteIcon.style.opacity = '0';
            checkIcon.style.opacity = '0';
            
        });
    }

}

for(let i = 0; i < uncompletedList.children.length; i++) {
    console.log("hej");
    // bind events to list item's children (taskCompleted)
  connectTodoEvents(uncompletedList.children[i]);
}



















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


