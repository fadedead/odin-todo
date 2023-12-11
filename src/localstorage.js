function storeCategory(data) {
    let categories = localStorage.getItem('categories');
    if (categories != null) {
        let json = JSON.parse(categories);
        json[data.category] = [];
        localStorage.setItem('categories', JSON.stringify(json));
    } else {
        let json = {};
        json[data.category] = [];
        localStorage.setItem('categories', JSON.stringify(json));
    }
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

export {
    storeCategory,
    deleteCategoryFromLocalStorage,
    getAllCategory,
    getAvailableCategories
}