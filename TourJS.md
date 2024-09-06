
# JavaScript Guide - Comprehensive Overview

Last Compiled on 2024-09-05 19:46:12

## JavaScript Basics

### Running JavaScript in the Terminal (Node.js)
You can run JavaScript outside the browser using Node.js. Save a JavaScript file (e.g., `app.js`) and run it with the `node` command:
```bash
node app.js
```

### `let` vs `var` vs `const`
- `var`: Function-scoped, can be redeclared, hoisted to the top of the scope.
- `let`: Block-scoped, cannot be redeclared, not hoisted like `var`.
- `const`: Block-scoped, cannot be redeclared or reassigned after initialization.

Examples:
```javascript
var x = 10;
let y = 20;
const z = 30;
```

### `&&` / `||` vs `&` / `|`
- `&&` (logical AND) and `||` (logical OR) are short-circuit operators. They evaluate the second operand only if necessary.
- `&` (bitwise AND) and `|` (bitwise OR) always evaluate both operands at the bit level.

Example:
```javascript
let a = true && false; // false
let b = true & false; // 0 (bitwise result)
```

### Short-circuiting in JavaScript
Similar to Java, `&&` and `||` in JavaScript are short-circuit operators, meaning evaluation stops as soon as the result is determined.

## JavaScript Versioning

### Check Node.js JavaScript Version
To check the version of JavaScript (V8 engine) used by Node.js:
```bash
node -p process.versions.v8
```

## JavaScript Input/Output

### Setting Character Encoding for stdin
```javascript
process.stdin.setEncoding("utf-8");
```
This sets the input stream's character encoding to UTF-8.

## JavaScript Data Structures

### Array and Object Initializations (Destructive Statements)
Examples:
```javascript
// Array initialization
let arr = [1, 2, 3];

// Object initialization
let obj = { key1: 'value1', key2: 'value2' };
```

### Catching Specific/Exact Exceptions in JavaScript
You can catch specific error types using `instanceof`:
```javascript
try {
    // Code that may throw an error
} catch (err) {
    if (err instanceof TypeError) {
        // Handle TypeError
    }
}
```

## JavaScript Control Structures

### `while` Loop with Two Incremented Variables
```javascript
let i = 0, j = 0;
while (i < 10 && j < 10) {
    console.log(i, j);
    i++;
    j += 2;
}
```

### `for` Loop with Two Incremented Variables
```javascript
for (let i = 0, j = 0; i < 10 && j < 10; i++, j += 2) {
    console.log(i, j);
}
```

## JavaScript List and Array Operations

### Equivalent to Python’s `[i for i in range(1,6)]`
```javascript
let arr = Array.from({length: 5}, (_, i) => i + 1);
```

### Equivalent to Python’s `[None] * 5`
```javascript
let arr = Array(5).fill(null);
```

## JavaScript Type Hinting and Data Validation

### Type-hinting Object Return Type in JavaScript (JSDoc)
```javascript
/**
 * @returns {[key: string]: number}
 */
function example() {
    return { 'a': 1, 'b': 2 };
}
```

## JavaScript Date and Time

### Setting Custom Date/Time in JavaScript
```javascript
let customDate = new Date('2024-12-31T23:59:59');
```

### Displaying Time in 12-hour Format
```javascript
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12;
hours = hours ? hours : 12; // the hour '0' should be '12'
minutes = minutes < 10 ? '0' + minutes : minutes;
let strTime = hours + ':' + minutes + ' ' + ampm;
console.log(strTime);
```

## JavaScript Error Handling

### Try-Catch-Finally
JavaScript's `try-catch-finally` allows error handling and cleanup code:
```javascript
try {
    // Code that might throw an error
} catch (err) {
    // Handle the error
} finally {
    // Always executes
}
```

## JavaScript Object-Oriented Programming

### JavaScript Access Modifiers
JavaScript doesn't have traditional access modifiers, but private fields are defined with `#`:
```javascript
class MyClass {
    #privateField = 42;
}
```

### Prepending Variables with `$`
Prepending a variable with `$` is a convention indicating it holds a DOM element or jQuery object.

## JavaScript Number Operations

### Rounding Numbers
```javascript
let rounded = Math.round(4.6); // 5
```

### `toPrecision()` in JavaScript
```javascript
let num = 123.456;
console.log(num.toPrecision(5)); // "123.46"
```

## JavaScript Strings

### Multiline Strings in JavaScript
```javascript
let multiline = `This is
a multiline
string.`;
```

## JavaScript Advanced Concepts

### `Symbol()` in JavaScript
`Symbol()` is a unique and immutable primitive value:
```javascript
let sym = Symbol('description');
```

### `Object.create()` vs `new Object()` vs `{}`
- `Object.create()`: Creates a new object with the specified prototype.
- `new Object()`: Creates an object instance, but `{}` is preferred for simplicity.
- `{}`: Object literal notation.

## JavaScript Prototypes

### Understanding JavaScript Prototypes
Prototypes are used in JavaScript to allow objects to inherit properties and methods from other objects.

## JavaScript Documentation and Debugging

### `Object.getOwnPropertyNames()` and `console.dir()`
Use these methods to inspect objects in Node.js:
```javascript
console.dir(Object);
```

### Viewing JSDoc for JavaScript Methods
To see documentation for functions like `Array.from()`, use a tool that supports JSDoc or refer to MDN. In Node.js, this gives insight into a function's code:
```javascript
console.log(Function.prototype.toString.call(Array.from));
```

## JavaScript Object Properties

### Revealing Private Fields in JavaScript
Private fields (prefixed with `#`) cannot be accessed outside their class:
```javascript
class MyClass {
    #privateField = 42;
}
```

### Understanding Enumerability
Enumerability determines whether a property appears in `for...in` loops or `Object.keys()`.

## JavaScript Iteration

### `for...of` vs `for...in`
- `for...of`: Iterates over iterable objects (arrays, strings, etc.).
- `for...in`: Iterates over enumerable properties of an object.

## Using `splice()`:

This example shows how `splice()` works to add and remove elements.

```javascript
let a = [1,2,3,4,5];
a.splice(2,0,"a","b"); // []
console.log(a); // [1, 2, 'a', 'b', 3, 4, 5]

a.splice(2,2,[1,2],3); // ['a', 'b']
console.log(a); // [1, 2, [1, 2], 3, 3, 4, 5]
```
