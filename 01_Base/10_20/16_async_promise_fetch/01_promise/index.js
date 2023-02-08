// Синхронный код - от первой точки кода, до последней (шаг за шагом)
// const numOfElements = 50;
// console.log('Начало цикла');
// for (let i = 0; i < numOfElements; i++) {
// 	console.log('i:', i);
// }
// console.log('Конец цикла');

//---------------------------------------------------------
// Асинхронный код 

const developer = {
	name: 'Maxim',
	isJSDev: true,
}

// Асинхронные функции
// setTimeout(() => {
// 	console.log('setTimeout');
// }, 3000)

// setInterval(() => {
// 	console.log('setInterval');
// }, 1000);

// promise
//----------------------------
// 3 статуса Promise:
// pending - ожидание
// fulfilled - удачное выполнение promise
// rejected - выполнение promise с ошибкой
//----------------------------
// Функция resolve вызывается если Promise был выполнен успешно  
// Функция reject вызывается если Promise был выполнен неудачно 

const promise = new Promise ((resolve, reject) => {
	if (developer.isJSDev) {
		setTimeout(() => {
			resolve(`${developer.name} - JS developer`);
		}, 3000)
	} else {
		reject(`${developer.name} - Not a JS developer`);
	}
})
console.log(promise);

// Чтобы получить данные которые мы передавали в resolve, reject, необходимо обработать наш promise с помощью:
// then, catch, finally

promise
	.then((successMessage) =>{ // Обрабатывает успешное выполнение promise
		console.log(successMessage);
	})
	.catch((error) => { // Принимает в себя ошибку от reject и позволяет двигаться коду дальше 
		console.log(error);
	})
	.finally(() => { // Вызовется, когда promise будет выполнен (вне зависимости успешно или с ошибкой)
		console.log(`finally message`);
	})