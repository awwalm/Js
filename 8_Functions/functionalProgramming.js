
const processArrays = () => {
    let data = [1,1,3,5,5];

    let total = 0;
    for(let i=0; i < data.length; i++)
        total += data[i];
    console.log(`sum of ${data} is ${total}`);

    let mean = total/data.length;
    console.log(`mean of ${data} is ${mean}`);

    total = 0;
    for (let i=0; i<data.length; i++) {
        let deviation = data[i] - mean;
        total += deviation * deviation;
    }
    let stdev = Math.sqrt(total/(data.length-1));
    console.log(`standard deviation of ${data} is ${stdev}`);
}
processArrays();


const processArrays2 = () => {
    const sum = (x,y) => x+y;
    const square = x => x*x;

    let data = [1,1,3,5,5];
    let total = data.reduce(sum);
    let mean = total/data.length;
    let deviations = data.map(x => x - mean);
    let stdev = Math.sqrt(deviations.map(square).reduce(sum)/(data.length-1));

    console.log(`sum of ${data} is ${total}`);
    console.log(`mean of ${data} is ${mean}`);   
    console.log(`standard deviation of ${data} is ${stdev}`); 
}
processArrays2();


const highOrder = () => {
    // This high-order function returns a new function that passes its
    // arguments to f and returns the logical negation of f's return value
    /** @param{Function} f */
    function not(f) {
        return function(...args) {              // Return a new function
            let result = f.apply(this, args);   // that calls f
            return !result;                     // and negates its result.
        };
    }

    const even = x => x % 2 === 0;              // Determines if number is even
    const odd = not(even);                      // Does the opposite of the above
    var isOdd = [1,1,3,5,5].every(odd);         // => true
    console.log(isOdd);
}
highOrder();


const memoization = {

    /** @param{Function} f */
    memoize: function(f) {
        const cache = new Map();    // Value cache stored in the closure.
        return function(...args) {
            // Create a string version of the arguments to use as a cache key
            let key = args.length + args.join("+");
            if (cache.has(key)) {
                return cache.get(key);
            } else {
                /**@type{string}*/ let result = f.apply(this, args);
                cache.set(key, result);
                return result;
            }
        };
    }
}


/**Return the Greatest Common Divisor of two integers
 * using the Euclidean algorithm.
 */
function gcd(a,b) {         // Type checking for a and b has been omitted
    if (a < b) {            // Ensure that a >= b when we start, otherwise...
        [a, b] = [b, a];    // Swap variables if neccessary.
    }
    while (b !== 0) {       // Main loop for GCD computation
        [a, b] = [b, a%b]
    }
    return a;
}
const gcdmemo = memoization.memoize(gcd);
console.log(gcdmemo(85, 187));  // => 17
console.log(gcd(187, 85));      // => 17


/**
 * Note that when we write a recursive function 
 * that we will be memoizing, we typically want to
 * recurse to the memoized version, not the original.
 */
const factorial = memoization.memoize(function(n){
    return (n <= 1) ? 1 : n * factorial(n - 1);
});
console.log(factorial(5));

/**This is a one liner standard equivalent to the above */
console.log(Array.from({length: 5}, (v,i) => i + 1).reduce((a,b) => a * b));


