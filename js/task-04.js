const minusBtn = document.querySelector('[data-action="decrement"]');
const plusBtn = document.querySelector('[data-action="increment"]');

const counterValue = document.querySelector("#value");
counterValue.value = 0;
plusBtn.addEventListener("click", () => {
  counterValue.value += Number(plusBtn.textContent);
  counterValue.textContent = counterValue.value;
});

minusBtn.addEventListener("click", () => {
  counterValue.value += Number(minusBtn.textContent);
  counterValue.textContent = counterValue.value;
});
console.log(counterValue.value);
