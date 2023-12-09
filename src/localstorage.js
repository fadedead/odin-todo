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

function getCategory() {
    let categories = localStorage.getItem('categories');
    if (categories != null) {
        let json = JSON.parse(categories);
        return json;
    } else {
        return {};
    }
}

export {
    storeCategory,
    getCategory
}