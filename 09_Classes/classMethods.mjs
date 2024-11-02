
import { Complex } from "./complex.mjs";


/**
 * An object inherits properties from its prototype, even if 
 * the properties of the prototype change after the object is created. 
 * This means that we can augment JavaScript classes simply by 
 * adding new methods to their prototype objects. This code adds a method 
 * for computing the complex conjugate to the Complex class:
 */
const dynamicPrototypes = () => {
    // Return a complex number that is the complex conjugate of this one.
    Complex.prototype.conj = function() { return new Complex(this.r, -this.i); };
    let e = new Complex(Math.E, Math.PI);
    console.log(e.conj());
}
dynamicPrototypes();


/**
 * The prototype object of built-in JavaScript classes is also open like this, 
 * which means that we can add methods to numbers, strings, arrays, functions, etc.
 * This is useful for implementing new language features in older versions of JS:
 */
const openPrototypes = () => {
    // If the new String method startsWith() is not already defined...
    if (!String.prototype.startsWith) {
        // ...then define it like this using the older indexOf() method.
        /**@param {String} s */
        String.prototype.startsWith = function(s) {
            return this.indexOf(s) === 0;
        };
    }
}
openPrototypes();
