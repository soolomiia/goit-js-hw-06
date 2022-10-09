const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");
function changeNick(event) {
  if (event.currentTarget.value !== "") {
    outputText.textContent = event.currentTarget.value;
  } else {
    outputText.textContent = "Anonymous";
  }
}
inputText.addEventListener("input", changeNick);
