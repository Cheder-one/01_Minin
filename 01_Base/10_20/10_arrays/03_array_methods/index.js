// Работа с методами массивов: map(), filter(), find(), findIndex(), some(), every()

//---------------------------------------------------------
// map - модифицирует каждый элемент массива и возвращает данные в новый массив

const  salariesOfDevelopers = [ 400, 500, 600, 2000, 350];

const updatedSalaries = salariesOfDevelopers.map((salary,index, array) => {
   return salary ** 2
});
console.log('updatedSalaries', updatedSalaries);

//---------------------------------------------------------
// filter - фильтрует каждый элемент массива и возвращает данные в новый массив. (добавляет в массив если условия == true)

const filtredSalaries = salariesOfDevelopers.filter((salary,index, array) => {
   return salary > 600 // [ 2000 ]
   return index % 2 == 0 // [ 400, 600, 350 ]
});
console.log('filtredSalaries', filtredSalaries);

//---------------------------------------------------------
// find - находит и выводит первый найденный элемент в новый массив

const searchedSalary = salariesOfDevelopers.find(salary => {
   return salary > 500
});
console.log('searchedSalary', searchedSalary);

//---------------------------------------------------------
// findIndex - находит и выводит первый найденный индекс в новый массив

const searchedIndex = salariesOfDevelopers.findIndex(salary => {
   return salary > 500
});
console.log('searchedIndex', searchedIndex);

//---------------------------------------------------------
// some, every - 
// some == true если хотя бы 1 элемент массива удовляетворяет условияю
// every == true если все элементы массива удовляетворяют условияю

const elementExists = salariesOfDevelopers.some(salary => {
   return salary > 1000
});
console.log('elementExists', elementExists);

const allElementExists = salariesOfDevelopers.every(salary => {
   return salary > 1000
});
console.log('allElementExists', allElementExists);

//---------------------------------------------------------
// reduce 

salariesOfDevelopers = [ 400, 500, 600, 2000, 350];

let sum = salariesOfDevelopers.reduce((acc, salary, index, array) => {
   return acc + salary
})
console.log('sum', sum);

salariesOfDevelopers.reduce((acc, salary, index, array) => {  
}, 0)
// 0 - начальный параметр (первый элемент массива)
// acc - accumor, аккумулятор 

//---------------------------------------------------------
// sort 

salariesOfDevelopers = [ 400, 500, 600, 2000, 350];

salariesOfDevelopers.sort((a, b) => {
   return a - b // Сортировка по возрастанию
   return b - a // Сортировка по убыванию
});
console.log('salariesOfDevelopers', salariesOfDevelopers);

//----------------------------
const array = ['b', 'd', 'c', 'a', 'e', 'f', 'g'];
array.sort((a, b) => {
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }
  return 0;
});
console.log(array); // ['g', 'f', 'e', 'd', 'c', 'b', 'a']

