import './styles.css';
import { getAllCategory } from './localstorage';
import Plus from './components/todolist/circle-plus.svg';

function getTodoList(section) {
    const todoList = document.createElement('div');
    todoList.classList.add('todo-list');

    const categories = getAllCategory();
    if ('ALL' == section) {
        for (let [category, todos] of Object.entries(categories)) {
            const categoryContainer = document.createElement('div');
            categoryContainer.classList.add('each-category');

            const categoryTitle = document.createElement('p');
            categoryTitle.innerHTML = category.replace('_', ' ')+':';
            categoryContainer.appendChild(categoryTitle);

            for (let todo of todos) {
                const currTodo = document.createElement('div');
                currTodo.classList.add('each-todo');
                
                const currTodoTitle = document.createElement('div');
                console.log(todo);
                currTodoTitle.innerHTML = todo.todoTitle; 

                const currInfoContainer = document.createElement('div');
                currInfoContainer.classList.add('each-todo-subinfo');

                const prio = document.createElement('div');
                prio.innerHTML = todo.priority;
                currInfoContainer.append(prio);

                const dueDate = document.createElement('div');
                dueDate.innerHTML = todo['due-date'];
                currInfoContainer.appendChild(dueDate);

                currTodo.appendChild(currTodoTitle);
                currTodo.appendChild(currInfoContainer);

                categoryContainer.appendChild(currTodo);
            }
            todoList.appendChild(categoryContainer);
        }
    }

    return todoList;
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