const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");

const markup = ingredients.map((name) => {
  const li = document.createElement("li");
  li.textContent = name;
  li.classList.add("item");

  return li;
});

ingredientsList.append(...markup);
