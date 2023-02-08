let student = {
    stack: [
        'HTML',
    ],
    level: 1,
    improveLevel() {
        if (this.level === 1) {
            this.level++
        } else if (this.level === 2) {
            this.stack.push('CSS')
            this.level++
        } else if (this.level === 3) {
            this.stack.push('JavaScript')
            this.level++
        } else if (this.level === 4) {
            this.stack.push('React')
            this.level++
        } else if (this.level === 5) {
            this.stack.push('NodeJS')
            console.log('Студент выучил все технологии!');
        };
        return this
    },
};

let stud = student
  .improveLevel()
  .improveLevel()
  .improveLevel()
  .improveLevel()
  .improveLevel();
console.log('stud', stud);

//-------------Ситуация с несколькими студентами-------------

let studentsArr = [];
let student0 = {
    name: 'Verne',
    stack: [
        'HTML',
    ],
    level: 1,
    improveLevel() {
        if (this.level === 2) {
            this.stack.push('CSS')
        } else if (this.level === 3) {
            this.stack.push('JavaScript')
        } else if (this.level === 4) {
            this.stack.push('React')
        } else if (this.level === 5) {
            this.stack.push('NodeJS')
            console.log('Студент', this.name, 'выучил все технологии!');
        };
        this.level += 1;
        return this;
    },
};

let student1 = {
    name: 'Lamar',
    stack: [
        'HTML',
    ],
    level: 1,
};
let student2 = {
    name: 'Weston',
    stack: [
        'HTML',
    ],
    level: 1,
};

studentsArr.push(student0, student1, student2);

studentsArr.forEach(el => {
    for (let i = 0; i < 5; i++) {
        console.log('studentsArr', studentsArr); // логируем первым
        student0.improveLevel.call(el);
        
    }     
});

// Единственное пока не понял, почему при первой итерации у носителя оригинала функции - студента "name: 'Verne'", level сразу = 2
// console.log:
    // studentsArr [
    //     {
    //       name: 'Verne',
    //       stack: [ 'HTML' ],
    //       level: 2,
    //       improveLevel: [Function: improveLevel]
    //     },
    //     { name: 'Lamar', stack: [ 'HTML' ], level: 1 },
    //     { name: 'Weston', stack: [ 'HTML' ], level: 1 }
    //   ]

    // Надо логировать до повышения лвл