for (let i = 0; i < 3; i += 1) {
   let newStudent = prompt("Введите имя нового студента!", '1');
   if (newStudent) {
     newStudent = newStudent.trim();
     alert(`Добро пожаловать, ${newStudent}!`);
   }
 }

let i2 = 0
   while ( i2 < 3) {
      i2 += 1;
      let newStudent2 = prompt("Введите имя нового студента!", '2');
      if (newStudent2) {
         newStudent2 = newStudent2.trim();
         alert(`Добро пожаловать, ${newStudent2}!`);
      }
   }

let i3 = 0
   do {
      i3 += 1;
      let newStudent3 = prompt("Введите имя нового студента!", '3');
      if (newStudent3) {
         newStudent3 = newStudent3.trim();
         alert(`Добро пожаловать, ${newStudent3}!`);
      }
   } while (i3 < 3);
