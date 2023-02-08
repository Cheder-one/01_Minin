//// События "contextmenu", "change", "input"
// contextmenu
document.addEventListener('contextmenu', event => {
    console.log(event);
    event.preventDefault()
});

// "change", "input"
// change - срабатывает после внесенных изменений (ввод/клик вне поля)
// input - срабатывает сразу во время введения в воле

const checkTaskNameOnValidation = (value) => {
    if (!value || value.includes('@')) {
        return false
    }
    return true
}

const createTaskBlock = document.querySelector('.create-task-block')
const createTaskBlockInput = createTaskBlock.querySelector('.create-task-block__input');

createTaskBlockInput.addEventListener('input', (event) => {
    const {target} = event
    const {value} = target
    const isValid = checkTaskNameOnValidation(value)
    const messageError = document.querySelector('.error-message-block');

    if (!isValid) {
        const newMessageBlock = document.createElement('span')
        newMessageBlock.className = 'error-message-block';
        newMessageBlock.textContent = 'Error. The task field cannot be empty or contain a dog symbol'
        createTaskBlock.append(newMessageBlock)
    } else if (isValid && messageError) {
        messageError.remove()
    } // Если поле notValid - создает errorBlock.
      // Если введено valid - удаляет errorBlock
});
