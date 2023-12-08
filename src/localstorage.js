function addCategory(data) {
    console.log(data);
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

module.exports = {
    addCategory
}