const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const liRef = document.createElement(`li`);
liRef.classList.add(`item`);
liRef.textContent = ingredients[0];

const liRef1 = document.createElement(`li`);
liRef1.classList.add(`item`);
liRef1.textContent = ingredients[1];

const liRef2 = document.createElement(`li`);
liRef2.classList.add(`item`);
liRef2.textContent = ingredients[2];

const liRef3 = document.createElement(`li`);
liRef3.classList.add(`item`);
liRef3.textContent = ingredients[3];

const liRef4 = document.createElement(`li`);
liRef4.classList.add(`item`);
liRef4.textContent = ingredients[4];

const liRef5 = document.createElement(`li`);
liRef5.classList.add(`item`);
liRef5.textContent = ingredients[5];

const ulListRef = document.querySelector(`#ingredients`);
ulListRef.append(liRef, liRef1, liRef2, liRef3, liRef4, liRef5);

console.log(ulListRef);
