function getSumOfSequence (number) {
   let arraySequence = [];
   for (let i = 1; i <= number; i++) {
      arraySequence.push(i)
   }
   console.log('Sequence of number:', arraySequence);
   return arraySequence[0] + Number(arraySequence.slice(-1))
};

let SumOfSequence = getSumOfSequence(5);
console.log('Result:', SumOfSequence);
