document.body.innerHTML = `
    <button class="switcher" id="innerHTML">
        Запустить метод "innerHTML"
    </button>
`;

const switchButton = document.querySelector('.switcher');

switchButton.onclick = function switchMethods() {
    if (switchButton.id === 'innerHTML') {
        switchButton.textContent = 'Запустить метод "createElement"';
        switchButton.id = 'createElement';

        createFormByInnerHTML (); 
        createStyleForInnerHTML ();

    } else if (switchButton.id === 'createElement') {
        switchButton.textContent = 'Запустить метод "innerHTML"';
        switchButton.id = 'innerHTML';

        createFormByCreateEl ()
        createStyleForCreateEl ();
    }
}

const containerUserForm = document.createElement('container');

function createFormByInnerHTML () {
    containerUserForm.innerHTML = '' 

    document.body.prepend(containerUserForm)

    containerUserForm.innerHTML = `
    <form class="create-user-form">
        <label>
            Имя
            <input type="text" name="userName" placeholder="Введите ваше имя" />
        </label>
        <label>
            Пароль
            <input type="password" name="password" placeholder="Придумайте Пароль" />
        </label>
        <button type="submit">
            Подтвердить
        </button>
    </form>
    <hr>
    `;
}

function createStyleForInnerHTML () {
    switchButton.style = '';
    switchButton.style.cssText = `
        border: 0;
        line-height: 2.5;
        padding: 0 20px;
        font-size: 1rem;
        text-align: center;
        background: #ff5722;
        color: white;
        border-radius: 5px;
    `;
    document.body.style.cssText = `
        font-family: "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace; 
        background-color: #181a1b; 
        color: rgb(236, 92, 92);
    `;
}

function createStyleForCreateEl () {
    switchButton.style = '';
    switchButton.style.cssText = `
        border: 0;
        line-height: 2.5;
        padding: 0 20px;
        font-size: 1rem;
        text-align: center;
        background: #62d2a2;
        color: white;
        border-radius: 5px;
    `;
    document.body.style.cssText = `
        font-family: "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace; 
        background-color: whitesmoke; 
        color: black;
    `;
}

function createFormByCreateEl () {
    containerUserForm.innerHTML = '' 

    document.body.prepend(containerUserForm)

    const form = document.createElement('form');
        form.className = 'create-user-form';

    const labelName = document.createElement('label');
        labelName.innerHTML = 'Имя ';
    const inputName = document.createElement('input');
        inputName.type = 'text';
        inputName.name = 'userName';
        inputName.placeholder = 'Введите ваше имя';

    const labelPass = document.createElement('label');
        labelPass.textContent = ' Пароль ';
    const inputPass= document.createElement('input');
        inputPass.type = 'password';
        inputPass.name = 'userName';
        inputPass.placeholder = 'Придумайте Пароль';

    const button = document.createElement('button');
        button.textContent = 'Подтвердить';
        button.type = 'submit';

    containerUserForm.prepend(form)
    form.appendChild(labelName)
    form.appendChild(labelPass)
    form.appendChild(button)

    labelName.appendChild(inputName)
    labelPass.appendChild(inputPass)

    const hr = document.createElement('hr');
    form.after(hr)
}

//-------------Реализация через функцию-------------

const createInputWithLabel = (label, inputType, inputName, placeholder) => {
    const labelContainer = document.createElement("label");
    labelContainer.innerText = label;
  
    const inputElement = document.createElement("input");
    inputElement.type = inputType;
    inputElement.name = inputName;
    inputElement.placeholder = placeholder;
  
    labelContainer.append(inputElement);
  
    return labelContainer;
  };
  
  const formContainer = document.createElement("form");
  formContainer.className = "create-user-form";
  const userNameLabel = createInputWithLabel(
    "Имя",
    "text",
    "userName",
    "Введите ваше имя"
  );
  const passwordLabel = createInputWithLabel(
    "Пароль",
    "password",
    "password",
    "Придумайте Пароль"
  );
  const confirmButton = document.createElement("button");
  confirmButton.type = "submit";
  confirmButton.innerText = "Подтвердить";
  
  formContainer.append(userNameLabel, passwordLabel, confirmButton);
  document.body.prepend(formContainer);
  


