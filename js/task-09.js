function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtn = document.querySelector(".change-color");
const currentColor = document.querySelector(".color");
const body = document.querySelector("body");

changeBtn.addEventListener("click", handleChangeColor);

function handleChangeColor() {
  body.style.backgroundColor = getRandomHexColor();
  currentColor.textContent = getRandomHexColor();
}
