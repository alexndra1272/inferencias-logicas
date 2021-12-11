const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".lista");

navToggle.addListener("click", () => {
  navMenu.classList.toggle("visible-m");
});