existingUserLogin = 'the_best_user';
existingUserPassword = 12345678;

userLogin = prompt ('Введите логин').trim()
console.log(userLogin);
userPassword = prompt ('Введите пароль').trim()

if (existingUserLogin === userLogin) {
   alert (`Добро пожаловать, ${userLogin}`)
} else {
   alert('Логин и (или) Пароль введены неверно!')
}
