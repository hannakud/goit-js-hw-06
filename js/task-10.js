// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controls = document.querySelector('#controls');
const input = document.querySelector('#controls input');
const createButton = document.querySelector('#controls button[data-create]');
const destroyButton = document.querySelector('#controls button[data-destroy]');
const boxes = document.querySelector('#boxes');

// слухачі подій
createButton.addEventListener('click', () => {
  const amount = input.value;
  createBoxes(amount);
});
destroyButton.addEventListener('click', () => {
  destroyBoxes();
});

// функція з циклом з додаванням елементу ширшим і вищим від попереднього на 10px
function createBoxes(amount) {
  const arrayBoxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;
    box.style.backgroundColor = getRandomHexColor();
    arrayBoxes.push(box);
  }
  return boxes.append(...arrayBoxes);
}
// функція яка очищає вміст всіх div#boxes
function destroyBoxes() {
  return (boxes.innerHTML = '');
}
