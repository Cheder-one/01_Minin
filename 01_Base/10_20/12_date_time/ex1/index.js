const date = new Date(2022, 10, 5);

function getDateFormat (date, separator = '.') {
   
   let dateFormatted = [
      date.getDate(),
      date.getMonth() + 1,
      date.getFullYear(),
   ];

   dateFormatted = dateFormatted.map(el => {
      if (el < 10) {
         return "0" + String(el)
      } else {
         return el
      }
   })

   return dateFormatted.join(separator);
};

let result = getDateFormat(date, '-');
console.log(result);

//-------------Refactoring-------------

const date1 = new Date(2022, 10, 5);

function getDateFormat (date, separator = '.') {
   
   let dateFormatted = [
      date.getDate(),
      date.getMonth() + 1,
      date.getFullYear(),
   ];

   return dateFormatted.map(el => 
      el < 10 ?  "0" + String(el) : String(el)
   ).join(separator)
};

let result1 = getDateFormat(date1);
console.log('Date Formatted',result1);

//-------------Решение адекватного программиста-------------

const addZero = (el) =>
  String(el).length === 1 ? `0${el}` : String(el);

const getDateFormat0 = (date, separator = ".") => {
  if (!(date instanceof Date)) {
    return "Первый параметр должен быть экземпляром класса Date!";
  }
  const dateItem = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return [dateItem, monthIndex + 1, year]
    .map(addZero)
    .join(separator);
};

console.log(getDateFormat0(new Date()));