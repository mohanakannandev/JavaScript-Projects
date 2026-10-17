const todoList =[
    {name:'hi',
    dueDate:'2025-8-29'},

    {name:'mohan',
    dueDate:'2025-8-29'},
    


];

function renderTodoList(){

    let todoListHTML = '';

    for(let index =0;index < todoList.length; index++){
        const todoObject =todoList[index];
        // const name =todoObject.name;
        // const dueDate = todoObject.dueDate;
        const {name, dueDate} = todoObject;
        const html =`
        <div>${name}</div> 
        <div>${dueDate}</div>
            <button onclick="
                todoList.splice(${index},1);
                renderTodoList();
            " class="delete-todo-button" >Delete</button> ` ;
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {

    const inputElement =  document.querySelector('.js-name-input'); // geting the input fron the user by class js-name-input.
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate= dateInputElement.value;
    todoList.push({name,dueDate}); // name:name,dueDate:dueDate instead we use name,dueDate because of same name as property ans value.
    

    inputElement.value = ''; // after adding the event the event text will be vanish only todo name will appeare.

    renderTodoList();
}