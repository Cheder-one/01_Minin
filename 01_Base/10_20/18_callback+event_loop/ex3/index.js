const getData = (callback) => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => response.json())
        .then((user) => {
            console.log("№2 Success");
            callback(user);
        })
        .catch((error) => {
            console.log(error);
        });
};

getData(() => {
    console.log("№3 user received");

    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("№6 promise resolved");
        }, 500);

        console.log("№4 in promise");

        setTimeout(() => {
            console.log("№5 last set timeout");
        }, 400);
    });

    promise.then((result) => {
        console.log(result);
    });
});

console.log("№1 End");
