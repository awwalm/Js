// Asynchronous callbacks

const showMessage = callback => {
    console.log(callback);
};

const firstMessage = callback => {
    setTimeout(() => {
        showMessage('Hello');
        callback();
    }, 2000);
};

const secondMessage = () => {
    showMessage("World!")
};

firstMessage(secondMessage);
