let tasks = [
    {
        id: "1138465078061",
        completed: false,
        text: "Посмотреть новый урок по JavaScript"
    },
    {
        id: "1138465078062",
        completed: false,
        text: "Выполнить тест после урока"
    },
    {
        id: "1138465078063",
        completed: false,
        text: "Выполнить ДЗ после урока"
    }
];

const taskList = document.querySelector('.tasks-list');

function callTaskTemplate(id, text) {
   return taskList.insertAdjacentHTML('beforeend', `
    <div class="task-item" data-task-id="${id}">
        <div class="task-item__main-container">
            <div class="task-item__main-content">
                <form class="checkbox-form">
                    <input class="checkbox-form__checkbox" type="checkbox" id="${id}">
                    <label for="${id}"></label>
                </form>
                <span class="task-item__text">
                    ${text}
                </span>
            </div>
            <button class="task-item__delete-button default-button delete-button" data-delete-task-id="5">
                Удалить
            </button>
        </div>
    </div>
    `)
}

tasks.forEach(el => {
    callTaskTemplate(el.id, el.text)
});

const createTaskBlock = document.querySelector('.create-task-block');

createTaskBlock.addEventListener('submit', event => {
    event.preventDefault();
    
    const {target} = event

    const inputFormValue = target.elements.taskName.value
    const uniqId = Date.now().toString()

    tasks = [
        ...tasks,
        {
            id: uniqId,
            completed: false,
            text: inputFormValue,
        },
    ]

    tasks.forEach(el => {
        if (el.id === uniqId) {
            callTaskTemplate(el.id, el.text)
        }
    });
})
