// Asynchronous Iterators

/**
 * Instead of using async generators to implement asynchronous iterators,
 * it is also possible to implement them directly by defining an object
 * with a `Symbol.asyncIterator()` method that returns an object
 * with a `next()` method that returns a Promise that resolves 
 * to an iterator result object.
 */
function clock(interval, max=Infinity) {
    // A Promise-ified version of setTimeOut that we can use await with.
    // Note that this takes an absolute time instead of an interval.
    function until(time) {
        return new Promise(resolve => setTimeout(resolve, time - Date.now()));
    }

    // Return an asynchronously iterable object
    return {
        startTime: Date.now(),           // Remember when we started
        count: 1,                        // Remember which iteration we're on 
        // The next() method makes this an iterator
        async next() {                   
            if (this.count > max) {      // Are we done?
                return { done: true };   // Iteration result indicating done
            }
            // Figure out when the next iteration should begin
            let targetTime = this.startTime + this.count * interval;
            // Wait until that time...
            await until(targetTime);
            // ...and return the count value in an iteration result object
            return { value: this.count++ };
        },

        // This method means that this iterator object is also an iterable
        [Symbol.asyncIterator]() { return this; }
    };

}

