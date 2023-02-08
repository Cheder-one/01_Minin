// Потеря контекста "this"

const user = {
    name: 'Maxim',
    programmingLang: 'JavaScript',
    getName() {
        return this.name;
    },
    getProgrammingLang() {
        return this.programmingLang;
    },
}

// Потеря контекста при сохранении метода объекта в переменную

console.log('getName:', user.getName()); // getName: Maxim

const newGetName = user.getName
console.log('newGetName:', newGetName()); // newGetName: undefined. 
// Тк мы вызываем функцию newGetName() без контекста(без элемента перед точкой). Поэтому контекст ссылается не на user, а на глобальный объект windows.
const newGetName2 = user.getName
console.log('newGetName2:', newGetName.call(user)); // Через call указали контекст - объект user

// Потеря контекста при стрелочных функциях 

// У стрелочной функции нет this
getProgrammingLang: () => {
    return this.programmingLang;
}

// Возможно только через "variable: function() {}" или "variable() {}"

const user1 = {
    name: 'Maxim',
    programmingLang: 'JavaScript',
    getName() {
        return this.name;
    },
    getProgrammingLang: function () {
        return this.programmingLang;
    },
}

console.log('user.getProgrammingLang:', user.getProgrammingLang());