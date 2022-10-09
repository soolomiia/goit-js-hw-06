const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
text.style.fontSize = "52px";
function changeSize(event) {
  text.style.fontSize = event.currentTarget.value + "px";
}
const textCont = text.textContent;
input.addEventListener("input", changeSize);
