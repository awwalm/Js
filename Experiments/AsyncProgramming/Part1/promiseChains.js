// Promises

const promise = new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10);

    setTimeout(() => {
        if (randomNumber < 4) {
            resolve("Well Done! You Guessed Right!");
        } else {
            reject("Oops! You Guessed Wrong! Unluck.");
        }
    });
});


promise.then(value => {
    console.log(value);
}).catch(error => {
    console.log(error);
})

