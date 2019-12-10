var hamburgerIconLine1 = document.getElementById("hamburger-icon__line-1");
var hamburgerIconLine2 = document.getElementById("hamburger-icon__line-2");
var hamburgerIconLine3 = document.getElementById("hamburger-icon__line-3");
var menu = document.getElementById("menu");
var dimOverlay = document.getElementById("dim-overlay");
var logo = document.getElementById("logo");
var logoOverlay = document.getElementById("logo-overlay");

document.addEventListener("DOMContentLoaded", function() {
    var dateSpan = document.getElementById("date");
    months = new Array(
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    );
    var d = new Date();
    var date = d.getDate();
    var month = months[d.getMonth()];
    dateSpan.textContent = date + " " + month;

    var greetingHeading = document.getElementById("greeting");
    var midnight = new Date(
        d.getFullYear(),
        d.getMonth(),
        d.getDate(),
        0,
        0,
        0
    );
    var hoursSinceMidnight = (d.getTime() - midnight.getTime()) / 3600000;
    var greeting;
    if (hoursSinceMidnight > 4 && hoursSinceMidnight < 10) {
        greeting = "Good morning! 🌞";
    } else if (hoursSinceMidnight < 13) {
        greeting = "Hi there! 👋";
    } else if (hoursSinceMidnight < 18) {
        greeting = "Good afternoon! ✨";
    } else if (hoursSinceMidnight < 23) {
        greeting = "Good evening! ☕";
    } else {
        greeting = "Good night! 🌛";
    }
    greetingHeading.textContent = greeting;
});

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

window.onscroll = function() {
    var scrolledDistance =
        document.body.scrollTop || document.documentElement.scrollTop;
    var pageHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    var scrolledPercentage = (scrolledDistance / pageHeight) * 100;

    closeMenu();
    if (scrolledDistance > 30) {
        menu.classList.add("menu--shadow");
        if (logoOverlay) {
            logo.style.opacity = "0.3";
        }
    } else {
        menu.classList.remove("menu--shadow");
        logo.style.opacity = "1";
    }
    logoOverlay.style.clipPath =
        "inset(0 " + (100 - scrolledPercentage) + "% 0 0)";
};
