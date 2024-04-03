export default function LoadMenuPage() {
    const main = document.querySelector('body');
    const content = document.querySelector('#content');
    
    content.innerHTML = '';
    main.style.backgroundImage = 'none';

    const menu = {
        'Pancakes': {
            'description': 'American-style, fluffy pancakes are great for feeding a crowd at breakfast or brunch. Top with something sweet like fruit, jam or syrup, or rashers of crispy bacon.',
            'price': '4.99'
        },
        'Pancake Breakfast Tacos': {
            'description': 'Enjoy a leisurely weekend bunch with these taco-inspired pancakes filled with bacon, cheese and scrambled eggs',
            'price': '7.99'
        },
        'Potato fritters': {
            'description': "Similar to potato rösti and hash browns, these fritters make an excellent base for your favourite toppings at brunch or breakfast. We've opted for fried eggs and avocado",
            'price': '6.99'
        }
    };

    const menuTitle = document.createElement('div');
    menuTitle.className = 'menu-title';
    menuTitle.textContent = 'Menu';
    content.appendChild(menuTitle);

    const menuHolder = document.createElement('div');
    menuHolder.className = 'menu-holder';
    content.appendChild(menuHolder);

    for(const [key, value] of Object.entries(menu)) {
        let menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuHolder.appendChild(menuItem);
        
        // let menuImg = document.createElement('div');
        // menuImg.className = 'menu-img';
        // menuItem.appendChild(menuImg);

        // let menuInfo = document.createElement('div');
        // menuInfo.className = 'menu-info';
        // menuItem.appendChild(menuInfo);

        // let infoHeader = document.createElement('div');
        // infoHeader.className = 'info-header';
        // menuInfo.appendChild(infoHeader);

        let foodTitle = document.createElement('div');
        foodTitle.className = 'food-title';
        foodTitle.textContent = `${key} ($${value['price']})`;
        menuItem.appendChild(foodTitle);

        let infoDescription = document.createElement('div');
        infoDescription.className = 'food-description';
        infoDescription.textContent = value['description'];
        menuItem.appendChild(infoDescription);

        let hr = document.createElement('hr');
        menuHolder.appendChild(hr);

        
    }
}