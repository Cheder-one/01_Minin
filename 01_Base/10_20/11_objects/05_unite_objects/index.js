// Объединение нескольких объектов в один

const developerInfo = {
   age: 25,
   experience: 3,
   name: 'Maxim'
};

const developerExtraInfo = {
   name: 'Igor',
   height: 180,
   isJunior: false,
};

// С помощью спред оператора "..." 
// (более новый, рекомендуется)

const developer = {
   ...developerInfo,
   ...developerExtraInfo,
   name: 'Nastya',
};

console.log('developer', developer); 
// При слиянии пропустит совпадающие ключи name и выведет только последний.

// Object.assign (Объект-хранилище, перемещаемый объект)

const developer2 = Object.assign(developerInfo, developerExtraInfo);

console.log('developer2', developer2);

