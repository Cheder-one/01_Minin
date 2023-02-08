// Promise.race([
//     new Promise(),
//     new Promise(),
//     new Promise(),
// ])

// Promise.race() - как и Promise.all() принимает в себя массив промисов. Возвращает результат Promise-а (независимо resolve || reject) который выполнился первым 

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise1')
    }, 500)
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise2')
    }, 2000)
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('promise3')
    }, 100)
})

Promise.race([promise1, promise2, promise3])
    .then((result) => {
        console.log('result', result);
    })
    .catch((error) => {
        console.log('error', error);
    })