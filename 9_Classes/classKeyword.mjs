export { Range };

/**
 * This is what the {@link Range} class looks like when written 
 * with the class keyword:
 */
class Range {
    /**
     * Store the start and end points (state) of this new range object.
     * These are noninherited properties that are unique to this object.
     * @param {string|number|Date} from  
     * @param {string|number|Date} to
    */
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    /**
     * Return `true` if x is in the range, `false` otherwise.
     * This method works for textual and Date ranges as well as numeric.
     */
    includes(x) { return this.from <= x && x <= this.to; }

    /**
     * A generator function that makes instances of the class iterable.
     * Note that it only works for numeric ranges.
     */
    *[Symbol.iterator]() {
        for (let x = Math.ceil(this.from); x <= this.to; x++)
            yield x;
    }

    /**
     * Return a string representation of the range.
     */
    toString() { return `(${this.from}...${this.to})`; }
    
    /**
     * You can define a static method within a class body by prefixing
     * the method declaration with `static` keyword. Static methods
     * are defined as properties of the constructor rather than properties
     * of the prototype object.
     */
    static parse(s) {
        let matches = s.match(/^\((\d+)\.\.\.(\d+)\)$/);
        if (!matches) {
            throw new TypeError(`Cannot parse Range from "${s}".`)
        }
        return new Range(parseInt(matches[1]), parseInt(matches[2]));
    }
}

// Here are example uses of this new Range class
let r = new Range(1,3); // Create a Range object
r.includes(2);          // => true: 2 is in the range
r.toString();           // => "(1...3)"
console.log([...r])     // => [1,2,3]; Convert to an array via iterator

// The method defined by the static Range.parse() method must be invoked
// through the constructor, not through an instance!
let r2 = Range.parse(`(1...10)`);   // Returns a new Range object
console.log(r2);
try {
    r2.parse(`(1...10)`);           // TypeError: r2.parse is not a function
} catch (error) {
    console.warn(String(error).slice(0,40));
}


/**
 * If you want to define a class that subclasses or 
 * inherits from another class, you can use the `extends` keyword 
 * with the `class` keyword:
 */
class Span extends Range {
    // A Span is like a Range, but instead of initializing it with
    // a start and an end, we initialize it with a start and a length
    constructor(start, length) {
        if (length >= 0) {
            super(start, start + length);
        } else {
            super(start + length, start);
        }
    }
}

let s = new Span(5,13);
console.log(s.includes(11));
console.log(s.toString());
console.log([...s]);

console.log(Range.prototype);   // Returns object containing non-static properties
console.log(Object.getOwnPropertyDescriptors(Range));  // Returns static fields


