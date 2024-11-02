
/**
 * JavaScript does not support true multidimensional arrays, 
 * but you can approximate them with arrays of arrays.
 */
let createMatrix = (n) => {
    // Create a multidimensional array
    let table = new Array(n);       // n rows in the tale
    for (let i=0; i<table.length; i++) {
        table[i] = new Array(n);    // Each row has n columns
    }

    // Initialize the array
    for (let row=0; row<table.length; row++) {
        for (let col=0; col<table[row].length; col++) {
            table[row][col] = row * col;
        }
    }

    // Use the multidimensional array to compute 5 * 7
    console.log(table[5][7]);       // 35
}
createMatrix(10);

