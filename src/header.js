import './styles.css';

export default function getHeader() {
    // Create the Header
    const header = document.createElement('div');
    header.classList.add('header');

    // Create the title
    const title = document.createElement('div');
    title.innerHTML = 'TODO';

    header.appendChild(title);

    return header;
}
