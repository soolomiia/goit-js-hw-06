const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let ulListRef = document.querySelector('ul#ingredients');

for (let i = 0; i < ingredients.length; i += 1) {
  let liRef = document.createElement('li');
  liRef.textContent = ingredients[i];
  liRef.classList.add('item');
  ulListRef.append(liRef)
}
console.log(ulListRef)

