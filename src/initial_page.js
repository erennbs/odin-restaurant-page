import img from './img/breakfast_background.jpg'
import LoadMenuPage from './menu';

export default function LoadHomePage() {
    const body = document.querySelector('body');
    const content = document.querySelector('#content');
    
    content.innerHTML = '';

    body.style.backgroundImage = `url(${img})`; 

    const textDiv = document.createElement('div');
    textDiv.className = 'text';

    const header = ['Start your day', 'with a good', 'breakfast']

    header.forEach(h => {
        let div = document.createElement('div');
        div.textContent = h;
        textDiv.appendChild(div);
    });

    const button = document.createElement('button');
    button.textContent = 'Menu';
    textDiv.appendChild(button);
    button.addEventListener('click', LoadMenuPage);

    content.appendChild(textDiv);
}