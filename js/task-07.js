const fontInput = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");

fontInput.addEventListener("input", handleTextSizeInput);

function handleTextSizeInput() {
  textSize.style.fontSize = `${fontInput.value}px`;
}
