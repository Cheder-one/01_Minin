// 7 -примитивные типы данных (не ссылочный тип)
// 1 не примитив - объект (ссылочный тип)

const setName = (entity, value) => {
   if (typeof entity === 'object') {
      entity.name = value;
   } else {
      entity = value;
   }
}  // entity - сущность
   // value - значение
   
const developer = {
   name: 'Maxim',
};
let developerName = 'Maxim';

setName(developer, 'Max');
setName(developerName, 'Max')

console.log('developer', developer); // { name: 'Max' }
console.log('developerName', developerName); // Maxim
//----------------------------
const entity = {};
const entityCopy = entity;

console.log(entity === entityCopy); // true (Тк entityCopy хранит ссылку на объект entity. А их ссылки будут равны)

console.log({} === {}); // false (здесь разные ссылки)
console.log([] === []); // false (здесь разные ссылки)

console.log('hello' === 'hello'); // true (тк у примитивов нет ссылок)