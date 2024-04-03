import './styles.css'

import LoadHomePage from './initial_page'
import LoadMenuPage from './menu';
import LoadAboutPage from './about';

LoadHomePage();

const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const aboutButton = document.querySelector('#about');
const contentMenuButton = document.querySelector('#content button');

homeButton.addEventListener('click', LoadHomePage);
menuButton.addEventListener('click', LoadMenuPage);
aboutButton.addEventListener('click', LoadAboutPage);