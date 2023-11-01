// TOGGLE BUTTON
const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav_link');

// TOGGLE WHEN THE HAMBURGER ICON/BUTTON IS CLICKED
hamburger.addEventListener('click' , () => {
    navLink.classList.toggle('hide');
});