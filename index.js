function toggleCard(card) {
    const overlay = card.querySelector('.overlay');
    overlay.style.bottom = overlay.style.bottom === '0px' ? '-100%' : '0px';
}

const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");
const sideMenu = document.querySelector('#sideMenu');
//Funtion sideMenu

function openMenu() {
    sideMenu.style.right = "0";  
}

function closeMenu() {
    sideMenu.style.right = "-16rem";  
}