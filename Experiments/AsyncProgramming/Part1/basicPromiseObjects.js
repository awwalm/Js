// Promises

const promise = new Promise((resolve, reject) => {
    resolve("Well Done! Promise One is Resolved!");
});

const promiseTwo = new Promise((resolve, reject) => {
    resolve("Well Done! Promise Two is Resolved!");
});

const promiseThree = new Promise((resolve, reject) => {
    reject("Sorry, Promise Three is Rejected. Unlucky!");
});


promise.
then(value => {
    console.log(value);
    return 
})


