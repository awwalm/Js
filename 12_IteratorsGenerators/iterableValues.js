const { Range } = require('./iterableRange');

/**
 * Functions can also return iterable values:
 * 
 * Return an iterable object that iterates the result of 
 * applying `f()` to each value from the source iterable
 */
function map(iterable, f) {
    // Obtaining the iterator from the iterable's iterator method
    let iterator = iterable[Symbol.iterator]();
    // Directly return an iterator
    return {
        [Symbol.iterator]() { return this; },
        next() {
            let v = iterator.next();    // Yields the next value from the parsed iterable
            if (v.done) {
                return v;
            } else {
                return { value: f(v.value) };
            }
        }
    };
}


/**
 * Return an iterable object that filters the specified iterable,
 * iterating only those elements for which the predicate returns true.
 */
function filter(iterable, predicate) {
    let iterator = iterable[Symbol.iterator]();
    return {    // This object is both iterator and iterable
        [Symbol.iterator]() { return this; },
        next() {
            for (;;) {
                let v = iterator.next();
                if (v.done || predicate(v.value)) {
                    return v;
                }
            }
        }
    };
}


/**
 * A function that allows you to lazily return iterate the words of a string
 * without keeping them all in memory at once (in ES2020, this function
 * would be much easier to implement using the iterator-returning `matchAll()`).
 */
function words(s) {
    var r = /\s+|$/g;                        // Match one or more spaces or end
    r.lastIndex = s.match(/[^ ]/).index;     // Start matching at first nonspace
    return {                                 // Return iterable iterator object
        [Symbol.iterator]() {                // This makes us iterable
            return this; 
        },   
        next() {                             // This makes us an iterator
            let start = r.lastIndex;         // Resume where the last match ended
            if (start < s.length) {          // If we're not done
                let match = r.exec(s);       // Match the next word boundary
                if (match) {                 // If we found one, return the word
                    return { value: s.substring(start, match.index) };
                }
            }
            return { done: true };          // Otherwise, say that we're done
        }
    };
}


if (require.main === module){
    // Map a range of integers to their squares and convert to an array
    const mapRange = [...map(new Range(1,4), x => x * x)];  
    console.log(mapRange);  // => [1,4,9,16]

    // Filter a range so we're left with only even numbers
    const filterRange = [...filter(new Range(1,10), x => x % 2 == 0)];
    console.log(filterRange);   // => [2,4,6,8,10]

    // Iterate the words of a string without keeping them in memory at once
    const wordIterations = [...words(" abc def ghi! ")];    // => [abc,def,ghi!]
    console.log(wordIterations);
};
