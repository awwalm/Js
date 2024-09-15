
/**
 * suppose you want to write a function that returns 
 * a unique integer whenever it is invoked. 
 * The function must never return the same value twice. 
 * In order to manage this, the function needs to keep track 
 * of the values it has already returned, and this information 
 * must persist across function invocations. 
 * You could store this information in a global variable, 
 * but that is unnecessary, because the information is used 
 * only by the function itself. It is better to store the information
 * in a property of the Function object. Here is an example 
 * that returns a unique integer whenever it is called:
 */
const functionProperties = () => {
    // Initialize the counter property of the function object.
    // Function delcarations are hoisted so we really can
    // do this assignment before the function declaration.
    uniqueInteger.counter = 0;

    // This function returns a different integer each time it is called.
    // It uses a property of itself to remember the nexxt value to be returned.
    function uniqueInteger() {
        var incr = uniqueInteger.counter++;     // Return and increment counter property.
        console.log(incr);
        return incr;
    }
    uniqueInteger();
    uniqueInteger();
}
functionProperties();


/**
 * As another example, consider the following factorial() function 
 * that uses properties of itself (treating itself as an array) 
 * to cache previously computed results:
 */
function factorial(n) {
    // Compute factorials and cache results as properties of the function iteself.
    if (Number.isInteger(n) && n > 0) {         // Positive integers only
        if (!(n in factorial)) {                // If no cached result
            factorial[n] = n * factorial(n-1);  // Compute and cache it
        }
        return factorial[n];                    // Return the cahced result
    } else {
        return NaN;                             // If input was bad
    }
}
factorial[1] = 1;           // Initialize the cache to hold this base case
console.log(factorial(6));  // 720
console.log(factorial[5]);  // 120; the call above caches this value


