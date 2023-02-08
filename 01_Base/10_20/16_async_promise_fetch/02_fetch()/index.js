// fetch - получение данных по url
// fetch(url)

const createTodoElement = (text) => {
	const todoElem = document.createElement('li');
	const todoElemAnchor = document.createElement('a');
	todoElemAnchor.href = '#'
	todoElemAnchor.textContent = text;
	todoElem.append(todoElemAnchor)

	return todoElem
}

const toggleLoader = () => {
	const loaderHTML = document.querySelector('#loader');
	const isHidden = loaderHTML.hasAttribute('hidden')
	if (isHidden) {
		loaderHTML.removeAttribute('hidden')
	} else {
		loaderHTML.setAttribute('hidden', '')
	}
}

const dataContainer = document.querySelector('#data-container');

const getAllTodoes = () => {
	toggleLoader()
	fetch('https://jsonplaceholder.typicode.com/todos', {
	method: 'GET', // GET, POST, DELETE..
})
	.then((responseValue) => {
		if (!responseValue.ok) { // ok - произошел ли запрос успешно 
			throw new Error('Ошибка запроса') // throw - выбрасывает ошибку и переводит в блок .catch()
		}
		return responseValue.json() // декодирование запроса
	})
	.then((todoes) => { // передаем дальше декодированный запрос
		todoes.forEach((el, i, arr) => {
			const todoHTML = createTodoElement(el.title)
			dataContainer.append(todoHTML)
		});
	})
	.catch((error) => {
		console.log('error:', error);
	})
	.finally(() => {
		toggleLoader()
	})
};

getAllTodoes()