// A generator function that yields the set of one digit (base 10) primes.
function* oneDigitPrimes() {
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    yield 6;
    yield 7;
}

// Generator examples
function* fibonacciSequence() {
    let x = 0, y = 1;
    for(;;) {
        yield y;
        [x, y] = [y, x+y];
    }
}

// This fixes the infinite loop issue with the previous example
function fibonacci(n) {
    for (let f of fibonacciSequence()) {
        if (n-- <= 0) return f;
    }
}
console.log(fibonacci(20));

// Yield the first n elements of the specified iterable object
function* take(n, iterable) {
    let it = iterable[Symbol.iterator]();   // Get iterator for iterable object
    while (n-- > 0) {                       // Loop n times
        let next = it.next();               // Get the next item from iterator
        if (next.done) return;              // Return early when there are no more values
        else yield next.value;              // Otherwise, yield the value
    }
}

// An array of the first 5 Fibonacci numbers
console.log([...take(5, fibonacciSequence())]); // => [1,1,2,3,5]

// Given an array of iterables, yield their elements in interleaved order
function* zip(...iterables) {
    let iterators = iterables.map(i => i[Symbol.iterator]());
    let index = 0;
    while (iterators.length > 0) {          // While there are still some iterators,
        if (index >= iterators.length) {    // If we reached the last iterator...
            index = 0;                      // go back to the first one.
        }
        let item = iterators[index].next(); // Get next item from next iterator.
        if (item.done) {                    // If that iterator is done
            iterators.splice(index, 1); // Then remove it from the array.
        }
        else {                              // Otherwise,
            yield item.value;               // Yield the iterated value
            index++;                        // and move on to the next iterator.
        }
    }
}

// Interleave three iterable objects
console.log([...zip(oneDigitPrimes(), "ab", [0])]);

// Recursive generators
function* sequenceI(...iterables) {
    for (let iterable of iterables) {
        for (let item of iterable) {
            yield item;
        }
    }
}

console.log([...sequenceI("abc", oneDigitPrimes())]);

// Simplifying recursive generators with the yield* keyword
function* sequenceII(...iterables) {
    for (let iterable of iterables) {
        yield* iterable;
    }
}

console.log([...sequenceII("abc", oneDigitPrimes())]);

