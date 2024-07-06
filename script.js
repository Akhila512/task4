const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const todoText = input.value.trim();
    if (todoText !== '') {
        addTodoToList(todoText);
        input.value = '';
    }
});

function addTodoToList(todoText) {
    const todoItem = document.createElement('li');
    todoItem.innerText = todoText;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = '❌';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', function() {
        todoItem.remove();
    });

    const completeButton = document.createElement('button');
    completeButton.innerText = '✓';
    completeButton.addEventListener('click', function() {
        todoItem.classList.toggle('completed');
    });

    todoItem.appendChild(deleteButton);
    todoItem.appendChild(completeButton);
    todoList.appendChild(todoItem);
}
