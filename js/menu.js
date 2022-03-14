const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("navbar-nav");

hamburger.addEventListener("click", () => {
  navUL.classList.toggle("show");
});
