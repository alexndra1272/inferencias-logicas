const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".lista");

/*Adyudaaaa*/
navToggle.addEvetListener("click", () => {
  navMenu.classList.toggle("visible-m");
});