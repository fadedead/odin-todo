import './styles.css';
import Cross from './components/cross.svg';
import { deleteCategoryFromLocalStorage, getAvailableCategories } from './localstorage';

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
    const categories = getAvailableCategories();
    for (let categoryName of categories) {
        if (categoryName == 'ALL_NOTES') continue;
        const category = document.createElement('div');
        category.innerHTML = categoryName.replace('_', ' ');
        category.classList.add('sub-type');

        addCrossImage(category, categoryName);

        sidebar.insertBefore(category, sidebar.lastChild);
    }
}


function addNewCategory(data) {
    const sidebar = document.getElementsByClassName('sidebar')[0];
    const category = document.createElement('div');
    category.innerHTML = data.category;
    category.classList.add('sub-type');

    addCrossImage(category, data.category.replace(' ', '_'));

    sidebar.insertBefore(category, sidebar.lastChild);
}

function addCrossImage(category, categoryName) {
    const cross = new Image();
    cross.classList.add(`delete-category:${categoryName}`);
    cross.src = Cross;
    cross.addEventListener('click', deleteCategory);
    category.append(cross);
}

function deleteCategory(e) {
    let categoryClass = e.target.className;
    const category = categoryClass.split(':').pop();

    const sidebar = document.getElementsByClassName('sidebar')[0];

    for (let child of sidebar.childNodes) {
        if (child.firstChild.textContent == category.replace('_', ' ')) {
            sidebar.removeChild(child);
            deleteCategoryFromLocalStorage(category);
            break;
        }
    }
    location.reload();
}

export {
    getSidebar,
    addNewCategory
}