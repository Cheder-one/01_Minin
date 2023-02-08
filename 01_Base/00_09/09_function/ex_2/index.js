function getSumOfNumbers (number, type = "odd") {

   if (typeof number !== 'number') {
      return NaN
   }
      
   let sumOfNumber = 0;

   function getTypeOfNumber() {
      if (type === 'odd') {
         for (let i = 0; i <= number; i++) {
            if (i % 2 !== 0) {
               sumOfNumber += i;
               console.log('Odd number', i);
            }
         }
      } else if (type === 'even') {
         for (let i = 0; i <= number; i++) {
            if (i % 2 == 0) {
               sumOfNumber += i;
               console.log('Even number', i);
            }
         }
      } else {
         for (let i = 0; i <= number; i++) {
            sumOfNumber += i;
            console.log('All numbers', i);
         }
      }
   }
   getTypeOfNumber()

   return sumOfNumber 
}

console.log(getSumOfNumbers('11', "")); 
console.log(getSumOfNumbers(10, "odd")); 
console.log(getSumOfNumbers(10, "even")); 

