
const mainNavButton = document.querySelector(".main-nav__toggle");
const header = document.querySelector(".page-header");
const mainNav = document.querySelector(".main-nav");

mainNav.classList.remove('main-nav--nojs');

function menuToggle() {
  mainNavButton.addEventListener("click", function () {
    header.classList.toggle("page-header--opened");
    mainNav.classList.toggle("main-nav--opened");
    mainNav.classList.toggle("main-nav--closed");
  });
}

menuToggle();
