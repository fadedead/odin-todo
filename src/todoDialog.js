import { storeTodo } from './localstorage';
import './styles.css';
import { getTodoList } from './todoList';

export default function getTodoDialog(categoriesStored) {
    // Create a dialog
    const dialog = document.createElement('dialog');
    dialog.id = 'todo-dialog';

    // Create a form
    const form = document.createElement('form');
    form.id = 'todo-form';


    // Add due date
    const dateContainer = document.createElement('div');
    dateContainer.classList.add('form-input-container');

    const dateLabel = document.createElement('label');
    dateLabel.innerHTML = 'Due date:';
    dateLabel.setAttribute('for', 'dueDate');
    dateContainer.appendChild(dateLabel);

    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('name', 'dueDate');
    dateInput.setAttribute('id', 'dueDate');
    dateInput.setAttribute('required', '');
    dateContainer.appendChild(dateInput);

    form.appendChild(dateContainer);

    // Add category
    const categoryContainer = document.createElement('div');
    categoryContainer.classList.add('form-input-container');

    const categoryLabel = document.createElement('label');
    categoryLabel.innerHTML = 'Category:';
    categoryLabel.setAttribute('for', 'category');
    categoryContainer.appendChild(categoryLabel);

    const categoryInput = document.createElement('select');
    categoryInput.setAttribute('form', 'todo-form');
    categoryInput.setAttribute('name', 'category');
    categoryInput.setAttribute('id', 'category');
    categoryInput.setAttribute('required', '');

    // seclections for categories
    const categories = categoriesStored;
    categories.forEach(function (optionText, index) {
        const optionElement = document.createElement("option");
        optionElement.value = optionText;
        optionElement.text = optionText.replace('_', ' ');
        categoryInput.appendChild(optionElement);
    });

    categoryContainer.appendChild(categoryInput);
    form.appendChild(categoryContainer);

    // Add priority 
    const priorityContainer = document.createElement('div');
    priorityContainer.classList.add('form-input-container');

    const priorityLabel = document.createElement('label');
    priorityLabel.innerHTML = 'Priority:';
    priorityLabel.setAttribute('for', 'priority');
    priorityContainer.appendChild(priorityLabel);

    const priorityInput = document.createElement('select');
    priorityInput.setAttribute('form', 'todo-form');
    priorityInput.setAttribute('name', 'priority');
    priorityInput.setAttribute('id', 'priority');
    priorityInput.setAttribute('required', '');

    // seclections for priority 
    const options = ["p2", "p1", "p0"];
    options.forEach(function (optionText, index) {
        const optionElement = document.createElement("option");
        optionElement.value = optionText;
        optionElement.text = optionText;
        priorityInput.appendChild(optionElement);
    });

    priorityContainer.appendChild(priorityInput);
    form.appendChild(priorityContainer);

    // Add the todo title
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('form-input-container');

    const todoTitleLabel = document.createElement('label');
    todoTitleLabel.innerHTML = 'Todo:';
    todoTitleLabel.setAttribute('for', 'todoTitle');
    titleContainer.appendChild(todoTitleLabel);

    const todoTitleInput = document.createElement('input');
    todoTitleInput.setAttribute('form', 'todo-form');
    todoTitleInput.setAttribute('name', 'todoTitle');
    todoTitleInput.setAttribute('id', 'todoTitle');
    todoTitleInput.setAttribute('required', '');
    titleContainer.appendChild(todoTitleInput);

    form.append(titleContainer)

    // Add note 
    const todoNote = document.createElement('textarea');
    todoNote.classList.add('todo-note');
    todoNote.setAttribute('name', 'todoNote');
    todoNote.setAttribute('rows', '50');
    todoNote.setAttribute('cols', '80');
    form.appendChild(todoNote);


    // Add the buttons to form
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('form-button-container');

    const submit = document.createElement('button');
    submit.classList.add('form-button');
    submit.setAttribute('type', 'submit');
    submit.innerText = 'confirm';
    submit.addEventListener('click', (e) => {
        if (!form.checkValidity()) return;

        // Process form
        const formElement = document.getElementById('todo-form');
        const formData = new FormData(formElement);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        //Add to storage
        storeTodo(formDataObject);
        loadCurrentTodoCategory(formDataObject.category);

        e.preventDefault();
        dialog.close();
        document.body.removeChild(dialog);
    });
    buttonContainer.appendChild(submit);

    const close = document.createElement('button');
    close.classList.add('form-button');
    close.setAttribute('type', 'button');
    close.innerHTML = 'cancel';
    close.addEventListener('click', () => {
        dialog.close();
        document.body.removeChild(dialog);
    });
    buttonContainer.appendChild(close);

    // Add the containers to form
    form.appendChild(buttonContainer);

    dialog.appendChild(form);
    return dialog;
}

function loadCurrentTodoCategory(category) {
    const container = document.getElementsByClassName('container')[0];
    const todoList = document.getElementsByClassName('todo-list')[0];
    container.removeChild(todoList)
    container.appendChild(getTodoList(category));
}