import { Range } from "./classConstructor.mjs";


// This is the constructor function for our subclass
function Span(start, span) {
    if (span >= 0) {
        this.from = start;
        this.to = start + span;
    } else {
        this.to = start;
        this.from = start + span;
    }
}

// Ensure that the Span prototype inherits from the Range prototype
Span.prototype = Object.create(Range.prototype);

// We don't want to inherit Range.prototype.constructor,
// so we define our own constructor property.
Span.prototype.constructor = Span;

// By defining its own toString() method, Span overrides the
// toString() method that it would otherwise inherit from Range.
Span.prototype.toString = function() {
return `(${this.from}...+${this.to - this.from})`;
}

// console.log(Range.prototype);



// In ES6 and later, you can create a superclass simply by adding
// an extends clause to a class declaration, and you can do this
// even for built-in classes:
/**
 * A trivial {@link Array} subclass that adds getters
 * for the first and last elements. */
class EZArray extends Array {
    get first() { return this[0]; }
    get last() { return this[this.length - 1]; }
}

let a = new EZArray();
console.log(a instanceof EZArray);  // => true
console.log(a instanceof Array);    // => true
a.push(1,2,3,4);                    // a.length = 4
console.log(a.pop());               // => 4; a.length = 3
console.log(a.first);
console.log(a.last);
console.log(a[1]);
console.log(Array.isArray(a));
console.log(EZArray.isArray(a));



/**
 * The `TypedMap` subclass of the built-in `Map` class
 * that adds type checking to ensure that the keys and values
 * of the map are of the specified types (according to `typeof`).
 * 
 * This example demonstrates the use of the `super` keyword
 * to invoke the constructor and methods of the superclass.
 */
class TypedMap extends Map {
    constructor(keyType, valueType, entries) {
        // If entries are specified, check their types
        if (entries) {
            for (let [k,v] of entries) {
                if (typeof k !== keyType || typeof v !== valueType) {
                    throw new TypeError(`Wrong type for entry [${k}, ${v}]`);
                }
            }
        }

        // Initialize the superclass with the (type-checked) initial entries
        super(entries);

        // And then initialize this subclass by storing the types
        this.keyType = keyType;
        this.valueType = valueType;
    }

    // Now redefine the set() method to add type checking for any
    // new entries added to the map.
    set(key, value) {
        // Throw an error if the key or value are of the wrong type
        if (this.keyType && typeof key !== this.keyType) {
            throw new TypeError(`${key} is not of type ${this.keyType}`);
        }

        // If the types are correct, we invoke the superclass's version
        // of the set method, to actually add the entry to the map.
        // And we return whatever the superclass method returns.
        return super.set(key, value);
        
    }
}


