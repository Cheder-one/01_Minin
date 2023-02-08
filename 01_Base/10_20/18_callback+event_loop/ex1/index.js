setTimeout(() => {
    console.log("№4 setTimeout"); // Вызывается в callback очереди
}, 0);

const promise = new Promise((resolve) => {
    console.log("№1 Promise"); // Вызывается в main очереди
    resolve();
});

promise.then(() => {
    console.log("№3 Promise resolve"); // Вызывается в micro очереди
});

console.log("№2 End"); // Вызывается в main очереди