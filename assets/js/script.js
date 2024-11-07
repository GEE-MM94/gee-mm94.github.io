const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
