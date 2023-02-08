// Promise.all()[
// 	new Promise(),
// 	new Promise(),
// 	new Promise()
// ]
// Promise.all() - метод для обработки выборочных promise

// Promise.all() возвращает:
// fulfilled - если все выполнены успешно 
// rejected - если есть хотя бы одна ошибка 

const TASKS_URL = 'https://jsonplaceholder.typicode.com/todos'
const tasksIds = [1, 41, 20, 100, 50, 1]
const dataContainer = document.querySelector('#data-container');

const createTodoElement = (text) => {
	const todoElem = document.createElement('li');
	const todoElemAnchor = document.createElement('a');
	todoElemAnchor.href = '#';
	todoElemAnchor.textContent = text;
	todoElem.append(todoElemAnchor);

	return todoElem
}

const getTasksById = (ids) => {
	const requests = ids.map((id) => fetch(`${TASKS_URL}/${id}`)) 
	// Массив Promise-ов, которые содержат необработанные запросы по выбранным id задач
	Promise.all(requests)
	// Обрабатываем массив с из 6-ти Promise с помощью Promise.all()
		.then((responses) => {
			dataResults = responses.map((response) => response.json()) 
			// Каждый Promise декодируем и помещаем в новый массив
			return Promise.all(dataResults)	
			// Тк dataResults - массив декодированных Promise-ов, для работы с ним возвращаем массив в Promise.all().
		})
		.then((tasks) => {
			tasks.forEach(el => {
				tasksHTML = createTodoElement(el.title)
				dataContainer.append(tasksHTML)
			});

		})
		.catch((error) => {
			console.log(error);
		})
}
getTasksById(tasksIds)