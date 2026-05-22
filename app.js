const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const btns = document.querySelector(".btns");
const navBar = document.querySelector(".nav-links");

openBtn.addEventListener("click", () => {
  navBar.classList.add("active");
  btns.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navBar.classList.remove("active");
  btns.classList.remove("active");
});
