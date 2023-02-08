// Symbol() - Создает уникальные ключи объекта. Позволяет использовать повторяющиеся ключи в объекте.

// Пример ошибки однотипных ключей 

let user = {
   name: 'Maxim',
   name: 'Igor',
   name: 'Michael',
};
console.log('user:', user); // { name: 'Michael' }

// Решение с помощью Symbol()

const id = Symbol('name')

user = { 
   [id]: 'symbol value',
   name: 'Maxim',
   [Symbol('name')]: 'Igor',
   [Symbol('name')]: 'Michael',
};
console.log('user:', user);
console.log('user[id]:', user[id]);

// in - Проверяет существует ли искомый ключ внутри объекта

const searchInObject = 'name' in user
console.log('searchInObject', searchInObject); // true

console.log(id in user); // true

