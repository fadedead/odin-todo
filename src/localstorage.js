function createAllCategory() {
    if (localStorage.getItem('categories') == null) {
        const json = { 'ALL_NOTES': [] };
        localStorage.setItem('categories', JSON.stringify(json));
    }
}

function storeCategory(data) {
    const categories = localStorage.getItem('categories');
    const json = JSON.parse(categories);
    json[data.category] = [];
    localStorage.setItem('categories', JSON.stringify(json));
}

function deleteCategoryFromLocalStorage(categoryName) {
    const categories = localStorage.getItem('categories');
    const json = JSON.parse(categories) || {};
    delete json[categoryName];
    localStorage.setItem('categories', JSON.stringify(json));
}

function getAllCategory() {
    const categories = localStorage.getItem('categories');
    const json = JSON.parse(categories) || {};
    return json;
}

function getAvailableCategories() {
    const categoryNames = [];
    const categories = localStorage.getItem('categories');
    const json = JSON.parse(categories) || {};

    for (let [name, val] of Object.entries(json)) {
        categoryNames.push(name);
    }

    return categoryNames;
}

function storeTodo(todoObject) {
    const categories = JSON.parse(localStorage.getItem('categories'));
    categories[todoObject.category].push(todoObject);
    localStorage.setItem('categories', JSON.stringify(categories));
}

function deleteTodoFromLocalStorage(category, title, priority, dueDate) {
    const categories = JSON.parse(localStorage.getItem('categories'));
    for (let [index, currTodo] of categories[category].entries()) {
        if (currTodo.category == category && currTodo.todoTitle == title && currTodo.priority == priority && currTodo.dueDate == dueDate) {
            categories[category].splice(index, 1);
        }
    }
    localStorage.setItem('categories', JSON.stringify(categories));
}

function updateTodoNote(todoObject) {
    const categories = JSON.parse(localStorage.getItem('categories'));
    for (let currTodo of categories[todoObject.category]) {
        if (currTodo.category == todoObject.category && currTodo.todoTitle == todoObject.todoTitle && currTodo.priority == todoObject.priority && currTodo.dueDate == todoObject.dueDate) {
            currTodo.todoNote = todoObject.todoNote;
        }
    }
    localStorage.setItem('categories', JSON.stringify(categories));
}

export {
    createAllCategory,
    storeCategory,
    deleteCategoryFromLocalStorage,
    getAllCategory,
    getAvailableCategories,
    storeTodo,
    deleteTodoFromLocalStorage,
    updateTodoNote
}