

const list = document.querySelector(".list");
const hamburgerMenu = document.querySelector(".menu");
const open = document.querySelector(".open");
const close = document.querySelector(".close");

hamburgerMenu.addEventListener("click", () => {
  open.classList.toggle("hidden");
  close.classList.toggle("show");
  list.classList.toggle("active");
});

// FAQ
document.querySelectorAll(".faq__question").forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    answer.classList.toggle("active");
  });
});

