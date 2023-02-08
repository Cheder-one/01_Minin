// Операторы сравнения > < >= <= == ===
console.log('//Comparisons Operators//');
console.log('> ; < >= ; <= ; == ; ===');

console.log('5 > 10', 5 > 10);
console.log('5 < 10', 5 < 10);
console.log('5 <= 5', 5 <= 5);
console.log('5 >= 6', 5 >= 6);

console.log('100 == 100', 100 == 100);

// Сравнение строк
console.log('//String comparison//');

console.log("'Ass' == 'ass'",'Ass' == 'ass'); // false
console.log('"A".charCodeAt()', 'A'.charCodeAt()); // 65
console.log('"a".charCodeAt()', 'a'.charCodeAt()); // 97

// == vs ===
// == сравнивает значения
console.log("'1' == 1", '1' == 1);
console.log("'200' > '21'", '200' > '21');
console.log("true == 1", true == 1);

// === сравнивает типы (рекомендовано)
console.log("1 === 1", 1 === 1)
console.log("true === 1", true === 1)

// Math объект

console.log('//Math objects//');
console.log('Число Pi', Math.PI); // 3.141592653589793

// Округление
// Math.round() – простое округление
console.log('Простое округление:');
console.log('Math.round(40.4)', Math.round(40.4)); // 40
console.log('Math.round(40.5)', Math.round(40.5)); // 41
console.log('Math.round(40.6)', Math.round(40.6)); // 41

// Math.floor() – округление вниз
console.log('Округление вниз:');
console.log('Math.floor(40.5)', Math.floor(40.5)); // 40
console.log('Math.floor(40.99)', Math.floor(40.99)); // 40

// Math.ceil() – округление вверх
console.log('Округление вверх:');
console.log('Math.ceil(40.1)', Math.ceil(40.1)); // 41
