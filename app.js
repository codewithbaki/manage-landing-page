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

// cht

const cards = document.querySelectorAll(".testimonial-card");
const dots = document.querySelectorAll(".dot");

const options = {
  root: document.querySelector(".testimonial-container"),
  threshold: 0.6,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const currentCardIndex = Array.from(cards).indexOf(entry.target);

      dots.forEach((dot) => dot.classList.remove("active"));

      dots[currentCardIndex].classList.add("active");
    }
  });
}, options);

cards.forEach((card) => observer.observe(card));
