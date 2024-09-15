
/**
 * The checkscope() function declares a local variable and then defines 
 * and invokes a function that returns the value of that variable.
 */
const closure1 = () => {
    let scope = "global scope";
    function checkScope() {
        let scope = "local scope";
        function f() { return scope; }
        return f();
    }
    return checkScope();    // 'local scope'
}
console.log(closure1());

const closure2 = () => {
    let scope = "gloabl scope";
    function checkScope() {
        let scope = "local scope";
        function f() { return scope; }
        return f;
    }
    let s = checkScope()();
    return s;               // Still 'local scope' !
}
console.log(closure2());


/**
 * Private variables like counter need not be exclusive 
 * to a single closure: it is perfectly possible for two 
 * or more nested functions to be defined within the same 
 * outer function and share the same scope. 
 * Consider the following code:
 */
function counter() {
    let n = 0;
    return {
        count: function() { return n++;},
        reset: function() { n = 0; }
    };
}
const [c,d] = [counter(), counter()];   // Create two counters
c.count();  // => 0
d.count();  // => 0: they count independently
c.reset();  // reset() and count() share state
c.count();  // => 0: because we reset c
d.count();  // => 1: d was not reset

