function getDivisorsCount (number) {
   if (typeof number !== 'number') {
      return NaN
   };
      
   function getNumberIsInteger() {
      if (number < 0 || Number.isInteger(number) === false) {
         alert('number должен быть целым числом и больше нуля!') 
      } else {
         calculateDivisors()
      }
    };

    function name () {
        array.forEach(element => {
	// body
});
    }

   function calculateDivisors() {
      let n = number, divisors = [];
      for (let i = 1; i <= number; i++) {
         if (n % i == 0) {
            divisors.push(i);
         }
      }
      console.log(`Делители числа ${n}: ${divisors}`);
      console.log(`Кол-во делителей числа: ${divisors.length}`);         
    };
    getNumberIsInteger();
}

console.log(getDivisorsCount());
console.log(getDivisorsCount(''));
console.log(getDivisorsCount(-1)); 
console.log(getDivisorsCount(1.34)); 
console.log(getDivisorsCount(4)); 
console.log(getDivisorsCount(5)); 
console.log(getDivisorsCount(12));
console.log(getDivisorsCount(30));

//-------------Решение нормального человека-------------
function getDivisors(number) {
   if (typeof number !== "number") {
     return NaN;
   }
 
   if (!Number.isInteger(number) || number < 0) {
     console.log("number должен быть целым числом и больше нуля!");
     return;
   }
 
   let counter = 0;
   for (let i = number; i > 0; i--) {
     if (number % i === 0) {
       counter++;
     }
   }
 
   return counter;
 }
 
 const result = getDivisors(10);
 console.log("result", result);
 
console.log(getDivisors());
console.log(getDivisors(''));
console.log(getDivisors(-1));
console.log(getDivisors(1.34));
console.log(getDivisors(4));
console.log(getDivisors(5));
console.log(getDivisors(12));
console.log(getDivisors(30)); 

