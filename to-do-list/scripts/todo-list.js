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

    for (let i = 0; i < todoList.length; i++){
        const todoObject = todoList[i];
        const {name, date} = todoObject;
        const html = `
        <div>${name}</div>
        <div>${date}</div>
        <button class = "delete-todo-button" onclick="todoList.splice(${i}, 1);
        renderTodoList();
        ">
            Delete
        </button>
        `
        todoListHTML += html;
    }
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}
