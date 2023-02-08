// Объединение массивов 

let currentDevelopers = ['Maxim', 'Oleg'];
let newDevelopers = ['Anton', 'Gleb']

// 1) concat() способ

[1, 2, 3].concat([4, 5, 6]) // [1, 2, 3, 4, 5, 6]

let allDevelopers = currentDevelopers.concat(newDevelopers);
console.log('allDevelopers', allDevelopers);

// 2) "..." способ
allDevelopers = [
   ...newDevelopers,
   ...currentDevelopers
];
console.log('allDevelopers', allDevelopers);
