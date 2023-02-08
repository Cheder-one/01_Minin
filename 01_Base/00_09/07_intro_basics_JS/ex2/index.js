let correctAnswers = 0
let incorrectAnswers = 0

let question1 = Number(prompt ('Сколько будет 2 + 2?'));

   if (question1 === 2 + 2) {
      alert('Ответ Верный');
      correctAnswers++;
   } else {
      alert('Ответ Неверный');
      incorrectAnswers++;
   };


let question2 = Number(prompt ('Сколько будет 2 * 2?'))
    
   question2 === 2 * 2
   ? alert('Ответ Верный') + correctAnswers++
   : alert('Ответ Неверный') + incorrectAnswers++;


let question3 = Number(prompt ('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?'));
    
   switch (question3) {
      case 1 :
         alert('Ответ Верный');
         correctAnswers++
         break;

      default:
         alert('Ответ Неверный');
         incorrectAnswers++
   };


let question4 = Number(prompt ('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После, мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?'));

   if (question4 === 12) {
      alert('Ответ Верный')
      correctAnswers++;
   } else if (question4 === 'двенадцать') {
      alert('Ответ Верный')
      correctAnswers++;
   } else {
      alert('Ответ Неверный')
      incorrectAnswers++;
   };


let question5 = Number(prompt ('Сколько будет 2 + 2 * 2?'))
   
   question5 === 2 + 2 * 2
   ? alert('Ответ Верный') + correctAnswers++
   : alert('Ответ Неверный') + incorrectAnswers++;

alert (`Конец теста! 
Правильные ответы - ${correctAnswers} 
Неправильные ответы - ${incorrectAnswers}`)

