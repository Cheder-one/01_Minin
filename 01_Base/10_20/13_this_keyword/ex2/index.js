const dog = {
    name: "Чарли",
    type: "Собака",
    makeSound() {
      return "Гав-Гав";
    }
};
const bird = {
    name: "Петя",
    type: "Воробей",
    makeSound() {
      return "Чик-чирик";
    }
};

function makeDomestic (isDomestic) {
    console.log(`Информация о животном: ${this.type} по имени ${this.name} говорит ${this.makeSound()}`);

    return {
        ...this,
        isDomestic,
    }
}

const dogBind = makeDomestic.bind(dog, true)();
console.log('dogBind', dogBind);

const birdCall = makeDomestic.call(bird, false);
console.log('birdCall', birdCall);

const birdApply = makeDomestic.apply(bird, [false]);
console.log('birdApply', birdApply);