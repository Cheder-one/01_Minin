let userName = prompt('Скажи как тебя зовут и я скажу как тебя зовут');
userName = userName.trim().toUpperCase();
alert('Я раскрыл тебя! Твое имя: ' + userName);

userName = userName.toLowerCase();
userName = userName.charAt(0).toUpperCase().trim() + userName.slice(1)

let userAge = prompt(userName + ' cколько Вам лет?');
userAge = Number(userAge);
alert('Вас зовут ' + userName + ' и Вам ' + userAge + ' лет');
