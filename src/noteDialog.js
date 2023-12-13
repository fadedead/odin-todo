import './styles.css';

export default function getNoteDialog() {
    // Create a dialog
    const dialog = document.createElement('dialog');
    dialog.id = 'note-dialog';

    // Create a form
    const form = document.createElement('form');
    form.id = 'note-form';

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
        const formElement = document.getElementById('note-form');
        const formData = new FormData(formElement);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        //TODO: Add to storage
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