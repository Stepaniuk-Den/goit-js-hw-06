const counterValue = document.querySelector("#value");
let Value = 0;

const btnInc = document.querySelector('button[data-action="increment"]');

const btnDec = document.querySelector('button[data-action="decrement"]');

const incrementClick = () => {
  Value += 1;
  counterValue.textContent = Value;
};

const decrementClick = () => {
  Value -= 1;
  counterValue.textContent = Value;
};

btnInc.addEventListener("click", incrementClick);
btnDec.addEventListener("click", decrementClick);
