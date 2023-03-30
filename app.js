// Preloader function
const container = document.querySelector(".container");
const preloader = document.querySelector(".preloader");
window.onload = setTimeout(() => {
  preloader.style.display = "none";
  container.style.display = "block";
}, 1000);
