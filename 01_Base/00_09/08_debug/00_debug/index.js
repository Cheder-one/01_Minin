// Debug с помощью console.log 
// (Вставлять в ключевые точки кода и проверять)

let sum = 0;
console.log('initial sum', sum);
const numberOfElements = 10;
for (let i = 1; i < numberOfElements; i++) {
   console.log('i / sum', i, sum);
   sum += i;
}
const theHalfOfSum = sum / 2;
console.log('theHalfOfSum', theHalfOfSum);

// breakpoints 

