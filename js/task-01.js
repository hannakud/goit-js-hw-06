// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const items = document.querySelectorAll(".item");
// Рахуємо і виводимо в консоль елементи li.item
console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  // знаходимо і виводимо в консоль текст заголовку елемента (тегу <h2>)
  console.log(`Category: ${item.firstElementChild.textContent}`);
  // знаходимо і виводимо в консоль кількість елементів в категорії (усіх <li>, вкладених в нього).
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
