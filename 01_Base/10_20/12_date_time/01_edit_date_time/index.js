// Date

const date = new Date(); // создаем объект
console.log('date', date);

const newDate = new Date(2000, 0, 31, 00, 00, 0, 0); 
// newDate(year, month, date, hours, minutes, seconds, ms) 
// Месяца: 0 (январь) до 11 (декабрь)

console.log('newDate', newDate); 
// Mon Jan 31 2000 00:00:00 GMT+0000 (Coordinated Universal Time)

// Вывести значение даты
console.log('year', newDate.getFullYear());
console.log('month', newDate.getMonth());
console.log('date', newDate.getDate());
console.log('seconds', newDate.getSeconds());

// Вывести день недели variable.get_()
// 0 (Вс) - 6 (Сб)
console.log('day', newDate.getDay());
if (newDate.getDay() === 1) {
   console.log('Сегодня Пн') 
}

// Установить/передать дату variable.set_()

newDate.setFullYear(1996)
console.log('newDate.FullYear', newDate);

//----------------------------
// Расчет разности между датами

// getTime()
const date1 = new Date(2005, 4, 20);
const date2 = new Date(2006, 4, 10);

console.log('date1', date1.getTime()); 
console.log('date2', date2.getTime()); 
// кол-во мс с Jan 1, 1970 

const difference = date2.getTime() - date1.getTime();
console.log('difference', difference / 1000 / 60 / 24 / 30); // разница в днях

//----------------------------
// Высчитывание скорости выполнения кода

const startTime = Date.now()
for (let i = 0; i < 1000000; i++) {
   // do something
}
const endTime = Date.now()
console.log('endTime - startTime:', endTime - startTime, 'ms');