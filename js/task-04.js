let counterValue = 0;

const decButton = document.querySelector('button[data-action = "decrement"]');
const incButton = document.querySelector('button[data-action = "increment"]');
const value = document.querySelector("#value");

decButton.addEventListener("click", buttonDecrement);
incButton.addEventListener("click", buttonIncrement);

function buttonDecrement() {
  counterValue -= 1;
  value.textContent = counterValue;
}

function buttonIncrement() {
  counterValue += 1;
  value.textContent = counterValue;
}
