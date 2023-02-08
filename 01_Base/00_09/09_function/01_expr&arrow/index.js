let sum = function (a, b) {
   return a + b
} 

let result = sum(3.14, 3.14);
console.log('Result:', result);

//Or
 
sum = (a, b) => {
   return a + b
}

result = sum(3.14, 3.14);
console.log('Result:', result);

//Or

sum = (a, b) => a + b; 

result = sum(3.14, 3.14);
console.log('Result:', result);
// Только если функция состоит из 1 строчки

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
//// Использование Arrow Function как callback

function multiply (a, b, callback) {
   const result = a * b;
   callback(result);
}

multiply(5, 2, (multiplyResult) => {
   console.log('multiplyResult:', multiplyResult);
});