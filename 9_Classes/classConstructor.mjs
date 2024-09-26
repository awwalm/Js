export { Range };

// All objects created with the same constructor function inherit 
// from the same object and are therefore members of the same class.
// 
// The critical feature of constructor invocations is that 
// the prototype property of the constructor is used as 
// the prototype of the new object.
/////////////////////////////////////////////////////////////////////


/**
 * @param{number|string|Date} from
 * @param{number|string|Date} to
 * 
 * This is a constructor function that initializes new Range objects.
 * Note that it does not create or return the object.
 * It just initializes this:
 */
function Range(from, to) {
    // Store the start and end points (state) of this new range object.
    // These are noninherited properties that are unique to this object.
    this.from = from;
    this.to = to;
}

/**
 * All `Range` objects inherit from this object.
 * Note that the property name must be "prototype" for this to work.
 */
Range.prototype = {
    // Return true if x is in the range, false otherwise
    // This method works for textual and Date ranes as well as numeric.
    /**@param{number|string|Date} x*/
    includes: function(x) { return this.from <= x && x <= this.to; },

    // A generator function that makes instances of the class iterable.
    // Note that it only works for numeric ranges.
    [Symbol.iterator]: function*() {
        for (let x = Math.ceil(this.from); x <= this.to; x++)
            yield x;
    },

    // Return a string representation of the range
    toString: function() { return "(" + this.from + "..." + this.to + ")"; }
};

// Alternative way of explictly setting constructor
Range.prototype.constructor = Range;

// Here are example uses of this new Range class
let r = new Range(1,3);     // Create a Range object; note the use of new
console.log(r.includes(2)); // => true: 2 is in the range
console.log(r.toString());  // => "(1...3)"
console.log([...r]);        // => [1,2,3]; convert to an array via iterator


/**
 * Any regular function in JavaScript (excluding arrow functions, 
 * generators, and async functions) can be used as a constructor, 
 * and constructor invocations need a `prototype` property. 
 * Therefore,every regular JavaScript function automatically has 
 * a prototype property. The value of this property is an object
 * that has a single, non-enumerable `constructor` property
*/
const constProperty = function() {
    let F = function() {};
    let p = F.prototype;
    let c = p.constructor;
    console.log(c === F);   // => true
}
constProperty();

