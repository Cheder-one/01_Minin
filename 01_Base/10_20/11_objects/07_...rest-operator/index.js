const numbers = [1, 2, 3, 4, 5];

// Rest 
function sum (a, b, ...rest) {
   return a + b + rest.reduce((a, i) => a + i, 0) 
}
console.log('sum:', sum(...numbers));

// const a = numbers[0];
// const b = numbers[1];
// console.log(a, b); // 1 2

const [a, b, ...other] = numbers
console.log(a, b, other); // 1 2 [ 3, 4, 5 ]
