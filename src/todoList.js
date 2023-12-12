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

            const unsortedTodo = getTodosForCatrgoty(todos);
            unsortedTodo.sort((a,b) => {
                if(a[0][1] != b[0][1]) {
                    return b[0][1]-a[0][1]
                } else {
                    const aDate = new Date(a[1]);
                    const bDate = new Date(b[1]);
                    return aDate-bDate;
                }
            });

            for(let todo of unsortedTodo) {
                categoryContainer.appendChild(todo[2]);
            }
            
            todoList.appendChild(categoryContainer);
        }
    }

    return todoList;
}

function getTodosForCatrgoty(todos) {
    const unsortedTodo = [];
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

        switch(todo.priority) {
            case 'p0': 
                currTodo.classList.add('todo-priority-p0'); 
                break;
            case 'p1': 
                currTodo.classList.add('todo-priority-p1'); 
                break;
            case 'p2': 
                currTodo.classList.add('todo-priority-p2'); 
                break;
        }

        const dueDate = document.createElement('div');
        dueDate.innerHTML = todo['due-date'];
        currInfoContainer.appendChild(dueDate);

        currTodo.appendChild(currTodoTitle);
        currTodo.appendChild(currInfoContainer);

        unsortedTodo.push([todo.priority, todo['due-date'], currTodo]);
    }
    return unsortedTodo;
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