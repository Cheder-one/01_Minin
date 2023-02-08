const name1 = 'Denis';
const name2 = "Igor";
const name3 = `Mike`;

console.log(name1, name2, name3);

// Конкатенация

const name = 'Denis';
const specialization = 'Novice-developer';

const allInfo1 = name + ' ' + specialization;
console.log(allInfo1);

const allInfo2 = `${name} ${specialization}`
console.log(allInfo2);
// рекомендуют этот способ, якобы он легче. Genius
// но выглядит более красиво и более распознаваемо

let allInfo3 = name + ' ';
allInfo3 += specialization;
console.log(allInfo3);
// господи, один способ круче другого

// Узнать длинну строки (length)
const programmingLanguage = 'JavaScript';
console.log(programmingLanguage.length);

// Получение индекса (буквы) строки
// Отсчет идет с 0
console.log(programmingLanguage[4]);
console.log(programmingLanguage[44]);
