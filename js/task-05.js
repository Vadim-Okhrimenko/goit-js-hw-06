const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
nameInput.addEventListener("input", onInput);

function onInput(evt) {
  nameOutput.textContent =
    evt.currentTarget.value === "" ? "Anonymous" : evt.currentTarget.value;
}
