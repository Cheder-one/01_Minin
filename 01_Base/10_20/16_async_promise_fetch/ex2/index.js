const USERS_URL = 'https://jsonplaceholder.typicode.com/users'
const dataContainer = document.querySelector('#data-container');

const getUsersByIds = (ids) => {
    toggleLoader()
    const requests = ids.map(id => fetch(`${USERS_URL}/${id}`));
    Promise.all(requests)
        .then((responses) => Promise.all(
            responses
                .filter(responses => responses.ok)
                .map(el => el.json()))
        )
        .then((users) => {
            users.forEach(el => {
                usersNameHTML = createUserElement(el.name)
                dataContainer.append(usersNameHTML)
            });
        })
        .catch((error) => {
            console.log('error:', error);
        })
        .finally(() => {
            toggleLoader()
        })
};

const loaderHTML = document.createElement('span');
dataContainer.append(loaderHTML);
loaderHTML.id = "loader";
loaderHTML.setAttribute('hidden', '');
loaderHTML.textContent = 'Loading...';

const toggleLoader = () => {
	const isHidden = loaderHTML.hasAttribute('hidden');

	isHidden
	  ? loaderHTML.removeAttribute('hidden') 
	  : loaderHTML.setAttribute('hidden', '')
};

const createUserElement = (userName) => {
    const userEl = document.createElement('li');
    const userElAnchor = document.createElement('a');
    userElAnchor.href = '#'
    userElAnchor.textContent = userName
    userEl.append(userElAnchor)

    return userEl
};

getUsersByIds([5, 6, 2, 1]);
