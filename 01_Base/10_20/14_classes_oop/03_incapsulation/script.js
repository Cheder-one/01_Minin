// Инкапсуляция - скрытие данных от доступа вне класса или при наследовании 

class Developer {
    #salary 
    // Объявляем (в 2х местах) поле salary приватным. (работают только внутри класса в котором были объявлены)
    constructor(name, progLang) {
        this.name = name;
        this.progLang = progLang;
        this.#salary = 3000;
    }

    get devSalary () {
        return this.#salary
    }

    set setSalary (salary) {
        this.#salary = salary
    }

    startCoding () {
        console.log('this.#salary:', this.#salary); // вызываем
        this.#printProgLang(); // вызываем приватный метод 
        console.log(`${this.name} начинает писать код`);
    }
    
    #printProgLang () {
        console.log(`Язык программирования: ${this.progLang}`);
    }
}

class JuniorDeveloper extends Developer {
    constructor(name, progLang) {
        super(name, progLang)
    }
}

const junDevelop = new JuniorDeveloper('Игорь', 'JS');
const developer = new Developer('Maxim', 'JS')

// Публичные Поля и Методы (доступны везде через "." и в дочернем классе):
console.log(developer.name);
junDevelop.startCoding();

// get & set - вызов и изменение приватных элементов

// get
console.log(developer.devSalary) // Пишем без ()!

// set
developer.setSalary = 5000 // Передаем новое значение в приватное поле

//---------------------------------------------------------

