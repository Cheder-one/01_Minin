const goodInfo = {
   id: 1,
   price: 80,
   currency: '$',
   name: 'shoes',
}

console.log('goodInfo', goodInfo);


// for in - проходится по ключам и значениям ключей объекта (устарел)

for (const key in goodInfo) {
   console.log('key:', key);
   const value = goodInfo[key]
   console.log('value:', value);
}

// Object.keys - Создает массив из ключей. Выводит значения в отдельный массив

const keys = Object.keys(goodInfo);
console.log('keys', keys);

// Object.values - Создает массив из значений. Выводит значения в отдельный массив

const values = Object.values(goodInfo);
console.log('values', values);

// Object.entries - Создает массив из ключей и значений. Выводит все в отдельный массив

const entries = Object.entries(goodInfo);
console.log('entries', entries); 
/* entries [
   [ 'id', 1 ],
   [ 'price', 80 ],
   [ 'currency', '$' ],
   [ 'name', 'shoes' ]
]*/

//---------------------------------------------------------
const car = {
   name: "Toyota Corolla",
   year: 2017,
   isNew: false
 };

 Object
 .entries(car) // Вернет массив [ ["name", "Toyota Corolla"], ... ]
 .forEach(arr => console.log(`${arr[0]}: ${arr[1]}`));

Object
  .entries(car)
  .forEach(([key, value]) => console.log(`${key}: ${value}`));

