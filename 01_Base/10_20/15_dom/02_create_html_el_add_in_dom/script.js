// Создание HTML-элементов и добавление их в DOM

// createElement 
const newNavButton = document.createElement('a');
newNavButton.className = 'main-navigation__button-item'
newNavButton.href = '#tasks_expired'
newNavButton.dataset.buttonId = '4'
newNavButton.textContent = 'Просроченные задачи'
console.log(newNavButton);

// Добавляем созданный элемент в DOM (2 способа)

// .prepend() - добавляет в начало блока
// .append() - добавляет в конец блока
// .before() - добавляет перед блоком
// .after() - добавляет после блока
    
const mainNavigation = 
    document.querySelector('.main-navigation');
mainNavigation.append(newNavButton)

// targetElement.insertAdjacentElement(position, element);
// position
    // 'beforebegin': перед самим элементом targetElement.
    // 'afterbegin': внутри элемента targetElement, перед его первым потомком.
    // 'beforeend': внутри элемента targetElement, после его последнего потомка.
    // 'afterend': после самого элемента targetElement.

// element
    // Элемент, добавляемый в DOM-дерево.

// Наглядное отображение параметра position:
//     <!-- beforebegin -->
//     <p>
//     <!-- afterbegin -->
//     lorem-text
//     <!-- beforeend -->
//     </p>
//     <!-- afterend -->
    
// Примечание: значения beforebegin и afterend работают только если targetElement находится в DOM-дереве и имеет родительский элемент.

mainNavigation.insertAdjacentElement('afterbegin', newNavButton)

// .replaceWith() - позволяет заменить один элемент на другой. 

const newParagraph = document.createElement('div');
newParagraph.className = 'task-item';
newParagraph.dataset.dataTaskId = '3';
newParagraph.textContent = 'Третий абзац';

// Заменим первый абзац на новый с помощью этого метода:
const firstParagraph = document.querySelector("[data-task-id='1']");
const secondParagraph = document.querySelector("[data-task-id='2']");

firstParagraph.after(secondParagraph)
// firstParagraph.replaceWith(newParagraph)

