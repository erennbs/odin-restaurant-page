import menu from './menu.json'

export default function LoadMenuPage() {
    const main = document.querySelector('body');
    const content = document.querySelector('#content');
    
    content.innerHTML = '';
    main.style.backgroundImage = 'none';

    const menuTitle = document.createElement('div');
    menuTitle.className = 'menu-title';
    menuTitle.textContent = 'Menu';
    content.appendChild(menuTitle);

    const menuHolder = document.createElement('div');
    menuHolder.className = 'menu-holder';
    content.appendChild(menuHolder);

    for(const [key, value] of Object.entries(menu)) {
        CreateMenuItem(menuHolder, key, value);
    }
}

function CreateMenuItem(menuHolder, title, details) {
    let menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuHolder.appendChild(menuItem);

        let foodTitle = document.createElement('div');
        foodTitle.className = 'food-title';
        foodTitle.textContent = `${title} ($${details['price']})`;
        menuItem.appendChild(foodTitle);

        let infoDescription = document.createElement('div');
        infoDescription.className = 'food-description';
        infoDescription.textContent = details['description'];
        menuItem.appendChild(infoDescription);

        let hr = document.createElement('hr');
        menuHolder.appendChild(hr);
}