// Свойства и методы HTML-элементов

// Получить имя класса
const taskWrapper = document.querySelector('.tasks__wrapper');
console.log(taskWrapper.className);

// Переименовать имя класса
// taskWrapper.className = 'tasks__wrapper_1';
console.log(taskWrapper.className);

const tasksBlock1 = document.querySelector('#tasks');
console.log(tasksBlock1.id);
// tasksBlock1.id = 'new_tasks' // Переименовали (верстка сломалась)

// .textContent Вывести значение элемента 
const submitButton = document.querySelector('.create-task-block__button');
console.log(submitButton.innerText);
console.log(submitButton.textContent);
// Переименовать значение элемента (не видит теги)
submitButton.textContent = '<b>Создать новую задачу</b>'

// .innerHTML Вывести верстку (принимает теги)
console.log(tasksBlock.innerHTML);
// Изменить верстку
submitButton.innerHTML = '<b>Создать новую задачу</b>'

// .children Вывести дочерние элементы класса
const createTaskForm = 
    document.querySelector('.create-task-block');
console.log('createTaskForm.children', createTaskForm.children);

// data-атрибуты (например у кнопки: data-button-id="1")
const firstNavButton = 
    document.querySelector('.main-navigation__button-item');
// Выводим data-атрибут:
console.log(firstNavButton.dataset); // DOMStringMap { buttonId → "1" }
// На основе прошлого вывода:
console.log(firstNavButton.dataset.buttonId); // 1

// Изменение data-атрибутов
firstNavButton.dataset.buttonId = '10';
console.log(firstNavButton.dataset.buttonId); // 10

// style - изменение стилей
firstNavButton.style.fontWeight = 'bold';
// В CSS: font-weight 
// В JS: fontWeight 
firstNavButton.style.boxShadow = 'inset 0 0 0 3px #fff';

