// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// - Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// - Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputValue = document.querySelector("#validation-input");
const checkLength = Number(inputValue.dataset.length);
console.log(checkLength);

inputValue.addEventListener("blur", () => {
  if (inputValue.value.length === checkLength) {
    inputValue.classList.add("valid");
    inputValue.classList.remove("invalid");
  } else {
    console.log(false);
    inputValue.classList.add("invalid");
    inputValue.classList.remove("valid");
  }
});
