
// Hoisted initialization
genSquareRoot.n = 0;

// Actual definition
function genSquareRoot() {
  return Math.sqrt(++genSquareRoot.n);
}

// Prints square root of first 10 integers
for (let i=0; i<10; i++) {
    console.log(genSquareRoot());
}

// Unwanted access
genSquareRoot.n = -3
console.log(genSquareRoot());  // => Nan; invalid invocation


// Returns nameless function
genSquareRoot = (() => {
    let n = 0;                  // Base scope -> function property
    return function() {         // Nested scope -> nameless function
        return Math.sqrt(++n); 
    };
})();

// Prints square root of first 10 integers
for (let i=0; i<10; i++) {
    console.log(genSquareRoot());
}

// Nested function has no referential access beyond own scope
console.log(genSquareRoot.n);   // => undefined
genSquareRoot.n = -3;           // n now exists
console.log(genSquareRoot.n);   // => -3
console.log(genSquareRoot());   // => sqrt(11); unaffected by base scope

