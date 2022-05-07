const navBtn = document.getElementById("nav-btn");
const navBar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");

navBtn.addEventListener("click", () => {
    navbar.classList.add("showNav");
});

navClose.addEventListener("click", () => {
    navbar.classList.remove("showNav");
});