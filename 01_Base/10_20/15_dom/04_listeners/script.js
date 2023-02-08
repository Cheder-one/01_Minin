// // const firstNavButton = 
// //     document.querySelector('.main-navigation__button-item')

// // firstNavButton.addEventListener('click', (event) => {
//     // firstNavButton.style.cssText = `
//     // border: solid 3px whitesmoke;
//     // border-radius: 10px;
//     // `

//     // console.log(event.target); 
//     // Выводит элемент с которым произошло событие: 'click'

//     // const {target} = event // Правильная запись
//     // const variable = event.variable; - расшифровка
    
//     // target.classList.add('main-navigation__button-item_selected')
// // })

// const allNavButton = 
//     document.querySelectorAll('.main-navigation__button-item');

// allNavButton.forEach(button => {
//     button.addEventListener('click', event => {
//         allNavButton.forEach(button => {
//             button.classList.remove
//                 ('main-navigation__button-item_selected')
//         });

//         const {target} = event
//         target.classList.add('main-navigation__button-item_selected')
//     })
// });

// //-------------Submit-------------
// const createTaskForm = 
//     document.querySelector('.create-task-block');

// createTaskForm.addEventListener('submit', event => {
//     console.log(event);
//     event.preventDefault() // Отмена поведения по умолчанию (отмена перезагрузки страницы) 

// // Вывод в модальное окно текст формы 
//     const {target} = event; 
//     const taskNameInput = target.taskName;
//     const taskValueInput = taskNameInput.value;

//     console.log(taskValueInput);
// });

function createEl(el) {
    return document.createElement(el)
}

document.body.insertAdjacentHTML("beforeend", `
<form id="form">
    <input name="username" type="text" />
    <input type="submit" value="Добавить" />
</form>
<div id="main">
    <p class="text" data-id="1">Первый абзац</p>
    <p class="text" data-id="2">Второй абзац</p>
</div>
`)
const form = document.querySelector('#form')

form.addEventListener('submit', event => {
    event.preventDefault()

    const {target} = event
    
    const enteredText = target.elements.username.value
    const div = document.getElementById('main')
    div.insertAdjacentHTML('afterbegin', `<p>${enteredText}</p>`)

})