import { getAvailableCategories, storeCategory } from './localstorage';
import './styles.css';

export default function getTodoDialog() {
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
    dateLabel.setAttribute('for', 'due-date');
    dateContainer.appendChild(dateLabel);

    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('name', 'due-date');
    dateInput.setAttribute('id', 'due-date');
    dateInput.setAttribute('required', true);
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
    categoryInput.setAttribute('required', true);
    
    // seclections for categories
    const categories = getAvailableCategories();
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
    priorityInput.setAttribute('type', 'select');
    priorityInput.setAttribute('name', 'priority');
    priorityInput.setAttribute('id', 'priority');
    priorityInput.setAttribute('required', true);
    
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

    // Add note 
    const todoNote = document.createElement('textarea');
    todoNote.classList.add('todo-note');
    todoNote.setAttribute('name', 'todo');
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
        // Process form
        const formElement = document.getElementById('todo-form');
        const formData = new FormData(formElement);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });
        
        console.log(formDataObject);

        e.preventDefault();
        dialog.close();
    });
    buttonContainer.appendChild(submit);

    const close = document.createElement('button');
    close.classList.add('form-button');
    close.setAttribute('type', 'button');
    close.innerHTML = 'cancel';
    close.addEventListener('click', () => { dialog.close(); });
    buttonContainer.appendChild(close);

    // Add the containers to form
    form.appendChild(buttonContainer);

    dialog.appendChild(form);
    return dialog;
}