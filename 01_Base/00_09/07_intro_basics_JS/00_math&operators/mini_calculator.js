// Мини-калькулятор валют

let rate = 51; // USD/RUB курс
let amount = 100; // Кол-во рублей

let result = Number((amount / rate).toFixed(2)); // .toFixed(2) - обрезает значение до 2х символов.
console.log(`${amount}₽ = $${result}`); // 100₽ = $1.96