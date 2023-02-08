let question1 = confirm('1. JavaScript appeared in 1995?');

   if (question1 === true) {
      alert('You are right!')
   } else {
      alert('Wrong answer. JavaScript appeared in 1995')
   }

let question2 = confirm('2. The JavaScript specification is called ECMAScript? ');

   question2 === true 
   ? alert('You are right!')
   : alert ('Wrong answer. ECMAScript is a JS specification')

let question3 = confirm('3. JavaScript was created in 1 month?');

   switch (question3) {
      case true:
         alert ('Wrong answer. JS was created in 10 days');
         break;
      default:
         alert ('You are right!')
   }

