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

let whiteTheme = true;
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

	if (inputValue === "") {
		addErrorBlock("Название задачи не должно быть пустым") & callSetTimeout();
	} else if (statusRepeat) {
		addErrorBlock("Задача с таким названием уже существует") & callSetTimeout();
	} else if (!statusRepeat) {
		tasks = [
			...tasks,
			{
				id: uniqId,
				completed: false,
				text: inputValue,
			},
		];
	}

	tasks.forEach((el) => {
		if (el.id === uniqId) {
			callTaskTemplate(el.id, el.text);
		}
	});

	whiteTheme 
	  ? toggleThemes(setsThemes().white)
	  : toggleThemes(setsThemes().black)
});

(function addWindowDelete() {
	return document.body.insertAdjacentHTML(
		"beforeend",
		`
   <div class="modal-overlay modal-overlay_hidden">
      <div class="delete-modal">
         <h3 class="delete-modal__question">
            Вы действительно хотите удалить эту задачу?
         </h3>
         <div class="delete-modal__buttons">
            <button class="delete-modal__button delete-modal__cancel-button">
               Отмена
            </button>
            <button class="delete-modal__button delete-modal__confirm-button">
               Удалить
            </button>
         </div>
      </div>
   </div>
    `
	);
})()

let taskItemTarget, taskItemTargetId;
const modalOverlay = document.querySelector(".modal-overlay");
const deleteModal = document.querySelector(".delete-modal");
const deleteModalButtons = document.querySelector(".delete-modal__buttons");

taskList.addEventListener("click", (event) => {
	const { target } = event;
	const delButton = target.closest(".task-item__delete-button");
	taskItemTarget = target.closest('.task-item');
	taskItemTargetId = taskItemTarget.getAttribute('data-task-id')

	if (delButton) {
		modalOverlay.classList.remove("modal-overlay_hidden");
	}
});

modalOverlay.addEventListener("click", (event) => {
	const { target } = event;
	const deleteModalButton = target.closest(".delete-modal__button");
	const modalConfirmButton = document.querySelector(
		".delete-modal__confirm-button");
	const modalCancelButton = document.querySelector(
		".delete-modal__cancel-button");

	if (deleteModalButton) {
		switch (target) {
			case modalConfirmButton:
				tasks = tasks.filter(el => el.id !== taskItemTargetId)
				taskItemTarget.remove()
				modalOverlay.classList.add("modal-overlay_hidden");
				break;
			case modalCancelButton:
				modalOverlay.classList.add("modal-overlay_hidden");
				break;
			case modalOverlay:
				modalOverlay.classList.add("modal-overlay_hidden");
				break;
		}
	} else if (target === modalOverlay) {
		modalOverlay.classList.add("modal-overlay_hidden");
	}
});

document.addEventListener("keyup", (event) => {
	const { key } = event;
	if (modalOverlay.className === 'modal-overlay')
		switch (key) {
			case 'Escape':
				modalOverlay.classList.add("modal-overlay_hidden");
				break;
			case 'Enter':
				tasks = tasks.filter(el => el.id !== taskItemTargetId)
				taskItemTarget.remove()
				modalOverlay.classList.add("modal-overlay_hidden");
				break;
		}
});

document.addEventListener('keyup', (event) => {
	const { key } = event;
	if (key === 'Tab') 
	if (whiteTheme) {
		toggleThemes(setsThemes().black);
		whiteTheme = false
	} else {
		toggleThemes(setsThemes().white);
		whiteTheme = true
	}
});

function setsThemes() {
	return {
		black: {
			bodyBackground: "#24292E",
			taskTextColor: "#ffffff",
			buttonBorder: "1px solid #ffffff"
		},
		white: {
			bodyBackground: "initial",
			taskTextColor: "initial",
			buttonBorder: "none"
		},
	}
}

function toggleThemes({ bodyBackground, taskTextColor, buttonBorder }) {
	document.body.style.background = bodyBackground
	document.querySelectorAll('.task-item').forEach(taskItem => {
		taskItem.style.color = taskTextColor
	});
	document.querySelectorAll('button').forEach(findButtons => {
		findButtons.style.border = buttonBorder
	});
}
