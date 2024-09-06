
/**
 * `forEach()` then invokes your function with three arguments: 
 * 
 * - the value of the array element 
 * - the index of the array element 
 * - and the array itself
 * 
 * If you only care about the value of the array element, you can write a function
 * with only one parameter—the additional arguments will be ignored:
 */
let forEach = () => {
    // Compute the sum of the elements of the array
    let data = [1,2,3,4,5], sum = 0;
    console.log(data);
    data.forEach(value => sum += value);  // 15
    console.log(sum);

    // Now increment each array element
    // data.forEach((value, index, array) => { array[index] = value + 1; });
    data.forEach((v, i, a) => { a[i] = v + 1; });
    console.log(data);
}
forEach();


/**
 * The `map()` method passes each element of the array on which it is invoked 
 * to the function you specify and returns an array containing the values 
 * returned by your function. For example:
 */
let map = () => {
    let a = [1,2,3];
    console.log(a.map(x => x**5));
}
map();


/**
 * The filter() method returns an array containing a subset 
 * of the elements of the array on which it is invoked. 
 * The function you pass to it should be  a predicate (i.e. returns true or false). 
 * The predicate is invoked just as for forEach() and map(). 
 * If the return value is true, or a value that converts to true, 
 * then the element passed to the predicate is a member of the subset
 * and is added to the array that will become the return value. Examples:
 */
let filter = () => {
    // Using filter() to segregate into odd and even numbers:
    const arr = Array.from({length: 10}, (v,i) => i+1);
    const even = arr.filter((x) => x%2 == 0);
    const odd = arr.filter((x) => x%2 !== 0);
    for (let a of [arr, even, odd]) console.log(a);

    // Note that filter() skips missing elements in sparse arrays 
    // and that its return value is always dense. 
    // To close the gaps in a sparse array, you can do this: 
    var sparse = Array.from(arr);
    sparse[13] = 13; sparse[28] = 28; sparse[19] = 19;
    console.log(sparse);
    sparse = sparse.filter(() => true);
    console.log(sparse);

    // Close the gap and remove null and undefined:
    for (let i of [2,4,5,6,9]) {
        if(i%2 == 0) sparse[i] = null;
        else sparse[i] = undefined;
    }
    console.log(sparse);
    sparse = sparse.filter(x => x !== undefined && x !== null);
    console.log(sparse);
}
filter();


/**
 * In ES2019, the `flat()` method creates and returns a new array that contains 
 * the same elements as the array it is called on, except that any elements 
 * that are themselves arrays are “flattened” into the returned array.
 */
let flatMap = () => {
    let arr = [1,[2,3]], arr2 = [1,[2,[3]]];
    var arr3 = arr.flat(), arr4 = arr2.flat();
    console.log(arr, arr3);
    console.log(arr2, arr4); 

    // calling a.flatMap(f) is the same as (but more efficient than) a.map(f).flat():
    let phrases = ["hello world", "the definitive guide"];
    let words = phrases.flatMap(phrase => phrase.split(' '));
    console.log(words);   // ["hello", "world", "the", "definitive", "guide"];

    // Map non-negative numbers to their square roots
    let negRoots = [-2,-1,1,2].flatMap(x => x < 0 ? [] : Math.sqrt(x));    
    console.log(negRoots);
}
flatMap();


/**
 * The unshift() and shift() methods behave much like push() and pop(), 
 * except that they insert and remove elements from the beginning of an array 
 * rather than from the end. 
 */
let shiftUnshift = () => {
    // shift()
    let q = [];
    q.push(1,2);    // q = [1,2]
    q.shift();      // q = [2]
    q.push(3);      // q = [2,3]
    q.shift();      // q = [3]
    q.shift();      // q = []

    // unshift()
    let a = [];
    a.unshift(1);   // a = [1]
    a.unshift(2);   // a = [2,1]
    a = [];
    a.unshift(1,2); // a = [1,2]
}
shiftUnshift();


/**
 * `splice()` takes at most one index to begin deletion as argument.
 * The next optional index spacify the number of items to delete (forwards).
 * The next sequence of parameters specify the new elements to be inserted
 * starting from where the deletion initially began.
 */
let arraySplice = () => {
    let a = Array.from({length: 8}, (v,i) => i+1);
    console.log(a);
    a.splice(4);            // Deletes the subarray a[4:] from a
    console.log(a);
    a.splice(1,2);          // From index 1, delete 2 elements forwards
    a.splice(1,1);          // Likewise as above
    
    // Additional arguments that specify elements to be inserted into the array, 
    // starting at the position specified by the first argument. For example:
    a = Array.from({length: 5}, (v,i) => i+1);
    a.splice(2,0,"a","b");  // From a[2], delete 0 elements, insert 'a' and 'b'
    a.splice(2,2,[1,2],3);  // We can also improve this by THEN calling flat() on a 
}
arraySplice();


/**
 * The fill() method sets the elements of an array, or a slice of an array, 
 * to a specified value. It mutates the array it is called on, 
 * and also returns the modified array:
 */
let arrayFill = () => {
    let a = new Array(5);
    a.fill(0);          // a = [0,0,0,0,0]
    console.log(a);
    a.fill(9, 1);       // a = [0,9,9,9,9]
    console.log(a);

    // Third parameter is the `end` index,
    // which works like Python's indexing when negative:
    a.fill(8, 2, -1);   // a = [0,9,8,8,9]
    console.log(a);
}
arrayFill();


/**
 * `Array.prototype.copyWithin(destination, start, stop)`
 * 
 * Copies a slice of an array to a new position within the array. 
 * It modifies the array in place and returns the modified array, 
 * but it will not change the length of the array. 
 * 
 * - The first argument specifies the destination index to which 
 *   the first element will be copied. 
 * 
 * - The second argument specifies the index of the first element to be copied. 
 *   If this second argument is omitted, 0 is used.
 * 
 * - The third argument specifies the end of the slice 
 *   of elements to be copied. If omitted, the length of the array is used.
 * 
 * Elements from the start index up to, but not including, 
 * the end index will be copied. You can specify indexes relative to the end
 * of the array by passing negative numbers, just as you can for slice():
 * 
 * @see
 */
let copyWithin = () => {
    let arr = ["Sheldon", "Amy", "Leonard", "Penny", "Howard", "Raj"];
    console.log(arr);

    // Copy arr[2:4] to position arr[0:3]
    arr.copyWithin(0, 2, 4);
    console.log(arr);    
}
copyWithin();


/** 
 * sort() sorts the elements of an array in place and returns the sorted array. 
 * When sort() is called with no arguments, it sorts the array elements
 * in alphabetical order (temporarily converting them to strings 
 * to perform the comparison, if necessary):
*/
let sorting = () => {
    let a = ["banana", "cherry", "apple"];
    console.log(a);
    a.sort();   // a == ["apple", "banana", "cherry"]
    console.log(a);

    a = [33,4,1111,222];
    a.sort((a,b) => a-b);
    console.log(a);
}
sorting();

