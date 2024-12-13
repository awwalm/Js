// Asynchronous Generators

const fs = require("fs");

/**
 * Node 12 makes its readable streams asynchronously iterable.
 * This means you can read successive chunks of data from a stream
 * with a `for/await` loop like this one:
 */
async function parseFile(filename) {
    let stream = fs.createReadStream(filename, {encoding: "utf-8"});
    for await (let chunk of stream) {
        console.log(chunk); // Or any relevant function acting on chunk
    }
}


/**
 * A Promise-based wrapper around setTimeout() that we can use await with.
 * Returns a Promise that fulfills in the specified number of milliseconds.
 * 
 * @param{Number} ms
 */
function elapsedTime(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * An async generator function that increments a counter and yields it
 * a specified (or infinite) number of times at a specified interval.
 */
async function* clock(interval, max=Infinity) {
    for (let count = 1; count <= max; count++) {
        await elapsedTime(interval);
        yield count;
    }
}

/**
 * A test function that uses the async generator with for/await
 */
async function test() {                         // Async so we can use for/await
    for await (let tick of clock(300, 100)) {   // Loop 100 times every 300ms
        console.log(tick);
    }
}



