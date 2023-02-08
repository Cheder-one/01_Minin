// Наследование - создание дочерних классов на основе базовых

class Plane {
    constructor(type, numOfPassengers) {
        this.type = type;
        this.numOfPassengers = numOfPassengers;
    }

    startFlight() {
        console.log('Полетели!');
    }
}

// extends
// Делаем MilitaryPlane дочерним к обычному Plane(чтобы например пассажирский самолет не имел в себе доступных параметров которы доступны военному)
class MilitaryPlane extends Plane {
    constructor(type) {
        super(type, 0); 
        // Вызов род-го конструктора и его параметров
    }

    setNumberOfGuns(NumberOfGuns) {
        this.NumberOfGuns = NumberOfGuns;
    }

    shoot() {
        console.log('Стреляем');
    }
}
// У дочерних есть доступ к родительским Методам и Полям. А у род-х к доч-м - нет.

const plane = new Plane('Пассажирский', 100);
console.log('plane', plane);
plane.startFlight();

const militaryPlane = new MilitaryPlane('Военный')
militaryPlane.startFlight() // Вызывает первый найденный Метод. Если нет у себя (у дочернего), то вызывает у род-го
militaryPlane.setNumberOfGuns('4');
militaryPlane.shoot();
console.log('militaryPlane', militaryPlane);

// instanceof - проверяет принадлежит ли объект определенному классу 
console.log(militaryPlane instanceof Plane); // true

