
/**
 * In client-side JavaScript, a number of methods for working 
 * with HTML documents (such as document.querySelectorAll(), for example) 
 * return array-like objects. Here’s a function you might use to test 
 * for objects that work like arrays:
 */
function isArrayLike(o) {
    // Determine if o is an array-like object.
    // Strings and functions have numeric length properties, but are 
    // excluded by the typeof test. In client-side JavaScript, DOM text 
    // nodes have a numeric length property, and may need to be excluded 
    // with an additional o.nodeType !== 3 test.
    if (o && 
        typeof(0) === "object" &&
        Number.isFinite(o.length) &&
        o.length >= 0 &&
        Number.isInteger(o.length) &&
        o.length < 4294967295
      ) {
        return true;
      } else {
        return false
      }
}


/**
 * Most JavaScript array methods are purposely defined to be generic
 * so that they work correctly when applied to array-like objects 
 * in addition to true arrays. Since array-like objects do not inherit 
 * from Array.prototype, you cannot invoke array methods on them directly. 
 * You can invoke them indirectly using the Function.call method, however:
 */
function arrayLikeMethods() {
    let a = {"0": "a", "1": "b", "2": "c", length: 3};  // An array-like object
    Array.prototype.join.call(a, "+");                  // "a+b+c"
    Array.prototype.map.call(a, x => x.toUpperCase());  // ['A', 'B', 'C']
    Array.prototype.slice.call(a, 0);                   // ["a","b","c"]
    Array.from(a);
}
