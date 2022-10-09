const btnClick = document.querySelector(".change-color");
const body = document.querySelector("body");
const color = document.querySelector(".color");

function getRandomHexColor() {
  const newColor =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0);
  console.log(newColor);
  body.style.background = newColor;
  return newColor;
}

btnClick.addEventListener("click", () => getRandomHexColor());
console.log(btnClick);
