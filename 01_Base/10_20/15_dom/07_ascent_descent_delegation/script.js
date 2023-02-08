/*
const allElem = document.querySelectorAll('*');

allElem.forEach(el =>{
    el.addEventListener('click', event => {
        if (event.currentTarget.tagName === 'FORM') {
            event.stopPropagation() // Прекращение всплытия 
        }

        console.log(el.tagName);
    }, ) // Всплытие

    // el.addEventListener('click', event => {
    //     console.log(el.tagName);
    // }, true) // Если true, отслеживаем стадию погружения
})
*/

//-------------Event Delegation-------------
const mainNav = document.querySelector('.main-navigation');

mainNav.addEventListener('click', function (event) {
    const {target} = event
    const button = target.closest('.main-navigation__button-item')
    console.log(button);
    if (button) {
        button.style.color = 'red'
        setTimeout(() => {
            button.style.color = 'white'
        }, 1000)
    }
});