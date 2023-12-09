import './styles.css';
import Cross from './components/sidebar/cross.svg';

function getSidebar() {
    // Create the Sidebar
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    // All notes
    const allNotes = document.createElement('div');
    allNotes.innerHTML = 'All Notes';
    allNotes.classList.add('sub-type');
    sidebar.appendChild(allNotes);

    // Deleted notes
    const binedNotes = document.createElement('div');
    binedNotes.innerHTML = 'Bin';
    binedNotes.classList.add('sub-type');
    sidebar.appendChild(binedNotes);

    // Add a category
    const addType = document.createElement('div');
    addType.innerHTML = 'Add category';
    addType.classList.add('sub-type');
    addType.classList.add('type-add-category');
    addType.addEventListener('click', addSidebarCategory);
    sidebar.appendChild(addType);

    addCategoryFromLocalStrorage(sidebar);

    return sidebar;
}

function addSidebarCategory() {
    document.getElementById('category-dialog').showModal();
}

function addCategoryFromLocalStrorage(sidebar) {
    if (localStorage.categories != null) {
        const categories = JSON.parse(localStorage.getItem('categories'));
        for (let [categoryName, categoryValues] of Object.entries(categories)) {
            const category = document.createElement('div');
            category.innerHTML = categoryName;
            category.classList.add('sub-type');
            sidebar.insertBefore(category, sidebar.lastChild);
        }
    }
}

function addNewCategory(data) {
    const sidebar = document.getElementsByClassName('sidebar')[0];
    const category = document.createElement('div');
    category.innerHTML = data.category;
    category.classList.add('sub-type');
    sidebar.insertBefore(category, sidebar.lastChild);
}

export {
    getSidebar,
    addNewCategory
}