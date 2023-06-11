const sizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

sizeControl.addEventListener("input", valueChange);

function valueChange(evt) {
  const size = evt.currentTarget.value;
  text.style.fontSize = `${size}px`;
}
