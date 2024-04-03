export default function LoadAboutPage() {
    const main = document.querySelector('body');
    const content = document.querySelector('#content');
    
    content.innerHTML = '';
    main.style.backgroundImage = 'none';

    const aboutTitle = document.createElement('div');
    aboutTitle.textContent = 'About Us';
    aboutTitle.className = 'title';
    content.appendChild(aboutTitle);

    const aboutText = document.createElement('div');
    aboutText.className = 'about-text';
    aboutText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc lobortis mattis aliquam faucibus purus in massa. Auctor eu augue ut lectus arcu bibendum. Nibh mauris cursus mattis molestie. Iaculis eu non diam phasellus vestibulum lorem sed risus. Quam id leo in vitae turpis massa sed elementum. Sed turpis tincidunt id aliquet risus feugiat in ante. Vitae nunc sed velit dignissim sodales ut eu sem integer. Vulputate sapien nec sagittis aliquam malesuada. Amet porttitor eget dolor morbi non arcu risus quis. Auctor elit sed vulputate mi sit amet mauris commodo. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Vulputate eu scelerisque felis imperdiet proin fermentum. At in tellus integer feugiat. Volutpat sed cras ornare arcu. Gravida in fermentum et sollicitudin ac orci phasellus. Consectetur a erat nam at. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Leo vel fringilla est ullamcorper eget.'
    content.appendChild(aboutText);
}