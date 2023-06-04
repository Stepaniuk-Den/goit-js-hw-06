const listEl = document.querySelectorAll("#categories .item");

const sumList = listEl.length;
console.log(`Number of categories: ${sumList}`);

listEl.forEach((el) => {
  const nameEl = el.firstElementChild.textContent;
  const numEl = el.lastElementChild.children.length;
  console.log(`Category: ${nameEl}`);
  console.log(`Elements: ${numEl}`);
});
