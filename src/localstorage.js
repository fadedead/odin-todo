function createAllCategory() {
    if(localStorage.getItem('categories') == null) {
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

export {
    createAllCategory,
    storeCategory,
    deleteCategoryFromLocalStorage,
    getAllCategory,
    getAvailableCategories,
    storeTodo
}