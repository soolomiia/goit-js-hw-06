const inputName = document.querySelector("#validation-input");
function focusBorder(event) {
  inputName.classList.remove("valid");
  inputName.classList.remove("invalid");
  console.log(event.currentTarget.value);
  if (event.currentTarget.value.length == inputName.dataset.length) {
    inputName.classList.add("valid");
  } else {
    inputName.classList.add("invalid");
  }
  return inputName;
}
inputName.addEventListener("blur", focusBorder);
console.dir(inputName);
