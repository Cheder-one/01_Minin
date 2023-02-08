console.log('typeof проверка типа данных:');

console.log(typeof 'Denis');
console.log(typeof 5);
console.log(typeof false);
console.log(typeof Symbol('id'));
console.log(typeof undefined);
console.log(typeof 100n);
console.log(typeof console);

// Exceptions
console.log('Исключения:');
console.log(typeof null); // выводит object
console.log('Должен выводиться null, а не Object');
console.log(typeof console.log); // выводит function
console.log(typeof alert); // выводит function
console.log('Нет такого типа данных как function');


