import './styles.css';
import { getAllCategory } from './localstorage';
import Plus from './components/todolist/circle-plus.svg';
import getTodoDialog from './todoDialog';

function getTodoList(section) {
    const todoList = document.createElement('div');
    todoList.classList.add('todo-list');

    const categories = getAllCategory();
    if('ALL' == section) {
        console.log();
    }

    for(let [category, values] of Object.entries(categories)) {
        console.log(category, values);
        for(let val of values) {

        }
    }
    
    
}

// Add a todo
function addTodo(dueDate, priority, note) {

}

// Todo list add button
function getTodoListButton() {
    let button = new Image();
    button.classList.add('add-button');
    button.src = Plus;
    button.addEventListener('click', () => {document.getElementById('todo-dialog').showModal();})
    return button;
}

export {
    getTodoList,
    getTodoListButton
}