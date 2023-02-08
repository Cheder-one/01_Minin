// Деструктуризация

function calcValues (a, b) {
   return [
      a + b,
      undefined,
      a * b,
      a / b,
   ];
};

//----------------------------
// const result = calcValues(42, 10);

// const sum = result[0];
// const sub = result[1];
// console.log('result:', result);
// console.log('sum, sub:', sum, sub);

// Or деструктуризация

// const [sum, sub] = result;
// console.log('result:', result);
// console.log('sum, sub:', sum, sub);

//----------------------------
// Игнорирование значений

// const [sum, , mult, ...other] = calcValues(42, 10);
// console.log(sum, mult, other);

// Значения по умолчанию

// const [sum, sub = 'Вычитания нет', mult, ...other] = calcValues(42, 10);
// console.log(sum, mult, other, sub);

//----------------------------
// Деструктуризация с Объектами

const person = {
   name: 'Max',
   age: 20,
   address: {
      country: 'Russia',
      city: 'Moscow',
   },
};

// const name = person.name;
// const age = person.age;
// Or
const {
   name: firstName = 'Без имени', 
   age, 
   car = 'Машины нет',
   address: {country, city: homeTown}
} = person;
console.log(firstName, age, car, country, homeTown);
// key: variable - Смена значения переменной (если например занята)
const {name, ...info} = person
console.log(name, info);

//----------------------------
// Применение на практике 

function logPerson0 (per) {
   console.log(per.name, per.age);
}
logPerson0(person)

function logPerson1 ({name: firstName1, age}) {
   console.log(firstName1, age);
}
logPerson1(person)