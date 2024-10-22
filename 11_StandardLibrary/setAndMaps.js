
/**
 * A {@link Set} is a collection of values, like an {@link Array} is. 
 * Unlike arrays, however, sets are not ordered or indexed, 
 * and they do not allow duplicates: a value is either a member of a set
 * or it is not a member; it is not possible to ask how many times 
 * a value appears in a set.
 */
const theSetClass = () => {
    // Create a Set object with the Set() constructor:
    let s = new Set();                      // A new, empty set
    let t = new Set([1, s]);                // A new set with two members

    // The argument to the Set() constructor need not be an array;
    // Any iterable object (including other Set objects) is allowed.
    let u = new Set(s);                     // Copies the elements of s
    let unique = new Set("Mississippi");    // A elements: "M", "i", "s", & "p"

    console.log(unique.size);               // => 4
    s.add([1,2,3]);
    s.delete([1,2,3]);
}
theSetClass();


/**
 * A {@link Map} object represents a set of values known as keys, 
 * where each key has another value associated with (or “mapped to”) it. 
 * In a sense, a map is like an array, but instead of using a set 
 * of sequential integers as the keys, maps allow us to use 
 * arbitrary values as “indexes.” Like arrays, maps are fast: 
 * looking up the value associated with a key will be fast 
 * (though not as fast as indexing an array) no matter how large the map is.
 */
const theMapClass = () => {
    let m = new Map();                  // Create a new, empty map
    let n = new Map([                   // A new map initialized with string keys
        ["one", 1],
        ["two", 2]
    ]);

    let copy = new Map(n);              // A new map with the same keys/values as n
    let o = { x: 1, y: 2 };             // An object with two properties
    let p = new Map(Object.entries(o));

    m.size();
    m.set("one", 1);                    // Map the key one to the value 1
    m.get("one");                       // => 1
    m.has("one");                       // => true
    m.clear();                          // Remove all keys and values from the map
}

