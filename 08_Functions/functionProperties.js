// IMPORTANT POINTS TO NOTE: Bind does two major things:
// 1. Associates context from outer scope of a function to its inner scope.
// 2. It returns a function that can be invoked as a method of bound parameter.

/**
 * Partial application is a common technique in 
 * functional programming, and is sometimes called currying. 
 * Here are some examples of the `bind()` method used:
 */
const bindMethod = () => {
    let sum = (x,y) => x + y;       // Return the sum of 2 args
    let succ = sum.bind(null, 1);   // Bind the first arguement to 1
    succ(2);                        // => 3: x is bound to 1, 2 is parsed to y

    function f(y,z) { return this.x + y + z; }
    let g = f.bind({x: 1}, 2);      // Bind this and y
    g(3);                           // => 6;
}


/**
 * The primary purpose of bind() is to bind a function to an object. 
 * When you invoke the bind() method on a function f and pass an object o, 
 * the method returns a new function. Invoking the new function 
 * (as a function) invokes the original function f as a method of o. 
 * Any arguments you pass to the new function are passed to the original function. 
 * For example:
 */
const bindFunction = () => {
    function f(y) { return this.x + y; }
    let o = { x: 1 };
    let g = f.bind(o);
    g(2);
    let p = { x: 10, g };
    p.g(2);
}

