var hamburgerIconLine1 = document.getElementById("hamburger-icon__line-1");
var hamburgerIconLine2 = document.getElementById("hamburger-icon__line-2");
var hamburgerIconLine3 = document.getElementById("hamburger-icon__line-3");
var menu = document.getElementById("menu");
var dimOverlay = document.getElementById("dim-overlay");

function toggleMenu() {
    hamburgerIconLine1.classList.toggle("menu-open");
    hamburgerIconLine2.classList.toggle("menu-open");
    hamburgerIconLine3.classList.toggle("menu-open");
    menu.classList.toggle("menu-open");
    dimOverlay.classList.toggle("menu-open");
}

function closeMenu() {
    hamburgerIconLine1.classList.remove("menu-open");
    hamburgerIconLine2.classList.remove("menu-open");
    hamburgerIconLine3.classList.remove("menu-open");
    menu.classList.remove("menu-open");
    dimOverlay.classList.remove("menu-open");
}
