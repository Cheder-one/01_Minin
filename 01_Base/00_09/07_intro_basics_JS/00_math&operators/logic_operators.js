console.log('//Logic Operators//');

// && (И) - Ищет и выводит значение с "false". Значения  "true" пропускаются.
// || (ИЛИ) - Ищет и выводит значение с "true". Значения  "false" пропускаются.
// ! (НЕ)
// ?? (Оператор обьединения с null) - Пропускает только значения "null" и "undefined" 

// && (И)
console.log('//&& (И)//');

let userAge = 20;

if (userAge > 6 && userAge <= 18) {
   console.log('Пользователь ходит в школу');
} else {
   console.log('Пользователь НЕ ходит в школу');
}


let programingLanguage = 'JavaScript'
let experienceInYear = 1;

if (programingLanguage === 'JavaScript' && experienceInYear >= 1) {
   console.log('Добро пожаловать в нашу команду');
} else {
   console.log('Нужно бооольше опыта');
}

// || (ИЛИ)
console.log('//|| (ИЛИ)//');

let currentHour = 10;

if (currentHour < 8 || currentHour > 20) {
   console.log('Наш офис Закрыт');
} else {
   console.log('Наш офис Открыт');
}


let userNickname = null;
let defaultNicname = 'User';

let nickname = userNickname || defaultNicname || 'noname';
console.log('nickname', nickname);
// or
let finalNickname = userNickname && 'User already exists';
console.log('finalNickname', finalNickname);

// ! (НЕ)
console.log('//! (НЕ)//');

let hasAccess = true;

if (!hasAccess) {
   console.log('Accsess closed');
} else {
   console.log('Access opened');
}


let = answer = prompt ('How old are you?')
answer = Number(answer);

if (!answer) {
   alert('Enter your total number of years')
} else {
   alert(`You are ${answer} years old`)
}

// ?? (Оператор обьединения с null) 
console.log('//?? (Оператор обьединения с null)//');

// || - false, 0, "", NaN, indefined, null
console.log(false || 'Hello worldblat!');

// ?? - undefined, null 
console.log(false ?? 'Hello worldblat!');