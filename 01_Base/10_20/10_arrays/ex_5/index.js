// Решил немного модифицировать процесс получения оценки в рамках задания, тк просто использовать prompt() неинтересно.

let clientsEstimations = [];

function askClientToGiveEstimation(answerClient) {
   // let answerClient = Number(prompt('Как вы оцениваете нашу кофейню от 1 до 10?', '10'));

   if (answerClient <= 10 && answerClient >= 1 && clientsEstimations.length < 5) {
      clientsEstimations.push(answerClient)
   }
};

function getRandomEstimation() {
   for (let i = 0; i <= 50; i++) {
      j = getRandomInt(-10, 10)
      askClientToGiveEstimation(j)
   };
   
   function getRandomInt (min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
   };

   console.log('Clients estimations:', clientsEstimations);
};
getRandomEstimation();

function calculatePositiveNegativeEstiminations() {
   let positiveEstimations = clientsEstimations.filter(estimations => estimations > 5);
   let negativeEstimations = clientsEstimations.filter(estimations => estimations <= 5);
   
   let sumRatingCafe = clientsEstimations.reduce((total, amount) =>  total + amount); 
   
   function averageRatingCafe() {
      return sumRatingCafe / clientsEstimations.length;
   }

   alert(`Всего положительных оценок: ${positiveEstimations.length}; Всего отрицательных оценок: ${negativeEstimations.length}. Средняя оценка заведения: ${averageRatingCafe()} баллов`);
};
calculatePositiveNegativeEstiminations();


