const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".lista");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("visible-m");
});