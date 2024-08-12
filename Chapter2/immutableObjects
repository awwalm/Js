
/*let*/ o = {x : 1};            // Start with an object
o.x = 2;                        // Mutate it by changing the value of a property
o.y = 3;                        // Mutate it again by adding a new property

/*let*/ a = [1,2,3];            // Arrays are also mutable
a[0] = 0;
a[3] = 4;

/*let*/ o = {x: 1}, p = {x: 1}; // Two objects with the same properties 
console.log(o === p);           // Two distinct, empty arrays
/*let*/ a = [], b = [];         // => false: distinct objects are never equal
console.log(a === b);           // => false: distinct arrays are never equal

a = [];
b = a;
b[0] = 1;
console.log(a[0]);
console.log(a === b);

a = ["a", "b", "c"];
b = [];
for (let i=0; i < a.length; i++) {
    b[i] = a[i]
}
c = Array.from(b, (i) => i+10);
console.log(c);


const equalArrays = (A,B) => {                  // Identical arrays are equal
    if (A === B) return true;                   // Different-size arrays are not equal
    if (A.length !== B.length) return false;    // Loop through all elements
    for(let i = 0; i < A.length; i++) {         // Loop through all elements
        if (A[i] !== B[i]) return false;        // If any differ, arrays not equal
    }
    return true;
}
console.log(equalArrays(a, b));

o = {x: 1, y: 2};
for (const [name, value] of Object.entries(o)) {
    console.log(name, "=>", value);
}
