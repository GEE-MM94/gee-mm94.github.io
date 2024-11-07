const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const navbar = document.querySelector(".navbar");
const backToTopButton = document.getElementById("back-to-top");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

backToTopButton.onclick = function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
