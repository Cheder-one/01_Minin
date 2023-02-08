// let tasks = [
//     {
//         id: "1138465078061",
//         completed: false,
//         text: "Посмотреть новый урок по JavaScript"
//     },
//     {
//         id: "1138465078062",
//         completed: false,
//         text: "Выполнить тест после урока"
//     },
//     {
//         id: "1138465078063",
//         completed: false,
//         text: "Выполнить ДЗ после урока"
//     }
// ];

// const taskList = document.querySelector('.tasks-list');

// function callTaskTemplate(id, text) {
//    return taskList.insertAdjacentHTML('beforeend', `
//     <div class="task-item" data-task-id="${id}">
//         <div class="task-item__main-container">
//             <div class="task-item__main-content">
//                 <form class="checkbox-form">
//                     <input class="checkbox-form__checkbox" type="checkbox" id="${id}">
//                     <label for="${id}"></label>
//                 </form>
//                 <span class="task-item__text">
//                     ${text}
//                 </span>
//             </div>
//             <button class="task-item__delete-button default-button delete-button" data-delete-task-id="5">
//                 Удалить
//             </button>
//         </div>
//     </div>
//     `)
// }

// tasks.forEach(el => {
//     callTaskTemplate(el.id, el.text)
// });

// const createTaskBlock = document.querySelector('.create-task-block');
// const errorMessageBlock = document.createElement('span');

// function addErrorBlock (text) {
//     errorMessageBlock.className = 'error-message-block';
//     errorMessageBlock.textContent = text;
//     createTaskBlock.append(errorMessageBlock)
// }

// createTaskBlock.addEventListener('submit', event => {
//     event.preventDefault();
//     const {target} = event

//     const inputValue = target.elements.taskName.value.trim()
//     const uniqId = Date.now().toString()

//     tasks = [
//         ...tasks,
//         {
//             id: uniqId,
//             completed: false,
//             text: inputValue,
//         },
//     ]

//     tasks.forEach((el, i) => {
//         if (el.id === uniqId)

//         inputValue === "" ?
//             addErrorBlock ('Название задачи не должно быть пустым') &
//             setTimeout(() => {
//                 errorMessageBlock.remove()
//             }, 1500)
//         : tasks[i-1].text === inputValue ?
//             addErrorBlock ('Задача с таким названием уже существует') &
//             setTimeout(() => {
//             errorMessageBlock.remove()
//             }, 1500)
//         : callTaskTemplate(el.id, el.text)
//     });
// })

//-------------Right solution-------------

let tasks = [
  {
    id: "1138465078061",
    completed: false,
    text: "Посмотреть новый урок по JavaScript",
  },
  {
    id: "1138465078062",
    completed: false,
    text: "Выполнить тест после урока",
  },
  {
    id: "1138465078063",
    completed: false,
    text: "Выполнить ДЗ после урока",
  },
];

const taskList = document.querySelector(".tasks-list");

function callTaskTemplate(id, text) {
  return taskList.insertAdjacentHTML(
    "beforeend",
    `
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
      `
  );
}

tasks.forEach((el) => {
  callTaskTemplate(el.id, el.text);
});

const createTaskBlock = document.querySelector(".create-task-block");
const errorMessageBlock = document.createElement("span");

function addErrorBlock(text) {
  errorMessageBlock.className = "error-message-block";
  errorMessageBlock.textContent = text;
  createTaskBlock.append(errorMessageBlock);
}

function callSetTimeout() {
  setTimeout(() => {
    errorMessageBlock.remove();
  }, 1500);
}

createTaskBlock.addEventListener("submit", (event) => {
  event.preventDefault();
  const { target } = event;

  const inputValue = target.elements.taskName.value.trim();
  const uniqId = Date.now().toString();
  let statusRepeat;

  tasks.forEach((el) => {
    statusRepeat = el.text.includes(inputValue);
  });

  if (!statusRepeat) {
    tasks = [
      ...tasks,
      {
        id: uniqId,
        completed: false,
        text: inputValue,
      },
    ];
  } else if (inputValue === "") {
    addErrorBlock("Название задачи не должно быть пустым") & callSetTimeout();
  } else if (statusRepeat) {
    addErrorBlock("Задача с таким названием уже существует") & callSetTimeout();
  }

  tasks.forEach((el) => {
    if (el.id === uniqId) callTaskTemplate(el.id, el.text);
  });
});
