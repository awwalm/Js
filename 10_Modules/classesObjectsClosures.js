const AbstracSet = require('../9_Classes/sets.js')['AbstractSet'];

/**
 * We can use immediately invoked function expressions to achieve
 * a kind of modularity by leaving the implementation details 
 * and utility functions hidden within the enclosing function
 * but making the public API of the module the return value of 
 * the function. In the case of the BitSet class, 
 * we might structure the module like this:
 */
const BitSet = (function() {    // Set BitSet to the return value of this function
    // Private implementation details here
    function isValid(set, n) { /** */ }
    function has(set, byte, bit) { /** */ }
    const BITS = new Uint8Array([1, 2, 4, 8, 16, 32, 64, 128]);
    const MASKS = new Uint8Array([~1, ~2, ~4, ~8, ~16, ~32, ~64, ~128]);

    // The public API of the module is just the BitSet class, which we define
    // and return here. The class can use the private functions and constants
    // defined above, but they will be hidden from users of the class
    return class BitSet extends AbstracSet {
        // Implementation omitted...
    };
}());


/**
 * This approach to modularity becomes a little more interesting 
 * when the module has more than one item in it. The following code, 
 * for example, defines a mini statistics module that exports `mean()`
 * and `stddev()` functions while leaving the implementation details hidden:
 */
const stats = (function() {     // This is how we could define a stats module
    // Utility functions private to the module
    const sum = (x, y) => x + y;
    const square = x => x * x;

    // A public function that will be exported
    function mean(data) {
        return data.reduce(sum)/data.length;
    }

    // A function that we will export
    function stddev(data) {
        let m = mean(data);
        return Math.sqrt(
            data.map(x => x - m).map(square).reduce(sum)/(data.length-1)
        );
    }

    // We export the public function as properties of an object
    return { mean, stddev };
}());

// And here is how we might use this module
const testData = [1,3,5,7,9];
console.log(stats.mean(testData));      // => 5
console.log(stats.stddev(testData));    // => Math.sqrt(10)


