const textInput = document.querySelector("#validation-input");
const textLength = document.querySelector("[data-length]");
textInput.addEventListener("focus", (e) => {
  e.target.value.length > 6
    ? textInput.classList.add("valid")
    : textInput.classList.replace("valid", "invalid");
});
