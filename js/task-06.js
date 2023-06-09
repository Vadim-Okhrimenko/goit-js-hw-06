const validationInput = document.querySelector("#validation-input");
validationInput.addEventListener("blur", onBlur);

function onBlur(evt) {
  const lengthText = evt.currentTarget.value.length;

  if (lengthText === Number(validationInput.dataset.length)) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
}
