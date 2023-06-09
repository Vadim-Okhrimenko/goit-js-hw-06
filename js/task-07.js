const sizeControl = document.querySelector("#font-size-control");
sizeControl.addEventListener("input", valueChange);
const text = document.querySelector("#text");

const minFont = sizeControl.min;
const maxFont = sizeControl.max;
const startSize = (maxFont - maxFont) / 2;

text.style.fontSize = `${startSize}px`;

function valueChange(evt) {
  const size = evt.currentTarget.value;
  text.style.fontSize = `${size}px`;
}
