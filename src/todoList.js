import './styles.css';
import { deleteTodoFromLocalStorage, getAllCategory } from './localstorage';
import Plus from './components/todolist/circle-plus.svg';
import Cross from './components/cross.svg';

function getTodoList(section) {
    const todoList = document.createElement('div');
    todoList.classList.add('todo-list');

    const categories = getAllCategory();
    if ('ALL' == section) {
        for (let [category, todos] of Object.entries(categories)) {
            if (todos.length < 1) continue;

            const categoryContainer = document.createElement('div');
            categoryContainer.classList.add('each-category');

            const categoryTitle = document.createElement('p');
            categoryTitle.classList.add('category-title');
            categoryTitle.innerHTML = category.replace('_', ' ') + ':';
            categoryContainer.appendChild(categoryTitle);

            const unsortedTodo = getTodosForCatrgoty(todos);
            unsortedTodo.sort((a, b) => {
                if (a[0][1] != b[0][1]) {
                    return b[0][1] - a[0][1]
                } else {
                    const aDate = new Date(a[1]);
                    const bDate = new Date(b[1]);
                    return aDate - bDate;
                }
            });

            for (let todo of unsortedTodo) {
                categoryContainer.appendChild(todo[2]);
            }

            todoList.appendChild(categoryContainer);
        }
    } else {
        if (categories[section].length < 1) alert('No todos in that category');

        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('each-category');

        const categoryTitle = document.createElement('p');
        categoryTitle.classList.add('category-title');
        categoryTitle.innerHTML = section.replace('_', ' ') + ':';
        categoryContainer.appendChild(categoryTitle);

        const unsortedTodo = getTodosForCatrgoty(categories[section]);
        unsortedTodo.sort((a, b) => {
            if (a[0][1] != b[0][1]) {
                return b[0][1] - a[0][1]
            } else {
                const aDate = new Date(a[1]);
                const bDate = new Date(b[1]);
                return aDate - bDate;
            }
        });

        for (let todo of unsortedTodo) {
            categoryContainer.appendChild(todo[2]);
        }

        todoList.appendChild(categoryContainer);
    }

    return todoList;
}

function getTodosForCatrgoty(todos) {
    const unsortedTodo = [];
    for (let todo of todos) {
        const currTodo = document.createElement('div');
        currTodo.classList.add('each-todo');

        const currTodoTitle = document.createElement('div');
        currTodoTitle.innerHTML = todo.todoTitle;

        const currInfoContainer = document.createElement('div');
        currInfoContainer.classList.add('each-todo-subinfo');

        const prio = document.createElement('div');
        prio.innerHTML = todo.priority;
        currInfoContainer.append(prio);

        switch (todo.priority) {
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

        addCrossImage(currInfoContainer, currTodo, todo);

        currTodo.appendChild(currTodoTitle);
        currTodo.appendChild(currInfoContainer);

        console.log(todo.todo);
        const note = document.createElement('div');
        note.classList.add('curr-note-hidden');
        note.innerHTML = todo.todo;
        currTodo.appendChild(note);

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

function addCrossImage(containerDiv, todoDiv, todo) {
    const cross = new Image();
    cross.classList.add(`delete-todo-button`);
    cross.src = Cross;
    cross.addEventListener('click', () => {
        todoDiv.parentNode.removeChild(todoDiv);
        deleteTodoFromLocalStorage(todo.category, todo.todoTitle, todo.priority, todo['due-date']);
        location.reload();
    });
    containerDiv.append(cross);
}

export {
    getTodoList,
    getTodoListButton
}