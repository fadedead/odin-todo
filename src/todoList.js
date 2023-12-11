import './styles.css';
import { getAllCategory } from './localstorage';
import Plus from './components/todolist/circle-plus.svg';

function getTodoList(section) {
    const todoList = document.createElement('div');
    todoList.classList.add('todo-list');

    const categories = getAllCategory();
    if ('ALL' == section) {
        for (let [category, values] of Object.entries(categories)) {
            const categoryContainer = document.createElement('div');

            const category = document.createElement('p');
            category.innerHTML = category;
            categoryContainer.appendChild(category);

            for (let val of values) {
            }
        }
    }

    return todoList;
}

// Add a todo
function addTodo(category, todo) {

}

// Todo list add button
function getTodoListButton() {
    let button = new Image();
    button.classList.add('add-button');
    button.src = Plus;
    button.addEventListener('click', () => { document.getElementById('todo-dialog').showModal(); })
    return button;
}

export {
    getTodoList,
    getTodoListButton
}