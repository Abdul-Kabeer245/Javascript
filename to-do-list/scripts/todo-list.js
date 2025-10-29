const todoList = [];

function addTodo(){
    const nameInputElement = document.querySelector('.js-name-input');
    const dateInputElement = document.querySelector('.js-date-input');
    const name = nameInputElement.value;
    const date = dateInputElement.value;

    todoList.push(
        {
            name, 
            date
        }
    )
    nameInputElement.value = '';
    dateInputElement.value = '';
    renderTodoList();
}

function renderTodoList() {
    let todoListHTML = '';
    todoList.forEach(function(todoObject, index){
        const {name, date} = todoObject;
        const html = `
        <div>${name}</div>
        <div>${date}</div>
        <button class = "delete-todo-button" onclick="todoList.splice(${index}, 1);
        renderTodoList();
        ">
            Delete
        </button>
        `
        todoListHTML += html;
    })
        
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
    addTodo();
})

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter'){
        addTodo();
    }
})

doc