import './styles.css';

export default function getSidebar() {
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
    addType.addEventListener('click', addSidebarCategory);
    sidebar.appendChild(addType);

    return sidebar;
}

function addSidebarCategory(e) {
    const dialog = document.getElementById('category-dialog');
    dialog.showModal();

    
}

