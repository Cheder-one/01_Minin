// Логические конструкции
console.log('//Logic constructions//');

// if (если да, то)
// else (что-то другое)
// if else (если другое "да", то)
// switch case
// ? :

let isFrontendDeveloper = true;

if (isFrontendDeveloper) {
   console.log('isFrontendDeveloper = true','You are a Front-End developer. Welcome to the team!');
} else {
   console.log('isFrontendDeveloper = false', 'You are not a Front-End developer');
}


let closingTime = 8;
let currentTime = 9;

if (currentTime > closingTime) {
   console.log('Время:', currentTime, 'часов.' , 'Магазин закрыт, иди атюсдава!');
} else {
   console.log('Время:', currentTime, 'часов.', 'Магазин открыт, ну давай нападай!');
}

let developerJobType = 'Front-End';

if (developerJobType === 'Front-End') {
   console.log('2000$');
} else if (developerJobType === 'Back-End') {
   console.log('1500$');
} else if (developerJobType === 'Full-Stack') {
   console.log('3500$');
} else {
   console.log('Зарплата не определена');
}

// switch case - замена else if

let developerJobType0 = 'Front-End';

switch (developerJobType0) {
   case 'Front-End':
      console.log('2000$');
      break;
   case 'Back-End':
      console.log('1500$');
      break;
   case 'Full-Stack':
      console.log('3500$');
      break;
   default:
      console.log('Зарплата не определена');
}  

// ? : - замена else if

/*let favoriteDrink = 'Coffee';
let message = '';

if (favoriteDrink === 'Coffee') {
   message = 'Your favorite drink is coffee'
} else {
   message = 'You most likely have a healthy CNS'
}

console.log('message:', message);*/

let favoriteDrink = 'Coffe'

let message = favoriteDrink === 'Coffe' 
   ? 'Your favorite drink is coffe'
   : 'You most likely have a healthy CNS';

// ? :
// ? if
// : else

console.log('message:', message);

