let myName = 'Denis';
let progLang = 'JS';
let programmingLanguage = 'JavaScript';
let courseCreatorName = 'Albert Einstein';
let reasonText = 'because it trains the brain, makes it possible to be among developing personalities, high earnings. With this I can change my life'
let numberOfMonth = '0 month. I was not familiar with JS before starting the course'

let myInfoText = `Hi all! My name is ${myName}. I am currently learning a programming language ${progLang} on a curse on ${programmingLanguage} on ${courseCreatorName}. I want to become a web developer, ${reasonText}. Before that, I studied ${programmingLanguage} ${numberOfMonth} months. I am sure that I will pass this course to the end!`

console.log('Source text:');
console.log(myInfoText);

console.log('Changed text:');
console.log(
   myInfoText.replaceAll(
      programmingLanguage, 
      programmingLanguage.toLowerCase()
      )
      .replaceAll(
      progLang, 
      progLang.toLowerCase()
      )
);

console.log('String length:', myInfoText.length);
console.log(`${myInfoText[0]} ${myInfoText[myInfoText.length -1]}`);
