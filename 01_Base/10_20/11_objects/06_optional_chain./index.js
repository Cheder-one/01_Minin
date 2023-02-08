// ?. Оператор опциональной последовательности  
//(замена && в if)

const developer = {
   name: 'Maxim',
   job: 'Front-End Dev',
   experience: 24,
   jobAllInfo: {
      type: 'Front-End',
      framework: {
         nameFw: 'ReactJS'
      },
   }
}

if (developer.jobAllInfo.framework.nameFw)

if (developer && developer.jobAllInfo && developer.jobAllInfo.framework && developer.jobAllInfo.framework.nameFw) {
   console.log('The developer already knows the framework');
} else {
   console.log("The developer doesn't knows the framework");
}

// ?. (если выдает ошибку попробуй '.' без '?')

if (developer.jobAllInfo.framework.nameFw) {
   console.log('The developer already knows the framework');
} else {
   console.log("The developer doesn't knows the framework");
}


