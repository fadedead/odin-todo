import { storeCategory } from './localstorage';
import { addNewCategory } from './sidebar';
import './styles.css';

export default function getCategoryDialog() {
    // Create a dialog
    const dialog = document.createElement('dialog');
    dialog.id = 'category-dialog';

    // Create a form
    const form = document.createElement('form');
    form.id = 'category-form';

    // Add the labels and inputs to form
    const inputContainer = document.createElement('div');
    inputContainer.classList.add('form-input-container');

    const label = document.createElement('label');
    label.innerHTML = 'Category Name:';
    label.setAttribute('for', 'category-name');
    inputContainer.appendChild(label);

    const input = document.createElement('input');
    input.setAttribute('name', 'category');
    input.setAttribute('id', 'category-name');
    input.setAttribute('required', '');
    inputContainer.appendChild(input);

    // Add the buttons to form
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('form-button-container');

    const submit = document.createElement('button');
    submit.classList.add('form-button');
    submit.innerText = 'confirm';
    submit.addEventListener('click', (e) => {
        if(!form.checkValidity()) return;
        
        // Process form
        const formElement = document.getElementById('category-form');
        const formData = new FormData(formElement);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });
        if(formDataObject.category.includes('_')) {
            alert('Underscore(_) are not allowed in category names');
            return;
        }

        addNewCategory(formDataObject);
        formDataObject.category = formDataObject.category.replace(' ', '_');
        storeCategory(formDataObject);

        e.preventDefault();
        form.reset();
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
        form.reset();
        document.body.removeChild(dialog);
    });
    buttonContainer.appendChild(close);

    // Add the containers to form
    form.appendChild(inputContainer);
    form.appendChild(buttonContainer);

    dialog.appendChild(form);
    return dialog;
}