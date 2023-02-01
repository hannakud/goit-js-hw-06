// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  //використовувємо стандартний метод, щоб після відправки форми сторінка не перезавантажувалася
  event.preventDefault();
  //  створюємо об'єкт
  const inputData = {};
  const email = event.currentTarget.elements.email;
  const password = event.currentTarget.elements.password;

  // перевірка, чи заповнені всі поля
  if (email.value === '' || password.value === '') {
    return alert('Please fill all the fields!');
  } else {
    inputData.email = email.value;
    inputData.password = password.value;
  }
  // виводимо в об'єкт із введеними даними в консоль
  console.log(inputData);
  // очищаємо значення полів форми методом reset
  event.currentTarget.reset();
}
