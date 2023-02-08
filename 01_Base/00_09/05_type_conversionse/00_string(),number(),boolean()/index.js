// JS имеет динамическую типизацию

// 1. Преобразование к строке 
const age = 22;
console.log('number age:', age, typeof age);
console.log('string age:', age, typeof String(age)); // - явное преобразование (рекомендуется для исп.)

const updatedAge = '1' + 20;
console.log('updatedAge:', updatedAge, typeof updatedAge);  // - неявное преобразование

// 2. Преобразование к числу 
const experienceInJavaScript = '5';
console.log('string experienceInJavaScript:', typeof experienceInJavaScript);
console.log('number experienceInJavaScript:', typeof Number(experienceInJavaScript));

console.log('experienceInJavaScript:', experienceInJavaScript, typeof +experienceInJavaScript);

console.log('Letter f:', Number('Letter f'));

// 3. Преобразование к Boolean

console.log('Hi', Boolean('Hi'));
console.log('5', Boolean(1));

