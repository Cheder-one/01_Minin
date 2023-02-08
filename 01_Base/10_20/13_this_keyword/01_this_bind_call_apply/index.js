// this - ключевое слово указывающее на текущий контекст выполнения кода (чаще всего this - Объект)

// Для всех браузеров - window. Для NodeJS - global
console.log('this', this);

// Способы создания функций внутри объекта и обращение к ним
// В функциях внутри объектов НЕ стоит ссылаться напрямую к имени объекта, это делает код не универсальным.
// Нужно использовать this.key, вместо user.key 
const user = {
    name: 'Maxim',
    dateOfBirth: 2001,
    getName() {
    //  return user.name // (дубово, тк привязано к объекту user)
        return this.name // (можно исп. для других пользователей)
    },
    calculateAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.dateOfBirth;
    },
    getAllInfo: function() {
        const age = this.calculateAge();
        console.log(`Имя: ${this.name}, Возраст: ${age}`);
    }
}

console.log('user.getName:', user.getName());
console.log('calculateAge:',  user.calculateAge());
user.getAllInfo();

// bind, call, apply - Методы для привязки к функции какого-то контекста 

const user2 = {
    name: 'Igor'
}
const newValueForThis = user.getName.call(user2) // this из объекта user, будет заменен на user2, следовательно и name будет использовано из объекта user2
console.log('newValueForThis', newValueForThis);

// Различия bind, call, apply

const mainHero = {
    fullName: 'SpiderMan',
    health: 65,
    strength: 5,
};
const badHero = {
    fullName: 'SpiderMan',
    health: 55,
    strength: 10,
}

function printHeroInfo(extraInfo = '') {
    console.log(`Имя: ${this.fullName}, Здоровье: ${this.health}, Сила: ${this.strength}, ${extraInfo}`);
}
printHeroInfo.call(badHero, 'Роль: Злодей'); // С помощью call(variable) указываем this какой объект нас интересует
printHeroInfo.apply(badHero, ['Роль: Злодей']); // Отличие в передаче параметров, apply передается в массиве 

const bindedPrintHeroInfo = printHeroInfo.bind(mainHero, 'Роль: Главный Герой') 
bindedPrintHeroInfo(); // bind не вызывает функцию, а создает новую