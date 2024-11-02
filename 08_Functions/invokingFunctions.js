
/**
 * If a nested function (that is not an arrow function) 
 * is invoked as a function, then its this value will be 
 * either the global object (non-strict mode) or undefined (strict mode). 
 * It is a common mistake to assume that a nested function 
 * defined within a method and invoked as a function can use this
 * to obtain the invocation context of the method. 
 * The following code demonstrates the problem:
 */
const nestedMethod = () => {
    let o = {
        m: function() {
            let self = this;
            console.log(this === o);        // true
            f();

            function f() {
                console.log(this === o);    // false
                console.log(self === o);    // true            
            }

            /**
             * In ES6 and later, another workaround to this issue is to 
             * convert the nested function f into an arrow function, 
             * which will properly inherit the this value:
             */
            const f2 = () => {
                console.log(this === o);    // true
            }
            f2();

            /**
             * Another workaround is to invoke the bind() method 
             * of the nested function to define a new function 
             * that is implicitly invoked on a specified object:
             */
            const f3 = (function() {
                console.log(this === o);    // true
            }).bind(this);
            f3();
        }
    };
    o.m();
}
nestedMethod();
