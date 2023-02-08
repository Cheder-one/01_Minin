const nextYear = new Date().getFullYear() + 1;
const nextBirthdayMs = new Date().setFullYear(nextYear, 0, 31)
const nextBirthdayDate = new Date(nextBirthdayMs)

function getDaysBeforeBirthday (nextBirthdayDate) {
   if (!(nextBirthdayDate instanceof Date)) {
      return 'Текущая дата должна иметь формат Date()'
   }
   let msLeft = nextBirthdayDate - new Date();
   
   let convertMsToDays = () =>
      Math.round(msLeft / (1000 * 3600 * 24));
    return convertMsToDays();  
};
let difDates = getDaysBeforeBirthday(nextBirthdayDate)
console.log('result:', difDates);

//-------------Нормальное Решение-------------
//(но без автовысчитывания след-й даты др)
const convertMsToDays = (ms) => Math.round(ms / 1000 / 60 / 60 / 24);

const getDaysBeforeBirthday = (birthdayDate) => {
  if (!(birthdayDate instanceof Date)) {
    return "Параметр функции должен быть экземпляром класса Date!";
  }
  const currentDateMs = Date.now();
  const birthdayDateMs = birthdayDate.getTime();
  return convertMsToDays(birthdayDateMs - currentDateMs);
};

console.log(getDaysBeforeBirthday(new Date(2025, 11, 10)));


