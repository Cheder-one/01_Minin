// Удаление элементов из DOM

// remove - удаляет элемент
const mainNav = document.querySelector('.main-navigation')
mainNav.remove()

// closest - ищет ближайший родительский элемент (например div или body)
const taskItemText = document.querySelector('.task-item__text');
console.log(taskItemText);

const taskItem = taskItemText.closest('.task-item')
console.log(taskItem);

// .classList.add - добавить класс
// .classList.remove - удаляет класс
// .classList.toggle - добавляет если нет / удаляет если есть

const createTaskInput = document.querySelector('.create-task-block__input');
console.log(createTaskInput.hasAttribute('type')); // существует ли атрибут 
console.log(createTaskInput.getAttribute('type')) // выводит значение атрибута
// .removeAttribute() - удалить атрибут
// .setAttribute() - добавить атрибут
