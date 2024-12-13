
// Synchronous
function synchronousA() {
    console.log(" The ");
    console.log(" quick ");
    console.log(" brown");
    console.log(" fox ");
    console.log(" jumped ");
}

function synchronousB() {
    console.log(" over ");
    console.log(" the ");
    console.log(" lazy ");
    console.log(" dogs ");
}

// Asynchronous
function asynchronous() {
    synchronousA();
    setTimeout(() => {
    console.log("<Asynchronously executing>");}, 3e3);
    synchronousB();
}

// asynchronous();

/******************************************************/

let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let order = (fruitName, callProduction) => {
    setTimeout(() => {
        // console.log("Order placed, please call production");
        console.log(`${stocks.fruits[fruitName]}`)
    }, 2e3);
    callProduction();
};

let production = () => {
    console.log("Order received, starting production");
};

order(0, production);
