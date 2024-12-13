import { Circle } from "./geometry/circle.mjs";
import { PI, TAU } from "./geometry/constants.mjs";

/**
 * Here's a more realistic example of the switch statement;
 * it converts a value to a string in a way that depends
 * on the type of the value:
 */
function convert(x) {
  switch (typeof x) {
    case "number":
      return x.toString(16);
    case "string":
      return `"` + x + `"`;
    case "bigint":
    case "boolean":
    case "symbol":
    case "undefined":
    case "object":
    case "function":
    default:
      return String(x);
  }
}

console.log(convert(Math.E.toExponential(3)));

/**
 * The `do/while` loop is less commonly used than its `while`
 * cousin - in parctice, it is somewhat uncommon to be certain
 * that you want a loop to execute at least once.
 * Here's an example of a `do/while` loop:
 *
 * @param {any[]} a - Array of elements
 */
function printArray(a) {
  let len = a.length,
    i = 0;
  if (len === 0) {
    console.log("Empty Array");
  } else {
    do {
      console.log(a[i]);
    } while (++i < len);
  }
}

printArray(Array.from({ length: 10 }, (_, i) => i + 1));

/**
 * Sum function 1
 */
let sum1 = (a) => {
  let s = 0;
  a.forEach((e) => {
    s += e;
  });
  return s;
};

console.log(sum1([1, 2, 3, 4, 5, 6, 7, 8, 9]));

/**
 * Strings are iterable character-by-character in ES6:
 * @param {String} s
 * @returns {{[key: String]: Number}}
 */
function forOfWithStrings(s) {
  let frequency = {};
  for (let letter of s) {
    if (frequency[letter]) {
      frequency[letter]++;
    } else {
      frequency[letter] = 1;
    }
  }
  return frequency;
}

console.log(forOfWithStrings("mississippi"));

/**
 * When you iterate a `Set` with `for/of`, the loop body runs once
 * for each element of the set. You could use code like this to
 * print the unique words in a string of text:
 * @param {String} s
 * @returns {String[]} unique white space partitioned substrings.
 */
function forOfWithSet(s) {
  let wordSet = new Set(s.split(" "));
  let unique = [];
  for (let word of wordSet) {
    unique.push(word);
  }
  return unique;
}

console.log(forOfWithSet("Na na na na na na na na Batman!"));

/**
 * Helper function for generating square matrix of size `n`.
 * @param {number} n - Row and column size.
 * @returns {number[][]} A `n * n` square matrix.
 */
let getData = (n) => {
  let matrix = Array(n);
  for (let i = 0; i < n; i++) {
    matrix[i] = Array.from({ length: n }, (_, j) => j + 1);
  }
  return matrix;
};

/**
 * You need the labeled form of the break statement when you want to break out
 * of a statement that is not the nearest enclosing loop or a switch.
 * The following code demonstrates:
 */
function breakLabel(size) {
  let matrix = getData(size); // Get a 2D array of numbers from somewhere
  // Now sum all the numbers in the matrix
  let sum = 0,
    success = false;
  // Start with a labeled statement that we can break out if errors occur
  computeSum: if (matrix) {
    for (let x = 0; x < matrix.length; x++) {
      let row = matrix[x];
      if (!row) break computeSum;
      console.log(row);
      for (let y = 0; y < row.length; y++) {
        let cell = row[y];
        if (isNaN(cell)) break computeSum;
        sum += cell;
      }
    }
    success = true;
  }
  return sum;
}

console.log(breakLabel(5));

// Dealing with imports
const circle = new Circle(9);
const area = Math.round(circle.area() * 100) / 100;
const cf = Math.round(circle.circumference() * 100) / 100;
const sumConst = Number(PI * TAU).toPrecision(4);
let answer = `
  area = ${area}
  circumference = ${cf}
  ${PI}*${TAU} = ${sumConst}`;
console.log(answer);
