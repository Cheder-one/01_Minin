class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };
    compareAge(person) {
        if (this.age < person.age) {
            console.log(`${this.name} младше, чем ${person.name}`);
        } else if (this.age > person.age) {
            console.log(`${this.name} старше, чем ${person.name}`);
        } else {
            console.log(`${this.name} и ${person.name} одногодки`);
        }
    }
}

const person1 = new Person("Максим", 24);
const person2 = new Person("Светлана", 36);
const person3 = new Person("Ирина", 24);

person1.compareAge(person2); // Максим младше, чем Светлана
person2.compareAge(person3); // Светлана старше, чем Ирина
person3.compareAge(person1); 