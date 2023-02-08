// Методы массивов: splice(), slice(), indexOf(), includes(), split(), join(), reverse()

//---------------------------------------------------------
// splice - возвращает вырезанные элементы. Мутирует текущий массив. Может принимать новые значения для замены вырезанных.

const cars = ['BMW', 'Mercedes', 'Lada'];

const removedElements = cars.splice(0, 2, 'Audi', 'Bugatti')

console.log('cars', cars); // 'Audi', 'Bugatti', 'Lada' 
console.log('removedElements', removedElements); // 'BMW', 'Mercedes'

//---------------------------------------------------------
// slice - возвращает вырезанные элементы. Не мутирует текущий массив.

const agesOfDevelopers = [25, 18, 45, 30];

const slicedAgesOfDevelopers = agesOfDevelopers.slice(0, 2);
console.log('slicedAgesOfDevelopers', slicedAgesOfDevelopers);
console.log('agesOfDevelopers', agesOfDevelopers);

//---------------------------------------------------------
// indexOf - возвращает индекс искомого элемента в массиве

const favoriteFood = ['Мясо', 'Торт', 'Кефирчик'];

const indexOfFood = favoriteFood.indexOf('Мясо')
console.log('Element:', favoriteFood[indexOfFood], 'Index:', indexOfFood);

//---------------------------------------------------------
// includes - элемент есть/нет

const technologies = ['JS', 'HTML', 'CSS'];

const isTechnologiesExists = technologies.includes('CSS')
console.log('isTechnologiesExists', isTechnologiesExists);

//---------------------------------------------------------
// split + join

// split - разделяет массив. Принимает в себя разделитель.

const listOfOrders = 'Майка, шорты, кроссовки, рюкзак';

const listOfOrdersArray = listOfOrders.split(', ')
console.log('listOfOrdersArray', listOfOrdersArray);

// join - превратить массив обратно в строчку. Принимает в себя разделитель.

const ordersString = listOfOrdersArray.join('; ')
console.log('ordersString', ordersString);

//---------------------------------------------------------
// reverse - полностью переворачивает массив

let numbers = [1, 10, 5, 15]
numbers.reverse();
console.log('technologies', numbers);

