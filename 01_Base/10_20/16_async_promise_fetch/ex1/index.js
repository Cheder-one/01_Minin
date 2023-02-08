const dataContainer = document.querySelector('#data-container');

const renderUserNameEl = userName => {
	const userNameEl = document.createElement('li');
	const userNameElAnchor = document.createElement('a');
	userNameElAnchor.href = '#';
	userNameElAnchor.textContent = userName;
	dataContainer.append(userNameEl);
	userNameEl.append(userNameElAnchor);

	return userNameEl
};

const loaderHTML = document.createElement('span');
dataContainer.append(loaderHTML);
loaderHTML.id = "loader";
loaderHTML.setAttribute('hidden', '');
loaderHTML.textContent = 'Загрузка...';

const toggleRenderLoader = () => {
	const isHidden = loaderHTML.hasAttribute('hidden');

	isHidden
	  ? loaderHTML.removeAttribute('hidden') 
	  : loaderHTML.setAttribute('hidden', '')
};

const getAllUsersName = () => {
	toggleRenderLoader()
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(
			(decryptResponse) => {
				if (!decryptResponse.ok) {
					throw new Error('response failed')
				} 
				return decryptResponse.json();
		})
		.then(
			(usersList) => {
				usersList.forEach(el => {
					renderUserNameEl(el.name)
				});
			},
			(error) => {
				console.log(error);
			})
		.finally(() => {
			toggleRenderLoader()
		})
}
getAllUsersName()
