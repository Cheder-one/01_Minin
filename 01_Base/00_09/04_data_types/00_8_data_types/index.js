// String (строка)
// Number - число
// Boolean - (логический) оперирует только trye/false
// Null - пусто или значение неизвестно 
// Undefined - значение не было присвоено
// Object - сложный тип данных, обьединяющий несколько параметров (ключей key: valye;)
// Symbol - нужен для создания уникальных ключей обьекта
// BigInt - большое число

// Примитивы (простые типы данных) - 7 остальных
// Не примитивы (сложные типы) - 1 (обьект)

// Как определить тип данных? (например что это строка)
// typeof('') или typeof ''
// console.log(typeof 'Maxim')

// String (строка)
const favoriteDrink = ('Water');
console.log(favoriteDrink);

let string1 = 'Одинарные';
let string2 = "Двойные";
let string3 = `Косые`;
let string4 = "Я прохожу курс \"База JavaScript\"";

// Number
const numberOfCups = ('5');
console.log(numberOfCups);

let a = 2;
let b = 3.5;
console.log(a + b); // В консоль будет выведено значение 5.5

// Boolean
const isColdDrink = false;
console.log(isColdDrink);

// Null - пустое значение или значение неизвестно 
const studentFavoriteDrink = null;
console.log(studentFavoriteDrink);

// У нас была машина
let myCarName = "Toyota Corolla";
// Но потом мы её продали и остались без машины
myCarName = null;

// Undefined - переменная была объявлена, но значение ей не присвоено (оставь этот вывод значения системе, используй null)
let carOwner = undefined;
console.log(carOwner);

let x;
console.log(x); // Выведет undefined

// Object - сложный тип данных, обьединяющий несколько параметров (ключей key: valye;)
const drink = {
   favoriteDrink: 'Coffee',
   numberOfCups: 5,
   isColdDrink: true,
};
console.log(drink);

const car = {
   name: "Toyota Corolla",
   year: 2017,
   isNew: false,
   owner: null
 }
//  Обратиться к свойсту Обьекта:
 console.log(car.name);

// Symbol - нужен для создания уникальных ключей обьекта
const id = Symbol('id');
console.log(id);

// BigInt - большое число (больше, чем (2⁵³-1), т.е. 9007199254740991).

const BigIntNumber = 100n;
console.log(BigIntNumber);
// Для создания переменной этого типа нужно поставить букву n в конце числа:
let bigNumber = 123456789n;