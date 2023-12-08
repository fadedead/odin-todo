import './styles.css';
import getHeader from './header';
import getSidebar from './sidebar';
import getCategoryDialog from './categoryDialog';

function genratePage() {
    const content = document.getElementById('content');
    content.appendChild(getHeader());

    // Create a container div
    const container = document.createElement('div');
    container.classList.add('container');

    // Add the sidebar and category dialog
    container.appendChild(getSidebar());
    container.appendChild(getCategoryDialog());

    // Add the container to content
    content.append(container);
}



genratePage();