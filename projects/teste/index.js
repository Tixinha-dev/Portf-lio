import { mediaAritmeticaSimples } from "./calculos/mediaSimples.js";
import { mediaAritmeticaPonderada } from "./calculos/mediaPonderada.js";
import { mediana } from "./calculos/mediana.js";
import { moda } from "./calculos/moda.js";

let subTitle = document.getElementById("subtitle");
let description = document.getElementById("description");
let previusButton = document.getElementById("arrow-left-button");
let arrowLeftIcon = document.getElementById("arrow-left-icon");
let arrowRighttIcon = document.getElementById("arrow-right-icon");
let numbes = document.getElementById("entrada")
let nextButton = document.getElementById("arrow-right-button");

let subtitleOption = [
  "Média Aritmética Simples:",
  "Média Aritmética Ponderada:",
  "Mediana:",
  "Moda:",
];
let subTitleDescriptions = [
  "Pode ser calculada somando todos os valores e dividindo o total da soma pela quantidade de valores.",
  "A média aritmética ponderada é calculada multiplicando cada valor do conjunto de dados pelo seu peso.",
  "A mediana é uma medida de tendência central da Estatística que corresponde ao valor central de um conjunto de valores ordenados.",
  "Pode ser calculada encontrando o valor que mais se repete em um dado conjunto.",
];

let clickCounter = 0;

previusButton.addEventListener("click", function () {
  previusButtonStyleAnimation();
});
nextButton.addEventListener("click", function () {
  nextButtonStyleAnimation();
});
keydownAndClickEvent();

function switchClickCounter() {
  switch (clickCounter) {
    case 0:
      subTitle.innerText = subtitleOption[clickCounter];
      description.innerText = subTitleDescriptions[clickCounter]
          mediaAritmeticaSimples(numbes.value);
      break;
    case 1:
      subTitle.innerText = subtitleOption[clickCounter];
      description.innerText = subTitleDescriptions[clickCounter];
         mediaAritmeticaPonderada(numbes.value)
      break;
    case 2:
      subTitle.innerText = subtitleOption[clickCounter];
      description.innerText = subTitleDescriptions[clickCounter];
       mediana(numbes.value)
      break;
    case 3:
      subTitle.innerText = subtitleOption[clickCounter];
      description.innerText = subTitleDescriptions[clickCounter];
      moda(numbes.value)
      break;
    default:
      break;
  }
}
function previusButtonStyleAnimation() {
  console.log("volta " + clickCounter);
  if (clickCounter > 0) {
    clickCounter--;
  } else {
    clickCounter = subtitleOption.length - 1;
  }
  switchClickCounter();
  previusButton.style.animationName = "button-background-animation";
  previusButton.style.animationDuration = "0.10s";

  arrowLeftIcon.style.animationName = "icon-background-animation";
  arrowLeftIcon.style.animationDuration = "0.10s";

  setTimeout(function () {
    previusButton.style.animation = "";
    arrowLeftIcon.style.animation = "";
  }, 100);
}

function nextButtonStyleAnimation() {
  if (clickCounter < subtitleOption.length - 1) {
    clickCounter++;
  } else {
    clickCounter = 0;
  }
  switchClickCounter();
  nextButton.style.animationName = "button-background-animation";
  nextButton.style.animationDuration = "0.10s";

  arrowRighttIcon.style.animationName = "icon-background-animation";
  arrowRighttIcon.style.animationDuration = "0.10s";
  setTimeout(function () {
    nextButton.style.animation = "";
    arrowRighttIcon.style.animation = "";
  }, 100);
}

function keydownAndClickEvent() {
  document.addEventListener("keydown", function (event) {
    
    if (event.key === "ArrowLeft") {
      previusButtonStyleAnimation();
    } else if (event.key === "ArrowRight") {
      nextButtonStyleAnimation();
    }
    else if(event.key === "Enter"){
          switchClickCounter();
    }

  });
}

