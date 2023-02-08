// // Решение проблемы с then catch finally 
// // С помощью async await

const USERS_URL = 'https://jsonplaceholder.typicode.com/users'
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'

// fetch(USERS_URL)
//     .then((response) => response.json())
//     .then((users) => {
//         console.log(users)
//         const firstUserId = users[0]?.id;
//         console.log(firstUserId);
//         fetch(`${TODOS_URL}?userId=${firstUserId}`)
//             .then((response) => response.json())
//             .then((todos) => {
//                 console.log(todos);
//             })
//             .catch((error) => {
//                 console.log(error);
//             })
//     })
//     .catch((error) => {
//         console.log(error)
//     })

// Код растет вправо, это можно исправить с помощью async await

// const fn = async () => {};

// const promiseFn = fn()
// console.log(promiseFn); // Выведет Promise, обычная функция вернула бы undefined
//----------------------------

const getTodosWithUserData = async () => {
    try {
        const response = await fetch(USERS_URL) // Функция не пойдет дальше пока код не выполниться 
        if (!response.ok) {
            throw new Error('Ошибка запроса пользователя')
        }
        const users = await response.json()
        const firstUserId = users[0]?.id; // Это синхронный вызов, await не нужен
        const todosResponse = await fetch(`${TODOS_URL}?userId=${firstUserId}`)
        if (!todosResponse.ok) {
            throw new Error('Ошибка запроса задач')
        }
        const todos = await todosResponse.json()
        console.log('todos:', todos);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("finally");
    }
};
getTodosWithUserData()
