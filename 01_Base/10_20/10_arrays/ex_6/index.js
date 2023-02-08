let numbers = [10, 4, 100, -5, 54, 2]; // 1158411

function calculateSumNumbersInCube() {
   let numbersInCube = [];
   let sum = 0;
   
   for (let i = 0; i < numbers.length; i++) {
      numbersInCube.push(numbers[i] ** 3)
      sum += numbersInCube[i];
   };

   console.log('Numbers In Cube:', numbersInCube);
   return sum
};
let resultFor = calculateSumNumbersInCube();
console.log('result "for":', resultFor);

//---------------------------------------------------------
numbers = [10, 4, 100, -5, 54, 2];

function calculateSumNumbersInCube(sum = 0) {
   for (const number of numbers) {
      sum += number ** 3
   }   
   return sum
};
let resultForOf = calculateSumNumbersInCube();
console.log('result "for..of":', resultForOf);

//---------------------------------------------------------
numbers = [10, 4, 100, -5, 54, 2];

let sum = 0;
numbers.forEach(number => {
   sum += number ** 3
});
console.log('result "forEach()":', sum);

//---------------------------------------------------------
numbers = [10, 4, 100, -5, 54, 2],  

numbersInCube = numbers.map(value => {
   return value ** 3
});

sum = numbersInCube.reduce((total, element) => total + element);

console.log('result "reduce()":', sum);
