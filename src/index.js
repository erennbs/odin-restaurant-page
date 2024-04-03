import './styles.css'

import LoadHomePage from './initial_page'
import LoadMenuPage from './menu';
import LoadAboutPAge from './about';

LoadHomePage();

const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const aboutButton = document.querySelector('#about');

homeButton.addEventListener('click', LoadHomePage);
menuButton.addEventListener('click', LoadMenuPage);
aboutButton.addEventListener('click', LoadAboutPAge);