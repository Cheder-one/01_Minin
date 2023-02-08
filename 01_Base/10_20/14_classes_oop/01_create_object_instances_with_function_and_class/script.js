// ООП - объектно-ориентированное программирование 

// function и class

// Создаем объект с помощью function
function Animal (name) {
    this.name = name;

    this.getName = function() {
        return this.name;
    }
}

console.log('result', Animal('кот')); // Пытаемся вызвать функцию для создания объекта: result undefined
const cat = new Animal('кот');
console.log('cat', cat);

//----------------------------
// Создаем объект с помощью class

// constructor() - это спец-я функция которая вызывается в первый же момент. Который инициализирует начальные значения.
// Поля - это каждая сущность внутри constructor() (this.name = name, name - поле)
// Методы - Функции в class (getName() - метод)

class Animal {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

const dog = new Animal('@');
console.log('dog', dog);
console.log('dog.name', dog.name);
console.log('dog.getName', dog.getName());