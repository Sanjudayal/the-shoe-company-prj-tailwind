const mainContainer = document.querySelector("#main-container");
const menuBtn = document.querySelector("#menu-btn");
const mobileMenu = document.querySelector("#mobile-menu");
const closeIcon = document.querySelector("#close-icon");
const navArea = document.querySelector("#nav-area");

menuBtn.addEventListener("click", () => {
  //   mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("opacity-0");
  mobileMenu.classList.toggle("invisible");
  mobileMenu.classList.toggle("translate-x-5");
});

closeIcon.addEventListener("click", () => {
  //   mobileMenu.classList.add("hidden");
  mobileMenu.classList.add("opacity-0");
  mobileMenu.classList.add("invisible");
  mobileMenu.classList.add("translate-x-5");
});

mainContainer.addEventListener("click", () => {
  //   mobileMenu.classList.add("hidden");
  mobileMenu.classList.add("opacity-0");
  mobileMenu.classList.add("invisible");
  mobileMenu.classList.add("translate-x-5");
});

function stopPropagation(event) {
  event.stopPropagation();
}

menuBtn.addEventListener("click", stopPropagation);
mobileMenu.addEventListener("click", stopPropagation);
closeIcon.addEventListener("click", stopPropagation);
