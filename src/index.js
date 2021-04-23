const hamburgerBtn = document.querySelector('#hamburger-btn');
const linksContainer = document.querySelector('#links-container');
const navLinks = document.querySelector('#nav__links');
const demoBtn = document.querySelector('#demo-btn');
const closeBtn = document.querySelector('#close-btn');

const toggleMobileMenu = () => {
  linksContainer.classList.toggle('active');
  closeBtn.classList.toggle('show');
};

hamburgerBtn.addEventListener('click', toggleMobileMenu);
closeBtn.addEventListener('click', toggleMobileMenu);
