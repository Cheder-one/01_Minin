function addDays (date, days) {
    if (!(date instanceof Date)) {
        return 'date должен иметь тип данных Date';
    } else if (typeof days !==  'number') {
        return 'days должен иметь тип данных number';
    }
    date = Date.parse(date);

    let units = [1000, 60, 60, 24,];
    let oneDayMs = units.reduce((acc, el) => acc * el);

    return new Date(date + (oneDayMs * days));
}
console.log('addDays:', addDays(new Date(), 5));

//-------------Refactoring-------------

function addDays (date, days) {
    if (!(date instanceof Date)) {
        return 'date должен иметь тип данных Date';
    } else if (typeof days !==  'number') {
        return 'days должен иметь тип данных number';
    }
    let convertDaysToMs = () =>
       new Date(Date.parse(date) + (1000 * 3600 * 24) * days);

    return convertDaysToMs()
}
const date = new Date();
console.log("before", date);
const newDate = addDays(date, 5);
console.log("after", newDate);

//-------------Решение с сайта-------------

const convertDaysToMs1 = (days) => days * 24 * 3600 * 1000;

const addDays = (date, days) => {
  if (!(date instanceof Date)) {
    return "Первый параметр должен быть экземпляром класса Date!";
  }
  if (!days || typeof days !== "number") return date;

  return new Date(date.getTime() + convertDaysToMs1(days));
};

date = new Date();
console.log("before", date);

newDate = addDays(date, 5);
console.log("after", newDate);