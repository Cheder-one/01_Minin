// Абстракция - использование только тех характеристик объекта которые с наибольшей точностью представляют его в определенной системе
// Говоря на примере, Абстракция это создание главного объекта с каркасом из обобщенных параметров, с целью его дальнейшего использования для уточнения в дочерних классах с помощью переопределения.

class Footballer {
    constructor(name, club) {
        this.name = name;
        this.club = club;
    }

    shoot() {}
    celebrateGoal() {}
    pass() {}
}

class Forward extends Footballer {
    constructor(name, club) {
        super(name, club)
    }

    shoot() {
        console.log('Очень сильный удар');
    }

    celebrateGoal() {
        console.log(this.name + ':', 'Даа! Я забила гол!');
    }

    pass() {
        console.log('Средненький пас');
    }
}

const forwardClass = new Forward('Черепанова', 'Шаааар!')

forwardClass.shoot();
forwardClass.celebrateGoal();
forwardClass.pass();