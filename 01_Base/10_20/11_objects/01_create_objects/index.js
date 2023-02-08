const developer = {
   // key: value,
   'My name': 'Maxim',
   job: 'Front-End Dev',
   experience: 24,
   jobAllInfo: {
      type: 'Front-End',
      framework: 'ReactJS'
   }
}

// 1й способ вывести значение объекта
// console.log('name:', developer.'My name'); // ошибка 
console.log('jobAllInfo:', developer.jobAllInfo);

// 2й способ вывести значение объекта (для некоторых случаев)
console.log('name:', developer['My name']);

// передача переменных с ключом из объекта
const key = 'job'
console.log('job:', developer[key]);

// Цепочки обращения к объектам
console.log('type', developer.jobAllInfo.type);
console.log('type', developer['jobAllInfo']['type']);

//---------------------------------------------------------
// add/delete/edit
const student = {
   id: 1,
   programmingLanguage: 'JavaScript',
   hasExperienceInReact: false,
};

// Добавление 
student.experience = 6;
console.log('student', student);

// Удаление
delete student.hasExperienceInReact;
console.log('student', student);

// Изменение
student.experience = 12;
console.log('student', student);

