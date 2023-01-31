// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

let value = document.getElementById("value");
const decrementButton = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  '#counter button[data-action="increment"]'
);

decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

incrementButton.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});
