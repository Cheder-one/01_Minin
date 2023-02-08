// Методы для поиска элементов:

// Устаревший:
// document.getElement_()
const tasksBlock = 
    document.getElementById('tasks');
const allNavButtons = 
    document.getElementsByClassName('main-navigation');
const allButtons = 
    document.getElementsByTagName('button');

console.log('tasksBlock:', tasksBlock);
console.log('allNavButtons:', allNavButtons);
console.log('allButtons:', allButtons);

// .querySelector() - выводит первый элемент
// поиск id через "#"
const tasksBlock2 = document.querySelector('#tasks'); 
console.log('tasksBlock2:', tasksBlock2);
// поиск классов через "."
const classMainNav = document.querySelector('.main-navigation')
console.log('classMainNav:', classMainNav);
// поиск тэга
const firstButton = document.querySelector('button');
console.log('firstButton:', firstButton);
// поиск атрибута через "[]"
const thirdNavButton = document.querySelector('[data-button-id="3"]')
console.log('thirdNavButton:', thirdNavButton);

// .querySelectorAll() - выводит все элементы 
const allNavigationButtons = document.querySelectorAll('.main-navigation__button-item')
console.log('allNavigationButtons:', allNavigationButtons);

// Можем перебирать эти элементы:
allNavigationButtons.forEach((el, i) => {
    console.log('i, el:', i, el);
})
