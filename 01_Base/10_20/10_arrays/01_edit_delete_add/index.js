// Массивы (edit/delete/add)
const salariesOfDev = [400, 500, 600, 2000, 3500];
const newSeniorDevSalary = 5000;

// Добавление элементов
// .push() - добавляет в конец 
salariesOfDev.push(newSeniorDevSalary); 
console.log('salariesOfDev', salariesOfDev);

// .unshift() - добавляет в начало 
salariesOfDev.unshift(101, 202, 303) 
console.log('salariesOfDev', salariesOfDev);

//---------------------------------------------------------
// Удаление элементов

// Удаляет первый элемент массива и возвращает его значение в переменную (если имеется)
const firstRemovedElement = salariesOfDev.shift(); 
console.log('firstRemovedElement', firstRemovedElement);

// Удаляет последний элемент массива и возвращает его значение в переменную (если имеется)
const lastRemovedElement = salariesOfDev.pop(); 
console.log('lastRemovedElement', lastRemovedElement);

//---------------------------------------------------------
// Изменение элементов

salariesOfDev[4] = 6000;
salariesOfDev[6] = 'none'
console.log('salariesOfDev', salariesOfDev);
