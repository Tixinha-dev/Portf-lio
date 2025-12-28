const text = "Densenvolvedor front-end júnior";
const typingElement = document.getElementById("typing");

let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 70);
  }
}
  const hamburger = document.getElementById("hamburger");
  const navList = document.querySelector(".nav-list");

  hamburger.addEventListener("click", () => {
    navList.classList.toggle("active");
  });

typeEffect();
