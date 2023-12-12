import './styles.css';
import getHeader from './header';
import { getSidebar } from './sidebar';
import getCategoryDialog from './categoryDialog';
import { getTodoList, getTodoListButton } from './todoList';
import getTodoDialog from './todoDialog';
import { createAllCategory, getAvailableCategories } from './localstorage';


function genratePage() {
    const content = document.getElementById('content');
    content.appendChild(getHeader());

    // Create a container div
    const container = document.createElement('div');
    container.classList.add('container');

    // Add the sidebar and category dialog
    createAllCategory();
    container.appendChild(getSidebar());

    // Get todo list
    container.appendChild(getTodoList('ALL'));

    // Add the plus button
    container.appendChild(getTodoListButton());

    // Add the container to content
    content.append(container);
}



genratePage();