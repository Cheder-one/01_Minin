// Статические поля и методы
// static применяется когда наше Поле или Метод не принадлежит конкретному объекту, либо когда внутри Метода не используется this
// Так же static можно использовать как приватный.

class Car {
    static isCar(car) {
        return car instanceof Car
    } // проверяем соответствует ли переменная car классу Car
    
    static #initialParams = {
        name: 'Audi',
        maxSpeed: 150,
    } // Будет использовано если параметры не переданы

    constructor(name, maxSpeed) {
        this.name = name || Car.#initialParams.name;
        this.maxSpeed = maxSpeed || Car.#initialParams.maxSpeed;
    }

    drive () {
        console.log(`Машина ${this.name} сейчас в пути`);
    }
}

const car = new Car('BMW', 200);
console.log('car:', car);

const checkIsCar = Car.isCar(car) // Обращаемся к статическому полю через название класса без new!
console.log('checkIsCar:', checkIsCar);

// Car.#initialParams // Private field '#initialParams' must be declared in an enclosing class