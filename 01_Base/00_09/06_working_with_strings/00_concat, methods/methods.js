console.log('methods.js file start');

// toUpperCase, toLowerCase
const animal = 'Lion';
console.log('upper', animal.toUpperCase());
console.log('lower', animal.toLowerCase());
console.log(animal);

// Найти символы - indexOf (найти и вывести элемент), includes (элемент есть/нет)
const myText = 'Здесь должна была быть шутка, но я ее не придумал';

console.log('indexOf', myText.indexOf('о'));
console.log('indexOf', myText.indexOf('шутка'));
console.log('indexOf', myText.indexOf('членоножка'));

console.log('includes', myText.includes('не придумал'));

// Обрезка строки - slice, substring (одинаковы)
const programmingLanguage1 = 'JavaScript';
console.log('slice', programmingLanguage1.slice(1, 5));
console.log('slice', programmingLanguage1.substring(1, 5));

// Замена символов в строке - replace, replaceAll
const programmingLanguage2 = 'JavaScript';
console.log('replace', programmingLanguage2.replace('a', 'A'));
console.log('replaceAll', programmingLanguage2.replaceAll('a', 'A'));

// trim() - удаление лишних пробелов
const nameOfUser = prompt('Ты кто?')
console.log('nameOfUser', nameOfUser.trim());
