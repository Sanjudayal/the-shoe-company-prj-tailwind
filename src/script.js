const mainContainer = document.querySelector("#main-container");
const menuBtn = document.querySelector("#menu-btn");
const mobileMenu = document.querySelector("#mobile-menu");
const closeIcon = document.querySelector("#close-icon");
const navArea = document.querySelector("#nav-area");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

closeIcon.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
});

mainContainer.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
});

function stopPropagation(event) {
  event.stopPropagation();
}

menuBtn.addEventListener("click", stopPropagation);
navArea.addEventListener("click", stopPropagation);
closeIcon.addEventListener("click", stopPropagation);
