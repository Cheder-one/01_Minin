// Обработчики событий. События "keydown" и "keyup"
// Нажатие и отжатие кнопки

document.addEventListener('keydown', (event) => {
    const {key} = event
    console.log(key);

    const taskItemToDelete = document.querySelector(`[data-task-id='${key}'`);
    if (taskItemToDelete) {
        const deleteConfirm = confirm('Удалить элемент?')
        if (deleteConfirm) {
            taskItemToDelete.remove()
        }
    }
})

//-------------События "mouseover", "mouseout", "mousemove"-------------
const createToolTip = (text) => {
    const tooltip = document.createElement('span');
    tooltip.textContent = text
    tooltip.className = 'tooltip'
    return tooltip
}

document.addEventListener('mouseover', (event) => {
    const {target} = event
    // console.log(target);
    const isOverDeleteButton = target.className.includes('task-item__delete-button')
    if (isOverDeleteButton) {
        console.log('yes');
        const taskItemHTML = target.closest('.task-item');
        const taskId = taskItemHTML?.dataset.taskId;
        if (taskId) {
            const tooltipHTML = createToolTip(`Удалить задачу №${taskId} ?`)
            target.append(tooltipHTML)
        }
    }
});

document.addEventListener('mouseout', (event) => {
    const {target} = event
    const isOutDeleteButton = target.className.includes('task-item__delete-button')
    if (isOutDeleteButton) {
        console.log('del');
        const tooltip = document.querySelector('.tooltip');
        tooltip.remove()
    }
});

document.addEventListener('mousemove', function (e) {
    console.log(e);
});