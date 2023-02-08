const student = {
   fullName: "Максим",
   experienceInMonths: 12,
   stack: ["HTML", "CSS", "JavaScript", "React"]
};

function giveJobToStudent (student, jobName) {
   let updateStudent = {
      ...student,
      job: jobName
   };

   let studName = updateStudent.fullName;
   alert(`Поздравляем! У студента ${studName} появилась новая работа! Теперь он ${jobName}`);

   return updateStudent;
};

let studentResult = giveJobToStudent(student, "веб-разработчик");
console.log('studentResult', studentResult);
//---------------------------------------------------------
// Решил немного масштабировать задание

const students = [
   {
      fullName: "Максим",
      experienceInMonths: 25,
      stack: ["HTML", "CSS", "JavaScript", "React"]
   },  
   {
      fullName: "Арсений",
      experienceInMonths: 10,
      stack: ["HTML", "CSS", "JavaScript"]
   },
   {
      fullName: "Антон",
      experienceInMonths: 15,
      stack: ["HTML", "CSS", "JavaScript", "React"]
   },
];

function giveJobToStudent1 (students, jobName) {
   let updatedStudent = [
      ...students,
   ];

   updatedStudent.forEach(el=> {
      let experience = el.experienceInMonths;

      let webDev = experience <= 10;
      let junWebDev = experience > 10 && experience < 20
      let midWebDev = experience >= 20 && experience < 30
   
      if (webDev && jobName === "веб-разработчик") {
         el.job = jobName;
         getCongrats();
      } else if (junWebDev && jobName === "junior веб-разработчик") {
         el.job = jobName;
         getCongrats();
      } else if (midWebDev && jobName === "middle веб-разработчик") {
         el.job = jobName;
         getCongrats();
      }

      function getCongrats() {
         return alert(`Поздравляем! У студента ${el.fullName} появилась новая работа! Теперь он ${jobName}.`);
      };   
   });
   return updatedStudent;
};

let studentResult0 = 
giveJobToStudent1(students, "junior веб-разработчик");
console.log('Student № 1:', studentResult0);

let studentResult1 = 
giveJobToStudent1(students, "middle веб-разработчик");
console.log('Student № 2:', studentResult1);

let studentResult2 = 
giveJobToStudent1(students, "веб-разработчик");
console.log('Student № 3:', studentResult2);