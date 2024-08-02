// Anything following double slashes is an English-language comment.
// Read the comments carefully: they explain the JavaScript code.

// A variable is a symbolic name for a variable.
// Variables are declared with the let keyword:
let x;                      // Declare a variable named x.

// Values can be assigned to variables with an `=` sign.
x = 0;                      // Now the variable x has the value 0.
x                           // => 0: A variable evaluates to its value.

// JavaScript supports several types of values
x = 1;                      // Numbers.
x = 0.01;                   // Numbers can be integers or reals.
x = "hello world";          // Strings of text in quotation marks.
x = 'JavaScript';           // Single quote marks also delimit strings.
x = true;                   // A Boolean value.
x = false;                  // The other Boolean value.
x = null;                   // Null is a special value that means "no value".
x = undefined;              // Undefined is another special value like null.

// JavaScript's most important datatype is the object.
// An object is a collection of name/value pairs, or a string to value map.
let book = {                // Objects are enclosed in curly braces.
    topic: "JavaScript",    // The property "topic" has value "JavaScript".
    edition: 7              // The property "edition" has value 7.
};                          // The curly brace marks the end of the object.

// Acess the properties of an object with . or []:
book.topic;                 // => "JavaScript"
book["edition"];            // => 7: Another way to acess property values.
book.author = "Flanagan";   // Create new properties by assignment.
book.contents = {};         // {} is an empty object with no properties.

// Conditionally access properties with ?. (ES2020):
book.contents?.ch01?.sect1; // => undefined: book.contents has no ch01 property.

// JavaScript also supports arrays (numerically indexed lists) of values:
let primes = [2, 3, 5, 7];  // An array of 4 values, delimited with [ and ].
primes[0];                  // => 2: The first element (index 0) of the array.
primes.length;              // => 4: How many elements in the array.
primes[primes.length-1];    // => 7: The last element of the array.
primes[4] = 9;              // Add a new lement by assignment.
primes[4] = 11;             // Or alter an existing element by assignment.
let empty = [];             // [] is an empty array with no elements.
empty.length;               // => 0.

// Arrays and objects can hold other arrays and objects:
let points = [              // An array with 2 elements.
    {x: 0, y: 0},           // Each element is an object.
    {x: 1, y: 1}
];
let data = {                // An object with 2 properties.
    trial1: [[1,2], [3,4]], // The value of each property is an array.
    trial2: [[2,3], [4,5]]  // The elements of the arrays are arrays.
};

// Operators act on values (the operands) to produce a new value.
// Arithmetic operators are some of the simplest:
3 + 2;                      // => 5: addition
3 - 2;                      // => 3: subtraction
3 * 2;                      // => 6: multiplication
3 / 2;                      // => 1.5: division
points[1].x - points[0].x;  // => 1: More complicaed operands also work.
"3" + "2";                  // => "32": + adds numbers, concaenates strings.

// JavaScript defines some shrothand artihmetic operators
let count = 0;              // Define a variable.
count++;                    // Increment the variable.
count--;                    // Decrement the variable.
count += 2;                 // Add 2: same as count = count + 2.
count *= 3;                 // Multiply by 3: same as count = count + 3.
count;                      // => 6: variable names are expressions, too.

// Equality and relational operators test whether two values are equal,
// unequal, less than, greater than, and so on. They evaluate to true or false.
let X = 2, Y = 3;           // These = signs are assignment, not equality tests
X === Y;                    // => false: equality
X !== Y;                    // => true: inequality
X < Y;                      // => true: less-than
X <= Y;                     // => true: less-than or equal
X > Y;                      // => false: greater-than
X >= Y;                     // => false: greater-than or equal
"two" === "three";          // => false: the two strings are different
"two" > "three";            // => true: "tw" is alphabetically greater than "th"
false === (X > Y);          // => true: false is equal to false

// Logical operators combine or invert boolean values
(X === 2) && (Y === 3);     // => true: both comparisons are true. && is AND
(X > 3) || (Y < 3);         // => false: niether comparison is true. || is OR
!(X === Y);                 // => true: ! inverts a boolean value

// Functions are parameterized blocks of JavaScript code that we can invoke.
function plus1(x) {             // Define a function named "plus1" with parameter "x"
    return x + 1;               // Return a value one larger than the value passed in
}                               // Functions are enclosed in curly braces

console.log(plus1(Y));          // => 4: Y is 3, so this invocation returns 3 + 1

let square = function (x) {     // Functions are valuea and can be assigned to vars
    return x**2;                // Compute the function's value
};                              // Semicolon marks the end of the assignment

console.log(square(plus1(Y)));  // => 16: invoke two functions in one expression

const plus1_ = x => x + 1;      // The input x maps to the output x + 1
const square_ = x => x * x;     // The input x maps to the output x * x
console.log(plus1_(Y));         // => 4: function invocation is the same
console.log(square_(plus1_(Y)));// => 16

// When functions are assigned to the properties of an object, we call them
// "methods". All JavaScript objects (including arrays) have methods.
let a = [];
a.push(1,2,3);
a.reverse();
console.log(a);

// We can define our own methods too. The "this" keyword refers to the object
// on which the method is defined: in this case, the points array from earler.
points.dist = function() {      // Define a method to compute distance between points
    let p1 = this[0];           // First element of array we're invoked on
    let p2 = this[1];           // Second element of the "this" object
    let a = p2.x-p1.x;          // Difference in x coordinates
    let b = p2.y-p1.y;          // Difference in y coordinates
    return Math.sqrt(           // Math.sqrt() computes the square root
        a*a + b*b);             // The Pythagorean theorem
};
console.log(points.dist());     // Math.sqrt(2): distance between our 2 points

// JavaScript statements include conditionals and loops using the syntax 
// of C, C++, Java, and other languages.
function abs(z) {
    if (z >= 0) {
        return z;
    }
    else {
        return -1 * z;
    }
}
console.log(abs(-10) === abs(10));

function sum(array) {
    var sum = 0;
    for (let z of array) {
        sum += z;
    }
    return sum;
}
console.log(sum(primes));

function factorial(n) {
    let product = 1;
    while (n > 1) {
        product *= n;
        n--;
    }
    return product;
}
console.log(factorial(4));

function factorial2(n) {
    let i, product = 1;
    for (i=2; i <=n; i++){
        product *= i;
    }
    return product;
}
console.log(factorial2(5));

