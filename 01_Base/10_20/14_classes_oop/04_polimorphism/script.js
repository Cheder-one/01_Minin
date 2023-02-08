// Полиморфизм - одно действие, несколько реализаций 

class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound () {}
}

class Dog extends Animal {
    constructor(name) {
        super(name)
    }

    makeSound () {
        console.log('@@@@@@@');
    }
}

class Horse extends Animal {
    constructor(name) {
        super(name)
    }

    makeSound () {
        console.log('ыааыааыыы');
    }
}