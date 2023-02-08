function getName1 (name) {
   return `Имя равно ${name}`;
};

console.log(getName1('Zeleboba'));

let getName2 = function (name) {
   return `Имя равно ${name}`
};

console.log(getName2('Zeleboba'));

let getName3 = (name) => `Имя равно ${name}`

console.log(getName3('Zeleboba'));