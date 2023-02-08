// Замыкания - функция внутри функции

const createMultiplayer = function(n) {
   return function() {
      return n * 10;
   }
}

const multiplay = createMultiplayer(5);
const result = multiplay();
console.log(result);

//---------------------------------------------------------
const createCounter = (initialValue = 0) => {
   return (valueToAdd) => {
      return initialValue + valueToAdd
   };
};

const addFive = createCounter(5);
const result_1 = addFive(7);
const addTen = createCounter(10);
console.log(result_1);
console.log(addTen(10));

//---------------------------------------------------------
createCounter = (initialValue = 0) => {
   let counter = initialValue;

   return (valueToAdd) => {
      counter += valueToAdd;
      return counter;
   };
};

const addTwo = createCounter(2);
result = addTwo(10); // 12
result = addTwo(5); // 17
result = addTwo(3); // 20
console.log(result);

//---------------------------------------------------------
let numberGenerator = function() {
   let num = 1;
   function checkNumber() {
     console.log('num:', num);
   };

   num++;
   return checkNumber;
};
 
let number = numberGenerator();
number(); // 2

//-------------Идентичный пример-------------
function sayHello() {
   var say = function() { console.log(hello); }
   // Локальная переменная, которая доступна только в замыкании
   var hello = 'Hello, world!';
   return say;
 }
 var sayHelloClosure = sayHello();
 sayHelloClosure(); // ‘Hello, world!’

//---------------------------------------------------------
let outer = function () {
   let x = 1;

   let inner = function () {
      console.log(x);
      x++;
   }

   return inner;
}
const func = outer();
func(); // Выведет в консоль: 1
func(); // Выведет в консоль: 2
